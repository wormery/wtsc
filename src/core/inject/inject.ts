import { isObject, isArray } from '@wormery/utils'
import { InjectOptions } from './option'
import {
  GetObjInjectReturn,
  GetObjInjectValue,
  getReturnOfdepProvide,
  ObjInjectKey,
} from './types'
import { defInjKey } from './api'
import { ProvideApi } from './provideApi'
import { InjectApi } from './injectApi'
import { ProviderStorage } from './providerApi'
import { InjectKey, isInjectKey } from './injectKey'

/**
 * 类唯一辨认属性等于它代表就是这个类
 */
export const injectObject = Symbol('injectObject')

/**
 * 注射器，输入一组api得到对应结果，主要作用为了在全局同一修改颜色
 * @author meke
 * @export
 * @class Inject
 */
export class Inject implements ProvideApi, InjectApi {
  public readonly [injectObject] = true

  protected storage: ProviderStorage
  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {(Inject | any)} [inject]
   * @memberof Inject
   */
  constructor(options: InjectOptions = {}, storage: ProviderStorage) {
    this.storage = storage
  }
  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @return {*}  {(R | undefined)} 没有传默认值可能会返回undefined
   * @memberof Inject
   */

  public inject<R = any>(injectKey: InjectKey<R>): R | undefined

  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @param {R} defau 传入默认值不会返回undefined
   * @return {*}  {R}
   * @memberof Inject
   */
  public inject<R = any>(injectKey: InjectKey<R>, defau: R): R

  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @param {R} [defau]
   * @return {*}  {(R | undefined)}
   * @memberof Inject
   */
  public inject<R = any>(injectKey: InjectKey<R>, defau?: R): R | undefined {
    return this._inject(injectKey, this.storage) ?? defau
  }

  private _inject(injectKey: InjectKey<any>, storage: ProviderStorage): any {
    const v = storage.provider.get(injectKey)
    if (v) {
      return v
    } else {
      const _storage = storage.parent
      if (_storage) {
        return this._inject(injectKey, _storage)
      }
    }
  }

  /**
   * 传入一个值返回一个{InjectKey}
   * @author meke
   * @template T
   * @param {T} value
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public provide<T>(value: T): InjectKey<T>

  /**
   * 传入一个值返回一个{InjectKey} 第二个参数可以传入一个自定义 Injectkey 这样你可以输入描述等信息
   * @author meke
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} [injectKey=defInjKey('provide')]
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public provide<T>(value: T, InjectKey: InjectKey<T>): InjectKey<T>

  /**
   * 给一个数据存入一个数据传出key
   * @author meke
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} [injectKey=defInjKey('provide')]
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public provide<T>(
    value: T,
    injectKey: InjectKey<T> = defInjKey<T>(true, __DEV__ ? 'provide' : '')
  ): InjectKey<T> {
    this.storage.provider.set(injectKey, value)
    return injectKey
  }

  public depInject<ObjKey extends ObjInjectKey>(
    objKey: ObjKey
  ): GetObjInjectReturn<ObjKey>

  /**
   * 传入任何一个内容，将内容中所有可转换的InjectKey全部替换为内容
   * @author meke
   * @template ObjKey
   * @param {ObjKey} objKey
   * @return {*}  {GetObjInjectReturn<ObjKey>}
   * @memberof Inject
   */
  public depInject<ObjKey extends ObjInjectKey>(
    objKey: ObjKey
  ): GetObjInjectReturn<ObjKey> {
    return this._depInject(objKey)
  }

  /**
   * 如果使用此重载，更建议使用provide
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public depProvide<T>(value: T, objKey: InjectKey<T>): InjectKey<T>

  /**
   * 树状推断InjectKey类型
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public depProvide<
    KEYAPI extends ObjInjectKey,
    T extends GetObjInjectValue<KEYAPI>
  >(value: T, objKey: KEYAPI): getReturnOfdepProvide<KEYAPI, T>

  /**
   * 传入任何的树形结构，需要输入数据，数据类型要符合树形结构，将所有对应InjectKey的数据全部存储
   * @author meke
   * @template KEYAPI
   * @param {KEYAPI} objKey
   * @param {GetObjInjectValue<KEYAPI>} value
   * @return {*}  {KEYAPI}
   * @memberof Inject
   */
  public depProvide(value: any, objKey: any): any {
    this._depProvide(objKey, value)
    return objKey
  }

  /**
   * 定义key
   * @author meke
   * @template T
   * @param {boolean} [isReactive=true]
   * @param {string} [describe='defWTSCApi']
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  public defInjKey<T>(
    isReactive: boolean = true,
    describe: string = 'defWTSCApi'
  ): InjectKey<T> {
    return defInjKey(isReactive, describe)
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
      this.provide(value, objKey)
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
}
