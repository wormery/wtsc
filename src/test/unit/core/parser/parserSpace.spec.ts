import {
  parserSpace,
  getParserKey,
  parserSpaceStart,
  parserSpaceEnd,
} from '../../../../core/parser/ParserSpace'
import assert from 'assert'
describe('preParser', () => {
  describe('parserSpaceStart,parserSpaceEnd,getParserKey', () => {
    it('它应该可以不报错运行Start和end', () => {
      parserSpaceStart('key1')
      parserSpaceEnd()
    })
    it('没有任何栈，应该得到空字串', () => {
      assert.equal(getParserKey(), '')
    })
    it('进入处理器的空间后应该可以得到parserKey', () => {
      const key = 'key1'
      parserSpaceStart(key)
      assert.equal(getParserKey(), key)
      parserSpaceEnd()
    })
    it('多层应该反应正确', () => {
      const key = 'key1'
      const key2 = 'key2'
      parserSpaceStart(key)
      assert.equal(getParserKey(), key)
      parserSpaceStart(key2)
      assert.equal(getParserKey(), key2)
      parserSpaceEnd()
      assert.equal(getParserKey(), key)
      parserSpaceEnd()
    })
  })
  describe('parserSpace', () => {
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
