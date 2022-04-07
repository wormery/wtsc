import { CssColor } from '../../../CSSValue/color/Color'
import { GlobalCSSValues } from '../../../CSSValue/types'
import { Percentage } from '../../../CSSValue/Percentage'
import { Angle } from '../../../../dist/CSSValue/angle/angle'
export type backgroundColorValue =
  | CssColor
  | GlobalCSSValues
  | Percentage
  | number
  | Angle
