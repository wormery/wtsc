import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VH extends Length<LengthUnit.VH> {}

/**
 * 视口的初始包含块的高度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vh(l: number): VH {
  return sufUnit(l, LengthUnit.VH)
}
