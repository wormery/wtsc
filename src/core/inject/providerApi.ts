import { defDefluatProvider } from '.'
import { DefProvider, Provider } from './types'

export interface ProviderApi {
  /**
   * 这里可以重写来达成响应式
   * @author meke
   * @type {Provider}
   * @memberof Inject
   */
  provider: Provider
}

export interface ProviderOptions {
  defProvider?: DefProvider
  parent?: ProviderImpl
}

export class ProviderImpl implements ProviderApi {
  /**
   * 这里可以重写来达成响应式
   * @author meke
   * @type {Provider}
   * @memberof Inject
   */
  public provider: Provider
  /**
   * Creates an instance of Inject.
   * @author meke
   * @param {(Inject | any)} [inject]
   * @memberof Inject
   */
  constructor(options: ProviderOptions = {}) {
    this.provider =
      options.defProvider?.(options.parent?.provider) ?? defDefluatProvider()
  }
}
