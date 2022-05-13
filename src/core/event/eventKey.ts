export type EventKey<T> = symbol & { v?: T }
export function defEventKey<T extends any[]>(): EventKey<T> {
  return Symbol('')
}
