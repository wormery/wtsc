import {
  isSymbol,
  isObject,
  isUndef,
  isString,
  getSymbolVal,
} from '@wormery/utils'

/**
 * inject前缀
 */
const WTSC_INJECT_KEY_PRE: string = 'WTSCIK:'

/**
 * 根存储
 */
export const rootProvides: Provides = {}

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

export type InjectKeyApi = InjectKey<any> | ObjInjectKey
export interface ObjInjectKey {
  [k: string]: InjectKeyApi
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface InjectKey<E> extends Symbol {}

export class Inject {
  provides: Provides

  constructor(_privates?: Provides) {
    if (isUndef(_privates)) {
      this.provides = Object.create(global)
    } else {
      this.provides = _privates
    }
  }

  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI
  ): GetObjInjectValue<KEYAPI> | undefined

  inject<KEYAPI extends ObjInjectKey>(key: KEYAPI): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: boolean
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: boolean
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: true
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    defaul: GetObjInjectValue<KEYAPI>,
    write: true
  ): GetObjInjectValue<KEYAPI>

  inject<KEYAPI extends InjectKeyApi>(
    key: KEYAPI,
    defaul?: GetObjInjectValue<KEYAPI>,
    write: boolean = false
  ): GetObjInjectValue<KEYAPI> | undefined {
    if (write) {
      this.provide(key as any, defaul)
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

  provide<KEYAPI extends ObjInjectKey>(
    key: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): void

  provide<KEYAPI extends InjectKey<any>>(
    key: KEYAPI,
    value: GetObjInjectValue<KEYAPI>
  ): void

  provide<KEYAPI extends InjectKeyApi>(
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
            this.provide(apiKey, (value as any)[k])
          } else if (isObjInjectkey(apiKey)) {
            this.provide(apiKey, (value as any)[k])
          }
        }
      }
    }
  }
}

export function defineInjKey<T extends undefined>(kv?: T): InjectKey<unknown>
export function defineInjKey<T extends { [key: string]: any }>(
  kv: T
): GetObjInjectKey<T>
export function defineInjKey<T extends string, P extends unknown>(
  key: T,
  value?: P
): InjectKey<P>
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
    return Symbol(`${WTSC_INJECT_KEY_PRE}${p1}`) as any
  }
  if (isUndef(p1)) {
    return Symbol(`${WTSC_INJECT_KEY_PRE}default`) as any
  }
  const ret: any = {}
  for (const k in p1) {
    ret[k] = Symbol(`${WTSC_INJECT_KEY_PRE}${k}`)
  }
  return ret
}
const xxx = defineInjKey<'3', string>('3')
console.log(xxx)

/**
 * 定义注射器
 *
 * @author meke
 * @export
 * @param {Provides} [provides=undefined]
 * @return {*}  {InjWTSC}
 */
export function defineInject(provides?: Provides): Inject {
  return new Inject(provides)
}

/**
 * 全局的一写api
 */
export const { inject, provide } = defineInject(rootProvides)

/**
 *
 *
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

export function isInjectKey(v: unknown): v is InjectKey<any> {
  if (isSymbol(v)) {
    if (getSymbolVal(v).startsWith(WTSC_INJECT_KEY_PRE)) {
      return true
    }
  }
  return false
}
