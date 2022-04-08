import assert from 'assert'
import { describe, it } from 'mocha'
import { ref, isRef } from 'vue'
import { defRefPackager, pack, unpack } from '../../../../core/inject/package'

describe('package 文件', function () {
  describe('defRefPackager()', function () {
    it('它会修改打包器', () => {
      const opack = pack

      defRefPackager(ref)

      const npack = pack

      assert.ok(opack !== npack)
    })
    it('检查这个函数是否会生成响应对象', () => {
      defRefPackager(ref)
      const npack = pack

      assert.ok(isRef(npack(1)))
    })

    it('查看是否存在值', () => {
      // 这里发现引用地址不一样可能vue ref是创建了一个拷贝对象
      defRefPackager(ref)
      const npack = pack

      const o = { k: '这是一个对象' }
      const refo = npack(o)

      assert.deepEqual(o, refo.value)
    })
    it('解包应该正确', () => {
      defRefPackager(ref)
      const npack = pack

      const o = { k: '这是一个对象' }
      const refo = npack(o)

      assert.deepEqual(o, unpack(refo))
    })
    it('改变值', () => {
      defRefPackager(ref)
      const npack = pack

      const o = { k: '这是一个对象' }
      const refo = npack(o)

      const o2 = { k: '这是对象2' }
      npack(o2, refo)

      assert.deepEqual(o2, unpack(refo))
    })
  })
})
