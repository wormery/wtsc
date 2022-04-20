import { describe } from 'mocha'
import { px } from '../../../..'
import { wtsc } from './wtsc'
import assert from 'assert'
import { genHash } from '../../../../utils/utils'
import { render } from '../../../../core/render/render'

describe('global wtsc', () => {
  const global = wtsc.global()
  it('返回的class应该和传入的名字一样', () => {
    const name = 'class-1'
    const className = global.add.width(px(10)).class(name).out()
    assert.equal(className, name)
  })
  it('渲染后的样式只加个点', () => {
    const name = genHash()
    const className = global.add.width(px(10)).class(name).out()
    assert.equal(className, name)
    const value = render()

    assert.ok(RegExp(`.${name}{width: 10px;}`).test(value))
  })
})

describe('手动 global', () => {
  it('返回的class应该和传入的名字一样', () => {
    const name = 'class-1'
    const className = wtsc.add.width(px(10)).class(name, true).out()
    assert.equal(className, name)
  })
  it('渲染后的样式只加个点', () => {
    const name = genHash()
    const className = wtsc.add.width(px(10)).class(name, true).out()
    assert.equal(className, name)
    const value = render()

    assert.ok(RegExp(`.${name}{width: 10px;}`).test(value))
  })
})

describe('局部 global', () => {
  const w = wtsc.scoped()
  it('返回的class应该和传入的名字一样', () => {
    const name = 'class-1'
    const className = w.add.width(px(10)).class(name, true).out()
    assert.equal(className, name)
  })
  it('渲染后的样式只加个点', () => {
    const name = genHash()
    const className = w.add.width(px(10)).class(name, true).out()
    assert.equal(className, name)
    const value = render()

    assert.ok(RegExp(`.${name}{width: 10px;}`).test(value))
  })
})
