import { emit } from '../event/emit'
import { beforeConfigUndate, configUndated } from './event'
export interface Config {
  vue?: any
  react?: any
  vueRef?: any
  reactUseState?: any
  defaultIsReactive: boolean
  warn: { all: true; autoInput: boolean }
}

export const config: Config = {
  defaultIsReactive: false,
  warn: { all: true, autoInput: true },
}

export function setConfig(_config: Partial<Config>): void {
  emit(beforeConfigUndate, _config, config)
  Object.keys(_config).forEach(
    (key) => ((config as any)[key] = (_config as any)[key])
  )
  emit(configUndated, config)
}
