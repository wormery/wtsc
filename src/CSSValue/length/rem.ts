import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface REM extends Length<LengthUnit.REM> {}

/**
 * 这个单位代表根元素（通常为<html> 元素）的 font-size 大小。当用在根元素的 font-size 上面时 ，它代表了它的初始值。
 *
 * @author meke
 * @export
 * @param {number} l
 * @return {*}  {Length}
 */
export function rem(l: number): REM {
  return sufUnit(l, LengthUnit.REM)
}
