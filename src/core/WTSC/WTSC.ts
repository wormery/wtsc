import {
  isFunction,
  isNumber,
  isString,
  isSymbol,
  cached,
  hasProp,
  isThe,
  getSymbolVal,
  isObject,
  isUndef,
} from '@wormery/utils'

import { ParsersError, ParsersSkip } from '../api/error'
import { Inject } from '../inject/inject'
import { Theme } from '../theme/theme'
import { isInjectKey } from '../inject/api'
import { parsersResultHandleWarn, warn } from '../api'
import {
  DefWTSCAPIOptions,
  Get$parsers,
  Get$WTSC,
  WTSCAPI,
  WTSCOptions,
} from './option'
import {
  ADD,
  CSSKey,
  CSSValue,
  isParserReturnValue,
  ParserReturnValue,
  Style,
} from './types'
import { InjectKey } from '../inject/types'
import { __DEV__ } from '../../setupEnvironment'
import { virtualWorld } from '../parser/preParser'

export const WTSCObject = Symbol('WTSCObject')

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template _Parsers
 */
export class WTSC<Options extends WTSCOptions<Options>> extends Theme<Options> {
  /**
   * 一个symbol值，表示是一个WTSC
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  public readonly [WTSCObject] = true

  /**
   * 名字
   * @author meke
   * @type {string}
   * @memberof WTSC
   */
  public name: string

  private readonly options: Options
  // private readonly defWTSC!: DefWTSC<Options>

  /**
   * 样式存储存储
   * @author meke
   * @private
   * @memberof WTSC
   */
  private _style: Style<Options> = {}

  /**
   * 处理器方法存储
   * @author meke
   * @type {ADD<_Parsers>}
   * @memberof WTSC
   */
  public add: ADD<Options>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<_Parsers> | null)}
   * @memberof WTSC
   */
  public parent: Get$WTSC<Options> | null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<_Parsers>>}
   * @memberof WTSC
   */
  public children: Array<WTSC<Options>> = []

  /**
   * 解析器对象
   * @author meke
   * @type {_Parsers}
   * @memberof WTSC
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private parsers: Get$parsers<Options>

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<_Parsers> | _Parsers)} [p1]
   * @memberof WTSC
   */
  constructor(options: Options) {
    super(options)
    this.name = options.name ?? 'wtsc'
    this.parsers = options.parsers ?? ({} as any)
    this.parent = options.parent ?? null
    this.options = options

    const addFn = ((key: CSSKey<Options>, ...rest: any[]) => {
      if (hasProp(this.add, key)) {
        this.add[key](...rest)
      }

      return this
    }) as unknown as ADD<Options>

    this.add = this.addProxify(this.parsers, addFn)
  }

  /**
   * 定义局部子wtsc
   * @author meke
   * @param {WTSCOptions<_Parsers>} [options={}]
   * @return {*}  {WTSC<MyParsers>}
   * @memberof WTSC
   */
  public defChild(options: WTSCOptions<Options> = {} as any): WTSC<Options> {
    const _options = { parent: this, ...options } as WTSCOptions<Options>
    const w = this.options.defWTSC?.(_options)

    this.children.push(w as any)

    return w as WTSC<Options>
  }

  /**
   * 负责代理
   * @param target
   * @param handle
   * @returns
   */
  private addProxify<M extends Get$parsers<Options>>(
    parsers: M,
    addFn: any
  ): ADD<Options> {
    const that = this
    const isWtsc = isThe('wtsc')
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached((prop: string, key: CSSKey<Options>) => {
      return function (...rest: any[]): WTSC<Options> {
        const cssKey = that.keyToString(key)
        virtualWorld(cssKey, () => {
          that.parsersResultHandle(cssKey, (parsers as any)[key], ...rest)
        })
        // 永远返回this
        return that
      }
    })

    const handle: ProxyHandler<M> = {
      get(target, prop) {
        // 检测到如果是函数的话就会认为是parser
        // parser会被代理并将返回结果变为<WTSC<T,P>>this,
        // 并将返回结果变为css的值,以函数名作为css的属性名
        if (hasProp(addFn, prop)) {
          return that
        } else if (hasProp(parsers, prop)) {
          if (isFunction(parsers[prop])) {
            return parsersHandler(prop.toString(), prop as any)
          } else if (isWtsc(prop)) {
            return that
          } else {
            // 这里可能在访问自身的属性
            return (parsers as any)[prop]
          }
        } else {
          return undefined
        }
      },
    }

    return new Proxy(addFn, handle) as unknown as ADD<Options>
  }

  /**
   * @author meke
   * @private
   * @template F
   * @param {string} key
   * @param {F} handle
   * @param {...any[]} rest
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  private parsersResultHandle<F extends ((...rest: any[]) => string) | string>(
    key: string,
    handle: F,
    ...rest: any[]
  ): WTSC<Options> {
    try {
      let value: ParserReturnValue | undefined

      if (isFunction(handle)) {
        // 过滤掉InjectKey为值,手动得到也是为了更多效率选择
        for (let i = 0; i < rest.length; i++) {
          const r = rest[i]
          if (isInjectKey(r)) {
            rest[i] = this.inject(r)
            if (isUndef(rest[i])) {
              // 遇到任何undefined就跳过处理
              ParsersSkip.throw()
            }
          }
        }

        value = handle(...rest)
        // 是空的情况是不会处理的

        if (isParserReturnValue(value)) {
          const cssValue = value.toString()
          this.setCSS(key as any, cssValue)
          return this
        }

        parsersResultHandleWarn(
          key,
          '意外的值,本应该是naver，不应该运行到此\n' +
            '提示贴：如果是你实现了处理器，请查看' +
            key +
            '的处理器，查看是否有强制类型转换，处理器parsers如果不需要输出行throw 一个parser错误就可以跳过处理，更多见官方网站;如果和你无关，请反馈到wtsc的Issues;',
          value
        )
      }
      parsersResultHandleWarn(
        key,
        '发现处理器不是一个Function\n提示贴：如果是你实现了处理器，请查看' +
          key +
          '的处理器，如果和你无关，请反馈到wtsc的Issues'
      )
    } catch (E) {
      if (E instanceof ParsersSkip) {
        parsersResultHandleWarn('使用了跳过')
      } else if (E instanceof ParsersError) {
        warn(E.toString())
      } else {
        if (__DEV__) {
          throw E
        }
      }
    }
    return this
  }

  /**
   * keyToString
   * @author meke
   * @private
   * @param {CSSKey<_Parsers>} cssKey
   * @return {*}  {string}
   * @memberof WTSC
   */
  private keyToString(cssKey: CSSKey<Options>): string {
    if (isString(cssKey)) {
      return cssKey
    }
    if (isSymbol(cssKey)) {
      return getSymbolVal(cssKey)
    }
    if (isNumber(cssKey)) {
      return cssKey.toString()
    }

    return ''
  }

  /**
   * @author meke
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  public addAny(key: string, value: string): WTSC<Options> {
    this.setCSS(key as any, value)

    return this
  }

  /**
   * 向style里添加属性
   * @author meke
   * @private
   * @param {CSSKey<_Parsers>} cssName
   * @param {CSSValue} cssValue
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<Options>, cssValue: CSSValue): void {
    this._style[cssName] = cssValue
  }

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<_Parsers>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  public isExisted(cssKey: CSSKey<Options>): boolean {
    return !!this._style[cssKey]
  }

  /**
   * 返回css属性
   * @isClear:boolean 是否清空，默认值true
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {Style<T>}
   * @memberof WTSC
   */
  public out(isClear: boolean = true): Style<Options> {
    const _style = this._style
    if (isClear) {
      this.clear()
    }
    return _style
  }

  /**
   * 保存，默认清空存储样式的变量
   * @author meke
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(): InjectKey<Style<Options>>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean): InjectKey<Style<Options>>

  /**
   * 保存
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean = true): InjectKey<Style<Options>> {
    const injectkey = this.provide(this._style, this.name + '>save')
    if (isClear) {
      this.clear()
    }
    return injectkey
  }

  /**
   * 清空css
   * @author meke
   * @memberof WTSC
   */
  public clear(): void {
    this._style = {} as unknown as Style<Options>
  }

  /**
   * 将会以css的形式格式化
   * @author meke
   * @param {string} [name=this.name]
   * @param {string} [prefix='']
   * @return {*}  {string}
   * @memberof WTSC
   */
  public toString(name: string = this.name, prefix: string = ''): string {
    let cssstyle = ''
    if (name === this.name) {
      cssstyle += '.' + name
    } else {
      cssstyle += name
    }
    cssstyle += '{\n'
    for (const key in this._style) {
      if (Object.prototype.hasOwnProperty.call(this._style, key)) {
        const cssValue = this._style[key]
        cssstyle += `  ${key}: ${cssValue ?? ''};\n`
      }
    }
    cssstyle += '}\n'
    return cssstyle
  }
}
