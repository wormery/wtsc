import { Data } from '../inject/types'
import { EventKey } from './eventKey'

export const data: Data<EventKey<any>, Array<(...rest: any) => void>> = {}
