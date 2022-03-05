import { isFunction } from '@wormery/utils'
import assert from 'assert'
import { describe, it } from 'mocha'
import { computed, ref } from 'vue'
import { defInjKey, defDefluatProvider, defRefProviderAPI } from '../../../..'

describe('defDefluatProvider()', function () {
  it('它应该是一个provider生成函数', () => {
    const provider = defDefluatProvider()
    assert.ok(isFunction(provider.get))
    assert.ok(isFunction(provider.set))
  })
  it('它生成的provider的功能set是存取数据get获取数据，它们应该正常使用', () => {
    const provider = defDefluatProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.set(key, v1)
    const v2 = provider.get(key)
    assert.equal(v1, v2)
  })
})

describe('defRefProviderAPI()', function () {
  it('这个函数会生成一个函数', () => {
    const defRefProvider = defRefProviderAPI(ref)
    assert.ok(isFunction(defRefProvider))
  })
  it('它生成的函数应该是一个provider生成函数', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    assert.ok(isFunction(provider.get))
    assert.ok(isFunction(provider.set))
  })
  it('它生成的provider的功能set是存取数据get获取数据，它们应该正常使用', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.set(key, v1)
    const v2 = provider.get(key)
    assert.equal(v1, v2)
  })
  it('生成的provider必须可以多次set', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.set(key, v1)
    const v2 = provider.get(key)
    assert.equal(v1, v2)

    const v3 = '你好'
    provider.set(key, v3)
    assert.equal(provider.get(key), v3)
  })
  it('它应该具有响应式', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    const v2 = '测试1'
    provider.set(key, v1)

    const comV = computed(() => {
      return provider.get(key)
    })
    assert.equal(comV.value, v1)
    provider.set(key, v2)
    assert.equal(comV.value, v2)
  })
})
