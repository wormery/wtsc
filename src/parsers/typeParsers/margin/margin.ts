import { Length } from '../../../CSSValue/Lingth'
import { Percentage } from '../../../CSSValue/Percentage'
import { auto, GlobalCSSValues } from '../../../CSSValue/types'
export type MarginValue = Length | Percentage | auto | GlobalCSSValues
export interface MarginInterface<R> {
  /**
   * 指定四个值时，依次（顺时针方向）作为上边，右边，下边，和左边的外边距。
   * @author meke
   * @param {CSSSizeTypes} top
   * @param {CSSSizeTypes} left
   * @param {CSSSizeTypes} right
   * @param {CSSSizeTypes} buttom
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(
    top: MarginValue,
    left: MarginValue,
    right: MarginValue,
    buttom: MarginValue
  ): R

  /**
   *指定三个值时，第一个值应用于上边，第二个值应用于右边和左边，第三个则应用于下边的外边距。
   * @author meke
   * @param {CSSSizeTypes} Top
   * @param {CSSSizeTypes} LeftAndRight
   * @param {CSSSizeTypes} buttom
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(Top: MarginValue, LeftAndRight: MarginValue, buttom: MarginValue): R

  /**
   * 指定两个值时，第一个值会应用于上边和下边的外边距，第二个值应用于左边和右边。
   * @author meke
   * @param {CSSSizeTypes} TopAndButtom
   * @param {CSSSizeTypes} LeftAndRight
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(TopAndButtom: MarginValue, LeftAndRight: MarginValue): R

  /**
   * 当只指定一个值时，该值会统一应用到全部四个边的外边距上。
   * @author meke
   * @param {CSSSizeTypes} value
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(value: MarginValue): R
}
