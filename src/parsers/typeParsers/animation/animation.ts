import { AnimationNameValue } from './animationName'

export interface animationInterface<R> {
  animation(value: AnimationNameValue): R
}
