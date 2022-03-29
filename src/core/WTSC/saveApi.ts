import { InjectKey } from '../inject/injectKey'
import { WTSCStorage } from './storage'

export interface SaveFunction {
  /**
   * 保存，默认清空存储样式的变量
   * @author meke
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  (): InjectKey<WTSCStorage['style']>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  (isClear: boolean): InjectKey<WTSCStorage['style']>
}
