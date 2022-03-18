import { Angle, AngleUnit, angle } from './angle'

export interface RAD extends Angle<AngleUnit.RAD> {}

/**
 * 弧度。一个完整的圆是 2π 弧度，约等于 6.2832rad。1rad 是 180/π 度。
 * 例：0rad，1.0708rad，6.2832rad。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {RAD}
 */
export function rad(a: number): RAD {
  return angle(a, AngleUnit.RAD)
}
