// import { isNumber, isString } from '@wormery/utils'

import { Percentage } from '../Percentage'
import { OutValue } from '../index'
import { ColorKeyWord } from '.'

export interface Color extends OutValue {}

export type CssColor = Color | ColorKeyWord

export interface Alpha {
  a: number | Percentage
}
