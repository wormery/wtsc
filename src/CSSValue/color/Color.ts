// import { isNumber, isString } from '@wormery/utils'

import { Percentage } from '../Percentage'
import { OutValue } from '../index'
import { ColorKeyWord } from '.'
import SystemKeywordColor from './systemKeywordColor'

export interface Color extends OutValue {}

export type CssColor =
  | Color
  | ColorKeyWord
  | SystemKeywordColor
  | `#${string}`
  | '#ffffff'
  | '#000000'
  | '#ff0000'
  | `#00ff00`
  | `#0000ff`
// 这个太消耗性能了
// | `#${HexChar}${HexChar}${HexChar}${string}`

export interface Alpha {
  a: number | Percentage
}
