import { FlexGrow } from '.'
import { FlexShrink } from './flexShrink'
import { FlexBasis } from './flexBasis'
import { GlobalCSSValues, auto, initial, none } from '../../../CSSValue/types'

/**
 * 关键字值
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
 * @author meke
 * @export
 * @interface FlexInterface
 * @extends {FlexGrowInterface}
 * @extends {FlexShrinkInterface}
 */
export interface FlexInterface<R> {
  /**
   * 关键字
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {(auto | initial | none)} value
   * @return {*}  {ToString}
   * @memberof FlexInterface
   */
  flex(value: auto | initial | none): R
  /**
   * 一个值, 无单位数字: flex-grow
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {FlexGrow} flexGrow
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flex(flexGrow: FlexGrow): R

  /**
   * 一个值, width/height: flex-basis
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {FlexBasis} flexBasis
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flex(flexBasis: FlexBasis): R

  /**
   * 两个值: flex-grow | flex-basis
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {FlexGrow} flexGrow
   * @param {FlexBasis} flexBasis
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flex(flexGrow: FlexGrow, flexBasis: FlexBasis): R

  /**
   * 两个值: flex-grow | flex-shrink
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {FlexGrow} flexGrow
   * @param {FlexShrink} flexShrink
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flex(flexGrow: FlexGrow, flexShrink: FlexShrink): R

  /**
   * 三个值: flex-grow | flex-shrink | flex-basis
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {FlexGrow} flexGrow
   * @param {FlexShrink} flexShrink
   * @param {FlexBasis} flexBasis
   * @return {*}  {PRV}
   * @memberof ConstraninedParsers
   */
  flex(flexGrow: FlexGrow, flexShrink: FlexShrink, flexBasis: FlexBasis): R

  /**
   * 全局属性值
   * https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
   * @author meke
   * @param {GlobalCSSValues} value
   * @return {*}  {R}
   * @memberof FlexInterface
   */
  flex(value: GlobalCSSValues): R
}
