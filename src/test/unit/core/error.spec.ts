import { ParsersSkip } from '../../../core/api/error'
import { describe, it } from 'mocha'

describe('error', () => {
  describe('ParsersSkip', () => {
    it('', () => {})
    try {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new ParsersSkip()
    } catch (E) {
      return true
    }
  })
})
