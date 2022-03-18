import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VI extends Length<LengthUnit.VI> {}

/**
 * 等于初始包含块大小的 1%，在根元素的行内轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vi(l: number): VI {
  return sufUnit(l, LengthUnit.VI)
}
