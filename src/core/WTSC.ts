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

import { ParsersError, ParsersSkip } from './error'
import { parsersResultHandleWarn, warn } from './warn'
import { Inject, InjectKey } from './inject'
import { DefWTSCAPIOptions, isInjectKey, WTSCAPI, WTSCOptions } from '.'
import { parsers } from '../../'

export const WTSCObject = Symbol('WTSCObject')

/**
 * css值支持的类型
 */
export type CSSValue = string | number

/**
 * CSSKey Type
 */
export type CSSKey<T extends Parsers> = keyof T

/**
 * style的类型
 */
export type Style<T extends Parsers> = {
  [k in CSSKey<T>]?: CSSValue
}

/**
 * 解析器的返回值必须有toString()方法
 */
export interface ParserReturnValue {
  toString: () => string
}
export function isParserReturnValue<T extends unknown>(
  v: T
): v is T & { toString: () => string } {
  return isString(v) || (isObject(v) && 'toString' in v)
}

/**
 * Parsers 类型
 */
export type Parsers<MyParsers = {}> = {
  [k in keyof MyParsers]: (...rest: any[]) => ParserReturnValue
}

/**
 * ADD 的类型
 */
export type ADD<T extends Parsers<T>> = {
  [k in keyof T]: T[k] extends (...rest: infer Rest) => ParserReturnValue
    ? (
        ...rest:
          | {
              [arrk in keyof Rest]: Rest[arrk] extends infer x
                ? InjectKey<x>
                : never
            }
          | Rest
      ) => WTSC<T>
    : never
} & (<K extends keyof T>(
  key: K,
  ...rest: T[K] extends (...rest: infer Rest) => ParserReturnValue
    ? Rest
    : any[]
) => WTSC<T>)

export type DefWTSC<MyParsers extends Parsers<MyParsers>> = (
  defWTSCOoptions?: WTSCOptions<MyParsers>
) => WTSC<MyParsers>
/**
 * 生成一个定义WTSC的函数 传入一个类名
 * @author meke
 * @export
 * @template MyParsers
 * @param {new () => MyParsers} Parsers
 * @param {boolean} [cache=true]
 * @return {*}  {() => WTSC<T>}
 */
export function defWTSCAPI<
  MyParsers extends Parsers<MyParsers> = parsers.ConstraninedParsers
>(createWTSCAPIOptions: DefWTSCAPIOptions<MyParsers> = {}): WTSC<MyParsers> {
  createWTSCAPIOptions.parsers ??
    (createWTSCAPIOptions.parsers =
      (createWTSCAPIOptions.Parsers ??
        (createWTSCAPIOptions.Parsers = parsers.ConstraninedParsers as any)) &&
      new createWTSCAPIOptions.Parsers())

  createWTSCAPIOptions.defWTSC = function defWTSC(
    createWTSCOoptions?: WTSCOptions<MyParsers>
  ) {
    return new WTSC({
      ...createWTSCAPIOptions,
      ...createWTSCOoptions,
    })
  }

  return (createWTSCAPIOptions as any).defWTSC()
}

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template MyParsers
 */
export class WTSC<MyParsers extends Parsers<MyParsers> = {}> extends Inject {
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

  private readonly options: DefWTSCAPIOptions<MyParsers>

  /**
   * 样式存储存储
   * @author meke
   * @private
   * @memberof WTSC
   */
  private _style: Style<MyParsers> = {}

  /**
   * 处理器方法存储
   * @author meke
   * @type {ADD<MyParsers>}
   * @memberof WTSC
   */
  public add: ADD<MyParsers>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<MyParsers> | null)}
   * @memberof WTSC
   */
  public parent: WTSC<MyParsers> | null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<MyParsers>>}
   * @memberof WTSC
   */
  public children: Array<WTSC<MyParsers>> = []

  /**
   * 解析器对象
   * @author meke
   * @type {MyParsers}
   * @memberof WTSC
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private parsers: MyParsers

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<MyParsers> | MyParsers)} [p1]
   * @memberof WTSC
   */
  constructor(options: WTSCOptions<MyParsers> = {}) {
    super(options)
    this.name = options.name ?? 'wtsc'
    this.parsers = options.parsers ?? ({} as any as MyParsers)
    this.parent = options.parent ?? null
    this.options = options

    const addFn = ((key: CSSKey<MyParsers>, ...rest: any[]) => {
      if (hasProp(this.add, key)) {
        this.add[key](...rest)
      }

      return this
    }) as unknown as ADD<MyParsers>

    this.add = this.addProxify(this.parsers, addFn)
  }

  /**
   * 定义局部子wtsc
   * @author meke
   * @param {WTSCOptions<MyParsers>} [options={}]
   * @return {*}  {WTSC<MyParsers>}
   * @memberof WTSC
   */
  public defChild(options: WTSCOptions<MyParsers> = {}): WTSC<MyParsers> {
    const _options = { parent: this, ...options }
    const w =
      this.options.defWTSC?.(_options) ??
      (this.options.defWTSC = defWTSCAPI(this.options).defWTSC)(_options)

    this.children.push(w)

    return w
  }

  /**
   * 负责代理
   * @param target
   * @param handle
   * @returns
   */
  private addProxify<M extends MyParsers>(
    parsers: M,
    addFn: any
  ): ADD<MyParsers> {
    const that = this
    const isWtsc = isThe('wtsc')
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached((prop: string, key: CSSKey<MyParsers>) => {
      return function (this: MyParsers, ...rest: any[]): WTSC<MyParsers> {
        // 过滤掉InjectKey为值
        for (let i = 0; i < rest.length; i++) {
          const r = rest[i]
          if (isInjectKey(r)) {
            rest[i] = that.inject(r)
            if (isUndef(rest[i])) {
              // 遇到任何undefined就跳过处理
              ParsersSkip.throw()
            }
          }
        }

        that.parsersResultHandle(
          that.keyToString(key),
          (parsers as any)[key],
          ...rest
        )
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

    return new Proxy(addFn, handle) as unknown as ADD<MyParsers>
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
  ): WTSC<MyParsers> {
    try {
      let value: ParserReturnValue | undefined

      if (isFunction(handle)) {
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
        return this
      } else if (E instanceof ParsersError) {
        warn(E.toString())
        return this
      } else {
        throw E
      }
    }
    return this
  }

  /**
   * keyToString
   * @author meke
   * @private
   * @param {CSSKey<MyParsers>} cssKey
   * @return {*}  {string}
   * @memberof WTSC
   */
  private keyToString(cssKey: CSSKey<MyParsers>): string {
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
  public addAny(key: string, value: string): WTSC<MyParsers> {
    this.setCSS(key as any, value)

    return this
  }

  /**
   * 向style里添加属性
   * @author meke
   * @private
   * @param {CSSKey<MyParsers>} cssName
   * @param {CSSValue} cssValue
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<MyParsers>, cssValue: CSSValue): void {
    this._style[cssName] = cssValue
  }

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<MyParsers>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  public isExisted(cssKey: CSSKey<MyParsers>): boolean {
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
  public out(isClear: boolean = true): Style<MyParsers> {
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
  public save(): InjectKey<Style<MyParsers>>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean): InjectKey<Style<MyParsers>>

  /**
   * 保存
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean = true): InjectKey<Style<MyParsers>> {
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
    this._style = {} as unknown as Style<MyParsers>
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

/**
 * 是一个WTSC对象返回true
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is WTSC<any>}
 */
export function isWTSC(v: unknown): v is WTSC<any> {
  return isObject(v) && WTSCObject in v
}
