import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface VMAX extends Length<LengthUnit.VMAX> {}

/**
 * 视口高度 vw 和宽度 vh 两者之间的最大值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function vmax(l: number): VMAX {
  return sufUnit(l, LengthUnit.VMAX)
}
