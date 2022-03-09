import { Length } from '../../../CSSValue/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'
import { auto, GlobalCSSValues } from '../../../CSSValue/types'
import { MarginValue } from './margin'
export type MarginRightValue = Length | Percentage | auto | GlobalCSSValues
export interface MarginRightInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-right
   * @author meke
   * @param {MarginValue} value
   * @return {*}  {ToString}
   * @memberof MarginRightInterface
   */
  marginRight(value: MarginValue): R
}
