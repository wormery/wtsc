import { MarginValue } from './margin'
export type MarginLeftValue = MarginValue
export interface MarginLeftInterface<R> {
  marginLeft(value: MarginValue): R
}
