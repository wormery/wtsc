import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VW extends Length<LengthUnit.VW> {}

/**
 * 视口的初始包含块的宽度的 1%。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vw(l: number): VW {
  return sufUnit(l, LengthUnit.VW)
}
