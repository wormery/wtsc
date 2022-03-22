import { hypnenate, isString } from '@wormery/utils'
import { Theme } from '../theme/theme'
import { WTSCOptions } from './option'
import { ADD, CSSStyle, StyleValue } from './types'
import { parserSpace } from '../parser/ParserSpace'
import { styleToString } from './styleTostringApi'
import { SaveApi } from './saveApi'
import {
  parsersResultHandle,
  styleValueToString,
  setKey,
  Add,
} from './parserResultHandleApi'
import { DefWTSCStorage, WTSCStorage } from './storage'
import { warn } from '../error/warn'
import { InjectKey, defInjKey } from '../inject/injectKey'
import { Data } from '../inject/types'
import { genHash } from '../../utils/utils'
import { update, PseudoClass } from './render'
export const scopeKey = defInjKey<string>()

export const WTSCObject = Symbol('WTSCObject')

/**
 * 执行add时保存调用者信息
 */
export let wtsc!: WTSC<any, any>

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
    return (wtsc = this)._add
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

    this.root = this
  }

  /**
   * 沙盒：进入沙盒中的操作不会干扰父wtsc
   * 这个是通过style标签输出,不是直接生成行内style
   * @author meke
   * @param {(
   *       this: WTSC<Options, ParsersInterface>,
   *       wtsc: WTSC<Options, ParsersInterface>
   *     ) => void} sand
   * @param {string} selector
   * @param {PseudoClass} [pseudoClass]
   * @param {boolean} [scoped]
   * @return {*}  {string}
   * @memberof WTSC
   */
  public shandbox(
    sand: (
      this: WTSC<Options, ParsersInterface>,
      wtsc: WTSC<Options, ParsersInterface>
    ) => void,
    selector: string,
    pseudoClass?: PseudoClass,
    scoped?: boolean
  ): string

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
    ) => void,
    selector?: any,
    pseudoClass?: PseudoClass,
    scoped?: boolean
  ): Data<string, string> | string {
    try {
      const wtsc = this.sham()
      sand.call(wtsc, wtsc)
    } catch (E) {
      throw E as any
    } finally {
      this.real()
    }
    return this.out(selector, pseudoClass, scoped)
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
    _wtsc.provide(name, scopeKey)
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
   * 退栈
   * @memberof WTSC
   */
  public real(): WTSC<Options, ParsersInterface> {
    const _wtsc = this.parent
    if (_wtsc) {
      return _wtsc
    } else {
      if (__DEV__) {
        if (this.storage.name === 'root') {
          warn('你应该在root层')
        } else {
          warn('您可能已经在栈顶了,退栈失败')
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

        setKey(key)
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
   * 这个是简化写法，不可以写并列的选择器，只可以写比如'.class'| '#id' | 'Tag'等单个选择器
   * @author meke
   * @param {string} selector
   * @param {('' | ':hover' | ':active')} [pseudoClass]
   * @return {*}  {string}
   * @memberof WTSC
   */
  public out(
    selector: string,
    pseudoClass?: '' | ':hover' | ':active',
    spoced?: boolean
  ): string

  /**
   * 什么都不传将会返回一个styleValue对象
   * @author meke
   * @return {*}  {CSSStyle}
   * @memberof WTSC
   */
  public out(): CSSStyle

  /**
   * 返回css属性
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {Style<T>}
   * @memberof WTSC
   */
  public out(
    selector?: string,
    pseudoClass?: PseudoClass,
    scoped: boolean = true
  ): CSSStyle | string {
    let ret: CSSStyle | string

    if (isString(selector)) {
      this.outSelector(selector, pseudoClass, scoped)

      if (selector.startsWith('#')) {
        ret = selector.slice(1, selector.length)
      } else if (selector.startsWith('.')) {
        ret = selector.slice(1, selector.length)
      } else {
        ret = selector
      }
    } else {
      ret = this.outStyle()
    }

    this.clear()
    return ret
  }

  public outStyle(): CSSStyle {
    const _style = this.storage.style
    const retStyle: Data<string, string> = {}
    Object.keys(_style).forEach((cssKey) =>
      parserSpace(cssKey, () => {
        retStyle[cssKey] = styleValueToString(this, _style[cssKey])
      })
    )
    return retStyle as any
  }

  private outSelector(
    selectors: string,
    pseudoClass: PseudoClass = '',
    scoped: boolean = true
  ): string {
    if (selectors === '') {
      return ''
    }

    let pro = ''
    let _selectors = selectors.trim()

    // 检查是否增加私有前缀
    if (scoped) {
      const scopeHash = this.inject(scopeKey)
      if (scopeHash) {
        pro = scopeHash
        _selectors += `-${pro}`
      }
    }

    _selectors += pseudoClass

    update(pro, hypnenate(_selectors), this.outStyle())

    return _selectors
  }

  public read(
    saveKey: InjectKey<WTSCStorage['style']>
  ): WTSC<Options, ParsersInterface> {
    this.storage.style = {
      ...this.storage.style,
      ...this.inject(saveKey),
    }
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
   * 保存
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean = true): InjectKey<WTSCStorage['style']> {
    const injectkey = this.provide(
      this.storage.style,
      this.defInjKey(false, __DEV__ ? this.storage.name + '>save' : '')
    )
    isClear && this.clear()
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
   * 将会以css的形式格式化
   * @author meke
   * @param {string} [name=this.name]
   * @return {*}  {string}
   * @memberof WTSC
   */
  public toString(name: string = this.storage.name): string {
    if (name === this.storage.name) {
      name = '.' + name
    }
    return styleToString(name, this.storage.style as any)
  }
}
