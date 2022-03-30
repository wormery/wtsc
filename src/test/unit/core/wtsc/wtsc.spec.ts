import assert from 'assert'
import { describe, it } from 'mocha'
import { defWTSC, px, defInjKey, isInjectKey } from '../../../..'
import { render, addPro, styleDataInj } from '../../../../core/WTSC/render'
import { genHash } from '../../../../utils/utils'
import { wtsc } from '../../../../core/WTSC/WTSCPrototype'

describe('wtsc', function () {
  describe('defWTSC', function () {
    const wtsc = defWTSC({
      defThemeKeys(p) {
        return {
          iliveyou: p([]),
        }
      },
      themeList: {
        drak: {
          drak1: { iliveyou: [] },
        },
      },
    })
    it('wtsc.add.xxx():Shoud  not report an error; ', () => {
      wtsc.add.height(px(30))
      wtsc.add.width(px(30))
    })
    describe('out()方法', () => {
      it('{ height: "30px", width: "30px" }', () => {
        const w = wtsc.clean.add.height(px(30)).add.width(px(30))

        assert.deepEqual(w.out(), 'height: 30px;width: 30px;')
      })
      it('class .class', () => {
        wtsc.class('class')

        const ret = wtsc.out()

        assert.deepEqual(ret, addPro(wtsc.inject(styleDataInj).name, 'class'))
      })

      it('检查隔离', () => {
        wtsc.addAny('检查隔离', '检查隔离')
        wtsc.class('123')

        const s = wtsc.out()

        assert.equal(s, addPro(wtsc.inject(styleDataInj).name, '123'))

        let value = render()

        assert.ok(
          new RegExp(
            addPro(wtsc.inject(styleDataInj).name, '123') +
              '{检查隔离: 检查隔离;}'
          ).test(value)
        )

        // 检查隔离后css是否添加了隔离哈希值
        const name = genHash()
        const w = wtsc.scoped(name)

        assert.equal(w.name, name)

        assert.equal(w.inject(styleDataInj).name, name)

        w.addAny(name, name)
        w.class(name)
        const l = w.out()

        assert.ok(l)

        value = render()

        assert.ok(value.includes(name + '-' + name))
        assert.ok(new RegExp(name + ':.*' + name).test(value))
      })
    })

    it('wtsc.clear().out():Shoud be deepEqual {}', () => {
      wtsc.clear()

      assert.deepEqual(wtsc.out(), '')
    })

    it(`wtsc.addAny('--test-color','#000000').out(): Shoud be deepEqual { '--test-color':'#000000'}`, () => {
      assert.deepEqual(
        wtsc.addAny('--test-color', '#000000').out(),
        '--test-color: #000000;'
      )
    })
    it(`#definjectKey()`, () => {
      const injectKey = defInjKey<number>(true, '3')
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

    describe('#shandbox()隔离', () => {
      it('#shandbox() this', () => {
        const w = wtsc.scoped()

        w.add.height(px(20))

        w.shandbox(function () {
          assert.equal(this.out(), '')
        })

        w.shandbox((wtsc) => {
          assert.equal(wtsc.out(), '')
        })
      })
      it('#shandbox() 参数', () => {
        const w = wtsc.scoped()

        w.add.height(px(20))

        w.shandbox((wtsc) => {
          assert.equal(wtsc.out(), '')
        })
      })
    })
    describe('box', () => {
      it('#box():It should be isolated', () => {
        wtsc.add.width('3px')
        const childWtsc = wtsc.box

        assert.equal(childWtsc.out(), '')
        assert.equal(wtsc.out(), 'width: 3px;')
      })
    })
    describe('isExisted', () => {
      it('#isExisted()', () => {
        const res = wtsc.clean.isExisted('height')

        assert.ok(!res)

        wtsc.add.height(px(30))

        const res1 = wtsc.isExisted('height')

        assert.ok(res1)
      })
    })

    it('#save()', () => {
      const wtsc1 = wtsc.scoped()

      wtsc1.add.width(px(10))

      const saved = wtsc1.save()

      wtsc1.read(saved)

      assert.deepEqual(wtsc1.out(), 'width: 10px;')
    })

    describe('自动解包InjectKey', function () {
      it('InjectKey自动解包', () => {
        const key = wtsc.provide(px(20))
        wtsc.clean.add.width(key)
        const value = wtsc.out()

        assert.deepEqual(value, 'width: 20px;')
      })
    })

    describe('主题模块', function () {
      const wtsc = defWTSC({
        defThemeKeys(p) {
          return { name: p('default'), age: p(3) }
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
