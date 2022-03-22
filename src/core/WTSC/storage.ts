import { ProviderStorage, defDefluatProvider } from '../inject/providerApi'
import { WTSCOptions } from '.'
import { StyleValue } from './types'

export interface WTSCStorage extends ProviderStorage {
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
  const defProvider = options?.defProvider ?? defDefluatProvider
  return (name = 'root', parent) => {
    return {
      name,
      style: {},
      provider: defProvider(),
      parent,
    }
  }
}
