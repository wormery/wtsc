import {
  styleData,
  render,
  initStyleDom,
  update,
} from '../../../../core/WTSC/render'
import assert from 'assert'
import { genHash } from '../../../../utils/utils'
import { pseudoDOM } from './pseudeDOM'
const sets: Array<(value: string) => void> = []
initStyleDom(
  pseudoDOM((value) => {
    sets.forEach((s) => s(value))
  })
)
describe('render.ts', () => {
  describe('render方法', () => {
    it('render global  p1{height:20px;}', () => {
      if (!styleData.global) {
        styleData.global = {}
      }
      styleData.global.p1 = { height: '20px' }
      const css = render()

      assert.ok(/.*p1.*/.test(css))
      assert.ok(/.*height.*/.test(css))
      assert.ok(/.*20px.*/.test(css))
    })
    it('render scope  p1-xxxxxx{height:20px;}', () => {
      const scoped = genHash()
      if (!styleData[scoped]) {
        styleData[scoped] = {}
      }
      styleData[scoped]['p1-' + scoped] = { height: '20px' }
      const css = render()

      assert.ok(/.*p1-.*/.test(css))
      assert.ok(/.*height.*/.test(css))
      assert.ok(/.*20px.*/.test(css))
    })
  })
  describe('init', () => {
    it('模拟dom,不应该报错', () => {
      initStyleDom(pseudoDOM())
    })
  })
  describe('update方法', () => {
    it('添加 global p1{height:20px;}', () => {
      update('global', 'p1', { height: '20px' })

      const css = render()
      assert.ok(/.*p1.*/.test(css))
      assert.ok(/.*height.*/.test(css))
      assert.ok(/.*20px.*/.test(css))
    })
    it('添加 scope p1{height:20px;}', () => {
      const scoped = genHash()
      const selections = 'p1' + scoped
      update(scoped, selections, { height: '20px' })

      const css = render()
      assert.ok(new RegExp('.*' + selections + '.*').test(css))
      assert.ok(/.*height.*/.test(css))
      assert.ok(/.*20px.*/.test(css))
    })
    it('多次执行不应该渲染多次', (don) => {
      let n = 0
      const scoped = genHash()
      const selections = 'p1' + scoped
      const set = (css: string): void => {
        n += 1
        assert.equal(n, 1)
      }
      setTimeout(() => {
        don()
      }, 100)

      sets.push(set)
      sets.push()
      setTimeout(() => {
        n = 0
        update(scoped, selections, { height: '20px' })
        update(scoped, selections, { height: '20px' })
        update(scoped, selections, { height: '20px' })
      }, 10)
    })
    it('多次执行应该能修改之前执行的值', (done) => {
      const scoped = genHash()
      const selections = 'p1' + scoped

      update(scoped, selections, { height: '20px' })
      update(scoped, selections, { height: '20px' })
      update(scoped, selections, { height: '20px', width: '30px' })
      const css = render()
      assert.ok(new RegExp('.*' + selections + '.*').test(css))
      assert.ok(/.*height: 20px.*/.test(css))
      assert.ok(/.*width: 30px.*/.test(css))
      done()
    })
  })
})
