# 更多

::: tip
还未整理的 api
:::

## @keyframes

用于输出关键帧动画

```typescript
wtsc.add
  .height('20px')
  .add.width('20px')
  .add.animationName(
    keyframes(
      'test',
      (a, w) => {
        a('from', w.add.borderRadius(PE(50)))
        a('to', w.add.borderRadius(PE(0)))
      },
      wtsc
    )
  )
const part = wtsc.out()
assert.equal(part, 'height: 20px;width: 20px;animation-name: root-test;')
```

## class 输出

使用 class 输出后将会把**前面**的 style，并入 class 存储器，使用 out 进入输出流程

```typescript
const value = wtsc.sham().add.height(px(20)).class('classSelector').out()

console.log(vlaue) // classSelector
```

这个 api 在 nextTick()执行（这样可以避免在同步线程内多次更新 dom,增加运行效率，你可以放心的添加 class）

### 与局部 api 混合双打！

```typescript
- const value = wtsc.sham()
+ const value = wtsc.scoped('具名')
                .add.height(px(20))
                .class('classSelector')
              .out()

console.log(value) // 具名-classSelector

// 随机
- const value = wtsc.scoped('具名')
+ const value = wtsc.scoped()
                .add.height(px(20))
                .class('classSelector')
              .out()
console.log(value) // (随机哈希)-classSelector
```

### 伪类输出

伪类必须在类后面定义如下面所见

也可以这么用

```typescript
// ./class.wtsc.ts
function createHoverColor(
  color: RGBColor,
  overlayAlpha: number = 0.50
): RGBColor {
  return mixColor(color, rgb(255, 255, 255, overlayAlpha));
}

function createPressedColor(
  color: RGBColor,
  overlayAlpha: number = 0.15
): RGBAColor {
  return mixColor(color, rgb(0, 0, 0, overlayAlpha))
}

const color = rgb(250, 0, 0)

export default (w) => {
  button: w.sham()
              .add.height(px(30))
              .add.backgroundColor(color)
              .add.userSelect('none')
              .add.transition('all  300ms ease')
              .class('testclass')
              .add.backgroundColor(createHoverColor(color))
              .pseudo(':hover')
              .add.backgroundColor(createPressedColor(color))
              .pseudo(':active')
              .out(),

}

// ./app.tsx
import cl from './class.wtsc.ts'
const name = 'app',
export const w = wtsc.scoped(genHash() + name)
export default  defineCompution({
  name,
  setup(){

    return () =>{
    const  c = cl(w)
      return (<>
              <div :class="[c]">测试 class</div>
              <div :style="[
                w.add.height(px(20))
                .out()
                ,
                w.add.background('red').out()
              ]">简单样式</div>
      </>)
    }
  }
})
```

## 沙箱

沙箱的作用是隔离作用域，沙箱的创建成本更低，适合用完就丢的任物如：

```typescript
const xxx = wtsc.shandbox((wtsc) => {
  wtsc.add.height(px(30))
})
//或
const xxx = wtsc.shandbox(function () {
  this.add.height(px(30))
})

consocle.log(xxx) //  height: 30px;
```

在沙箱关闭前会自动将剩下的值导出,沙箱中修改任何内容关闭后数据都会丢失，比如 inject provide

沙箱的`<style><style>`作用域默认继承父亲

- sham('name') 开启一个局部作用域，`<style><style>`作用域默认继承父亲 **sham 定义子 wtsc**
- scoped('name') 定义一个包括`<style><style>`隔离的 wtsc **scoped 定义子 wtsc**
- real() 获取父节点 **real 返回父 wtsc**

这两个 api 一定要成对出现，或者不要用的太多了，如果有一些没关掉，别弄出一些找不到的 bug，这两个 api 可以在多个文件内出现，这就是它的意义，你可以隔离一个不规整的作用域

## 主题

主题必须要在 wtsc 声明前定义才会有类型补充（ts 局限）

- 简单定义

定义过程和使用过程都有完整的类型声明

```typescript
const wtsc = defTypeWTSC({
  defThemeKeys(p) {
    // 这里推荐用provide,这样有个默认值使用过程就不会undefined
    // 然后wtsc默认就会忽略掉undefined的项目
    return {
      mainColor: p(rgb(255, 255, 255)),
      mainFontColor:this.provide(rgb(14, 14, 14)),
    }
  },
  themeList: {
    dark: {
      theme1: {
        mainColor: rgb(20, 20, 20),
        mainFontColor: rgb(220, 220, 220),
      },
    },
    bright:
      theme2: {
        mainColor: rgb(255, 255, 255),
        mainFontColor: rgb(0, 0, 0),
      },
  },
})
```

- 简单使用

```typescript
const the = wtsc.mainColor
wtsc.add.background(the.mainColor)

const value = wtsc.inject(the.mainFontColor)
console.log(value.out()) // 'rgb(14, 14, 14)'
```

- 简单切换主题

setTheme 函数中是有类型自动完成的，您不用担心您输入错误，可以放心大胆的切换主题，错误会得到一个警告不用担心，生产环境警告是会被删除的

```typescript
//根据上面定义，下面这句代码类型推演里只有 `'dark’` `'bright'` `'theme1'` `'theme2'`
//默认第一层主题色系在前面
//输入下面会选中暗色主题
//单独输入暗色主题不会修改暗色系中的主题选中情况，下面将默认选中暗色中的第一个主题，如果您以前已经选择了第二个，就会选中第二个主题
wtsc.setTheme('dark')

//输入这个就会选中 `theme1` 主题
wtsc.setTheme('theme1')

//当您在第一个里没输入 dark,第二个只会有 `theme1` 这个选项
wtsc.setTheme('dark', 'theme1')

//当您第一个选中任何一个具体主题后，第二个选项输入任何内容都会报错，如下
wtsc.setTheme('theme2', 任何内容) // 会报错，没有对应的重载
```

## inject()

inject 是一个注入器， 可以简单的注入需要的内容

- @author meke
- @template R
- @param `{InjectKey<R>}` injectKey
- @param `{R} [defau]`
- @return `{\*}` `{(R | undefined)}`
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

## defInjKey()

作用是定义一个 InjectKey

更建议使用包装后的 provide()和 depProvide()这两个 api 你可以当做有默认生成 InjectKey 的功能，provide 自动生成，depProvide 树状结构生成，它们都是从输入的值类型中推断 InjectKey 的类型

- defInjKey
- @author meke
- @export
- @template T
- @param `string` [describe]
- @param `T` [value]
- @return `\*` `InjectKey<T>`

```typescript
const key = wtsc.defInjKey<string>()
console.log(typeof key) // injectkey<string>
```

## provide()

- 传入一个值返回一个`InjectKey`
- @author meke
- @template T
- @param `T` value
- @param `InjectKey<T>` [injectKey=defInjKey('provide')]
- 可以传入一个自定义 Injectkey 这样你可以输入描述等信息
- @return `\*` `InjectKey<T>`
- @memberof Inject

### 简单使用：

```typescript
const key = wtsc.provide('你好')
typeof key //InjectKey<string>
wtsc.inject(key) // '你好'
```

### 约束类型

```typescript
const key = wtsc.provide('你好' as '你好')
typeof key //InjectKey<‘你好’>
wtsc.inject(key) // '你好'

const key1 = wtsc.provide(3 as 3)
//请注意我们告诉了它类型为3，意思就是这个变量只可能是3，其他结果（4，5）都不符合
//更多类型相关 tslang.cn
typeof key1 //InjectKey<3>
```

### 带描述的 key

```typescript
const key = wtsc.provide('你好帅', defInject(''))
key.[IK].toString() // Symbol()
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
wtsc.add.all('inherit').out() // all: inherit;
```

## save()

```typescript
wtsc.add.width(px(20))
const saveKey = wtsc.save()
const stvleValue = wtsc.inject(savekey) // width: 20px;
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
