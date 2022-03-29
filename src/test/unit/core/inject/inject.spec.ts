// import { Inject, defInjKey, isInjectKey } from '../../../../'
import { defInjKey, isInjectKey } from '../../../../'
import { describe, it } from 'mocha'
import assert from 'assert'
import { createInject } from '../../../../core/inject/api'

describe('inject', function () {
  describe('#defineInjKey()', function () {
    it('不应该报错', () => {
      defInjKey<string>(true)
    })
  })
  describe('#isInjectKey()', function () {
    it('给一个InjectKey应该是true', () => {
      const injectKey = defInjKey<string>(true)

      assert.equal(isInjectKey(injectKey), true)
    })
    it('给其他值应该是false', () => {
      assert.equal(isInjectKey({}), false)
      assert.equal(isInjectKey(undefined), false)
      assert.equal(isInjectKey(null), false)
    })
  })
  describe('Inject', function () {
    describe('#inject()', function () {
      it('不应该报错', () => {
        const inject = createInject()
        const injectKey = inject.provide('1')
        inject.depInject(injectKey)
      })
      it('得到的值不正确', () => {
        const inject = createInject()
        const injectKey = inject.provide('1')
        const value = inject.inject(injectKey)
        assert.deepEqual(value, '1')
      })
      it('默认值检测', () => {
        const inject = createInject()
        const injectKey = defInjKey<string>(true)

        const value = inject.inject(injectKey, '2')
        assert.deepEqual(value, '2')
      })
    })
    describe('#provide()', function () {
      it('provide会自动生成key', () => {
        const inject = createInject()
        const key = inject.provide('1')
        assert.ok(isInjectKey(key))
      })
      it('向provide提供一个key默认就是向这个key修改值', () => {
        const inject = createInject()
        const key = inject.provide('1')

        assert.equal(inject.inject(key), '1')
        inject.provide('2', key)

        assert.equal(inject.inject(key), '2')
      })
    })
    describe('depProvide()', function () {
      it('不报错', () => {
        const inject = createInject()
        const key = inject.depProvide(
          { name: '23' as '23' | '33', tt: '', value: { name: {} } },
          { name: defInjKey(), value: { name: defInjKey() } }
        )
        assert.ok(isInjectKey(key.name))
        assert.ok(isInjectKey(key.value.name))
      })
    })
  })
})
