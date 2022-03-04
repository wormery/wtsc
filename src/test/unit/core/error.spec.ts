import { ParsersSkip } from '../../../core/api/error'
import { describe, it } from 'mocha'

describe('error', () => {
  describe('ParsersSkip', () => {
    it('', () => {})
    try {
      throw new ParsersSkip()
    } catch (E) {
      return true
    }
  })
})
