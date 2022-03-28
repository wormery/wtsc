# 介绍

## WTSC 是什么？

WTSC 读音/WTSC/，WTSC 是一个 ts 生成 CSS 的框架，包括 css 缓存生成处理，效率优秀符合直觉的 CSS in TS 的解决方案,TSC ts 生成 css，项目起名时并没想到 WTSC 会在百度搜成‘无痛生产’，起初并没有恶搞成分。

## 起步

[安装](installation.md)

::: tip
官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的基础知识。如果你刚开始学习前端开发，这也许可以，但是可能会让您感觉到某些困惑
:::

尝试 Vue.js 最简单的方法是使用 [例子](#例子)，你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。

## 例子

我们可以使用 wtsc 改变一个 div 的颜色

可以在一个 vue 项目中添加一个文件

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import demo2 from '../components/demo-2.vue'
import demo3 from '../components/demo-3.vue'
</script>

<HelloWorld/>

::: details Click me to view the code

<<< @/components/HelloWorld.vue {2-8,12-13}

:::

## 进阶

还是刚才的方块，我们应该怎么增加伪元素呢？

很简单只需要像下面这样

<demo2/>

::: details Click me to view the code

<<< @/components/demo-2.vue {3,7-9}

:::

### 为什么第二个方法要改变第 3 行呢？

因为行内 style 不支持 hover 语法

::: tip 注意

1. 当添加 wtsc.class()方法后 out()将显式的输出 className
2. 当 out 前面有未被输出的语句块，将会自动添加到 class 主 css 中去

:::

### 添加点击变色

<demo3/>

::: details Click me to view the code

<<< @/components/demo-3.vue {10,11}

:::

::: tip 注意
如果您创建了多个根级 wtsc 他们的存储和隔离全部指向相同的内存空间，变化的只有您传过去的一部分初始化方法，比如主题，并且您定义的两个 wtsc 不相等（defWTSC() != defWTSC()），如果您觉得这样的 api 不友好的话，可以提出交流我们会改成隔离状态
:::
