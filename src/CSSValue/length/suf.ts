import { ToString } from '../../core/WTSC/types'
import { OutValue } from '../index'
import { Clone } from '../../utils/interface'
import { setPrototypeOf } from '../../utils/utils'
export interface SufUnit<U extends string = string>
  extends SufUnitProtoType<U> {
  num: number
  unit: U
}
export interface SufUnitProtoType<U extends string>
  extends Clone<SufUnit<U>>,
    OutValue<string>,
    ToString {
  out(): string
  setNum(number: number): SufUnit<U>
  setUnit(unit: U): SufUnit<U>
}

export const sufUnitProtoType: SufUnitProtoType<any> = {
  out(this: SufUnit): string {
    return this.num.toString() + this.unit.toString()
  },
  toString(this: SufUnit) {
    return this.out()
  },
  clone(this: SufUnit) {
    return sufUnit(this.num, this.unit)
  },
  setNum(this: SufUnit, number) {
    this.num = number
    return this
  },
  setUnit(this: SufUnit, unit) {
    this.unit = unit
    return this
  },
}

export function sufUnit<U extends string>(num: number, unit: U): SufUnit<U> {
  return setPrototypeOf({ num, unit }, sufUnitProtoType)
}
