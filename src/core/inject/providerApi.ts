import { DefProvider, Provider } from './types'

export interface ProviderStorage extends Provider {
  parent?: ProviderStorage
}

export interface ProviderOptions {
  defProvider?: DefProvider
}

export class ProviderImpl {
  /**
   * 这里可以重写来达成响应式
   * @author meke
   * @type {protected}
   * @memberof Inject
   */
  protected storage: ProviderStorage

  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {(Inject | any)} [inject]
   * @memberof Inject
   */
  constructor(options: ProviderOptions = {}, storage: ProviderStorage) {
    this.storage = storage
  }
}
