import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface QLength extends Length<LengthUnit.Q> {}

/**
 * 四分之一毫米。1Q = 1/40 * 1cm。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function Q(l: number): QLength {
  return sufUnit(l, LengthUnit.Q)
}
