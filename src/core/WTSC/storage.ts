import { ProviderStorage } from '../inject/providerApi'
import { WTSCOptions } from '.'
import { defDefluatProvider } from '../inject/api'

export interface WTSCStorage extends ProviderStorage {
  name: string
  style: { [s: string]: string }
  parent?: WTSCStorage
}

export type DefWTSCStorage = (
  name?: string,
  parent?: WTSCStorage
) => WTSCStorage
export function defWTSCStorageAPI<Options extends WTSCOptions<Options>>(
  options: Options
): DefWTSCStorage {
  const defProvider = options?.defProvider ?? defDefluatProvider
  return (name = 'root', parent) => {
    const _storage = defProvider()
    return {
      name,
      style: {},
      provide: _storage.provide,
      inject: _storage.inject,
      parent,
    }
  }
}
