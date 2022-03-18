import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'

/**
 * 一磅（point），72 分之一英寸。1pt = 1/12 * 1pc = 1/72 * 1in。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function pt(l: number): Length<LengthUnit.PT> {
  return sufUnit(l, LengthUnit.PT)
}
