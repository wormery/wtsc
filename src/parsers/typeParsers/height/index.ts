import { HeightInterface } from './height'
import { MinHeightInterface } from './MinHeight'
import { MaxHeightInterface } from './MaxHeight'
export * from './height'

export interface HeightGroupInterface<R>
  extends HeightInterface<R>,
    MinHeightInterface<R>,
    MaxHeightInterface<R> {}
