import { HeightInterface } from './height'
import { MinHeightInterface } from './MinHeight'
export * from './height'

export interface HeightGroupInterface
  extends HeightInterface,
    MinHeightInterface {}
