import { Angle, AngleUnit, angle } from './angle'

export interface GRAD extends Angle<AngleUnit.GRAD> {}

/**
 * 百分度。一个完整的圆是 400grad。例：0grad，100grad，38.8grad。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {GRAD}
 */
export function grad(a: number): GRAD {
  return angle(a, AngleUnit.GRAD)
}
