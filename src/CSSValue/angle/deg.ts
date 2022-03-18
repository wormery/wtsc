import { Angle, AngleUnit, angle } from './angle'

export interface DEG extends Angle<AngleUnit.DEG> {}

/**
 * 度。一个完整的圆是 360deg。例：0deg，90deg，14.23deg。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {DEG}
 */
export function deg(a: number): DEG {
  return angle(a, AngleUnit.DEG)
}
