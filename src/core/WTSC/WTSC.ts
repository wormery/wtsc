import { cached } from '@wormery/utils'

import { Theme } from '../theme/theme'
import { Get$parsers, Get$WTSC, WTSCOptions } from './option'
import { ADD, CSSValue, Style } from './types'
import { InjectKey } from '../inject/types'
import { virtualWorld } from '../parser/preParser'
import { styleToString } from './styleTostringApi'
import { SaveApi } from './saveApi'
import { parsersResultHandle } from './parserResultHandleApi'
import { DefWTSCStorage, WTSCStorage } from './storage'
import { warn } from '..'

export const WTSCObject = Symbol('WTSCObject')

export const last: WTSC | null = null

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
  protected storage: WTSCStorage

  /**
   * 栈
   * @private
   * @type {WTSCStorage[]}
   * @memberof WTSC
   */
  private readonly word: WTSCStorage[] = []

  public get name(): string {
    return this.storage.name
  }

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
  private readonly parent: Get$WTSC<Options> | null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<_Parsers>>}
   * @memberof WTSC
   */
  private readonly children: Array<WTSC<Options>> = []

  /**
   * 解析器对象
   * @author meke
   * @type {_Parsers}
   * @memberof WTSC
   */
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private parsers: Get$parsers<Options>

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
    // this.storage = storage
    const _options = { parent: this, ...options } as any as WTSCOptions<Options>
    const w = this.options.defWTSC?.(_options)

    this.children.push(w as any)
    ;(w as any).storage.parent = this.storage
    return w as WTSC<Options>
  }

  /**
   * 沙盒：进入沙盒中的操作不会干扰正常的wtsc，但是消耗性能很少，正常隔离推荐
   * 原理：我们将存储用的storage对象重新创建放到栈里面，用完再退栈，只占用了创建一个对象的时间，
   * 如果创建一个子wtsc将会创建很多很多对象，但是一定不要退多了，也不要忘记退出，所以使用包装好的
   * 沙盒，里面的内容出错也能正常退栈，但是使用会麻烦点
   * @param {(wtsc: WTSC<Options>) => void} sand
   * @memberof WTSC
   */
  public shandbox<R>(sand: (wtsc: WTSC<Options>) => R): R {
    try {
      this.sham()
      return sand(this)
    } catch (E) {
      throw E as any
    } finally {
      this.real()
    }
  }

  /**
   * 入栈：入栈后一定要退栈，这是吧wtsc的storage放如栈内做到的，你可以使用打包api shandbox自动退栈
   * @param {string} [name='sham']
   * @return {*}  {WTSC<Options>}
   * @memberof WTSC
   */
  public sham(name: string = 'sham'): WTSC<Options> {
    const storage = this.defStorage(name, this.storage)
    this.word.push(this.storage)
    this.storage = storage
    return this
  }

  /**
   * 退栈
   * @memberof WTSC
   */
  public real(): void {
    const storage = this.word.pop()
    if (storage) {
      this.storage = storage
    } else {
      if (__DEV__) {
        if (this.storage.name === 'root') {
          warn('你应该在root层')
        } else {
          warn('您可能已经在栈顶了,退栈失败')
        }
      }
    }
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
  private setCSS(cssName: string, cssValue: CSSValue): void {
    this.storage.style[cssName] = cssValue
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
   * 返回css属性
   * @isClear:boolean 是否清空，默认值true
   * @author meke
   * @param {boolean} [isClear=true]
   * @return {*}  {Style<T>}
   * @memberof WTSC
   */
  public out(isClear: boolean = true): Style<Options> {
    const _style = this.storage.style
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
      this.storage.style,
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
    this.storage.style = {} as unknown as Style<Options>
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
    return styleToString(name, this.storage.style as any, prefix)
  }
}
