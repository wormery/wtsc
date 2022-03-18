import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface CM extends Length<LengthUnit.CM> {}

/**
 * 一厘米。 1cm = 96px / 2.54。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function cm(l: number): CM {
  return sufUnit(l, LengthUnit.CM)
}
