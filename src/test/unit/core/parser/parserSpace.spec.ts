import { parserSpace, getParserKey } from '../../../../core/parser/ParserSpace'
import assert from 'assert'
describe('preParser', () => {
  describe('virtualWorld', () => {
    it('虚拟世界中的函数应该可以得到局部定义的 key', () => {
      parserSpace('test1', () => {
        assert.equal(getParserKey(), 'test1')
      })
    })
    it('嵌套虚拟世界应该输出正确', () => {
      parserSpace('test1', () => {
        assert.equal(getParserKey(), 'test1')
        parserSpace('test2', () => {
          assert.equal(getParserKey(), 'test2')
        })
        assert.equal(getParserKey(), 'test1')
      })
    })
  })
})
