import { animationInterface } from './animation'
import { animationNameInterface } from './animationName'
import { animationDelayInterface } from './animationDelay'
import { animationDurationInterface } from './animationDuration'
export interface animationGroupInterface<R>
  extends animationInterface<R>,
    animationNameInterface<R>,
    animationDelayInterface<R>,
    animationDurationInterface<R> {}
