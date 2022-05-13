import { data } from './event'
import { EventKey } from './eventKey'

export function addListener<T extends any[]>(
  key: EventKey<T>,
  callback: (...rest: T) => void
): void {
  const listeners = data[key]
  if (listeners === undefined) {
    data[key] = [callback]
  } else {
    listeners.push(callback)
  }
}

export function removeListener<T extends any[]>(
  key: EventKey<T>,
  callback: (...rest: T) => void
): void {
  const listeners = data[key]
  if (listeners !== undefined) {
    const index = listeners.indexOf(callback)
    if (index !== -1) {
      listeners.splice(index, 1)
    }
  }
}

export function clearListener<T extends any[]>(key: EventKey<T>): void {
  data[key] = []
}
