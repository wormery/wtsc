import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface LH extends Length<LengthUnit.LH> {}

/**
 * 等于使用它的元素的 line-height 属性的计算值，转换为绝对长度.
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function lh(l: number): LH {
  return sufUnit(l, LengthUnit.LH)
}
