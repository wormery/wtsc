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

export type DefWTSCStorage = (
  name?: string,
  parent?: WTSCStorage
) => WTSCStorage
export function defWTSCStorageAPI<Options extends WTSCOptions>(
  options: Options
): DefWTSCStorage {
  options?.defProvider?.()
  return (name = 'root', parent) => {
    return {
      id: parent ? Symbol('') : rootId,
      name,
      style: {},
      provider: new WeakMap(),
      parent,
    }
  }
}
