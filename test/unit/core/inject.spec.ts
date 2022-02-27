import { Inject, defInjKey, isInjectKey } from '../../../src/core/inject'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('inject', function () {
  describe('#defineInjKey()', function () {
    it('不应该报错', () => {
      defInjKey<string>('3')
    })
  })
  describe('#isInjectKey()', function () {
    it('给一个InjectKey应该是true', () => {
      const injectKey = defInjKey<string>('3')

      assert.equal(isInjectKey(injectKey), true)
    })
    it('给其他值应该是false', () => {
      assert.equal(isInjectKey(''), false)
      assert.equal(isInjectKey({}), false)
      assert.equal(isInjectKey(Symbol(33)), false)
      assert.equal(isInjectKey(3), false)
      assert.equal(isInjectKey(false), false)
      assert.equal(isInjectKey(undefined), false)
      assert.equal(isInjectKey(null), false)
    })
  })
  describe('Inject', function () {
    describe('#provide()', function () {
      it('不应该报错', () => {
        const inject = new Inject()
        inject.provide('1')
      })
    })
    describe('#inject()', function () {
      it('不应该报错', () => {
        const inject = new Inject()
        const injectKey = inject.provide('1')
        inject.depInject(injectKey)
      })
      it('得到的值不正确', () => {
        const inject = new Inject()
        const injectKey = inject.provide('1')
        const value = inject.inject(injectKey)
        assert.deepEqual(value, '1')
      })
      it('默认值检测', () => {
        const inject = new Inject()
        const injectKey = defInjKey<string>('')

        const value = inject.inject(injectKey, '2')
        assert.deepEqual(value, '2')
      })
    })
    it('#inject()', () => {
      const inject = new Inject()
      inject.provide('1')
    })
  })
})
