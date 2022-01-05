# WTSC

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
