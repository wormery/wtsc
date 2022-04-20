import { ref } from 'vue'
import { defRefPackager } from '../../../..'
import { defWTSC } from '../../../../core/WTSC/api'

defRefPackager(ref)
export const wtsc = defWTSC({
  defThemeKeys(p) {
    return {
      hello: p([]),
    }
  },
  themeList: {
    drak: {
      drak1: { hello: [] },
    },
  },
})
