# markrgba-css

## 1️⃣ 简介

Github：[https://github.com/SunSeekerX/markrgba-css](https://github.com/SunSeekerX/markrgba-css)

原作者：[https://gitee.com/CLQing/MarkrgbaCss_UniApp](https://gitee.com/CLQing/MarkrgbaCss_UniApp)

这是一些 css 的简写类名的库，用于开发 uni-app。适用于 vue+nvue 文件。

在写代码的过程中，写 css 是非常头疼的事情，例如：

1. **命名**；这应该是所有程序员的痛。
2. **写 dom 不能直接写 css**；html 和 css 通常不在一块，需要滑动很长才能找到 css 定义的地方。
3. **很多重复定义**；像 `diaplay: flex;` 这样的代码在 css 中写了太多太多

想写的标准规范。找了 bem 规范，实际用起来非常不方便。因为是结合 scss，如果我用了 & 那我我在文档中搜索 css 定义的地方非常不方便。

偶尔发现了类似 `fd-r pt-10 w-150 h-80 fw-w pr-15` 这样的写法。一开始看起来非常的乱，无法维护。

当我理解了之后真香！这就是经验的结晶。上面的意思是

```scss
.fd-r {
  flex-direction: row;
}
.pt-10 {
  padding-top: 10rpx;
}
.w-150 {
  width: 150rpx;
}
.h-80 {
  height: 80rpx;
}
.fw-w {
  flex-wrap: wrap;
}
.pr-15 {
  padding-right: 15rpx;
}
```

现在我的代码：

![hx.png](./assets/hx.png)

## 2️⃣ 快速上手

### 安装

```bash
npm i @limm/markrgba-css
```

### 导入

`${app}/App.vue`

```scss
@import '@limm/markrgba-css';
```

### 使用

就是简介图上直接添加 class 就行了。

## 4️⃣ class

|           |                           |     |
| :-------: | :-----------------------: | :-: |
| .bw-${x}  |    border-width: xpx;     |     |
| .bw-${x}r |    border-width: xrpx;    |     |
| .btw-${x} | border-top-width: ${x}px; |     |

## 5️⃣ 更新日志（CHANGELOG）

### 1.0.0

**功能（Features）**

1. 增加 `qq-` 为前缀，防止冲突，为什么为 `qq-` ？，纯粹为了方便！好按到。
2. 颜色由一位数改为三位数，例如 `c-1` 改为 `qq-c-111`
3.

### 0.7.0

**功能（Features）**

- 增加 `z-1` 到 `z-100` 的 `z-index: n;` 类

### 0.5.0

BREAKING CHANGES

- w-xp => wp-x
- 移除 nvue 直接引入就能使用

## 迁移

### 从 0.x 迁移

0.x 以后的版本的 class 增加了 `qq-` 为前缀，防止和自定义或其他的 css 库冲突。现在列出需要修改的类名方便全局查找替换。

- {x} 代表可变数字，搜索前部分就行
- [r] 代表可选 rpx 单位

| 原来的类  | 修改后为   | 说明                 |
| --------- | ---------- | -------------------- |
|           |            |                      |
| bbw-{x}   | qq-bw-{x}  | borderw: {x};        |
| btw-{x}   | qq-btw-{x} | 外上边框             |
| p-all-{x} | qq-p-{x}   | 内边距               |
| p-{x}-0   | qq-py-{x}  | 上下内边距，左右为 0 |
| p-0-{x}   | qq-px-{x}  | 左右内边距，上下为 0 |
| m-all-{x} | qq-m-{x}   | 外边距               |

## 用到的类

bw-
