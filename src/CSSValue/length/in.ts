import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface IN extends Length<LengthUnit.IN> {}

/**
 * 一英寸。1in = 2.54cm = 96px。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function lin(l: number): IN {
  return sufUnit(l, LengthUnit.IN)
}
