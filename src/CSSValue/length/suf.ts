import { ToString } from '../../core/WTSC/types'
import { OutValue } from '../index'
export interface SufUnit<U extends string = string>
  extends OutValue<string>,
    ToString {
  num: number
  unit: U
}
export function out(this: SufUnit): string {
  return this.num.toString() + this.unit.toString()
}

export function sufUnit<U extends string>(num: number, unit: U): SufUnit<U> {
  return { num, unit, out, toString: out }
}
