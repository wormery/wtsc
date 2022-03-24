import { animationInterface } from './animation'
import { animationNameInterface } from './animationName'
export interface animationGroupInterface<R>
  extends animationInterface<R>,
    animationNameInterface<R> {}
