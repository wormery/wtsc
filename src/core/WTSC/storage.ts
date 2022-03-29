import { ProviderStorage, createInjectStorage } from '../inject/providerApi'
import { StyleValue } from './types'

export interface WTSCStorage extends ProviderStorage {
  id: symbol
  name: string
  style: { [s: string]: StyleValue }
  parent?: WTSCStorage
}

// export type defWTSCStorage<T extends object> = (
//   name?: string,
//   o?: T,
//   parent?: WTSCStorage
// ) => WTSCStorage & T

export function createWTSCStorage<T extends {} = {}>(
  name: string = 'root',
  parent?: WTSCStorage,
  obj: T = {} as any
): WTSCStorage & T {
  const o = createInjectStorage(parent, obj) as any as WTSCStorage
  o.id = Symbol('')
  o.name = name
  o.style = {}
  return obj as any
}
