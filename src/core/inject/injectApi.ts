import { GetObjInjectReturn, ObjInjectKey } from './types'
import { InjectKey } from './injectKey'
export interface InjectApi extends DepInjectApi {
  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @return {*}  {(R | undefined)} 没有传默认值可能会返回undefined
   * @memberof Inject
   */

  // eslint-disable-next-line @typescript-eslint/method-signature-style
  inject<R = any>(injectKey: InjectKey<R>): R | undefined

  /**
   * inject 是一个注入器， 可以简单的注入需要的内容
   * @author meke
   * @template R
   * @param {InjectKey<R>} injectKey
   * @param {R} defau 传入默认值不会返回undefined
   * @return {*}  {R}
   * @memberof Inject
   */
  inject<R = any>(injectKey: InjectKey<R>, defau: R): R
}

export interface DepInjectApi {
  depInject<ObjKey extends ObjInjectKey>(
    objKey: ObjKey
  ): GetObjInjectReturn<ObjKey>
}
