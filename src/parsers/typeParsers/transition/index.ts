import { TransitionPropertyValue } from './transitionProperty'
import { Duration, GlobalCSSValues } from '../../../CSSValue/types'
import { SingleParser, Parser } from '../../../core/WTSC/types'
import { transitionTimingFunctionValueType } from './transitionTimingFunction'
import { transitionDelayValueType } from './transitionDelay'

export interface TransItionGroupInterface<R> {
  transitionProperty: SingleParser<TransitionPropertyValue, R>
  transitionDuration: SingleParser<Duration, R>
  transitionTimingFunction: SingleParser<transitionTimingFunctionValueType, R>
  transitionDelay: SingleParser<transitionDelayValueType, R>
  transition: Parser<
    | [TransitionPropertyValue]
    | [Duration]
    | [Duration, TransitionPropertyValue]
    | [TransitionPropertyValue, Duration]
    | [TransitionPropertyValue, Duration, transitionDelayValueType]
    | [TransitionPropertyValue, Duration, transitionTimingFunctionValueType]
    | [
        TransitionPropertyValue,
        Duration,
        transitionTimingFunctionValueType,
        transitionDelayValueType
      ]
    | [GlobalCSSValues],
    R
  >
}
