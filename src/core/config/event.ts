import { defEventKey } from '../event'
import { Config } from './config'

export const beforeConfigUndate = defEventKey<[Config, Config]>()
export const configUndated = defEventKey<[Config]>()
