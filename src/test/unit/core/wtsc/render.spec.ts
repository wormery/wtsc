import {
  initStyleDom,
  update,
  render,
  getLeaf,
  StyleData,
  defStyleData,
  rootStyleData,
  dependencyCounter,
} from '../../../../core/WTSC/render'
import { pseudoDOM } from './pseudeDOM'
import assert from 'assert'
const sets: Array<(value: string) => void> = []
initStyleDom(
  pseudoDOM((value) => {
    sets.forEach((s) => s(value))
  })
)
describe('render.ts', () => {
  describe('getLeaf方法', () => {
    it('传入空数组', () => {
      const toBeUpdated: StyleData[] = []

      assert.deepEqual(getLeaf(toBeUpdated), [])
    })
    it('传入根StyleData', () => {
      const toBeUpdated: StyleData[] = [rootStyleData]

      assert.deepEqual(getLeaf(toBeUpdated), [rootStyleData])
    })
    it('传入一个子StyleData', () => {
      const subStyleData = defStyleData('sub', rootStyleData)
      const toBeUpdated: StyleData[] = [subStyleData]

      assert.deepEqual(getLeaf(toBeUpdated), [subStyleData])
    })

    it('toBeUpdated 的leaf重复保持唯一', () => {
      const styleData = defStyleData('sd', rootStyleData)
      const toBeUpdated: StyleData[] = [styleData, styleData]
      const value = getLeaf(toBeUpdated)

      assert.deepEqual(value, [styleData])
    })
    it('传入父子StyleData', () => {
      const styleData = defStyleData('sub', rootStyleData)
      const toBeUpdated: StyleData[] = [styleData, rootStyleData]
      const value = getLeaf(toBeUpdated)

      assert.deepEqual(value, [styleData])
    })
    it('传入兄弟StyleData', () => {
      const styleData1 = defStyleData('sub1', rootStyleData)
      const styleData2 = defStyleData('sub2', rootStyleData)
      const toBeUpdated: StyleData[] = [styleData1, styleData2]
      const value = getLeaf(toBeUpdated)

      assert.ok([styleData1, styleData2].every((i) => value.includes(i)))
    })

    it('传入一家三口', () => {
      const styleData1 = defStyleData('sub1', rootStyleData)
      const styleData2 = defStyleData('sub2', rootStyleData)
      const toBeUpdated: StyleData[] = [styleData1, styleData2, rootStyleData]
      const value = getLeaf(toBeUpdated)

      assert.ok([styleData1, styleData2].every((i) => value.includes(i)))
    })
    it('三级', () => {
      const borther1 = defStyleData('borther1', rootStyleData)
      const sun1 = defStyleData('sun1', borther1)
      const sun2 = defStyleData('sun2', borther1)

      const toBeUpdated: StyleData[] = [sun1, sun2, borther1]

      const value = getLeaf(toBeUpdated)

      assert.ok([sun1, sun2].every((i) => value.includes(i)))
    })
  })
  describe('dependencyCounter方法', () => {
    it('传入一个根', () => {
      const dependencyCounterMap = dependencyCounter([rootStyleData])
      const n = dependencyCounterMap.get(rootStyleData)
      assert.equal(n, 0)
    })

    it('传入一个子', () => {
      const subStyleData = defStyleData('sub1', rootStyleData)
      const map = dependencyCounter([subStyleData])
      assert.equal(map.get(subStyleData), 0)
      assert.equal(map.get(rootStyleData), 1)
    })

    it('传入兄弟', () => {
      const borther1 = defStyleData('borther1', rootStyleData)
      const borther2 = defStyleData('borther2', rootStyleData)
      const map = dependencyCounter([borther1, borther2])
      assert.equal(map.get(borther1), 0)
      assert.equal(map.get(borther2), 0)

      assert.equal(map.get(rootStyleData), 2)
    })
    it('三级', () => {
      const borther1 = defStyleData('borther1', rootStyleData)
      const sun1 = defStyleData('sun1', borther1)
      const sun2 = defStyleData('sun2', borther1)

      const map = dependencyCounter(getLeaf([sun1, sun2]))
      assert.equal(map.get(sun1), 0)

      assert.equal(map.get(sun2), 0)

      assert.equal(map.get(borther1), 2)

      assert.equal(map.get(rootStyleData), 1)
    })
    it('混沌多级检查', () => {
      const c1 = defStyleData('c1', rootStyleData)
      const c11 = defStyleData('c11', c1)
      const c12 = defStyleData('c12', c1)
      const c121 = defStyleData('c121', c12)

      const map = dependencyCounter(getLeaf([c1, c11, c12, c121]))

      assert.equal(map.get(c1), 2)

      assert.equal(map.get(c121), 0)

      assert.equal(map.get(c12), 1)

      assert.equal(map.get(rootStyleData), 1)
    })
  })
  describe('updata方法', () => {
    it('创建测试一个渲染', () => {
      update({
        id: Symbol(''),
        name: '3',
        style: { test: 'test;' },
        part: {},
        parent: rootStyleData,
      })
      const value = render()
      assert.ok(value.includes('test{test;}\n'))
    })
    it('当同时渲染两个为父字关系的渲染时', () => {
      const parent = {
        id: Symbol(''),
        name: '3',
        style: { 'parent-test': 'parent;' },
        part: {},
        parent: rootStyleData,
      }
      update(parent)
      update({
        id: Symbol(''),
        name: '3',
        style: { 'child-test': 'child;' },
        part: {},
        parent,
      })
      const value = render()

      assert.ok(value.includes('child-test{child;}'))
      assert.ok(value.includes('parent-test{parent;}'))
    })
    it('当渲染两个兄弟时', () => {
      const brother1 = {
        id: Symbol(''),
        name: 'brother1',
        style: { 'brother1-test': 'value;' },
        part: {},
        parent: rootStyleData,
      }
      const brother2 = {
        id: Symbol(''),
        name: 'brother2',
        style: { 'brother2-test': 'value;' },
        part: {},
        parent: rootStyleData,
      }
      update(rootStyleData)
      update(brother1)
      update(brother2)

      const value = render()

      assert.ok(value.includes('brother1-test{value;}'))
      assert.ok(value.includes('brother2-test{value;}'))
    })
  })
})
