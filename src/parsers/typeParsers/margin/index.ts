import { MarginInterface } from './margin'
import { MarginTopInterface } from './marginTop'
import { MarginRightInterface } from './marginRight'
import { MarginBottomInterface } from './marginButtom'
import { MarginLeftInterface } from './marginLeft'
export * from './marginTop'
export * from './marginRight'
export * from './marginButtom'
export * from './marginLeft'
export * from './margin'

export interface MarginGroupInterface<R>
  extends MarginInterface<R>,
    MarginTopInterface<R>,
    MarginRightInterface<R>,
    MarginBottomInterface<R>,
    MarginLeftInterface<R> {}
