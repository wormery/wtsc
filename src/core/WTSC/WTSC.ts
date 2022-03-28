import { isString } from '@wormery/utils'
import { Theme } from '../theme/theme'
import { WTSCOptions } from './option'
import {
  ADD,
  CSSStyle,
  StyleValue,
  PseudoClasses,
  PseudoElements,
} from './types'
import { parserSpace } from '../parser/ParserSpace'
import { styleToString } from './styleTostringApi'
import { SaveApi } from './saveApi'
import {
  parsersResultHandle,
  styleValueToString,
  Add,
} from './parserResultHandleApi'
import { DefWTSCStorage, WTSCStorage } from './storage'
import { warn } from '../error/warn'
import { InjectKey, defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'
import { genHash } from '../../utils/utils'
import {
  rootStyleData,
  update,
  styleDataInj,
  addPro,
  selectorDataInj,
} from './render'
export const scopeKey = defInjKey<string>()

export const WTSCObject = Symbol('WTSCObject')

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

/**
 * 根
 */
export let rootWtsc!: WTSC<any, any>

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template _Parsers
 */
export class WTSC<Options extends WTSCOptions, ParsersInterface>
  extends Theme<Options>
  implements SaveApi
{
  /**
   * 一个symbol值，表示是一个WTSC
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  public readonly [WTSCObject] = true

  /**
   * 生成storage存储对象
   * @private
   * @type {DefWTSCStorage}
   * @memberof WTSC
   */
  private readonly defStorage: DefWTSCStorage

  /**
   * 存储
   * @protected
   * @type {WTSCStorage}
   * @memberof WTSC
   */
  protected storage!: WTSCStorage

  /**
   * 根wtsc
   * @author meke
   * @type {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  public root: WTSC<Options, ParsersInterface>

  /**
   * 得到name
   * @author meke
   * @readonly
   * @type {string}
   * @memberof WTSC
   */
  public get name(): string {
    return this.storage.name
  }

  /**
   * @author meke
   * @private
   * @type {ADD<Options, ParsersInterface>}
   * @memberof WTSC
   */
  private readonly _add: ADD<Options, ParsersInterface>

  /**
   * add会保存调用上下文信息，返回一个Proxy，可以当函数调用，也可以调用的方式添加css值
   * @author meke
   * @memberof WTSC
   */
  public get add(): ADD<Options, ParsersInterface> {
    wtsc = this
    return this._add
  }

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<_Parsers> | null)}
   * @memberof WTSC
   */
  public readonly parent: WTSC<Options, ParsersInterface> | null = null

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<_Parsers> | _Parsers)} [p1]
   * @memberof WTSC
   */
  constructor(options: Options, defStorage: DefWTSCStorage) {
    super(options, defStorage(options.name))

    this.defStorage = defStorage

    this._add = this.defAdd()

    rootWtsc = this

    wtsc = this

    this.root = this

    this.provide(rootStyleData, styleDataInj)
  }

  setGlobal(): void {
    wtsc = this
  }

  /**
   * 沙盒：进入沙盒中的操作不会干扰父wtsc
   * @author meke
   * @param {(
   *       this: WTSC<Options, ParsersInterface>,
   *       wtsc: WTSC<Options, ParsersInterface>
   *     ) => void} sand
   * @return {*}  {Data<string, string>}
   * @memberof WTSC
   */
  public shandbox(
    sand: (
      this: WTSC<Options, ParsersInterface>,
      wtsc: WTSC<Options, ParsersInterface>
    ) => void
  ): Data<string, string>

  public shandbox(
    sand: (
      this: WTSC<Options, ParsersInterface>,
      wtsc: WTSC<Options, ParsersInterface>
    ) => void
  ): Data<string, string> | string {
    try {
      const wtsc = this.sham()
      sand.call(wtsc, wtsc)
    } catch (E) {
      throw E as any
    } finally {
      this.real()
    }
    return this.out()
  }

  /**
   * 局部的这个api会隔离provid、inject、class、id、tag、style
   *
   * @author meke
   * @param {string} [name='scoped' + genHash()]
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  public scoped(
    name: string = 'scoped' + genHash()
  ): WTSC<Options, ParsersInterface> {
    const _wtsc = this.sham(name)
    _wtsc.provide(
      {
        id: _wtsc.storage.id,
        name,
        style: {},
        part: {},
        parent: this.inject(styleDataInj),
      },
      styleDataInj
    )
    return _wtsc
  }

  /**
   * 虚假的，这个api不会隔离css属性，适合小范围隔离style区域
   * 局部的这个api会隔离provid、inject、style
   * @param {string} [name='sham']
   * @return {*}  {WTSC<Options>}
   * @memberof WTSC
   */
  public sham(name: string = 'sham'): WTSC<Options, ParsersInterface> {
    const _wtsc = Object.setPrototypeOf(
      { storage: this.defStorage(name, this.storage), parent: this },
      this.root
    )
    return _wtsc
  }

  /**
   * 获得父存储，到达root将会退占失败
   * @memberof WTSC
   */
  public real(): WTSC<Options, ParsersInterface> {
    const _wtsc = this.parent
    if (_wtsc) {
      return _wtsc
    } else {
      if (__DEV__) {
        if (this === this.root) {
          warn('你应该在root层')
        } else {
          warn('未知原因您已退到顶栈,退栈失败')
        }
      }
      return this
    }
  }

  /**
   * 负责代理
   * @param target
   * @param handle
   * @returns
   */
  private defAdd(): ADD<Options, ParsersInterface> {
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
    }) as unknown as ADD<Options, ParsersInterface>
  }

  /**
   * @author meke
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  public addAny(
    key: string,
    ...rest: StyleValue
  ): WTSC<Options, ParsersInterface> {
    this.storage.style[key] = rest
    return this
  }

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<_Parsers>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  public isExisted(cssKey: string): boolean {
    return !!this.storage.style[cssKey]
  }

  /**
   * 什么都不传将会返回一个styleValue对象
   * @author meke
   * @return {*}  {CSSStyle}
   * @memberof WTSC
   */
  public out(): string

  /**
   * 返回css属性
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {Style<T>}
   * @memberof WTSC
   */
  public out(): string {
    const data = this.ownInject(selectorDataInj)

    if (data) {
      this.delete(selectorDataInj)

      data.style += styleToString(this.outStyle())
      const styleData = this.inject(styleDataInj)

      const name = data.name
      const pro = addPro(styleData.name, name)
      const selector = '.' + pro

      styleData.style[selector] = data.style
      const pseudoClass = data.pseudoClass
      if (pseudoClass) {
        Object.keys(pseudoClass).forEach((k) => {
          styleData.style[selector + k] = pseudoClass[k]
        })
      }

      update(styleData)

      return pro
    } else {
      const ret = styleToString(this.outStyle())
      this.clear()
      return ret
    }
  }

  /**
   * 得到style的输出
   * @author meke
   * @return {*}  {CSSStyle}
   * @memberof WTSC
   */
  public outStyle(): CSSStyle {
    const _style = this.storage.style
    const retStyle: Data<string, string> = {}
    Object.keys(_style).forEach((cssKey) =>
      parserSpace(cssKey, () => {
        retStyle[cssKey] = styleValueToString(this, _style[cssKey])
      })
    )
    this.clear()
    return retStyle as any
  }

  /**
   * 添加类选择器
   * @author meke
   * @param {string} name
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  public class(name: string): WTSC<Options, ParsersInterface> {
    if (name === '') {
      return this
    }
    if (__DEV__) {
      const selectorData = this.ownInject(selectorDataInj)
      if (selectorData) {
        warn('wtsc.class()方法每个语句块里请使用一次')
      }
    }
    this.provide(
      {
        name,
        selector: '.',
        style: styleToString(this.outStyle()),
      },
      selectorDataInj
    )

    return this
  }

  /**
   * 卸载并清空负作用
   * @author meke
   * @memberof WTSC
   */
  public unmount(): void {
    this.delete(selectorDataInj)
    // 手动清空本作用域style
    const styleData = this.inject(styleDataInj)
    if (styleData) {
      const thisId = this.storage.id
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
  }

  /**
   * 添加伪元素和伪类选择器
   * @author meke
   * @param {(PseudoElements | PseudoClasses)} PseudoClass
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  public pseudo(
    PseudoClass: PseudoElements | PseudoClasses
  ): WTSC<Options, ParsersInterface> {
    const selectorData = this.ownInject(selectorDataInj)
    if (!selectorData) {
      if (__DEV__) {
        warn('需要先添加类再添加伪类')
      }
      return this
    }
    const pseudoClass = selectorData.pseudoClass ?? {}

    pseudoClass[PseudoClass] = styleToString(this.outStyle())

    selectorData.pseudoClass = pseudoClass

    return this
  }

  /**
   * 从key中读取
   * @author meke
   * @param {InjectKey<WTSCStorage['style']>} saveKey
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  public read(
    saveKey: InjectKey<WTSCStorage['style']>
  ): WTSC<Options, ParsersInterface> {
    this.storage.style = { ...this.storage.style, ...this.inject(saveKey) }
    return this
  }

  /**
   * 保存，默认清空存储样式的变量
   * @author meke
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(): InjectKey<WTSCStorage['style']>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean): InjectKey<WTSCStorage['style']>

  /**
   * 保存一个副本，本方法会清空现有存储，并保存到空间中
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(): InjectKey<WTSCStorage['style']> {
    const injectkey = this.provide(
      this.storage.style,
      this.defInjKey(false, __DEV__ ? this.storage.name + '>save' : '')
    )
    this.clear()
    return injectkey
  }

  /**
   * 清空css
   * @author meke
   * @memberof WTSC
   */
  public clear(): void {
    this.storage.style = {}
  }

  /**
   *
   *
   * @author meke
   * @return {*}  {string}
   * @memberof WTSC
   */
  public toString(): string {
    return `WTSC<${this.name}>`
  }
}
