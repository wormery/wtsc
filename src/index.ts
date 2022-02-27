import { defWTSCAPI } from './core'
import * as parsers from './parsers'

export { parsers }

export * from './core'
export * from './CSSValue'

export const defWTSC = defWTSCAPI({
  Parsers: parsers.ConstraninedParsers,
})

export const wtsc = defWTSC()
