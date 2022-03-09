import { ToString } from 'src/core/WTSC/types'
import { CssAllValueType, CSSSizeTypes, PositionType } from '../CSSValue'
import { MarginValue } from './typeParsers/margin/margin'
import { TypeParsersInterface } from './typeParsers/TypeParsersInterface'
import { HeightValue } from './interface/height/height'
class ConstraninedParsersImpl {
  flexShrink(flexShrink: number): ToString {
    return flexShrink
  }

  flexBasis(value: ToString): ToString {
    return value
  }

  width(value: ToString): ToString {
    return value
  }

  height(value: HeightValue): ToString {
    return value
  }

  margin(...rest: MarginValue[]): ToString {
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
  padding(value: CSSSizeTypes): ToString

  /**
   * 指定两个值时，第一个值会应用于上边和下边的外边距，第二个值应用于左边和右边。
   * @author meke
   * @param {CSSSizeTypes} TopAndButtom
   * @param {CSSSizeTypes} LeftAndRight
   * @return {*}  {ParserReturnValue}
   * @memberof ConstraninedParsers
   */
  padding(TopAndButtom: CSSSizeTypes, LeftAndRight: CSSSizeTypes): ToString

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
  ): ToString

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
  ): ToString

  padding(...rest: CSSSizeTypes[]): ToString {
    return this.arrayToString(rest)
  }

  all(value: CssAllValueType): ToString {
    return value
  }

  position(value: PositionType): ToString {
    return value
  }

  display(value: ToString): ToString {
    return value
  }

  zIndex(value: number): ToString {
    return value
  }
}

export type TypeConstraninedParsers =
  | ConstraninedParsersImpl
  | (new () => TypeParsersInterface)

export const ConstraninedParsers = ConstraninedParsersImpl
