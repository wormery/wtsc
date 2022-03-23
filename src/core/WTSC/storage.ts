import { ProviderStorage, defDefluatProvider } from '../inject/providerApi'
import { WTSCOptions } from '.'
import { StyleValue } from './types'
import { Data } from '../inject/types'
import { defInjKey } from '../inject/injectKey'

export interface WTSCStorage extends ProviderStorage {
  id: symbol
  name: string
  style: { [s: string]: StyleValue }
  parent?: WTSCStorage
}

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
      id: Symbol(''),
      name,
      style: {},
      provider: new WeakMap(),
      parent,
    }
  }
}
