import { ProvideFunction, DepProvideFunction } from './provideApi'
import { InjectFunction, DepInjectFunction } from './injectApi'
import { InjectKey } from './injectKey'

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
export interface Inject {
  readonly [injectObject]: true

  readonly inject: InjectFunction

  readonly ownInject: <V = any, IsAssertionExisted extends boolean = false>(
    injectKey: InjectKey<V, IsAssertionExisted>
  ) => Required<InjectKey<V, IsAssertionExisted>>['value']

  readonly provide: ProvideFunction

  readonly depInject: DepInjectFunction

  readonly depProvide: DepProvideFunction

  /**
   * 默认删除自己
   * @author meke
   * @param {InjectKey<any>} injectKey
   * @memberof Inject
   */
  readonly delete: (injectKey: InjectKey<any, any>) => void

  /**
   * 默认查看自己有没有这个内容
   * @author meke
   * @param {InjectKey<any>} injectKey
   * @return {*}  {boolean}
   * @memberof Inject
   */
  readonly has: (injectKey: InjectKey<any, any>) => boolean
}
