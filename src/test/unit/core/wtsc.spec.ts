import { isUndef } from '@wormery/utils'
import assert from 'assert'
import { describe, it } from 'mocha'
import { defWTSC, defInjKey, isInjectKey } from '../../../'

describe('wtsc', function () {
  describe('new WTSC()', function () {
    const wtsc = defWTSC({
      parsers: {
        height() {
          return '30px'
        },
        width(value: string) {
          return value
        },
      },
    })
    it('wtsc.add.xxx():Shoud  not report an error; ', () => {
      wtsc.add.height()
      wtsc.add.width('30px')
    })

    it('wtsc.out():Shoud deepEqual  { height: "30px", width: "30px" }', () => {
      assert.deepEqual(wtsc.out(), { height: '30px', width: '30px' })
    })

    it('wtsc.clear().out():Shoud be deepEqual {}', () => {
      wtsc.clear()
      assert.deepEqual(wtsc.out(), {})
    })

    it(`wtsc.add('width','10px').out(): Shoud be deepEqual { width: '10px' }`, () => {
      assert.deepEqual(wtsc.add('width', '10px').out(), { width: '10px' })
    })

    it(`wtsc.addAny('--test-color','#000000').out(): Shoud be deepEqual { '--test-color':'#000000'}`, () => {
      assert.deepEqual(wtsc.addAny('--test-color', '#000000').out(), {
        '--test-color': '#000000',
      })
    })
    it(`#wtsc.defChild()`, () => {
      assert.deepEqual(wtsc.defChild({ name: 'wtsc1' }).name, 'wtsc1')
    })
    it(`#definjectKey()`, () => {
      const injectKey = defInjKey<number>('3')
      wtsc.provide(3, injectKey)
    })
    it(`#provide()`, () => {
      wtsc.provide('你好啊')
    })
    it(`#inject()`, () => {
      const injectkey = wtsc.provide('你好啊')
      const value = wtsc.inject(injectkey)

      assert.deepEqual(value, '你好啊')
    })

    it('#defChild():It should be isolated', () => {
      const testvalue = '你好啊'
      const childWtsc = wtsc.defChild({ name: 'ww' })

      const injectkey = childWtsc.provide(testvalue)

      const value1 = wtsc.inject(injectkey)
      assert.ok(isUndef(value1))

      const value2 = childWtsc.inject(injectkey)

      assert.equal(testvalue, value2)
    })

    it('#isExisted()', () => {
      const childWtsc = wtsc.defChild()

      const res = childWtsc.isExisted('height')
      assert.ok(!res)

      childWtsc.add('height')

      const res1 = childWtsc.isExisted('height')
      assert.ok(res1)
    })

    it('#save()', () => {
      const wtsc1 = wtsc.defChild()

      wtsc1.add.width('10px')

      const saved = wtsc1.save()

      assert.deepEqual(wtsc1.inject(saved), { width: '10px' })
    })

    it('toString()', () => {
      const wtsc1 = wtsc.defChild()

      assert.deepEqual(wtsc1.toString(), '.root{\n}\n')
      assert.deepEqual(wtsc1.toString('div'), 'div{\n}\n')
      assert.deepEqual(wtsc1.toString('.div'), '.div{\n}\n')
      wtsc1.add.height()

      assert.deepEqual(wtsc1.toString('.div'), '.div{\n  height: 30px;\n}\n')
    })
    describe('自动解包InjectKey', function () {
      it('InjectKey自动解包', () => {
        const key = wtsc.provide('你好啊')
        wtsc.add.width(key)
        assert.deepEqual(wtsc.out(), { width: '你好啊' })
      })
    })
    describe('主题模块', function () {
      const wtsc = defWTSC({
        defThemeKeys(inject) {
          return { name: inject.provide('default'), age: inject.provide(3) }
        },
        themeList: {
          dark: { test1: { name: 'test1', age: 21 } },
          bright: { test2: { name: 'test2', age: 22 } },
        },
      })
      it('它应该是一个InjectKey', function () {
        assert.equal(isInjectKey(wtsc.the.name), true)
      })
      describe('获取', function () {
        it('它应该能拿到默认的主题', function () {
          const value = wtsc.inject(wtsc.the.age)
          assert.equal(value, 3)
          const value1 = wtsc.inject(wtsc.the.name)
          assert.equal(value1, 'default')
        })
      })
      describe('更换主题', function () {
        it('它应该能选中暗色主题', function () {
          wtsc.setTheme('dark')
          const v1 = wtsc.inject(wtsc.the.name)
          assert.equal(v1, 'test1')
          const v2 = wtsc.inject(wtsc.the.age)
          assert.equal(v2, 21)
        })
        it('它应该能选中亮色主题', function () {
          wtsc.setTheme('bright')
          const v1 = wtsc.inject(wtsc.the.name)
          assert.equal(v1, 'test2')
          const v2 = wtsc.inject(wtsc.the.age)
          assert.equal(v2, 22)
        })
        it('它应该能直接选中test1主题', function () {
          wtsc.setTheme('test1')
          const v1 = wtsc.inject(wtsc.the.name)

          assert.equal(v1, 'test1')
          const v2 = wtsc.inject(wtsc.the.age)
          assert.equal(v2, 21)
        })
        it('它应该能直接选中test2主题', function () {
          wtsc.setTheme('test2')
          const v1 = wtsc.inject(wtsc.the.name)
          assert.equal(v1, 'test2')
          const v2 = wtsc.inject(wtsc.the.age)
          assert.equal(v2, 22)
        })
        it('它应该能从暗色主题中筛选得到某一个主题', function () {
          wtsc.setTheme('dark', 'test1')
          const v1 = wtsc.inject(wtsc.the.name)
          assert.equal(v1, 'test1')
          const v2 = wtsc.inject(wtsc.the.age)
          assert.equal(v2, 21)
        })
      })
      describe('更换主题', function () {})
    })
  })
})
