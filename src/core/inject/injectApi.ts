import { GetObjInjectReturn, ObjInjectKey, GetObjInjectValue } from './types'
import { InjectKey, isInjectKey } from './injectKey'
import { ProviderStorage } from './providerApi'
import { isObject, isArray } from '@wormery/utils'
import { InjectStorage } from './api'
import { unpack } from './package'
export interface InjectFunction {
  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @return {*}  {(R | undefined)} 没有传默认值可能会返回undefined
   * @memberof Inject
   */
  <Value = any, IsAssertionExisted extends boolean = false>(
    injectKey: InjectKey<Value, IsAssertionExisted>
  ): Required<InjectKey<Value, IsAssertionExisted>>['value']

  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @param {R} defau 传入默认值不会返回undefined
   * @return {*}  {R}
   * @memberof Inject
   */
  <R = any>(injectKey: InjectKey<R, any>, defau: R): R
}

export type DepInjectFunction = <ObjKey extends ObjInjectKey>(
  objKey: ObjKey
) => GetObjInjectReturn<ObjKey>

function _inject(
  injectKey: InjectKey<any, any>,
  storage: ProviderStorage
): any {
  const v = storage.provider.get(injectKey)
  if (v) {
    if (injectKey.isReactive) {
      return unpack(v)
    }
    return v
  } else {
    const _storage = storage.parent
    if (_storage) {
      return _inject(injectKey, _storage)
    }
  }
  return undefined
}

export const inject: InjectFunction = function (
  this: InjectStorage,
  injectKey: InjectKey<any, any>,
  defau?: any
) {
  return _inject(injectKey, this) ?? defau
}

let that!: InjectStorage
function _depInject<KEYAPI extends ObjInjectKey>(
  objKey: KEYAPI,
  memory: WeakMap<any, any> = new WeakMap()
): GetObjInjectValue<KEYAPI> {
  if (isInjectKey(objKey)) {
    return that.inject(objKey) as any
  }

  if (isObject(objKey)) {
    // dep memory, Prevent circulation
    if (memory.get(objKey)) {
      return objKey as any
    }
    memory.set(objKey, true)

    // array
    if (isArray(objKey)) {
      const arr: any = []
      for (let i = 0; i < objKey.length; i++) {
        arr.push(_depInject(objKey[i], memory))
      }
      return arr
    }

    // object
    const ret: any = {}
    for (const k in objKey) {
      ret[k] = _depInject(objKey[k] as any, memory)
    }
    return ret
  }
  return objKey
}

export const depInject: DepInjectFunction = function (
  this: InjectStorage,
  objkey
) {
  that = this
  return _depInject(objkey)
}
