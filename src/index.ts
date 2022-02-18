import { defineWTSC } from './core'
import { BaseParsers } from './parsers'

export * from './core'
export * as parsers from './parsers'

const defineBaseWTSC = defineWTSC(BaseParsers)

export { defineBaseWTSC as createWTSC }

const wtsc = defineBaseWTSC()
export default wtsc
