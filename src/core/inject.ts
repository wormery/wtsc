import { isObject, isArray, isSymbol, getSymbolVal } from '@wormery/utils'
import { InjectOptions } from '.'

/**
 * 类唯一辨认属性等于它代表就是这个类
 */
const injectConstructorID: symbol = Symbol('injectConstructorID')

/**
 * inject前缀
 */
const WTSC_INJECT_KEY_PRE: string = 'WTSCIK:'

/**
 * 传入obj ,obj的值将会被转换为InjectKey<value>类型
 */
export type GetObjInjectKey<T> = {
  [k in keyof T]: T[k] extends infer V ? InjectKey<V> : never
}

/**
 * 传入{[string]:DefineKey<T>}返回{[string]:T},
 * 传入DefineKey<T> 返回T，这个就是解包的
 */
export type GetObjInjectValue<T> = T extends InjectKey<infer P>
  ? P
  : T extends ObjInjectKey
  ? {
      [k in keyof T]: GetObjInjectValue<T[k]>
    }
  : T

export type GetObjInjectReturn<T> = T extends InjectKey<infer P>
  ? P | undefined
  : T extends ObjInjectKey
  ? {
      [k in keyof T]: GetObjInjectValue<T[k]>
    }
  : T

/**
 * ObjInjectKey
 */
export type ObjInjectKey = InjectKey<any> | Array<InjectKey<any> | any> | object

/**
 * @author meke
 * @export
 * @interface InjectKey
 * @extends {Symbol}
 * @template E
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface InjectKey<E> {
  symbol: symbol
  value?: E
}

export interface Provider {
  set: <E>(key: InjectKey<E>, value: E) => void
  get: <E>(key: InjectKey<E>) => E | undefined
}

export type DefProvider = <E extends Provider>(parent?: E) => E
export type Provides = Record<symbol, any>
export interface DefluatProvider extends Provider {
  provides: Provides
}

export function defDefluatProvider(parent?: DefluatProvider): DefluatProvider {
  return {
    provides: parent?.provides ? Object.create(parent.provides) : {},
    set(key, value) {
      this.provides[key.symbol] = value
    },
    get(key) {
      return this.provides[key.symbol]
    },
  }
}

/**
 * 注射器，输入一组api得到对应结果，主要作用为了在全局同一修改颜色
 * @author meke
 * @export
 * @class Inject
 */
export class Inject {
  private readonly injectConstructorID: symbol = injectConstructorID

  /**
   * 这里可以重写来达成响应式
   *
   * @author meke
   * @type {Provider}
   * @memberof Inject
   */
  public provider: Provider

  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {(Inject | any)} [inject]
   * @memberof Inject
   */
  constructor(options: InjectOptions = {}) {
    this.provider =
      options.defProvider?.(options.parent?.provider) ?? defDefluatProvider()
  }

  inject<R = any>(injectKey: InjectKey<R>): R | undefined
  inject<R = any>(injectKey: InjectKey<R>, defau: R): R
  inject<R = any>(injectKey: InjectKey<R>, defau?: R): R | undefined {
    return this.provider.get(injectKey) ?? defau
  }

  public depInject<ObjKey extends ObjInjectKey>(
    objKey: ObjKey
  ): GetObjInjectReturn<ObjKey> {
    return this._depInject(objKey)
  }

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} objKey
   * @param {GetObjInjectValue<KEYAPI>} [defaul]
   * @param {boolean} [write=false]
   * @return {*}  {(GetObjInjectValue<KEYAPI> | undefined)}
   * @memberof Inject
   */
  private _depInject<KEYAPI extends ObjInjectKey>(
    objKey: KEYAPI,
    memory: WeakMap<any, any> = new WeakMap()
  ): GetObjInjectReturn<KEYAPI> {
    if (isInjectKey(objKey)) {
      return this.inject(objKey)
    } else if (isObject(objKey)) {
      // dep memory, Prevent circulation
      if (memory.get(objKey)) {
        return objKey as any
      }
      memory.set(objKey, true)

      // array
      if (isArray(objKey)) {
        const arr = []
        for (let i = 0; i < objKey.length; i++) {
          arr.push(this._depInject(objKey[i], memory))
        }
        return arr as any
      }

      // object
      const ret: Record<string | symbol, any> = {}
      for (const k in objKey) {
        ret[k] = this._depInject(objKey[k] as any, memory)
      }
      return ret as any
    } else {
      return objKey
    }
  }

  depProvide<KEYAPI extends ObjInjectKey>(
    objKey: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): KEYAPI {
    this._depProvide(objKey, value)
    return objKey
  }

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} objKey
   * @param {GetObjInjectValue<KEYAPI>} value
   * @memberof Inject
   */
  private _depProvide<KEYAPI extends ObjInjectKey>(
    objKey: KEYAPI,
    value: GetObjInjectValue<KEYAPI>,
    memory: WeakMap<any, any> = new WeakMap()
  ): void {
    if (isInjectKey(objKey)) {
      this.provider.set(objKey, value)
    } else if (isObject(objKey)) {
      // dep memory, Prevent circulation
      if (memory.get(objKey)) {
        return
      }
      memory.set(objKey, true)

      // array
      if (isArray(objKey)) {
        for (let i = 0; i < objKey.length; i++) {
          this._depProvide(objKey[i], value[i], memory)
        }
        return
      }

      // object
      for (const k in objKey) {
        this._depProvide(objKey[k] as any, value[k], memory)
      }
    }
  }

  /**
   *
   *
   * @author meke
   * @template T
   * @param {T} value
   * @param {string} [describe='Provide']
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public provide<T>(value: T, describe: string = 'Provide'): InjectKey<T> {
    const injectKey = defInjKey<T>(describe)
    this.provider.set(injectKey, value)
    return injectKey
  }

  public defInjKey<T>(
    describe: string = 'defWTSCApi',
    value?: T
  ): InjectKey<T> {
    return defInjKey(describe, value)
  }
}

/**
 *
 *
 * @author meke
 * @export
 * @template T
 * @param {string} [key]
 * @param {T} [value]
 * @return {*}  {InjectKey<T>}
 */
export function defInjKey<T>(describe?: string, value?: T): InjectKey<T> {
  return {
    symbol: Symbol(`${WTSC_INJECT_KEY_PRE}${describe ?? ''}`),
  }
}

export function isInjectKey<T>(v: InjectKey<T>): v is InjectKey<T>
export function isInjectKey<T>(v: unknown): v is InjectKey<T>

/**
 * 检查是不是 @InjectKey 类型
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is InjectKey<any>}
 */
export function isInjectKey(v: unknown): v is InjectKey<any> {
  if (isObject(v) && 'symbol' in v) {
    return true
  }
  return false
}
