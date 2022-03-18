import { Angle, AngleUnit, angle } from './angle'

export interface TURN extends Angle<AngleUnit.TURN> {}

/**
 * 圈数。一个完整的圆是 1turn。例：0turn，0.25turn，1.2turn。
 * @author meke
 * @export
 * @param {number} a
 * @return {*}  {TURN}
 */
export function turn(a: number): TURN {
  return angle(a, AngleUnit.TURN)
}
