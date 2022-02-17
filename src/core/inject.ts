import { isSymbol, isObject, isUndef, isNotUndef } from '@wormery/utils'
import { is } from 'bluebird'

export const rootProvides: Provides = {}

/**
 * 传入{[string]:DefineKey<T>}返回{[string]:T},
 * 传入DefineKey<T> 返回T，这个就是解包的
 */
export type IR<T> = T extends DefineKey<infer P>
  ? P
  : {
      [k in keyof T]: T[k] extends DefineKey<infer P> ? P : IR<T[k]>
    }

export type KeyApi = DefineKey<any> | ObjApi
export interface ObjApi {
  [k: string]: KeyApi
}

export interface DefineKey<E> extends Symbol {}

export type Provides = Record<string | symbol, any>

class InjWTSC {
  provides: Provides

  constructor(_privates?: Provides) {
    if (isUndef(_privates)) {
      this.provides = Object.create(global)
    } else {
      this.provides = _privates
    }
  }
  inject<KEYAPI extends DefineKey<any>>(key: KEYAPI): IR<KEYAPI> | undefined

  inject<KEYAPI extends ObjApi>(key: KEYAPI): IR<KEYAPI>

  inject<KEYAPI extends DefineKey<any>>(
    key: KEYAPI,
    defaul: IR<KEYAPI>
  ): IR<KEYAPI>

  inject<KEYAPI extends ObjApi>(key: KEYAPI, defaul: IR<KEYAPI>): IR<KEYAPI>

  inject<KEYAPI extends DefineKey<any>>(
    key: KEYAPI,
    defaul: IR<KEYAPI>,
    write: boolean
  ): IR<KEYAPI>

  inject<KEYAPI extends ObjApi>(
    key: KEYAPI,
    defaul: IR<KEYAPI>,
    write: boolean
  ): IR<KEYAPI>

  inject<KEYAPI extends ObjApi>(
    key: KEYAPI,
    defaul: IR<KEYAPI>,
    write: true
  ): IR<KEYAPI>
  inject<KEYAPI extends DefineKey<any>>(
    key: KEYAPI,
    defaul: IR<KEYAPI>,
    write: true
  ): IR<KEYAPI>

  inject<KEYAPI extends KeyApi>(
    key: KEYAPI,
    defaul?: IR<KEYAPI>,
    write: boolean = false
  ): IR<KEYAPI> | undefined {
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
    } else if (isObjApis(key)) {
      const ret: Record<string | symbol, any> = {}
      for (const k in key) {
        const apiKey = key[k]
        if (isKey(apiKey)) {
          ret[k] = this.inject(apiKey)
        } else if (isObjApis(apiKey)) {
          ret[k] = this.inject(apiKey)
        }
      }
      return ret as any
    }
  }

  provide<KEYAPI extends ObjApi>(key: KEYAPI, value: IR<KEYAPI>): void
  provide<KEYAPI extends DefineKey<any>>(key: KEYAPI, value: IR<KEYAPI>): void
  provide<KEYAPI extends KeyApi>(key: KEYAPI, value: IR<KEYAPI>): void {
    if (isUndef(value)) {
      return
    }
    if (isSymbol(key)) {
      this.provides[key] = value
    } else if (isObjApis(key)) {
      for (const k in key) {
        if (!isUndef(value) && !isUndef(key[k])) {
          const apiKey = key[k]
          if (isKey(apiKey)) {
            this.provide(apiKey, (value as any)[k])
          } else if (isObjApis(apiKey)) {
            this.provide(apiKey, (value as any)[k])
          }
        }
      }
    }
  }
}

/**
 * 定义注射器
 *
 * @author meke
 * @export
 * @param {Provides} [provides=undefined]
 * @return {*}  {InjWTSC}
 */
export function defineInject(provides?: Provides): InjWTSC {
  return new InjWTSC()
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
export function isObjApis(v: unknown): v is ObjApi {
  if (isObject(v)) {
    return true
  }
  return false
}

export function isKey(v: unknown): v is DefineKey<any> {
  if (isSymbol(v)) {
    return true
  }
  return false
}
