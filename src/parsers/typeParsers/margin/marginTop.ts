import { MarginValue } from './margin'

export type MarginTopValue = MarginValue

export interface MarginTopInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top
   * @author meke
   * @param {MarginValue} value
   * @return {*}  {ToString}
   * @memberof MarginTopInterface
   */
  marginTop(value: MarginValue): R
}
