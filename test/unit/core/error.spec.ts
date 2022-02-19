import { ParsersSkip } from '../../../src/core/error'
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
