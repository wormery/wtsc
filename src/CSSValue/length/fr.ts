import { sufUnit } from './suf'
import { Length, LengthUnit } from './Lingth'
export interface FR extends Length<LengthUnit.FR> {}
export function fr(l: number): FR {
  return sufUnit(l, LengthUnit.FR)
}
