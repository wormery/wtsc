import { Length } from '../../'
import { CssColor } from '../../CSSValue/color/Color'
import { GlobalCSSValues } from '../../CSSValue/types'

type inset = 'inset'

/**
 * @partially
 * @author meke
 * @export
 * @interface BoxShadowInterface
 * @template R
 */
export interface BoxShadowInterface<R> {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   *
   * @author meke
   * @param {BoxShadowValue} value
   * @return {*}  {R}
   * @memberof PositionInterface
   */
  boxShadow(value: GlobalCSSValues): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   *
   * @author meke
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(offsetX: Length, offsetY: Length, color: CssColor): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   *
   * @author meke
   * @param {'inset'} inset
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(inset: inset, offsetX: Length, offsetY: Length, color: CssColor): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   * @author meke
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {Length} blurRadius
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(
    offsetX: Length,
    offsetY: Length,
    blurRadius: Length,
    color: CssColor
  ): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   * @author meke
   * @author meke
   * @author meke
   * @param {'inset'} inset
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {Length} blurRadius
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(
    inset: inset,
    offsetX: Length,
    offsetY: Length,
    blurRadius: Length,
    color: CssColor
  ): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   * @author meke
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {Length} blurRadius
   * @param {Length} spreadRadius
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(
    offsetX: Length,
    offsetY: Length,
    blurRadius: Length,
    spreadRadius: Length,
    color: CssColor
  ): R

  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow
   * @author meke
   * @param {'inset'} inset
   * @param {Length} offsetX
   * @param {Length} offsetY
   * @param {Length} blurRadius
   * @param {Length} spreadRadius
   * @param {CssColor} color
   * @return {*}  {R}
   * @memberof BoxShadowInterface
   */
  boxShadow(
    inset: inset,
    offsetX: Length,
    offsetY: Length,
    blurRadius: Length,
    spreadRadius: Length,
    color: CssColor
  ): R
}
