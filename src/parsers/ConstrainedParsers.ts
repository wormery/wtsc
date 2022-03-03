import { ParserReturnValue } from 'src/core/WTSC/types'
import {
  CssAllValueType,
  CSSSizeTypes,
  CSSHWType,
  PositionType,
} from '../CSSValue'
import { BaseParsers } from './BaseParsers'

export class ConstraninedParsers extends BaseParsers {
  width(value: CSSHWType): ParserReturnValue {
    return value
  }

  height(value: CSSHWType): ParserReturnValue {
    return value
  }

  /**
   * 当只指定一个值时，该值会统一应用到全部四个边的外边距上。
   * @author meke
   * @param {CSSSizeTypes} value
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(value: CSSSizeTypes): ParserReturnValue

  /**
   * 指定两个值时，第一个值会应用于上边和下边的外边距，第二个值应用于左边和右边。
   * @author meke
   * @param {CSSSizeTypes} TopAndButtom
   * @param {CSSSizeTypes} LeftAndRight
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(
    TopAndButtom: CSSSizeTypes,
    LeftAndRight: CSSSizeTypes
  ): ParserReturnValue

  /**
   *指定三个值时，第一个值应用于上边，第二个值应用于右边和左边，第三个则应用于下边的外边距。
   * @author meke
   * @param {CSSSizeTypes} Top
   * @param {CSSSizeTypes} LeftAndRight
   * @param {CSSSizeTypes} buttom
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  margin(
    Top: CSSSizeTypes,
    LeftAndRight: CSSSizeTypes,
    buttom: CSSSizeTypes
  ): ParserReturnValue

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
    top: CSSSizeTypes,
    left: CSSSizeTypes,
    right: CSSSizeTypes,
    buttom: CSSSizeTypes
  ): ParserReturnValue

  margin(...rest: CSSSizeTypes[]): ParserReturnValue {
    let str = ''
    for (let i = 0; i < rest.length; i++) {
      str += rest[i].toString() + ' '
    }
    return str.trim()
  }

  /**
   * 当只指定一个值时，该值会统一应用到全部四个边的外边距上。
   * @author meke
   * @param {CSSSizeTypes} value
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  padding(value: CSSSizeTypes): ParserReturnValue

  /**
   * 指定两个值时，第一个值会应用于上边和下边的外边距，第二个值应用于左边和右边。
   * @author meke
   * @param {CSSSizeTypes} TopAndButtom
   * @param {CSSSizeTypes} LeftAndRight
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  padding(
    TopAndButtom: CSSSizeTypes,
    LeftAndRight: CSSSizeTypes
  ): ParserReturnValue

  /**
   *指定三个值时，第一个值应用于上边，第二个值应用于右边和左边，第三个则应用于下边的外边距。
   * @author meke
   * @param {CSSSizeTypes} Top
   * @param {CSSSizeTypes} LeftAndRight
   * @param {CSSSizeTypes} buttom
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  padding(
    Top: CSSSizeTypes,
    LeftAndRight: CSSSizeTypes,
    buttom: CSSSizeTypes
  ): ParserReturnValue

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
  padding(
    top: CSSSizeTypes,
    left: CSSSizeTypes,
    right: CSSSizeTypes,
    buttom: CSSSizeTypes
  ): ParserReturnValue

  padding(...rest: CSSSizeTypes[]): ParserReturnValue {
    let str = ''
    for (let i = 0; i < rest.length; i++) {
      str += rest[i].toString() + ' '
    }
    return str.trim()
  }

  all(value: CssAllValueType): ParserReturnValue {
    return value
  }

  position(value: PositionType): ParserReturnValue {
    return value
  }

  display(value: ParserReturnValue): ParserReturnValue {
    return value
  }

  zIndex(value: number): ParserReturnValue {
    return value
  }
}
