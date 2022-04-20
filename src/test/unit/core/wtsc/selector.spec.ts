import { describe } from 'mocha'
import { wtsc } from './wtsc'
import assert from 'assert'
import { render } from '../../../../core/render/render'

describe('wtsc.selector方法', () => {
  const selectorName = '*'
  const ret = wtsc.add.width('20px').selector(selectorName).out()
  it('它的输出和输入应该一样', () => {
    assert.equal(ret, selectorName)
  })
  it('检查渲染的结果是否正确', () => {
    const value = render()

    assert.ok(value.includes('*{width: 20px;}'))
  })
})
