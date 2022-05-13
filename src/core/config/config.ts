interface Config {
  vue?: any
  react?: any
  defaultIsReactive: boolean
  warn: { all: true; autoInput: boolean }
}

export const config: Config = {
  defaultIsReactive: false,
  warn: { all: true, autoInput: true },
}

export function setConfig(_config: Config): void {
  Object.keys(_config).forEach(
    (key) => ((config as any)[key] = (_config as any)[key])
  )
}
