import { cached } from '@wormery/utils'

import { Theme } from '../theme/theme'
import { Get$parsers, Get$WTSC, WTSCOptions } from './option'
import { ADD, CSSKey, CSSValue, Style } from './types'
import { InjectKey } from '../inject/types'
import { virtualWorld } from '../parser/preParser'
import { styleToString } from './styleTostringApi'
import { SaveApi } from './saveApi'
import { parsersResultHandle } from './parserResultHandleApi'
import { ProviderStorage } from '../inject/providerApi'
import { DefWTSCStorage, WTSCStorage } from './storage'

export const WTSCObject = Symbol('WTSCObject')

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template _Parsers
 */
export class WTSC<Options extends WTSCOptions<Options> = {}>
  extends Theme<Options>
  implements SaveApi<Options>
{
  /**
   * 一个symbol值，表示是一个WTSC
   * @author meke
   * @type {symbol}
   * @memberof WTSC
   */
  public readonly [WTSCObject] = true

  private readonly options: Options
  // private readonly defWTSC!: DefWTSC<Options>
  protected storage: WTSCStorage

  public get name(): string {
    return this.storage.name
  }

  /**
   * 样式存储存储
   * @author meke
   * @private
   * @memberof WTSC
   */
  private _style: Style<Options> = {}

  /**
   * 处理器方法存储
   * @author meke
   * @type {ADD<_Parsers>}
   * @memberof WTSC
   */
  public add: ADD<Options>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<_Parsers> | null)}
   * @memberof WTSC
   */
  public parent: Get$WTSC<Options> | null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<_Parsers>>}
   * @memberof WTSC
   */
  public children: Array<WTSC<Options>> = []

  /**
   * 解析器对象
   * @author meke
   * @type {_Parsers}
   * @memberof WTSC
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private parsers: Get$parsers<Options>
  private readonly defStorage: DefWTSCStorage

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<_Parsers> | _Parsers)} [p1]
   * @memberof WTSC
   */
  constructor(
    options: Options,
    defStorage: DefWTSCStorage,
    storage = defStorage(options.name)
  ) {
    super(options, storage)
    this.parsers = options.parsers ?? ({} as any)
    this.parent = options.parent ?? null
    this.options = options
    ;(this.parsers as unknown as any).wtsc = this
    this.storage = storage
    this.defStorage = defStorage

    this.add = this.defAdd()
  }

  /**
   * 定义局部子wtsc
   * @author meke
   * @param {WTSCOptions<_Parsers>} [options={}]
   * @return {*}  {WTSC<MyParsers>}
   * @memberof WTSC
   */
  public defChild(options: WTSCOptions<Options> = {} as any): WTSC<Options> {
    // const storage = this.defStorage(options.name, this.storage)

    // this.storage = storage
    const _options = { parent: this, ...options } as any as WTSCOptions<Options>
    const w = this.options.defWTSC?.(_options)

    this.children.push(w as any)
    ;(w as any).storage.parent = this.storage
    return w as WTSC<Options>
  }

  /**
   * 负责代理
   * @param target
   * @param handle
   * @returns
   */
  private defAdd(): ADD<Options> {
    const addFn = (key: string, ...rest: any[]): WTSC<Options> => {
      this.parsersResultHandle(key, this.parsers, ...rest)
      return this
    }
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached((key: string) => {
      return (...rest: any[]): WTSC<Options> => {
        this.parsersResultHandle(key, this.parsers, ...rest)
        // 永远返回this
        return this
      }
    })

    return new Proxy(addFn, {
      get(target, prop) {
        // 不做任何处理，默认相信用户，有类型检查无效key理论不应该发生
        return parsersHandler(prop as string)
      },
    }) as unknown as ADD<Options>
  }

  /**
   * @author meke
   * @private
   * @template F
   * @param {string} key
   * @param {F} handle
   * @param {...any[]} rest
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  private parsersResultHandle(key: string, parsers: any, ...rest: any[]): void {
    virtualWorld(key, () => {
      parsersResultHandle(this, key, parsers, ...rest)
    })
  }

  /**
   * @author meke
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  public addAny(key: string, value: string): WTSC<Options> {
    this.setCSS(key as any, value)
    return this
  }

  /**
   * 向style里添加属性
   * @author meke
   * @private
   * @param {CSSKey<_Parsers>} cssName
   * @param {CSSValue} cssValue
   * @memberof WTSC
   */
  private setCSS(cssName: CSSKey<Options>, cssValue: CSSValue): void {
    this._style[cssName] = cssValue
  }

  /**
   * 检查是否存在此css
   * @author meke
   * @param {CSSKey<_Parsers>} cssKey
   * @return {*}  {boolean}
   * @memberof WTSC
   */
  public isExisted(cssKey: CSSKey<Options>): boolean {
    return !!this._style[cssKey]
  }

  /**
   * 返回css属性
   * @isClear:boolean 是否清空，默认值true
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {Style<T>}
   * @memberof WTSC
   */
  public out(isClear: boolean = true): Style<Options> {
    const _style = this._style
    if (isClear) {
      this.clear()
    }
    return _style
  }

  /**
   * 保存
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  public save(isClear: boolean = true): InjectKey<Style<Options>> {
    const injectkey = this.provide(
      this._style,
      this.defInjKey(__DEV__ ? this.storage.name + '>save' : '')
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
    this._style = {} as unknown as Style<Options>
  }

  /**
   * 将会以css的形式格式化
   * @author meke
   * @param {string} [name=this.name]
   * @param {string} [prefix='']
   * @return {*}  {string}
   * @memberof WTSC
   */
  public toString(
    name: string = this.storage.name,
    prefix: string = ''
  ): string {
    if (name === this.storage.name) {
      name = '.' + name
    }
    return styleToString(name, this._style as any, prefix)
  }
}
