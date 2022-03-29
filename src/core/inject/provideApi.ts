import { ObjInjectKey, GetObjInjectValue } from './types'
import { InjectKey, defInjKey, pack, isInjectKey } from './injectKey'
import { Inject } from './inject'
import { isUndef, isObject, isArray } from '@wormery/utils'
import { warn } from '../error/warn'
import { InjectStorage } from './api'

export interface ProvideFunction {
  /**
   * 传入一个值返回一个{InjectKey}
   * @author meke
   * @template T
   * @param {T} value
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  <IsAssertionExisted extends boolean, T>(value: T): InjectKey<
    T,
    IsAssertionExisted
  >

  /**
   * 传入一个值返回一个{InjectKey} 第二个参数可以传入一个自定义 Injectkey 这样你可以输入描述等信息
   * @author meke
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} [injectKey=defInjKey('provide')]
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  <IsAssertionExisted extends boolean, T = any>(
    value: T,
    InjectKey: InjectKey<T, IsAssertionExisted>
  ): InjectKey<T, IsAssertionExisted>
}

export interface DepProvideFunction {
  /**
   * 如果使用此重载，更建议使用provide
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  <T>(value: T, objKey: InjectKey<T>): InjectKey<T>

  /**
   * 树状推断InjectKey类型
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  <KEYAPI extends ObjInjectKey, T extends GetObjInjectValue<KEYAPI>>(
    value: T,
    objKey: KEYAPI
  ): GetObjInjectValue<KEYAPI>
}

export const provide: ProvideFunction = function <T>(
  this: InjectStorage,
  value: T,
  injectKey: InjectKey<T> = defInjKey<T>(true, __DEV__ ? 'provide' : '')
): InjectKey<T> {
  if (injectKey.isReactive) {
    this.provider.set(
      injectKey,

      injectKey[pack](value, this.provider.get(injectKey))
    )
  } else {
    this.provider.set(injectKey, value)
  }

  return injectKey
}

let that!: Inject

/**
 * @author meke
 * @template KEYAPI
 * @param {KEYAPI} objKey
 * @param {GetObjInjectValue<KEYAPI>} value
 * @memberof Inject
 */
export function _depProvide<KEYAPI extends ObjInjectKey>(
  objKey: KEYAPI,
  value: GetObjInjectValue<KEYAPI>,
  memory: WeakMap<any, any> = new WeakMap()
): void {
  try {
    if (isInjectKey(objKey)) {
      // 默认情况下传进来的undefined会忽略处理，
      // 也就是说不可以使用depProvide将一个值改为undefined
      if (isUndef(value)) {
        if (__DEV__) {
          warn('depProvider发现了一个undefined', value)
        }
        return
      }

      that.provide(value, objKey as any)
      return
    }

    if (isObject(objKey) && isObject(value)) {
      // dep memory, Prevent circulation
      if (memory.get(objKey)) {
        return
      }
      memory.set(objKey, true)

      // array
      if (isArray(objKey)) {
        for (let i = 0; i < objKey.length; i++) {
          _depProvide(objKey[i], (value as any)[i], memory)
        }
        return
      }

      // object
      for (const k in objKey) {
        _depProvide(objKey[k] as any, (value as any)[k], memory)
      }
    }
  } catch {
    if (__DEV__) {
      warn('depProvide运行时报错')
    }
  }
}

/**
 * 传入任何的树形结构，需要输入数据，数据类型要符合树形结构，将所有对应InjectKey的数据全部存储
 * @author meke
 * @template KEYAPI
 * @param {KEYAPI} objKey
 * @param {GetObjInjectValue<KEYAPI>} value
 * @return {*}  {KEYAPI}
 * @memberof Inject
 */
export const depProvide: DepProvideFunction = function (
  this: Inject,
  value: any,
  objKey: any
) {
  that = this
  _depProvide(objKey, value)
  return objKey
}
