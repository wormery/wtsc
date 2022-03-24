import { AnimationNameValue } from './animationName'

export interface AnimationInterface<R> {
  animation(value: AnimationNameValue): R
}
