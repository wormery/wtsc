# WTSC
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## 简介

这个项目帮助你生成 vue StyleValue 对象，更简单的使用它

## 快速开始

### 引入

**使用 npm 安装:**

> npm install @wormery/wtsc

**使用 pnpm 安装:**

> pnpm install @wormery/wtsc

### 使用

```typescript
//引入
import { createWTSC } from "@wormery/wtsc";

//创建实体
const wtsc = createWTSC();

//使用测试
const style = wtsc.add.width("20px").add.height("30px").return();
//打印测试
console.log(style);
//printed: { width: '20px', height: '30px' }
```

## 为什么要使用此插件？

可以补全您的代码

如图：

![AutomatiCompletion](https://raw.githubusercontent.com/wormery/wtsc/main/doc/imgs/AutomatiCompletion.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mekefly"><img src="https://avatars.githubusercontent.com/u/64407174?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mekefly</b></sub></a><br /><a href="https://github.com/wormery/wtsc/commits?author=mekefly" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!