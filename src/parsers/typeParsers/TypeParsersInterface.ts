import { FlexGroupInterface } from './flex/index'
import { HeightGroupInterface } from './height/index'
import { MarginGroupInterface } from './margin/index'
import { BaseParsersInterface } from '../baseParsers/BaseParsers'

export type TypeParsers<R> = TypeParsersInterface<R> & BaseParsersInterface<R>

export interface TypeParsersInterface<R>
  extends FlexGroupInterface<R>,
    HeightGroupInterface<R>,
    MarginGroupInterface<R> {}
