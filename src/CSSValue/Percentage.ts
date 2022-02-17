import { genNewClass } from '../utils/utils'
import SufUnit from './SufUnit'

/**
 * 百分比对象
 *
 * @author meke
 * @export
 * @class Percentage
 * @extends {SufUnit}
 */
export class Percentage extends SufUnit {
  constructor(public n: number) {
    super(n, '%')
  }

  toString(): string {
    return this.n.toString() + this.unit
  }
}
export const PE = genNewClass(Percentage)
