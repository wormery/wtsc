import { FlexGroupInterface } from './flex/index'
import { HeightGroupInterface } from './height/index'
import { MarginGroupInterface } from './margin/index'
import { BaseParsersInterface } from '../baseParsers/BaseParsers'
import { AnimationGroupInterface } from './animation/index'
import { PositionInterface } from './position'

export type TypeParsers<R> = TypeParsersInterface<R> & BaseParsersInterface<R>

export interface TypeParsersInterface<R>
  extends FlexGroupInterface<R>,
    HeightGroupInterface<R>,
    MarginGroupInterface<R>,
    AnimationGroupInterface<R>,
    PositionInterface<R> {}
