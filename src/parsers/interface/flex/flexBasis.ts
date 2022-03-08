import { ToString } from '../../../core/WTSC/types'
import {
  fixContent,
  minContent,
  maxContent,
  auto,
  GlobalCSSValues,
} from '../../../CSSValue/types'
import { Length } from '../../../'

export type FlexBasis =
  | GlobalCSSValues
  | Length
  | auto
  | fill
  | maxContent
  | minContent
  | fixContent
  | content

/* 在flex item内容上的自动尺寸 */
export type content = 'content'
export type fill = 'fill'

export interface FlexBasisInterface {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink
   * @author meke
   * @param {FlexBasis} flexBasis
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flexBasis(flexBasis: FlexBasis): ToString
}
