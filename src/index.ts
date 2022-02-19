import { defineWTSC } from './core'
import { ConstraninedParsers } from './parsers'

export * from './core'
export * as parsers from './parsers'
export * from './CSSValue'

export const createWTSC = defineWTSC(ConstraninedParsers)

export const wtsc = createWTSC()

export default wtsc
