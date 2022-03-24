import { OutValue } from './index'
import { sufUnit, SufUnit } from './length/suf'
export interface Time extends OutValue, SufUnit<'ms' | 's'> {}

export function ms(v: number): Time {
  return sufUnit(v, 'ms')
}

export function s(v: number): Time {
  return sufUnit(v, 's')
}
