import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'

/**
 * 一十二点活字（pica），六分之一英寸。 1pc = 12pt = 1/6 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function pc(l: number): Length<LengthUnit.PC> {
  return sufUnit(l, LengthUnit.PC)
}
