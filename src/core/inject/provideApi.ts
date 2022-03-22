import { ObjInjectKey, GetObjInjectValue } from './types'
import { InjectKey } from './injectKey'

export interface ProvideApi extends DepProvideApi {
  /**
   * 传入一个值返回一个{InjectKey}
   * @author meke
   * @template T
   * @param {T} value
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  provide<T>(value: T): InjectKey<T>

  /**
   * 传入一个值返回一个{InjectKey} 第二个参数可以传入一个自定义 Injectkey 这样你可以输入描述等信息
   * @author meke
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} [injectKey=defInjKey('provide')]
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  provide<T>(value: T, InjectKey: InjectKey<T>): InjectKey<T>
}

export interface DepProvideApi {
  /**
   * 如果使用此重载，更建议使用provide
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  depProvide<T>(value: T, objKey: InjectKey<T>): InjectKey<T>

  /**
   * 树状推断InjectKey类型
   * @template T
   * @param {T} value
   * @param {InjectKey<T>} objKey
   * @return {*}  {InjectKey<T>}
   * @memberof Inject
   */
  depProvide<KEYAPI extends ObjInjectKey, T extends GetObjInjectValue<KEYAPI>>(
    value: T,
    objKey: KEYAPI
  ): GetObjInjectValue<KEYAPI>
}
