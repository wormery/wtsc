import { Inject } from './inject'
import { ProviderOptions } from './providerApi'

export interface InjectOptions extends ProviderOptions {
  parent?: Inject
}
