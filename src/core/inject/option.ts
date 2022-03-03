import { Inject } from './inject'
import { DefProvider } from './types'

export interface InjectOptions {
  parent?: Inject
  defProvider?: DefProvider
}
