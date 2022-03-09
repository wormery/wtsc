import { ToString } from '../../../core/WTSC/types'

export type FlexShrink = number

export interface FlexShrinkInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink
   * @author meke
   * @param {ToString} value
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  flexShrink(flexShrink: number): R
}
