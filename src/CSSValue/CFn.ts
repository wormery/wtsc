import { newClass } from '../utils/utils'

import { isUndef } from '@wormery/utils'
import { Percentage } from '.'
import { ToString } from 'src/core/WTSC/types'
import { Length } from './length'
export class CSave implements ToString {
  public value: string

  constructor(...rest: string[]) {
    if (rest.length > 0) {
      this.value = rest[0]
      for (let i = 1; i < rest.length; i++) {
        this.value += ' ' + rest[i]
      }
    } else {
      this.value = ''
    }
  }

  public toString(): string {
    return this.value
  }
}
export const csave = newClass(CSave)

export class CVar extends CSave {
  constructor(customPropertyName: string, declarationValue?: string) {
    super(
      (() => {
        if (isUndef(declarationValue)) {
          return customPropertyName
        } else {
          return customPropertyName + ', ' + declarationValue
        }
      })()
    )
  }

  toString(): string {
    return `var( ${this.value} )`
  }
}
export const cvar = newClass(CVar)

export class CMin extends CSave {
  constructor(c1: Length | Percentage, c2: Length | Percentage) {
    super(`${c1.toString()},`, c2.toString())
  }

  toString(): string {
    return `min( ${this.value} )`
  }
}
export const cmin = newClass(CVar)

export class CMax extends CSave {
  constructor(c1: Length | Percentage, c2: Length | Percentage) {
    super(`${c1.toString()},`, c2.toString())
  }

  toString(): string {
    return `max( ${this.value} )`
  }
}
export const cmax = newClass(CVar)
