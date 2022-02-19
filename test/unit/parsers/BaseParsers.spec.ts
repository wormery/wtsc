import { BaseParsers } from '../../../src/parsers/BaseParsers'
import { describe, it } from 'mocha'
import { defineWTSC } from '../../../src/core/WTSC'
import assert from 'assert'

describe('parsers', () => {
  describe('BaseParsers', () => {
    it('创建BaseWTSC不应该报错', () => {
      const createBaseWtsc = defineWTSC(BaseParsers)
      const wtsc = createBaseWtsc()
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
