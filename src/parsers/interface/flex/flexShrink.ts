import { ToString } from '../../../core/WTSC/types'
export interface FlexShrinkInterface {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink
   * @author meke
   * @param {ToString} value
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  flexShrink(flexShrink: number): ToString
}

export type FlexShrink = number
