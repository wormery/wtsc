// import { isNumber, isString } from '@wormery/utils'

import { Percentage } from '../Percentage'
import { OutValue } from '../index'

export interface Color extends OutValue {}

export interface Alpha {
  a: number | Percentage
}
