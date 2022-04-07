import { end, start, jumpBoth, jumpEnd, jumpNone, jumpStart } from './keyword'
import { TimingFunction } from './timingFunction'

export interface Steps extends TimingFunction {
  numberOfSteps: number
  direction: Direction
}

export type Direction = end | start | jumpBoth | jumpEnd | jumpNone | jumpStart

const stepsPropotype = {
  out(this: Steps) {
    return `steps(${this.numberOfSteps}, ${this.direction})`
  },
}

export function steps(numberOfSteps: number, direction: Direction): Steps {
  return Object.setPrototypeOf({ numberOfSteps, direction }, stepsPropotype)
}
