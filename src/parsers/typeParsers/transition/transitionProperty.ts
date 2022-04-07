import { none, all, GlobalCSSValues } from '../../../CSSValue/types'
import CssAttributeName from '../../../CSSValue/CssAttributeName'
export type TransitionPropertyValue =
  | GlobalCSSValues
  | none
  | all
  | CssAttributeName
