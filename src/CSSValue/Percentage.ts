import { SufUnit, sufUnit } from './'
import { SufUnitProtoType, sufUnitProtoType } from './length/suf'
import { setPrototypeOf } from '../utils/utils'

/**
 * 百分比对象
 *
 * @author meke
 * @export
 * @class Percentage
 * @extends {SufUnit}
 */
export interface Percentage extends SufUnit<'%'>, PercentageProtoType<'%'> {}
interface PercentageProtoType<U extends string> extends SufUnitProtoType<U> {
  toFloat(): number
}
const percentageProtoType: PercentageProtoType<any> = {
  ...sufUnitProtoType,
  toFloat(this: Percentage): number {
    return this.num / 100
  },
}

export function PE(pe: number): Percentage {
  return setPrototypeOf({ num: pe, unit: '%' }, percentageProtoType)
}
