import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface EM extends Length<LengthUnit.EM> {}

/**
 * 相对长度单位，这个单位表示元素的 font-size 的计算值。如果用在font-size 属性本身，它则表示元素继承的 font-size 值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function em(l: number): EM {
  return sufUnit(l, LengthUnit.EM)
}
