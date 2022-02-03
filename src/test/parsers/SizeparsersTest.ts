import { createWTSC } from '../../parsers/impl/SizeParsersImpl'
import U from '../../unit/BasicsUnit'

const SizeParsersWTSC = createWTSC()

const styleValue = SizeParsersWTSC.add
  .height(1343, U.VMIN)
  .add.height(1343, U.MM)
  .add.width(30, U.CH)
  .add.margin('15px', '20px', '30px', 20, 'px')
  .add['padding-bottom']('20px')
  .add['padding-right'](20, U.EX)
  .return()

console.log(styleValue)
