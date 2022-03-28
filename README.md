# 简介

WTSC 主要功能是管理主题切换，生成 css，并响应式更改，目标是当你切换主题后，不管是 React 还是 vue2 vue3 都可以响应更改主题

## 预览

可以补全您的代码

如图：

![](https://github.com/wormery/wtsc/blob/dev/doc/imgs/2022-03-24_15-26-57.png)

## 快速开始

1. 引入

**使用 npm 安装:**

> npm install @wormery/wtsc

**使用 pnpm 安装:**

> pnpm install @wormery/wtsc

2. 使用

```typescript
//引入
import { defWTSC } from '@wormery/wtsc'
const wtsc = defWTSC({})

//使用测试
const style = wtsc.add.width(px(20)).add.height(PE(30)).out()

//打印测试
console.log(style) // width: 20px;height: 30%;

//使用测试
const class = wtsc
    .add.height(px(61))
    .add.width(px(100))
    .add.background(color)
    .class('love')
    .add.background(createHoverColor(color))
    .pseudo(':hover')
    .add.background(createPressedColor(color))
    .pseudo(':active')
    .out()

//打印测试
console.log(class) // root-love
```

## [官方文档](https://wormery.github.io/wtsc)

## [更新记录](https://github.com/wormery/wtsc/blob/dev/CHANGELOG.md)

## 版本说明

项目处于开发阶段，API 随时变更
