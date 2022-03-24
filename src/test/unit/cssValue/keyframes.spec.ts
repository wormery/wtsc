import { PE } from '../../..'
import { defWTSC } from '../../../core/WTSC/api'
import { wtsc } from '../../../core/WTSC/WTSC'
import { keyframes } from '../../../CSSValue/keyframs'
import { px } from '../../../CSSValue/length/px'
import assert from 'assert'
describe('keyframes检查', () => {
  const wtsc = defWTSC()
  it('基本使用', () => {
    wtsc.add
      .height('20px')
      .add.width('20px')
      .add.animationName(
        keyframes('test', (a) => {
          const w = wtsc.sham()
          a('from', w.add.borderRadius(PE(50)))
          a('to', w.add.borderRadius(PE(0)))
        })
      )
    const part = wtsc.out()
    assert.equal(part, 'height: 20px;width: 20px;animation-name: root-test;')
  })

  it('自动sham', () => {
    wtsc.add
      .height('20px')
      .add.width('20px')
      .add.animationName(
        keyframes(
          'test',
          (a, w) => {
            a('from', w.add.borderRadius(PE(50)))
            a('to', w.add.borderRadius(PE(0)))
          },
          wtsc
        )
      )
    const part = wtsc.out()
    assert.equal(part, 'height: 20px;width: 20px;animation-name: root-test;')
  })

  it('作用域随机', () => {
    const part = wtsc
      .scoped()
      .add.height('20px')
      .add.width('20px')
      .add.animationName(
        keyframes(
          'test',
          (a, w) => {
            a('from', w.add.borderRadius(PE(50)))
            a('to', w.add.borderRadius(PE(0)))
          },
          wtsc
        )
      )
      .out()

    assert.ok(/height: 20px;width: 20px;animation-name: .*-test;/.test(part))
  })
})
