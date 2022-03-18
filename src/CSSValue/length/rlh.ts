import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface RLH extends Length<LengthUnit.RLH> {}

/**
 * 等于根元素行高 line-height 的计算值。当用于设置根元素的行高 line-height 或是字体大小 font-size 时，该rlh指的是根元素行高 line-height 或字体大小 font-size 的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function rlh(l: number): RLH {
  return sufUnit(l, LengthUnit.RLH)
}
