import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VB extends Length<LengthUnit.VB> {}

/**
 * 等于初始包含块大小的 1%，在根元素的区块轴方向上。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vb(l: number): VB {
  return sufUnit(l, LengthUnit.VB)
}
