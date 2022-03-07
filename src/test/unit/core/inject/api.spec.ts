import { isFunction } from '@wormery/utils'
import assert from 'assert'
import { describe, it } from 'mocha'
import { computed, ref } from 'vue'
import {
  defInjKey,
  defDefluatProvider,
  defRefProviderAPI,
  defWTSC,
} from '../../../..'

describe('defDefluatProvider()', function () {
  it('它应该是一个provider生成函数', () => {
    const provider = defDefluatProvider()
    assert.ok(isFunction(provider.inject))
    assert.ok(isFunction(provider.inject))
  })
  it('它生成的provider的功能set是存取数据get获取数据，它们应该正常使用', () => {
    const provider = defDefluatProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.provide(key, v1)
    const v2 = provider.inject(key)
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
    assert.ok(isFunction(provider.provide))
    assert.ok(isFunction(provider.inject))
  })
  it('它生成的provider的功能set是存取数据get获取数据，它们应该正常使用', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.provide(key, v1)
    const v2 = provider.inject(key)
    assert.equal(v1, v2)
  })
  it('生成的provider必须可以多次set', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    provider.provide(key, v1)
    const v2 = provider.inject(key)
    assert.equal(v1, v2)

    const v3 = '你好'
    provider.provide(key, v3)
    assert.equal(provider.inject(key), v3)
  })
  it('它应该具有响应式', () => {
    const defRefProvider = defRefProviderAPI(ref)
    const provider = defRefProvider()
    const key = defInjKey<string>()
    const v1 = '测试'
    const v2 = '测试1'
    provider.provide(key, v1)

    const comV = computed(() => {
      return provider.inject(key)
    })
    assert.equal(comV.value, v1)
    provider.provide(key, v2)
    assert.equal(comV.value, v2)
  })
  it('查看wtsc是不是依然运行正常', () => {
    const wtsc = defWTSC({
      defProvider: defRefProviderAPI(ref),
    })

    const key = wtsc.provide('测试1')

    // 我们定义一个计算属性
    const comV = computed(() => {
      return wtsc.inject(key)
    })

    // 得到计算属性的值
    console.log(comV.value) // 测试1
    assert.equal(comV.value, '测试1')

    // 我们给provide一个新值
    wtsc.provide('测试2', key)

    assert.equal(comV.value, '测试2')
    // 代表响应被监听, comV的值因为我们set了一个v2而改变
  })
})
