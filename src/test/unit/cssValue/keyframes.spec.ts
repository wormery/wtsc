import { PE } from '../../..'
import { defWTSC } from '../../../core/WTSC/api'
import { keyframes } from '../../../CSSValue/keyframs'
import { px } from '../../../CSSValue/length/px'
import assert from 'assert'
import { render } from '../../../core/WTSC/render'
describe('keyframes检查', () => {
  const wtsc = defWTSC()
  it('基本使用', () => {
    wtsc
      .clear()
      .add.height('20px')
      .add.width('20px')
      .add.animationName(
        keyframes('test', (a) => {
          a('from', wtsc.add.borderRadius(PE(50)))
          a('to', wtsc.add.borderRadius(PE(0)))
        })
      )

    let part = wtsc.out

    assert.equal(part, 'height: 20px;width: 20px;animation-name: root-test;')
    part = render()

    assert.ok(
      part.includes(
        '@keyframes root-test{from {border-radius: 50%;} to {border-radius: 0%;}}'
      )
    )
  })

  it('自动sham', () => {
    wtsc.add
      .height('20px')
      .add.width('20px')
      .add.animationName(
        keyframes('test', (a) => {
          a('from', wtsc.add.borderRadius(PE(50)))
          a('to', wtsc.add.borderRadius(PE(0)))
        })
      )
    const part = wtsc.out
    assert.equal(part, 'height: 20px;width: 20px;animation-name: root-test;')
  })

  it('作用域随机', () => {
    const part = wtsc
      .scoped()
      .add.height(px(20))
      .add.width('20px')
      .add.animationName(
        keyframes('test', (a) => {
          a('from', wtsc.add.borderRadius(PE(50)))
          a('to', wtsc.add.borderRadius(PE(0)))
        })
      ).out

    assert.ok(/height: 20px;width: 20px;animation-name: .*-test;/.test(part))
  })
})
