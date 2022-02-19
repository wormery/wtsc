import { WTSC } from '../../../src/core/WTSC'
import { isUndef } from '@wormery/utils'
import assert from 'assert'
import { describe, it } from 'mocha'
import { defineInjKey } from '../../../src'

describe('wtsc', function () {
  describe('new WTSC()', function () {
    let wtsc: WTSC<{ height: () => string; width: (value: string) => string }> =
      null

    it('new WTSC():Shoud not report Error', () => {
      wtsc = new WTSC({
        height() {
          return '30px'
        },
        width(value: string) {
          return value
        },
      })
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
      assert.deepEqual(wtsc.defChild('wtsc1').name, 'wtsc1')
    })
    it(`#defin()`, () => {
      const injectKey = defineInjKey<number>('3')
      wtsc.defineProvide(injectKey, 333)
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
      const injectkey = wtsc.provide(testvalue)

      const childWtsc = wtsc.defChild()

      const value1 = wtsc.inject(injectkey)
      assert.equal(testvalue, value1)

      const value2 = childWtsc.inject(injectkey)
      assert.ok(isUndef(value2))
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

      assert.deepEqual(wtsc1.toString(), '.wtsc{\n}\n')
      assert.deepEqual(wtsc1.toString('div'), 'div{\n}\n')
      assert.deepEqual(wtsc1.toString('.div'), '.div{\n}\n')
      wtsc1.add.height()

      assert.deepEqual(wtsc1.toString('.div'), '.div{\n  height: 30px;\n}\n')
    })
  })
})
