import { WTSC, WTSCObject } from './WTSC'
import { WTSCOptions } from './option'
import { defThemePrototype } from '../theme/api'
import { WTSCStorage, createWTSCStorage } from './storage'
import {
  Add,
  parsersResultHandle,
  styleValueToString,
} from './parserResultHandleApi'
import { isString } from '@wormery/utils'
import { warn } from '../error/warn'
import { defInjKey, InjectKey } from '../inject/injectKey'
import { Data } from '../inject/types'
import { parserSpace } from '../parser/ParserSpace'
import { styleToString } from './styleTostringApi'
import { genHash, mixin } from '../../utils/utils'
import { selectorDataInj } from './selectorData'
import { styleDataInj, StyleData } from '../render/styleData'
import { update } from '../render/updata'
import { addPro } from '../../utils/cssUtils'
import { inject } from '../inject/injectApi'
export type ProvideWTSC<Options extends WTSCOptions, ParsersInterface> = WTSC<
  Options,
  ParsersInterface
> &
  WTSCStorage

export const clearList: Array<InjectKey<any>> = []

clearList.push(selectorDataInj)

/**
 * 执行add时保存调用者信息
 */
export let wtsc!: WTSC<any, any>
export let preAddKey!: string

const wtscStack: Array<WTSC<any, any>> = []
const preAddKeyStack: string[] = []

export function hideAddStack(): void {
  wtscStack.push(wtsc)
  preAddKeyStack.push(preAddKey)
}

export function findAddStack(): void {
  wtsc = wtscStack.pop() as any
  preAddKey = preAddKeyStack.pop() as any
}
function getSelectorData(w: any): StyleData {
  return w.inject(styleDataInj)
}

function defAdd(): any {
  return new Proxy(Add, {
    get(_, key: string) {
      // 直接返回处理器不管你传入什么key
      if (__DEV__) {
        if (!isString(key)) {
          warn('这里只可以传一个string类型的key,将会作为css的key处理', key)
        }
      }

      preAddKey = key
      return parsersResultHandle
    },
    set(v) {
      if (__DEV__) {
        warn('您不能向add里面传值')
      }
      return undefined as any
    },
  })
}

/**
 * 根
 */
export let rootWtsc!: WTSC<any, any>

export function defWtscPrototype<
  Options extends WTSCOptions,
  ParsersInterface,
  example extends ProvideWTSC<Options, ParsersInterface> = ProvideWTSC<
    Options,
    ParsersInterface
  >
>(option: Options): WTSC<Options, ParsersInterface> {
  const add = defAdd()

  const e: Partial<WTSC<Options, ParsersInterface>> = {
    [WTSCObject]: true,
    parent: undefined,
    root: null as any,
    get add() {
      wtsc = this as example
      return add
    },
    addAny(this: example, key, ...rest) {
      this.style[key] = rest
      return this
    },
    if(this: example, v, callback, els) {
      if (v) {
        callback()
      } else {
        els?.()
      }
      return this
    },
    isExisted(this: example, cssKey) {
      return !!this.style[cssKey]
    },
    selector(this: example, selector: string) {
      if (selector === '') {
        return this
      }

      if (__DEV__) {
        const selectorData = this.ownInject(selectorDataInj)
        if (selectorData) {
          warn('wtsc.selector()和wtsc.class()方法每个语句块里请使用一次')
        }
      }

      this.provide(
        {
          className: selector,
          selector,
          style: styleToString(this.outStyle()),
        },
        selectorDataInj
      )

      return this
    },
    class(this: example, className: string) {
      if (className === '') {
        return this
      }
      if (__DEV__) {
        const selectorData = this.ownInject(selectorDataInj)
        if (selectorData) {
          warn('wtsc.selector()和wtsc.class()方法每个语句块里请使用一次')
        }
      }

      const styleData = getSelectorData(this)

      const syocedName = styleData.name
      this.provide(
        {
          className: addPro(syocedName, className),
          selector: `.${addPro(syocedName, className)}`,
          style: styleToString(this.outStyle()),
        },
        selectorDataInj
      )

      return this
    },
    pseudo(this: example, pseudo) {
      const selectorData = this.ownInject(selectorDataInj)
      if (!selectorData) {
        if (__DEV__) {
          warn('需要先添加类再添加伪类')
        }
        return this
      }
      const pseudoClass = selectorData.pseudoClass ?? {}
      pseudoClass[pseudo] = styleToString(this.outStyle())
      selectorData.pseudoClass = pseudoClass
      return this
    },
    clearStyle(this: example) {
      ;(this as any).style = {}
      return this
    },
    clear(this: example) {
      this.clearStyle()
      clearList.forEach((item) => {
        this.delete(item)
      })
      return this
    },
    get clean() {
      return (this as example).clear()
    },
    scoped(this: example, name: string = 'scoped-' + genHash()) {
      const _wtsc: example = Object.setPrototypeOf(
        createWTSCStorage(name, this),
        this.root
      )

      _wtsc.provide(
        {
          id: _wtsc.id,
          name,
          style: {},
          part: {},
          parent: this.inject(styleDataInj),
        },
        styleDataInj
      )

      return _wtsc
    },
    get box() {
      const that = this as example
      const _wtsc = Object.setPrototypeOf(createWTSCStorage('box', that), that)
      return _wtsc
    },
    shandbox(this: ProvideWTSC<Options, ParsersInterface>, callback) {
      const w = this.box
      return callback.call(w, w)
    },
    unmount(this: example): void {
      this.delete(selectorDataInj)
      // 手动清空本作用域style
      const styleData = this.inject(styleDataInj)
      if (styleData) {
        const thisId = this.id
        // 检查是不是当前实例创建的styleData
        if (styleData.id === thisId) {
          // 清空样式库
          styleData.part = {}

          // 如果是当前实例创建的此id的话所有父作用域进入销毁流程
          const parent = styleData.parent
          if (parent) {
            // 在样式树上清楚引用
            styleData.parent = undefined

            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete parent.part[thisId]

            update(parent)
          } else {
            // 由于当前是根，卸载根会变的不一样
            styleData.style = undefined as any
            styleData.part = undefined as any
            this.root.delete(styleDataInj)
            update(styleData)
            // root节点被卸载执行任何代码都会报错
          }

          // 删除引用
          this.delete(styleDataInj)
        } else {
          // 如果不是隔离作用域的主体的话，删除本实例创建的所有style并进入更新流程
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete styleData.part[thisId]
          update(styleData)
        }
      }
      // 之后垃圾回收会自动清理剩余的项目
    },
    save(this: ProvideWTSC<Options, ParsersInterface>) {
      const injectkey = this.provide(
        this.style,
        defInjKey(false, __DEV__ ? this.name + '>save' : '')
      )
      this.clearStyle()
      return injectkey
    },
    read(this: ProvideWTSC<Options, ParsersInterface>, key) {
      this.style = { ...this.style, ...this.inject(key) }
      return this
    },
    outStyle(this: ProvideWTSC<Options, ParsersInterface>) {
      const _style = this.style
      const retStyle: Data<string, string> = {}
      Object.keys(_style).forEach((cssKey) =>
        parserSpace(cssKey, () => {
          retStyle[cssKey] = styleValueToString(this, _style[cssKey])
        })
      )
      this.clearStyle()
      return retStyle as any
    },
    out() {
      const that = this as example
      const data = that.ownInject(selectorDataInj)

      if (data) {
        that.delete(selectorDataInj)

        const styleData = that.inject(styleDataInj)
        const ret = data.className

        const selector = data.selector

        // 剩余默认导出到默认存储区
        data.style += styleToString(that.outStyle())

        // 将选择器放到存储区
        styleData.style[selector] = data.style

        // 伪类处理
        const pseudoClass = data.pseudoClass

        if (pseudoClass) {
          Object.keys(pseudoClass).forEach((k) => {
            styleData.style[selector + k] = pseudoClass[k]
          })
        }

        update(styleData)

        return ret
      }

      return styleToString(that.outStyle())
    },
    toString(this: example) {
      return `WTSC<${this.name}>`
    },
  }

  // 由于 不想执行get获取器，使用...语法会遍历导致错误执行get获取器
  return mixin(e, defThemePrototype(option)) as any
}
