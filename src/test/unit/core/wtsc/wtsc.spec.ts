import { isUndef } from '@wormery/utils'
import assert from 'assert'
import { describe, it } from 'mocha'
import { defWTSC, px, defInjKey, isInjectKey } from '../../../..'
import { defTypeWTSC } from '../../../../core/WTSC/api'
import { render } from '../../../../core/WTSC/render'
import { genHash } from '../../../../utils/utils'
import { scopeKey } from '../../../../core/WTSC/WTSC'

describe('wtsc', function () {
  describe('new WTSC()', function () {
    const wtsc = defTypeWTSC({
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
        const w = wtsc.sham().add.height(px(30)).add.width(px(30))

        assert.deepEqual(w.out(), { height: '30px', width: '30px' })
      })
      it('class .class', () => {
        const ret = wtsc.out('.class')

        assert.deepEqual(ret, 'class')
      })
      it('id #id', () => {
        const ret = wtsc.out('#id')

        assert.deepEqual(ret, 'id')
      })
      it('id #id', () => {
        const ret = wtsc.out('#id')

        assert.deepEqual(ret, 'id')
      })
      it('tag tag', () => {
        const ret = wtsc.out('tag')

        assert.deepEqual(ret, 'tag')
      })
      it('检查隔离', () => {
        wtsc.addAny('检查隔离', '检查隔离')
        const s = wtsc.out('123')
        assert.equal(s, '123')
        let value = render()

        assert.ok(!value.includes('123-'))
        assert.ok(/检查隔离:.*检查隔离/.test(value))

        // sham不会隔离css
        let w = wtsc.sham()
        const v = genHash()
        w.addAny(v, v)
        assert.equal(w.out('.123'), '123')

        value = render()

        // 这里断定不会有123-这样的css
        assert.ok(!value.includes('123-'))
        assert.ok(new RegExp(v + ':.*' + v).test(value))

        // 检查隔离后css是否添加了隔离哈希值
        const name = genHash()
        w = wtsc.scoped(name)

        assert.equal(w.name, name)
        assert.equal(w.inject(scopeKey), name)

        w.addAny(name, name)
        w.out('.' + name)

        value = render()

        assert.ok(value.includes(name + '-' + name))
        assert.ok(new RegExp(name + ':.*' + name).test(value))
      })
    })

    it('wtsc.clear().out():Shoud be deepEqual {}', () => {
      wtsc.clear()
      assert.deepEqual(wtsc.out(), {})
    })

    it(`wtsc.addAny('--test-color','#000000').out(): Shoud be deepEqual { '--test-color':'#000000'}`, () => {
      assert.deepEqual(wtsc.addAny('--test-color', '#000000').out(), {
        '--test-color': '#000000',
      })
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

    it('#sham():It should be isolated', () => {
      const testvalue = '你好啊'
      const childWtsc = wtsc.sham('ww')

      const injectkey = childWtsc.provide(testvalue)

      const value1 = wtsc.inject(injectkey)
      assert.ok(isUndef(value1))

      const value2 = childWtsc.inject(injectkey)

      assert.equal(testvalue, value2)
    })

    describe('#shandbox()隔离', () => {
      it('#shandbox()', () => {
        wtsc.shandbox((wtsc) => {
          assert.equal(wtsc.name, 'sham')
        })
      })
    })
    it('#sham()和real的隔离作用，应该管用', () => {
      const w = wtsc.add.height(px(30)).sham('sham1')

      assert.equal(w.name, 'sham1')

      assert.deepEqual(w.out(), {})

      assert.deepEqual(w.real().out(), { height: '30px' })
    })

    it('#isExisted()', () => {
      const childWtsc = wtsc.sham()

      const res = childWtsc.isExisted('height')

      assert.ok(!res)

      childWtsc.add.height(px(30))

      const res1 = childWtsc.isExisted('height')

      assert.ok(res1)
    })

    it('#save()', () => {
      const wtsc1 = wtsc.sham()

      wtsc1.add.width(px(10))

      const saved = wtsc1.save()

      assert.deepEqual(wtsc1.read(saved).out(), { width: '10px' })
    })

    it('toString()', () => {
      const wtsc1 = wtsc.sham()

      assert.deepEqual(wtsc1.toString('div'), 'div{\n}\n')
      assert.deepEqual(wtsc1.toString('.div'), '.div{\n}\n')
      wtsc1.add.height(px(30))

      assert.deepEqual(wtsc1.toString('.div'), '.div{\n  height: 30px;\n}\n')
    })
    describe('自动解包InjectKey', function () {
      it('InjectKey自动解包', () => {
        const key = wtsc.provide(px(20))
        wtsc.add.width(key)
        assert.deepEqual(wtsc.out(), { width: '20px' })
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
