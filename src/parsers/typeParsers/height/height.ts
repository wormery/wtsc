import {
  fixContent,
  borderBox,
  contentBox,
  auto,
  fill,
  maxContent,
  minContent,
  available,
  GlobalCSSValues,
} from '../../../CSSValue/types'
import { Length } from '../../../CSSValue/length/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'

export type HeightValue =
  | GlobalCSSValues
  | Length
  | Percentage
  | borderBox
  | contentBox
  | auto
  | fill
  | maxContent
  | minContent
  | available
  | fixContent

export interface HeightInterface<R> {
  /**
   * height CSS 属性指定了一个元素的高度。默认情况下，这个属性决定的是内容区
   * （ content area）的高度，但是，如果将 box-sizing 设置为  border-box
   * , 这个属性决定的将是边框区域（border area）的高度。
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
   * @author meke
   * @param {HeightValue} value
   * @return {*}  {ToString}
   * @memberof HeightInterface
   */
  height(value: HeightValue): R
}
