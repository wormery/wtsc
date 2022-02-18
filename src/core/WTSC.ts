import {
  isEmpty,
  isFunction,
  isNumber,
  isString,
  isSymbol,
  isUndefAndNull,
  cached,
  hasProp,
  isThe,
  isUndef,
  getSymbolVal,
} from '@wormery/utils'

import ParserError from './error/ParsersError'

import { Warning } from './error/Warning'
import { Inject } from './inject'

export const WTSCConstructorID = Symbol('WTSCConstructorID')

/**
 * 解析器的返回值必须有toString()方法
 */
export interface ParserReturnValue {
  toString: () => string
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
 *  css值支持的类型
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
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 */
export class WTSC<T extends Parsers<T>> extends Inject {
  /**
   * 一个symbol值，唯一表定一个构造器
   *
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  public WTSCConstructorID: symbol = WTSCConstructorID

  private _style = {} as unknown as Style<T>

  public add: ADD<T> = {} as unknown as ADD<T>
  public parent: WTSC<T> | null = null
  public children: Array<WTSC<T>> = []
  public parsers: T = {} as unknown as T

  constructor(parsers: T)
  constructor(parent: WTSC<T>)
  constructor(p1?: WTSC<T> | T) {
    super(p1)

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

  public defChild(): WTSC<T> {
    return new WTSC(this as any)
  }

  /**
   * 负责代理
   *
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
        that._addStyle(that.keyToString(key), (parsers as any)[key], ...rest)
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
   *
   *
   * @author meke
   * @private
   * @template F
   * @param {string} key
   * @param {F} handle
   * @param {...any[]} rest
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  private _addStyle<F extends ((...rest: any[]) => string) | string>(
    key: string,
    handle: F,
    ...rest: any[]
  ): WTSC<T> {
    try {
      let value: string | undefined

      if (isFunction(handle)) {
        value = handle(...rest)
      } else {
        if (isString(handle)) {
          value = handle
        }
      }

      // 是空的情况是不会处理的
      if (isUndefAndNull(value) || isEmpty(value)) {
        return this
      }

      // 是str类型才会处理
      if (isString(value)) {
        this.setCSS(key as any, value)
        return this
      }
      throw new Warning(
        "WTSC>addStyle:检测到，处理器传入的类型错误'" + typeof value + "'"
      )
    } catch (E) {
      if (E instanceof ParserError) {
        console.error(E.toString())
      } else if (E instanceof Warning) {
        console.warn(E.msg)
      } else {
        throw E
      }
    }
    return this
  }

  /**
   * keyToString
   *
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
   *
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   */
  public addAny(key: string, value: string): WTSC<T> {
    this.setCSS(key as any, value)

    return this
  }

  /**
   * 拆分方法添加属性
   *
   * @private能希望自定义基于Error的异常类型，使得你能够 throw new MyError() 并可以使用 instanceof MyError 来检查
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<T>, cssValue: CSSValue): void {
    this._style[cssName] = cssValue
  }

  /**
   * 检查是否存在此css
   *
   * @param {CSSKey<T>} cssKey
   * @return {*}
   * @memberof WTSC
   */
  public isExistedBeCSS(cssKey: CSSKey<T>): boolean {
    return !!this._style[cssKey]
  }

  /**
   * 返回css属性
   * @isClear:boolean 是否清空，默认值true
   * @return {*}
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
   * 清空css
   */
  public clear(): void {
    this._style = {} as unknown as Style<T>
  }
}
