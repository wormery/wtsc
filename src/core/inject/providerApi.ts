import { InjectKey } from './injectKey'

export interface ProviderStorage {
  provider: WeakMap<InjectKey, any>
  parent?: ProviderStorage
}

export function createInjectStorage<O extends object = {}>(
  parent?: ProviderStorage,
  obj: O = {} as any
): O & ProviderStorage {
  const o = obj as ProviderStorage

  o.provider = new WeakMap()

  if (parent) o.parent = parent

  return o as any
}
