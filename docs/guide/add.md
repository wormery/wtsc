# add

add 的作用是添加 css，也是核心功能之一

例如：

```typescript
wtsc.add.background('#ffffff').out()

// background: #ffffff;
```

add 同时还是一个函数

```typescript
wtsc.add('background', '#ffffff').out()

// background: #ffffff;
```

不同的是，函数式的 api 目前不支持更强的类型声名，默认为最大的可处理 AddStyleValue 类型

## 类型声明

在使用 addapi 时将会拥有类型声明，如果你输错了将会警告

例如：

```javascript
wtsc.add.background('ffffff').out() // 这将会报错
```

## 类型提示

如果您输入一部分将会除发类型的提示并可以自动完成

例如：

![](https://cdn.jsdelivr.net/gh/aFlyingMothDartsIntoTheFire/images@main/utils/images/16497430146051649743013849.png)

![](https://cdn.jsdelivr.net/gh/aFlyingMothDartsIntoTheFire/images@main/utils/images/16497431556051649743155090.png)

![](https://cdn.jsdelivr.net/gh/aFlyingMothDartsIntoTheFire/images@main/utils/images/16497433156051649743315066.png)

## AddStyleValue

AddStyleValue 是 add 可接受的类型它可以是

- [AddRest](#AddRest) 基本
- Array<[AddRest](#AddRest)> 来自与 addRest 的数组，这个数组代表一组 css 例如`transition: border 1s ease, background 1s ease`

## AddRest

AddRest 是一个 [AddValue](#AddValue) 可接受参数的数组类型，也是 addApi 可处理的最大类型

她的值可以是

- ...rest:Array<[AddValue](#addValue)>

## AddValue

她可能是以下选项之一

- number
- string
- String
- [OutValue](#OutValue)
- InjectKey<[AddValue](#addValue)>

## OutValue

她是一个接口，她要求有以下函数构成

- out():string
