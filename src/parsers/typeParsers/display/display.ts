import { Parser } from '../../../core/WTSC/types'
import { none, GlobalCSSValues } from '../../../CSSValue/types'
import {
  inlineBlock,
  flow,
  inline,
  grid,
  flex,
  contents,
  block,
  flowRoot,
  inlineGrid,
  inlineFlex,
} from './keyword'

export interface displayInterface<R> {
  display: Parser<
    | [
        | inline
        | flex
        | inlineFlex
        | grid
        | inlineGrid
        | contents
        | block
        | inlineBlock
        | flowRoot
      ]
    | [block | inline, flow | flowRoot | flex | grid]
    | [none | GlobalCSSValues]
    | [String],
    R
  >
}
