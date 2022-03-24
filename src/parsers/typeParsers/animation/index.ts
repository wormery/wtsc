import { AnimationInterface } from './animation'
import { AnimationNameInterface } from './animationName'
import { AnimationDelayInterface } from './animationDelay'
import { AnimationDurationInterface } from './animationDuration'
export interface AnimationGroupInterface<R>
  extends AnimationInterface<R>,
    AnimationNameInterface<R>,
    AnimationDelayInterface<R>,
    AnimationDurationInterface<R> {}
