# 简介

这个项目帮助你生成 vue StyleValue 对象，更简单的使用它

# 预览

可以补全您的代码

如图：

![AutomatiCompletion](https://raw.githubusercontent.com/wormery/wtsc/main/doc/imgs/AutomatiCompletion.png)

# 快速开始

1. 引入

**使用 npm 安装:**

> npm install @wormery/wtsc

**使用 pnpm 安装:**

> pnpm install @wormery/wtsc

2. 使用

```typescript
//引入
import { defWTSC } from '@wormery/wtsc'

//定义WTSC
const wtsc = defWTSC()

//使用测试
const style = wtsc.add.width(px(20)).add.height(PE(30)).out()
//打印测试
console.log(style)
//printed: { width: '20px', height: '30%' }
```

## inject()

inject 是一个注入器， 可以简单的注入需要的内容

- @author meke
- @template R
- @param {InjectKey<R>} injectKey
- @param {R} [defau]
- @return {\*} {(R | undefined)}
- @memberof Inject

```typescript
// 注入得到一个key，可以通过这个key得到对应的值
const injectkey = wtsc.provide('你好啊')

console.log(typeof injectkey) // InjectKey<string>

// 使用inject可以得到key所对应的值 类型为注入的类型
const value = wtsc.inject(injectkey)

console.log(typeof value) // string | undefined
console.log(value) // '你好啊'
```

同样的：

```typescript
// 注入得到一个key，可以通过这个key得到对应的值
const injectkey = wtsc.provide(3)

console.log(typeof injectkey) // InjectKey<number>

// 使用inject可以得到key所对应的值 类型为注入的类型
const value = wtsc.inject(injectkey)

console.log(typeof value) // number | undefined
console.log(value) // 3
```

- 默认值

```typescript
// 注入得到一个key，可以通过这个key得到对应的值
const injectkey = wtsc.provide(3)

console.log(typeof injectkey) // InjectKey<number>

// 使用inject可以得到key所对应的值 类型为注入的类型
const value = wtsc.inject(injectkey ， 10)

// 这里有默认值后就会只剩下number类型了
console.log(typeof value) // number
console.log(value) // 3
```

我们可以定义一个不存在值的 key 使用 defInjKey() 或 wtsc.defInjKey()，目前这两个功能一样，未来可能会增加一些功能

```typescript
const key = wtsc.defInjkey<string>()

wtsc.inject(key, 10) //return 10
wtsc.inject(key) //return undefined
```

## defChild()

defChild 的作用是隔离作用域
外层作用域可以干扰内层，但是内层的修改行为不会干扰到外层

- 定义局部子 wtsc
- @author meke
- @param {WTSCOptions<MyParsers>} [options={}]
- @return {\*} {WTSC<MyParsers>}
- @memberof WTSC

```typescript
const injectkey = wtsc.provide('你好啊')

const child = wtsc.defChild()

const value = child.inject(injectkey)

console.log(value) // '你好啊'

const childInjectKey = child.provide('Hello')

wtsc.inject(childInjectKey) // undefined
```

## defInjKey()

作用是定义一个 InjectKey

- defInjKey
- @author meke
- @export
- @template T
- @param {string} [describe]
- @param {T} [value]
- @return {\*} {InjectKey<T>}

```typescript
const key = wtsc.defInjKey<string>()
console.log(typeof key) // injectkey<string>
```

## add()

有两种使用方法
一种是当函数，一种是当对象，运行方案一样运行结果也一样

```typescript
wtsc.add('height', px(20))

wtsc.add.height(px(20))
```

- 有类型的

如果输入 `wtsc.add.height('20')`会报错

- autoInjectKey 自动注入 InjectKey

当为 add 传入 InjectKey 时将自动解包,当解包的 injectKey 为 undefined 时将跳过本条 css 样式处理，后面可能设计出更合理的方案

```typescript
const csshwStyle = wtsc.provide<CSSHWStyle>('auto')
wtsc.add('height', csshwStyle)
```

注意：直接使用`wtsc.provide('auto')`是会报错的，因为默认是一个 string 类型,
而 height 只允许使用 CSSHWStyle 类型你也可以使用`wtsc.provide<'auto'>('auto')`进行注入，
因为`CSSHWStyle`类型包括了`‘auto’`类型

## out()

```typescript
wtsc.add.all('inherit').out() // { all: 'inherit' }
```

## save()

```typescript
wtsc.add.width(px(20))
const saveKey = wtsc.save()
const stvleValue = wtsc.inject(savekey) // { width: '20px' }
```

## toString()

```typescript
wtsc.add.meight(px(20), PE(30)).toString()
```

会输出如下:

```css
.wtsc {
  meight: 20px 30%;
}
```

- 你也可以传入一个选择器值

```typescript
wtsc.add.meight(px(20), PE(30)).toString('#wtsc')
```

out:

```css
#wtsc {
  meight: 20px 30%;
}
```

......

更多用法见以后更新

### [更新记录](./CHANGELOG.md)
