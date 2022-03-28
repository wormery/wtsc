import { ProviderStorage } from '../inject/providerApi'
import { WTSCOptions } from '.'
import { StyleValue } from './types'

export interface WTSCStorage extends ProviderStorage {
  id: symbol
  name: string
  style: { [s: string]: StyleValue }
  parent?: WTSCStorage
}
export const rootId = Symbol('')
export const rootStorage = {
  id: rootId,
  name: 'root',
  style: {},
  provider: new WeakMap(),
}

export type DefWTSCStorage = (
  name?: string,
  parent?: WTSCStorage
) => WTSCStorage
export function defWTSCStorageAPI<Options extends WTSCOptions>(
  options: Options
): DefWTSCStorage {
  return (name = 'root', parent) => {
    if (!parent) {
      return rootStorage
    }
    return {
      id: Symbol(''),
      name,
      style: {},
      provider: new WeakMap(),
      parent,
    }
  }
}
