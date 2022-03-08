import { ProviderStorage, defDefluatProvider } from '../inject/providerApi'
import { WTSCOptions } from '.'

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
    return {
      name,
      style: {},
      provider: defProvider(),
      parent,
    }
  }
}
