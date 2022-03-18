import { SufUnit, sufUnit } from '../length/suf'
export enum AngleUnit {
  DEG = 'deg',
  GRAD = 'grad',
  RAD = 'rad',
  TURN = 'turn',
}
export type AngleUnitValue = keyof typeof AngleUnit extends infer K
  ? K extends keyof typeof AngleUnit
    ? typeof AngleUnit[K]
    : never
  : never

export interface Angle<U extends AngleUnitValue = AngleUnitValue>
  extends SufUnit<U> {
  unit: U
}

export function angle<U extends AngleUnitValue = AngleUnitValue>(
  a: number,
  unit: U
): Angle<U> {
  return sufUnit(a, unit)
}
