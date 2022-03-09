import { FlexInterface } from './flex'
import { FlexGrowInterface } from './flexGrow'
import { FlexBasisInterface } from './flexBasis'
import { FlexShrinkInterface } from './flexShrink'
export * from './flex'
export * from './flexGrow'
export * from './flexShrink'
export * from './flexBasis'

export interface FlexGroupInterface<R>
  extends FlexInterface<R>,
    FlexGrowInterface<R>,
    FlexBasisInterface<R>,
    FlexShrinkInterface<R> {}
