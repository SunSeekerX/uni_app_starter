# windi-css-uni

## 1️⃣ 简介

Github：[https://github.com/SunSeekerX/uni-app-starter/tree/main/packages/windi-css-uni](https://github.com/SunSeekerX/uni-app-starter/tree/main/packages/windi-css-uni)

这是一些 css 的简写类名的库，用于快速开发 uni-app。适用于 vue+nvue 文件。类名的设计参考了 [windicss](https://github.com/windicss/windicss) 的类名。

大部分效果可以参考 [https://cn.windicss.org/utilities/typography.html#font-size](https://cn.windicss.org/utilities/typography.html#font-size) 预览。

在写代码的过程中，写 css 是非常头疼的事情，例如：

1. **命名**；这应该是所有程序员的痛。
2. **写 dom 不能直接写 css**；html 和 css 通常不在一块，需要滑动很长才能找到 css 定义的地方。
3. **很多重复定义**；像 `diaplay: flex;` 这样的代码在 css 中写了太多太多

[https://cn.windicss.org/](https://cn.windicss.org/)

## 2️⃣ 快速上手

### 安装

```bash
npm i @limm/windi-css-uni
# or
yarn add @limm/windi-css-uni
```

### 导入

推荐全部引入，开启 `treeshaking` 会自动裁剪没有用到的类

`${app}/App.vue`

```scss
@import '@limm/windi-css-uni';
```

### 使用



## 4️⃣ class

### 排版

#### Font Family

- font-sans
- font-serif
- font-mono

#### 字体大小

| text-{8-100}  | font-size: {8-100}px;    |
| ------------- | ------------------------ |
| text-{8-100}r | font-size: {8-100}rpx;   |
| lh-{8-100}    | line-height: {8-100}px;  |
| lh-{8-100}r   | line-height: {8-100}rpx; |

#### 字体平滑度

- antialiased
- subpixel-antialiased

#### 字体样式

- italic
- not-italic

## 5️⃣ 更新日志（CHANGELOG）
