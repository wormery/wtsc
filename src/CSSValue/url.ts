import { OutValue } from './index'
import { setPrototypeOf } from '../utils/utils'
export interface URL extends OutValue {
  url: string
}

const URLProtoType = {
  out(this: URL): string {
    return `url(${this.url})`
  },
}

export function url(
  url: 'http://' | './' | '/' | '/public/' | '@/' | String
): URL {
  return setPrototypeOf({ url: url.toString() }, URLProtoType)
}
