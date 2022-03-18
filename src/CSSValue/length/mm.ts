import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface MM extends Length<LengthUnit.MM> {}

/**
 * 一毫米。 1mm = 1/10 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function mm(l: number): MM {
  return sufUnit(l, LengthUnit.MM)
}
