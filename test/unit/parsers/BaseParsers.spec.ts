import { BaseParsers } from '../../../src/parsers/BaseParsers'
import { describe, it } from 'mocha'
import assert from 'assert'
import { defWTSCAPI } from '../../../src'

describe('parsers', () => {
  describe('BaseParsers', () => {
    it('创建BaseWTSC不应该报错', () => {
      const WTSCAPI = defWTSCAPI({ parsers: new BaseParsers() })

      const wtsc = WTSCAPI.defWTSC()

      describe('#height()', () => {
        it('查看运行是否正常', () => {
          wtsc.add('height', '20px')
          wtsc.add.height('20px')
          assert.deepEqual(wtsc.out(), { height: '20px' })
        })
      })
      describe('#width()', () => {
        it('查看运行是否正常', () => {
          wtsc.add('width', '20px')
          assert.deepEqual(wtsc.out(), { width: '20px' })
        })
      })
    })
  })
})
