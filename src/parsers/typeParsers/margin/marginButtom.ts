import { MarginValue } from './margin'

export type MarginBottom = MarginValue

export interface MarginBottomInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom
   * @author meke
   * @param {MarginValue} value
   * @return {*}  {ToString}
   * @memberof MarginBottomInterface
   */
  marginBottom(value: MarginValue): R
}
