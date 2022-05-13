import { data } from './event'
import { EventKey } from './eventKey'

export function emit<T extends any[]>(key: EventKey<T>, ...rest: T): void {
  const listeners = data[key]
  if (listeners === undefined) {
    return
  }
  listeners.forEach((listener) => listener(...rest))
}
