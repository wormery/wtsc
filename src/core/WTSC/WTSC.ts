import { cached } from '@wormery/utils'
import { Theme } from '../theme/theme'
import { Get$WTSC, WTSCOptions } from './option'
import { ADD, Style } from './types'
import { parserSpace } from '../parser/ParserSpace'
import { styleToString } from './styleTostringApi'
import { SaveApi } from './saveApi'
import { parsersResultHandle } from './parserResultHandleApi'
import { DefWTSCStorage, WTSCStorage } from './storage'
import { warn } from '..'
import { InjectKey } from '../inject/injectKey'

export const WTSCObject = Symbol('WTSCObject')

/**
 * css解析器核心，负责用ts的方式将css转换为vue所支持的styleValue类型
 * @author meke
 * @export
 * @class WTSC
 * @extends {Inject}
 * @template _Parsers
 */
export class WTSC<Options extends WTSCOptions<Options>, ParsersInterface>
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
  private readonly stack: WTSCStorage[] = []

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
   *
   * @author meke
   * @memberof WTSC
   */
  public add: ADD<Options, ParsersInterface>

  /**
   * 父解析器
   * @author meke
   * @type {(WTSC<_Parsers> | null)}
   * @memberof WTSC
   */
  public readonly parent: Get$WTSC<Options> | null

  /**
   * 子解析器
   * @author meke
   * @type {Array<WTSC<_Parsers>>}
   * @memberof WTSC
   */
  public readonly children: Array<WTSC<Options, ParsersInterface>> = []

  /**
   * Creates an instance of WTSC.
   * @author meke
   * @param {(WTSC<_Parsers> | _Parsers)} [p1]
   * @memberof WTSC
   */
  constructor(
    options: Options,
    defStorage: DefWTSCStorage,
    storage = defStorage(options.name, options.parent?.storage)
  ) {
    super(options, storage)
    this.parent = options.parent ?? null
    this.options = options
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
  public defChild(name: string = 'child'): WTSC<Options, ParsersInterface> {
    const _options = { parent: this, name } as any as WTSCOptions<Options>
    const w = this.options.defWTSC?.(_options)

    this.children.push(w as any)
    return w as WTSC<Options, ParsersInterface>
  }

  /**
   * 沙盒：进入沙盒中的操作不会干扰正常的wtsc，但是消耗性能很少，正常隔离推荐
   * 原理：我们将存储用的storage对象重新创建放到栈里面，用完再退栈，只占用了创建一个对象的时间，
   * 如果创建一个子wtsc将会创建很多很多对象，但是一定不要退多了，也不要忘记退出，所以使用包装好的
   * 沙盒，里面的内容出错也能正常退栈，但是使用会麻烦点
   * @param {(wtsc: WTSC<Options>) => void} sand
   * @memberof WTSC
   */
  public shandbox<R>(sand: (wtsc: WTSC<Options, ParsersInterface>) => R): R {
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
  public sham(name: string = 'sham'): WTSC<Options, ParsersInterface> {
    const storage = this.defStorage(name, this.storage)
    this.stack.push(this.storage)
    this.storage = storage
    return this
  }

  /**
   * 退栈
   * @memberof WTSC
   */
  public real(): void {
    const storage = this.stack.pop()
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
  private defAdd(): ADD<Options, ParsersInterface> {
    /**
     * 缓存处理函数
     */
    const parsersHandler = cached(
      (key: string) =>
        (...rest: ToString[]) =>
          this.parsersResultHandle(key, ...rest)
    )

    return new Proxy(this.parsersResultHandle, {
      get(target, prop) {
        // 不做任何处理，默认相信用户，有类型检查无效key理论不应该发生
        return parsersHandler(prop as string)
      },
    }) as unknown as ADD<Options, ParsersInterface>
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
  private parsersResultHandle(
    key: string,
    ...rest: any[]
  ): WTSC<Options, ParsersInterface> {
    parserSpace(key, () => {
      parsersResultHandle(this, key, ...rest)
    })
    return this
  }

  /**
   * @author meke
   * @param key "任何stylekey"
   * @param value “任何stylleValue，不会做校验”
   * @return {*}  {WTSC<T>}
   * @memberof WTSC
   */
  public addAny(key: string, value: string): WTSC<Options, ParsersInterface> {
    this.storage.style[key] = value
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
   * 保存，默认清空存储样式的变量
   * @author meke
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  save(): InjectKey<Style<Options>>

  /**
   * 保存后清空
   * @author meke
   * @param {boolean} isClear
   * @return {*}  {InjectKey<Style<T>>}
   * @memberof WTSC
   */
  save(isClear: boolean): InjectKey<Style<Options>>

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
