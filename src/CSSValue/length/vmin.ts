import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VMIN extends Length<LengthUnit.VMIN> {}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最小值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vmin(l: number): VMIN {
  return sufUnit(l, LengthUnit.VMIN)
}
