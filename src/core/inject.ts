import { isSymbol, isObject, isUndef, isString } from '@wormery/utils'

/**
 * 类唯一辨认属性等于它代表就是这个类
 */
const injectConstructorID: symbol = Symbol('injectConstructorID')

/**
 * inject
 */
const injectKeyConstructorID: symbol = Symbol('injectConstructorID')

/**
 * inject前缀
 */
const WTSC_INJECT_KEY_PRE: string = 'WTSCIK:'

/**
 * 根存储
 */
export const rootProvides: Provides = {}

/**
 * Provides 存储内容的对象类型
 */
export type Provides = Record<string | symbol, any>

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
  : {
      [k in keyof T]: T[k] extends InjectKey<infer P>
        ? P
        : GetObjInjectValue<T[k]>
    }

/**
 * InjectKey
 */
export type InjectKeyApi = InjectKey<any> | ObjInjectKey

/**
 * @author meke
 * @export
 * @interface ObjInjectKey
 */
export interface ObjInjectKey {
  [k: string]: InjectKeyApi
}

/**
 * @author meke
 * @export
 * @interface InjectKey
 * @extends {Symbol}
 * @template E
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class InjectKey<E> {
  key: string
  symbol: symbol
  constructor(key: string = 'InjectKey') {
    this.key = key
    this.symbol = Symbol(WTSC_INJECT_KEY_PRE + key)
  }

  injectKeyConstructorID = injectKeyConstructorID
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
   * @author meke
   * @type {Provides}
   * @memberof Inject
   */
  public provides: Provides

  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {*} [inject]
   * @memberof Inject
   */
  constructor(inject?: any)

  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {Inject} inject
   * @memberof Inject
   */
  constructor(inject: Inject)

  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {(Inject | any)} [inject]
   * @memberof Inject
   */
  constructor(inject?: Inject | any) {
    if (!isUndef(inject) && 'injectConstructorID' in inject) {
      this.provides = Object.create(inject.provide)
    } else {
      this.provides = rootProvides
    }
  }

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @return {*}  {(GetObjInjectValue<KEYAPI> | undefined)}
   * @memberof Inject
   */
  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI
  ): GetObjInjectValue<KEYAPI> | undefined

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends ObjInjectKey>(key: KEYAPI): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @param {boolean} write
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: boolean
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @param {boolean} write
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: boolean
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @param {true} write
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: true
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} defaul
   * @param {true} write
   * @return {*}  {GetObjInjectValue<KEYAPI>}
   * @memberof Inject
   */
  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: true
  ): GetObjInjectValue<KEYAPI>

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} [defaul]
   * @param {boolean} [write=false]
   * @return {*}  {(GetObjInjectValue<KEYAPI> | undefined)}
   * @memberof Inject
   */
  inject<KEYAPI extends InjectKeyApi>(
    key: KEYAPI,
    defaul?: GetObjInjectValue<KEYAPI>,
    write: boolean = false
  ): GetObjInjectValue<KEYAPI> | undefined {
    if (write) {
      this.defineProvide(key as any, defaul)
      return defaul
    }

    if (isSymbol(key)) {
      if (!isUndef(this.provides[key])) {
        return this.provides[key]
      } else {
        return defaul
      }
    } else if (isObjInjectkey(key)) {
      const ret: Record<string | symbol, any> = {}
      for (const k in key) {
        const apiKey = key[k]
        if (isInjectKey(apiKey)) {
          ret[k] = this.inject(apiKey)
        } else if (isObjInjectkey(apiKey)) {
          ret[k] = this.inject(apiKey)
        }
      }
      return ret as any
    }
  }

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} value
   * @memberof Inject
   */
  defineProvide<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): void

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} value
   * @memberof Inject
   */
  defineProvide<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): void

  /**
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} key
   * @param {GetObjInjectValue<KEYAPI>} value
   * @memberof Inject
   */
  defineProvide<KEYAPI extends InjectKeyApi>(
    key: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): void {
    if (isUndef(value)) {
      return
    }
    if (isSymbol(key)) {
      this.provides[key] = value
    } else if (isObjInjectkey(key)) {
      for (const k in key) {
        if (!isUndef(value) && !isUndef(key[k])) {
          const apiKey = key[k]
          if (isInjectKey(apiKey)) {
            this.defineProvide(apiKey, (value as any)[k])
          } else if (isObjInjectkey(apiKey)) {
            this.defineProvide(apiKey, (value as any)[k])
          }
        }
      }
    }
  }

  provide<T>(value: T, describe: string = 'Provide'): InjectKey<T> {
    const injectKey = defineInjKey<T>(describe)
    this.defineProvide(injectKey, value)
    return injectKey
  }
}

/**
 * @author meke
 * @export
 * @template T
 * @param {T} [kv]
 * @return {*}  {InjectKey<unknown>}
 */
export function defineInjKey<T extends undefined>(kv?: T): InjectKey<unknown>

/**
 * @author meke
 * @export
 * @template T
 * @param {T} kv
 * @return {*}  {GetObjInjectKey<T>}
 */
export function defineInjKey<T extends { [key: string]: any }>(
  kv: T
): GetObjInjectKey<T>

/**
 * @author meke
 * @export
 * @template T
 * @template P
 * @param {T} key
 * @param {P} [value]
 * @return {*}  {InjectKey<P>}
 */
export function defineInjKey<P extends unknown, T extends string = string>(
  key: T,
  value?: P
): InjectKey<P>

/**
 * @author meke
 * @export
 * @template T
 * @template P
 * @param {T} [p1]
 * @return {*}  {T extends undefined
 *   ? InjectKey<unknown>
 *   : T extends string
 *   ? InjectKey<P>
 *   : GetObjInjectKey<T>}
 */
export function defineInjKey<
  T extends { [key: string]: any } | undefined | string,
  P
>(
  p1?: T
): T extends undefined
  ? InjectKey<unknown>
  : T extends string
  ? InjectKey<P>
  : GetObjInjectKey<T> {
  if (isString(p1)) {
    return new InjectKey(p1) as any
  }
  if (isUndef(p1)) {
    return new InjectKey() as any
  }
  const ret: any = {}
  for (const k in p1) {
    ret[k] = new InjectKey(k)
  }
  return ret
}

/**
 * 检查是不是 @ObjInjectKey 类型
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is ObjApi}
 */
export function isObjInjectkey(v: unknown): v is ObjInjectKey {
  if (isObject(v)) {
    return true
  }
  return false
}

/**
 * 检查是不是 @InjectKey 类型
 * @author meke
 * @export
 * @param {unknown} v
 * @return {*}  {v is InjectKey<any>}
 */
export function isInjectKey(v: unknown): v is InjectKey<any> {
  if (
    v instanceof InjectKey ||
    (isObject(v) && 'injectKeyConstructorID' in v)
  ) {
    return true
  }
  return false
}
