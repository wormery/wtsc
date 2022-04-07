import { FlexGroupInterface } from './flex/index'
import { HeightGroupInterface } from './height/index'
import { MarginGroupInterface } from './margin/index'
import { BaseParsersInterface } from '../baseParsers/BaseParsers'
import { AnimationGroupInterface } from './animation/index'
import { PositionInterface } from './position'
import { BoxShadowInterface } from './boxShadow'
import { TransItionGroupInterface } from './transition'
import { BackgroundGloupIntercace } from './background/index'

export type TypeParsersOfReplaceUpdata<R> = {
  [k in keyof BaseParsersInterface<R>]: k extends keyof TypeParsersInterface<R>
    ? TypeParsersInterface<R>[k]
    : BaseParsersInterface<R>[k]
}

export type TypeParsers<R> = TypeParsersInterface<R> & BaseParsersInterface<R>

export interface TypeParsersInterface<R>
  extends FlexGroupInterface<R>,
    HeightGroupInterface<R>,
    MarginGroupInterface<R>,
    AnimationGroupInterface<R>,
    PositionInterface<R>,
    BoxShadowInterface<R>,
    TransItionGroupInterface<R>,
    BackgroundGloupIntercace<R> {}
