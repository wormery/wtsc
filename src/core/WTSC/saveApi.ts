import { InjectKey } from '../inject/types'
import { Style } from './types'

export interface SaveApi<Options> {
  /**
   * 保存，默认清空存储样式的变量
   * @author meke
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  save(): InjectKey<Style<Options>>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  save(isClear: boolean): InjectKey<Style<Options>>
}
