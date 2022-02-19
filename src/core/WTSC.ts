import {
  isFunction,
  isNumber,
  isString,
  isSymbol,
  cached,
  hasProp,
  isThe,
  isUndef,
  getSymbolVal,
  isNull,
  isObject,
} from '@wormery/utils'

import { ParsersError, ParsersSkip } from './error'
import { parsersResultHandleWarn, warn } from './warn'
import { Inject, InjectKey } from './inject'

export const WTSCConstructorID = Symbol('WTSCConstructorID')

/**
 * css值支持的类型
 */
export type CSSValue = string | number

/**
 * CSSKey Type
 */
export type CSSKey<T extends Parsers<T>> = keyof T

/**
 * style的类型
 */
export type Style<T extends Parsers<T>> = {
  [k in CSSKey<T>]: CSSValue
}

/**
 * 解析器的返回值必须有toString()方法
 */
export interface ParserReturnValue {
  toString: () => string
}
export function isParserReturnValue<T extends any>(
  v: T
): v is T & { toString: () => string } {
  return isObject(v) && 'toString' in v
}

/**
 * Parsers 类型
 */
export type Parsers<T = {}> = {
  [k in keyof T]: (...rest: any[]) => ParserReturnValue
}

/**
 * ADD 的类型
 */
export type ADD<T extends Parsers<T>> = {
  [k in keyof T]: T[k] extends (...rest: infer Rest) => ParserReturnValue
    ? (...rest: Rest) => WTSC<T>
    : never
} & (<K extends keyof T>(
  key: K,
  ...rest: T[K] extends (...rest: infer Rest) => ParserReturnValue
    ? Rest
    : any[]
) => WTSC<T>)

/**
 * 生成一个定义WTSC的函数 传入一个类名
 * @author meke
 * @export
 * @template T
 * @param {new () => T} Parsers
 * @param {boolean} [cache=true]
 * @return {*}  {() => WTSC<T>}
 */
export function defineWTSC<T extends Parsers<T>>(
  Parsers: new () => T,
  cache: boolean = true
): () => WTSC<T> {
  if (cache) {
    let cached: WTSC<T> | null = null
    return () => {
      if (isNull(cached)) {
        cached = new WTSC(new Parsers())
        return cached
      } else {
        return cached
      }
    }
  } else {
    return () => {
      return new WTSC(new Parsers())
    }
  }
}

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template T
 */
export class WTSC<T extends Parsers<T>> extends Inject {
  /**
   * 一个symbol值，唯一表定一个构造器
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  public readonly WTSCConstructorID: symbol = WTSCConstructorID

  /**
   * 名字
   * @author meke
   * @type {string}
   * @memberof WTSC
   */
  public name: string

  /**
   * 样式存储存储
   * @author meke
   * @private
   * @memberof WTSC
   */
  private _style = {} as unknown as Style<T>

  /**
   * 处理器方法存储
   * @author meke
   * @type {ADD<T>}
   * @memberof WTSC
   */
  public add: ADD<T> = {} as unknown as ADD<T>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<T> | null)}
   * @memberof WTSC
   */
  public parent: WTSC<T> | null = null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<T>>}
   * @memberof WTSC
   */
  public children: Array<WTSC<T>> = []

  /**
   * 解析器对象
   * @author meke
   * @type {T}
   * @memberof WTSC
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private parsers: T = {} as unknown as T

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {T} parsers
   * @memberof WTSC
   */
  constructor(parsers: T, name?: string)

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {WTSC<T>} parent
   * @memberof WTSC
   */
  constructor(parent: WTSC<T>, name?: string)

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<T> | T)} [p1]
   * @memberof WTSC
   */
  constructor(p1?: WTSC<T> | T, name: string = 'wtsc') {
    super(p1)
    this.name = name

    if (!isUndef(p1)) {
      if ('WTSCConstructorID' in p1) {
        this.parsers = p1.parsers
        this.parent = p1
      } else {
        this.parsers = p1
      }
      // 让add既是函数有是处理数据的对象
      const addFn = ((key: CSSKey<T>, ...rest: any[]) => {
        if (hasProp(this.add, key)) {
          this.add[key](...rest)
        }

        return this
      }) as unknown as ADD<T>

      this.add = this.addProxify(this.parsers, addFn)
    }
  }

  /**
   * 定义局部子wtsc
   * @author meke
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  public defChild(): WTSC<T> {
    const w = new WTSC(this as any)

    this.children.push(w)

    return w
  }

  /**
   * 负责代理
   * @param target
   * @param handle
   * @returns
   */
  private addProxify<M extends T>(parsers: M, addFn: any): ADD<T> {
    const that = this
    const isWtsc = isThe('wtsc')
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached((prop: string, key: CSSKey<T>) => {
      return function (this: T, ...rest: any[]): WTSC<T> {
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

    return new Proxy(addFn, handle) as unknown as ADD<T>
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
  ): WTSC<T> {
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
   * @param {CSSKey<T>} cssKey
   * @return {*}  {string}
   * @memberof WTSC
   */
  private keyToString(cssKey: CSSKey<T>): string {
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
  public addAny(key: string, value: string): WTSC<T> {
    this.setCSS(key as any, value)

    return this
  }

  /**
   * 向style里添加属性
   * @author meke
   * @private
   * @param {CSSKey<T>} cssName
   * @param {CSSValue} cssValue
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<T>, cssValue: CSSValue): void {
    this._style[cssName] = cssValue
  }

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<T>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  public isExisted(cssKey: CSSKey<T>): boolean {
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
  public out(isClear: boolean = true): Style<T> {
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
  public save(): InjectKey<Style<T>>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean): InjectKey<Style<T>>

  /**
   * 保存
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean = true): InjectKey<Style<T>> {
    const injectkey = this.provide(this._style)
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
    this._style = {} as unknown as Style<T>
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
      cssstyle += name
    } else {
      cssstyle += '.' + name
    }
    cssstyle += '{\n'
    for (const key in this._style) {
      if (Object.prototype.hasOwnProperty.call(this._style, key)) {
        const cssValue = this._style[key]
        cssstyle += `  ${key}: ${cssValue};\n`
      }
    }
    cssstyle += '}\n\n'
    return cssstyle
  }
}
