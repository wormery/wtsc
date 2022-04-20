import { Theme } from '../theme/theme'
import { WTSCOptions } from './option'
import {
  ADD,
  CSSStyle,
  StyleValue,
  PseudoClasses,
  PseudoElements,
} from './types'
import { SaveFunction } from './saveApi'
import { WTSCStorage } from './storage'
import { InjectKey } from '../inject/injectKey'
import { Inject } from '../inject/inject'

export const WTSCObject = Symbol('WTSCObject')
/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template _Parsers
 */
export interface WTSC<Options extends WTSCOptions, ParsersInterface>
  extends Theme<Options>,
    Inject {
  /**
   * 一个symbol值，表示是一个WTSC
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  readonly [WTSCObject]: true

  readonly name: string

  /**
   * 根wtsc
   * @author meke
   * @type {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly root: WTSC<Options, ParsersInterface>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<_Parsers> | null)}
   * @memberof WTSC
   */
  readonly parent: WTSC<Options, ParsersInterface> | null | undefined

  /**
   * add会保存调用上下文信息，返回一个Proxy，可以当函数调用，也可以调用的方式添加css值
   * @author meke
   * @memberof WTSC
   */
  readonly add: ADD<Options, ParsersInterface>

  /**
   * @author meke
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  readonly addAny: (
    key: string,
    ...rest: StyleValue
  ) => WTSC<Options, ParsersInterface>

  readonly if: (
    value: boolean,
    callback: () => void,
    els?: () => void
  ) => WTSC<Options, ParsersInterface>

  /**
   * 干净的清理后的wtsc
   * @author meke
   * @type {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly clean: WTSC<Options, ParsersInterface>

  readonly clearStyle: () => WTSC<Options, ParsersInterface>

  /**
   * 清理以添加进来的样式
   * @author meke
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly clear: () => WTSC<Options, ParsersInterface>

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<_Parsers>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  readonly isExisted: (cssKey: string) => boolean

  /**
   * 添加类选择器
   * @author meke
   * @param {string} name
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly class: (
    name: string,
    global?: boolean
  ) => WTSC<Options, ParsersInterface>

  readonly selector: (
    name: string,
    global?: boolean
  ) => WTSC<Options, ParsersInterface>

  /**
   * 添加伪元素和伪类选择器
   * @author meke
   * @param {(PseudoElements | PseudoClasses)} PseudoClass
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly pseudo: (
    pseudo: PseudoElements | PseudoClasses
  ) => WTSC<Options, ParsersInterface>

  /**
   * 现在隔离作用域与box相同
   * @author meke
   * @template T
   * @param {(
   *         this: WTSC<Options, ParsersInterface>,
   *         wtsc: WTSC<Options, ParsersInterface>
   *       ) => T} callback
   * @return {*}  {T}
   */
  readonly shandbox: <T>(
    callback: (
      this: WTSC<Options, ParsersInterface>,
      wtsc: WTSC<Options, ParsersInterface>
    ) => T
  ) => T

  /**
   * 隔离class临时添加的作用域，不隔离class名，style临时添加作用域隔离，inject隔离
   * @author meke
   * @type {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly box: WTSC<Options, ParsersInterface>

  /**
   * 隔离所有作用域
   * 局部的这个api会隔离provid、inject、class、id、tag、style
   * @author meke
   * @param {string} [name]
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly scoped: (name?: string) => WTSC<Options, ParsersInterface>

  /**
   * 卸载并清空负作用
   * @author meke
   * @memberof WTSC
   */
  readonly unmount: () => void

  /**
   * 得到style的输出
   * @author meke
   * @return {*}  {CSSStyle}
   * @memberof WTSC
   */
  readonly outStyle: () => CSSStyle

  /**
   * 返回css属性
   * @author meke
   * @type {string}
   * @memberof WTSC
   */
  readonly out: () => string

  /**
   * 从key中读取会遮盖现在的
   * @author meke
   * @param {InjectKey<WTSCStorage['style']>} saveKey
   * @return {*}  {WTSC<Options, ParsersInterface>}
   * @memberof WTSC
   */
  readonly read: (
    saveKey: InjectKey<WTSCStorage['style']>
  ) => WTSC<Options, ParsersInterface>

  readonly save: SaveFunction

  /**
   * @author meke
   * @return {*}  {string}
   * @memberof WTSC
   */
  readonly toString: () => string
}
