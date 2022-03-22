import { InjectKey } from './injectKey'

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
export type GetObjInjectValue<T> = T extends InjectKey<infer P, infer D>
  ? D extends true
    ? P
    : P | undefined
  : T extends object
  ? {
      [k in keyof T]: GetObjInjectValue<T[k]>
    }
  : T

type xxxx = GetObjInjectValue<{ object: InjectKey<{}> }>

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
export type ObjInjectKey = object

export interface Provider {
  set: <E>(key: InjectKey<E>, value: E) => void
  get: <E>(key: InjectKey<E>) => E | undefined
}

export type DefProvider = () => Provider
export type Provides = Record<symbol, any>
export interface DefluatProvider extends Provider {
  provides: Data<symbol, any>
}
export interface RefProvider extends DefluatProvider {}
export interface ReactiveProvider extends Provider {
  reactiveProvide: Data<symbol, any>
  noReactiveProvide: Data<symbol, any>
}

export type getReturnOfdepProvide<
  KEYAPI extends ObjInjectKey,
  T extends GetObjInjectValue<KEYAPI>
> = {
  [k in keyof KEYAPI]: KEYAPI[k] extends InjectKey<any>
    ? InjectKey<T[k]>
    : KEYAPI[k] extends ObjInjectKey
    ? getReturnOfdepProvide<KEYAPI[k], T[k]>
    : never
}
export type Data<K extends string | symbol | number, V> = { [k in K]: V }
