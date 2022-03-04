import { virtualWorld, getCurrCSSKey } from '../../../../core/parser/preParser'
import assert from 'assert'
describe('preParser', () => {
  describe('virtualWorld', () => {
    it('虚拟世界中的函数应该可以得到局部定义的 key', () => {
      virtualWorld('test1', () => {
        assert.equal(getCurrCSSKey(), 'test1')
      })
    })
    it('嵌套虚拟世界应该输出正确', () => {
      virtualWorld('test1', () => {
        assert.equal(getCurrCSSKey(), 'test1')
        virtualWorld('test2', () => {
          assert.equal(getCurrCSSKey(), 'test2')
        })
        assert.equal(getCurrCSSKey(), 'test1')
      })
    })
  })
})
