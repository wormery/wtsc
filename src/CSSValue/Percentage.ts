import { SufUnit, sufUnit } from './'

/**
 * 百分比对象
 *
 * @author meke
 * @export
 * @class Percentage
 * @extends {SufUnit}
 */
export interface Percentage extends SufUnit<'%'> {
  toFloat(): number
}
function toFloat(this: Percentage): number {
  return this.num / 100
}

export function PE(pe: number): Percentage {
  return { ...sufUnit(pe, '%'), toFloat }
}
