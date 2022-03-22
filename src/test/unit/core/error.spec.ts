import { describe, it } from 'mocha'
import { ParsersSkip } from '../../../core/error/error'

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
