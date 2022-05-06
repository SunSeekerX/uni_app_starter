# windi-css-uni

## 1️⃣ 简介

Github：[https://github.com/SunSeekerX/uni-app-starter/tree/main/packages/windi-css-uni](https://github.com/SunSeekerX/uni-app-starter/tree/main/packages/windi-css-uni)

这是一些 css 的简写类名的库，用于快速开发 uni-app。适用于 vue+nvue 文件。类名的设计参考了 [windicss](https://github.com/windicss/windicss) 的类名。

大部分效果可以参考 [https://cn.windicss.org/guide/](https://cn.windicss.org/guide/) 预览。

在写代码的过程中，写 css 是非常头疼的事情，例如：

1. **命名**；这应该是所有程序员的痛。
2. **写 dom 不能直接写 css**；html 和 css 通常不在一块，需要滑动很长才能找到 css 定义的地方。
3. **很多重复定义**；像 `diaplay: flex;` 这样的代码在 css 中写了太多太多

缺点也很明显

1. **增加了一些项目根本没有用到的 css 类**
2. **可读性不好**
3. **有一定的学习成本和记忆成本**

有舍有得，自行取舍。

## 2️⃣ 快速上手

### 安装

**npm**

```bash
npm i @limm/windi-css-uni
# or
yarn add @limm/windi-css-uni
```

**插件市场**

插件市场地址：[https://ext.dcloud.net.cn/plugin?name=windi-css-uniapp](https://ext.dcloud.net.cn/plugin?name=windi-css-uniapp)

### 导入

~~推荐全部引入，开启 `treeshaking` 会自动裁剪没有用到的类~~，截至目前，css 裁剪没有方案。

`${app}/App.vue` style 标签最上方导入

```scss
// npm 下载
@import '@limm/windi-css-uni';

// npm 下载 - 如果使用了 stylelint
@import '@limm/windi-css-uni/src/index.scss';

// 如果是插件市场导入的
@import '@/uni_modules/windi-css-uniapp/index.scss';
```

**关于大小**

全部压缩之后大概 258KB 左右大小。nvue 下应该不到 200KB。

### 使用

在下面列出的类名前增加 `wd-` 这是全局的前缀，为了防止和其他库或者你自己定义的样式冲突。

```html
<view class="wd-flex-row wd-justify-between wd-items-center wd-leading-34">
  <text class="wd-text-fff wd-text-16 wd-font-bold">{{ item.name }}</text>
</view>
```

## 4️⃣ class

### 通用

#### 排版

|                          | 样式参考                                                                                                                         | 说明       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Font Family**          |                                                                                                                                  |            |
| font-sans                |                                                                                                                                  | !nvue      |
| font-serif               |                                                                                                                                  | !nvue      |
| font-mono                |                                                                                                                                  | !nvue      |
|                          |                                                                                                                                  |            |
| **font-size**            |                                                                                                                                  |            |
| text-{8~48}              | font-size: {8-48}px;                                                                                                             |            |
| text-{8~96}r             | font-size: {8-96}rpx;                                                                                                            |            |
|                          |                                                                                                                                  |            |
| **字体平滑度**           |                                                                                                                                  |            |
| antialiased              | -webkit-font-smoothing: antialiased;<br />-moz-osx-font-smoothing: grayscale;                                                    | !nvue      |
| subpixel-antialiased     | -webkit-font-smoothing: auto;<br />-moz-osx-font-smoothing: auto;                                                                | !nvue      |
|                          |                                                                                                                                  |            |
| **font-style**           |                                                                                                                                  |            |
| italic                   | font-style: italic;                                                                                                              |            |
| not-italic               | font-style: normal;                                                                                                              |            |
|                          |                                                                                                                                  |            |
| **font-weight**          |                                                                                                                                  |            |
| font-{100-900}           | font-weight: {100-900};                                                                                                          | 步长为 100 |
|                          |                                                                                                                                  |            |
| **连字符**               |                                                                                                                                  |            |
| hyphens-none             | hyphens: none;                                                                                                                   | !nvue      |
| hyphens-manual           | hyphens: manual;                                                                                                                 | !nvue      |
| hyphens-auto             | hyphens: auto;                                                                                                                   | !nvue      |
|                          |                                                                                                                                  |            |
| **行高**                 |                                                                                                                                  |            |
| leading-{8-48}           | line-height: {8-48}px;                                                                                                           |            |
| leading-{8-96}r          | line-height: {8-96}rpx;                                                                                                          |            |
|                          |                                                                                                                                  |            |
| **文本对齐**             |                                                                                                                                  |            |
| text-left                | text-align: left;                                                                                                                |            |
| text-center              | text-align: center;                                                                                                              |            |
| text-right               | text-align: right;                                                                                                               |            |
| text-justify             | text-align: justify;                                                                                                             | !nvue      |
|                          |                                                                                                                                  |            |
| **文本颜色**             |                                                                                                                                  |            |
| text-transparent         | color: transparent;                                                                                                              | !nvue      |
| text-current             | color: currentColor;                                                                                                             | !nvue      |
| text-000<br />text-black | color: #000;                                                                                                                     |            |
| text-fff<br />text-white | color: #fff;                                                                                                                     |            |
| text-{100~900}           | color: #{111-999};                                                                                                               | 步长为 111 |
|                          |                                                                                                                                  |            |
| **垂直对齐**             |                                                                                                                                  |            |
| align-baseline           | vertical-align: baseline;                                                                                                        | !nvue      |
| align-top                | vertical-align: top;                                                                                                             | !nvue      |
| align-middle             | vertical-align: middle;                                                                                                          | !nvue      |
| align-bottom             | vertical-align: bottom;                                                                                                          | !nvue      |
| align-text-top           | vertical-align: text-top;                                                                                                        | !nvue      |
| align-text-bottom        | vertical-align: text-bottom;                                                                                                     | !nvue      |
|                          |                                                                                                                                  |            |
| **文本溢出**             |                                                                                                                                  |            |
| truncate                 | text-overflow: ellipsis;<br />!nvue<br />overflow: hidden;<br />-o-text-overflow: ellipsis;                                      |            |
| overflow-ellipsis        | text-overflow: ellipsis;<br />!nvue<br />-o-text-overflow: ellipsis;                                                             |            |
| overflow-clip            | !nvue<br />overflow: clip;<br />nvue<br />text-overflow: clip;                                                                   |            |
|                          |                                                                                                                                  |            |
| **行数**                 |                                                                                                                                  |            |
| lines-{1~8}              | nvue<br />lines: {1~8};<br />!nvue<br />display: -webkit-box;<br />-webkit-box-orient: vertical;<br />-webkit-line-clamp: {1~8}; |            |
|                          |                                                                                                                                  |            |
| **空格**                 |                                                                                                                                  |            |
| whitespace-normal        | white-space: normal;                                                                                                             | !nvue      |
| whitespace-nowrap        | white-space: nowrap;                                                                                                             | !nvue      |
| whitespace-pre           | white-space: pre;                                                                                                                | !nvue      |
| whitespace-pre-line      | white-space: pre-line;                                                                                                           | !nvue      |
| whitespace-pre-wrap      | white-space: pre-wrap;                                                                                                           | !nvue      |
|                          |                                                                                                                                  |            |
| **断字**                 |                                                                                                                                  |            |
| break-normal             | overflow-wrap: normal;<br />word-break: normal;                                                                                  | !nvue      |
| break-words              | overflow-wrap: break-word;                                                                                                       | !nvue      |
| break-all                | !nvue: word-break: break-all;                                                                                                    | !nvue      |

### 背景

|                      | 样式参考                           | 说明       |
| -------------------- | ---------------------------------- | ---------- |
| **背景固定**         |                                    |            |
| bg-fixed             | background-attachment: fixed;      | !nvue      |
| bg-local             | background-attachment: local;      | !nvue      |
| bg-scroll            | background-attachment: scroll;     | !nvue      |
|                      |                                    |            |
| **背景裁剪**         |                                    |            |
| bg-clip-border       | background-clip: border-box;       | !nvue      |
| bg-clip-padding      | background-clip: padding-box;      | !nvue      |
| bg-clip-content      | background-clip: content-box;      | !nvue      |
|                      |                                    |            |
| **背景颜色**         |                                    |            |
| bg-transparent       | background-color: transparent;     |            |
| bg-current           | background-color: currentColor;    | !nvue      |
| bg-fff<br />bg-white | background-color: #fff;            |            |
| bg-000<br />bg-black | background-color: #000;            |            |
| bg-{111-999}         | background-color: #{111-999};      | 步长为 111 |
|                      |                                    |            |
| **背景图像位置**     |                                    |            |
| bg-bottom            | background-position: bottom;       | !nvue      |
| bg-center            | background-position: center;       | !nvue      |
| bg-left              | background-position: left;         | !nvue      |
| bg-left-bottom       | background-position: left bottom;  | !nvue      |
| bg-left-top          | background-position: left top;     | !nvue      |
| bg-right             | background-position: right;        | !nvue      |
| bg-right-bottom      | background-position: right bottom; | !nvue      |
| bg-right-top         | background-position: right top;    | !nvue      |
| bg-top               | background-position: top;          | !nvue      |
|                      |                                    |            |
| **背景图像重复**     |                                    |            |
| bg-repeat            | background-repeat: repeat;         | !nvue      |
| bg-repeat-x          | background-repeat: repeat-x;       | !nvue      |
| bg-repeat-y          | background-repeat: repeat-y;       | !nvue      |
| bg-repeat-round      | background-repeat: round;          | !nvue      |
| bg-repeat-space      | background-repeat: space;          | !nvue      |
|                      |                                    |            |
| **背景图像大小**     |                                    |            |
| bg-auto              | background-size: auto;             | !nvue      |
| bg-cover             | background-size: cover;            | !nvue      |
| bg-contain           | background-size: contain;          | !nvue      |
|                      |                                    |            |
| **背景图像原点**     |                                    |            |
| bg-origin-border     | background-origin: border-box;     | !nvue      |
| bg-origin-padding    | background-origin: padding-box;    | !nvue      |
| bg-origin-content    | background-origin: content-box;    | !nvue      |

### 边框

|                              | 样式参考                        | 说明  |
| ---------------------------- | ------------------------------- | ----- |
| **边框圆角**                 |                                 |       |
| rounded-none                 | border-radius: 0px;             |       |
| rounded-full                 | border-radius: 9999px;          |       |
| rounded-{0~32}               | border-radius: {0~32}px;        |       |
| rounded-{0~64}r              | border-radius: {0~64}rpx;       |       |
| rounded-{0~100}p             | border-radius: {0~100}%;        |       |
|                              |                                 |       |
| **边框宽度**                 |                                 |       |
| border-{0-10}                | border-width: {0-10}px;         |       |
| border-{0-20}r               | border-width: {0-20}rpx;        |       |
| border-top-{0-10}            | border-top-width: {0-10}px;     |       |
| border-top-{0-20}r           | border-top-width: {0-20}rpx;    |       |
| border-right-{0-10}          | border-right-width: {0-10}px;   |       |
| border-right-{0-20}r         | border-right-width: {0-20}rpx;  |       |
| border-bottom-{0-10}         | border-bottom-width: {0-10}px;  |       |
| border-bottom-{0-20}r        | border-bottom-width: {0-20}rpx; |       |
| border-left-{0-10}           | border-left-width: {0-10}px;    |       |
| border-left-{0-20}r          | border-left-width: {0-20}rpx;   |       |
|                              |                                 |       |
| **边框颜色**                 |                                 |       |
| border-transparent           | border-color: transparent;      |       |
| border-current               | border-color: currentColor;     | !nvue |
| border-fff<br />border-white | border-color: #fff;             |       |
| border-000<br />border-black | border-color: #000;             |       |
| border-{111-999}             | border-color: #{111-999};       |       |
|                              |                                 |       |
| **边框样式**                 |                                 |       |
| border-solid                 | border-style: solid;            |       |
| border-dashed                | border-style: dashed;           |       |
| border-dotted                | border-style: dotted;           |       |
| border-double                | border-style: double;           | !nvue |
| border-none                  | border-style: none;             | !nvue |

### 特效

|                 | **样式参考**      | 说明     |
| --------------- | ----------------- | -------- |
| **Opacity**     |                   |          |
| opacity-{0~100} | opacity: {0~100}; | 步长为 5 |

### 布局

#### Display

|              | **样式参考**           | 说明  |
| ------------ | ---------------------- | ----- |
| **块级元素** |                        |       |
| block        | display: block;        | !nvue |
| inline-block | display: inline-block; | !nvue |
| inline       | display: inline;       | !nvue |
| contents     | display: contents;     | !nvue |
| hidden       | display: none;         | !nvue |
| visible      | visibility: visible;   | !nvue |
| invisible    | visibility: hidden;    | !nvue |

#### Flexbox

|                   | **样式参考**                                                                                                                                                                                                   | 说明  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **Flex**          |                                                                                                                                                                                                                |       |
| flex              | display: flex !important;                                                                                                                                                                                      | !nvue |
| flex-center       | nvue: <br />justify-content: center !important;<br />align-items: center !important;<br />!nvue: <br />display: flex !important;<br />justify-content: center !important;<br />align-items: center !important; |       |
|                   |                                                                                                                                                                                                                |       |
| **Flex 方向**     |                                                                                                                                                                                                                |       |
| flex-row          | flex-direction: row !important;                                                                                                                                                                                |       |
| flex-row-reverse  | flex-direction: row-reverse !important;                                                                                                                                                                        |       |
| flex-col          | flex-direction: column !important;                                                                                                                                                                             |       |
| flex-col-reverse  | flex-direction: column-reverse !important;                                                                                                                                                                     |       |
|                   |                                                                                                                                                                                                                |       |
| **Flex Wrap**     |                                                                                                                                                                                                                |       |
| flex-wrap         | flex-wrap: wrap !important;                                                                                                                                                                                    |       |
| flex-wrap-reverse | flex-wrap: wrap-reverse !important;                                                                                                                                                                            |       |
| flex-nowrap       | flex-wrap: nowrap !important;                                                                                                                                                                                  |       |
|                   |                                                                                                                                                                                                                |       |
| **Flex Stretch**  |                                                                                                                                                                                                                |       |
| flex-auto         | flex: 1 1 auto;                                                                                                                                                                                                | !nvue |
| flex-initial      | flex: 0 1 auto;                                                                                                                                                                                                | !nvue |
| flex-none         | flex: none;                                                                                                                                                                                                    | !nvue |
| flex-{1~16}       | flex: {1-16} !important;                                                                                                                                                                                       |       |
|                   |                                                                                                                                                                                                                |       |
| **Flex Grow**     |                                                                                                                                                                                                                |       |
| flex-grow-0       | flex-grow: 0;                                                                                                                                                                                                  | !nvue |
| flex-grow         | flex-grow: 1;                                                                                                                                                                                                  | !nvue |
|                   |                                                                                                                                                                                                                |       |
| **Flex Shrink**   |                                                                                                                                                                                                                |       |
| flex-shrink-0     | flex-shrink: 0;                                                                                                                                                                                                | !nvue |
| flex-shrink       | flex-shrink: 1;                                                                                                                                                                                                | !nvue |

#### Posiioning

|                                 | **样式参考**                                                     | 说明  |
| ------------------------------- | ---------------------------------------------------------------- | ----- |
|                                 |                                                                  |       |
| **Order**                       |                                                                  |       |
| order-first                     | order: -9999;                                                    | !nvue |
| order-last                      | order: 9999;                                                     | !nvue |
| order-none                      | order: 0;                                                        | !nvue |
| order-{0~16}                    | order: {0~16};                                                   | !nvue |
|                                 |                                                                  |       |
| **Justify Content**             |                                                                  |       |
| justify-start                   | justify-content: flex-start !important;                          |       |
| justify-end                     | justify-content: flex-end;!important                             |       |
| justify-center                  | justify-content: center !important;                              |       |
| justify-between                 | justify-content: space-between !important;                       |       |
| justify-around                  | justify-content: space-around;                                   | !nvue |
| justify-evenly                  | justify-content: space-evenly;                                   | !nvue |
|                                 |                                                                  |       |
| **Justify Items**               |                                                                  |       |
| justify-items-auto              | justify-items: auto;                                             |       |
| justify-items-start             | justify-items: start;                                            |       |
| justify-items-end               | justify-items: end;                                              |       |
| justify-self-center             | justify-self: center;                                            |       |
| justify-self-stretch            | justify-self: stretch;                                           |       |
|                                 |                                                                  |       |
| **Align Items**                 |                                                                  |       |
| items-start                     | align-items: flex-start !important;                              |       |
| items-end                       | align-items: flex-end;!important                                 |       |
| items-center                    | align-items: center;!important                                   |       |
| items-baseline                  | align-items: baseline;                                           | !nvue |
| items-stretch                   | align-items: stretch !important;                                 |       |
|                                 |                                                                  |       |
| **Align Self**                  |                                                                  |       |
| self-auto                       | align-self: auto;                                                | !nvue |
| self-start                      | align-self: flex-start;                                          | !nvue |
| self-end                        | align-self: flex-end;                                            | !nvue |
| self-center                     | align-self: center;                                              | !nvue |
| self-stretch                    | align-self: stretch;                                             | !nvue |
|                                 |                                                                  |       |
| **Place Content**               |                                                                  |       |
| place-content-center            | place-content: center;                                           | !nvue |
| place-content-start             | place-content: start;                                            | !nvue |
| place-content-end               | place-content: end;                                              | !nvue |
| place-content-between           | place-content: space-between;                                    | !nvue |
| place-content-around            | place-content: space-around;                                     | !nvue |
| place-content-evenly            | place-content: space-evenly;                                     | !nvue |
| place-content-stretch           | place-content: stretch;                                          | !nvue |
|                                 |                                                                  |       |
| **Place Items**                 |                                                                  |       |
| place-items-auto                | place-items: auto;                                               | !nvue |
| place-items-start               | place-items: start;                                              | !nvue |
| place-items-end                 | place-items: end;                                                | !nvue |
| place-items-center              | place-items: center;                                             | !nvue |
| place-items-stretch             | place-items: stretch;                                            | !nvue |
|                                 |                                                                  |       |
| **Place Self**                  |                                                                  |       |
| place-self-auto                 | place-self: auto;                                                | !nvue |
| place-self-start                | place-self: start;                                               | !nvue |
| place-self-end                  | place-self: end;                                                 | !nvue |
| place-self-center               | place-self: center;                                              | !nvue |
| place-self-stretch              | place-self: stretch;                                             | !nvue |
|                                 |                                                                  |       |
| **Position**                    |                                                                  |       |
| static                          | position: static;                                                | !nvue |
| fixed                           | position: fixed !important;                                      |       |
| absolute                        | position: absolute !important;                                   |       |
| relative                        | position: relative !important;                                   |       |
| sticky                          | position: sticky !important;                                     |       |
|                                 |                                                                  |       |
| **Top / Right / Bottom / Left** |                                                                  |       |
| inset-0                         | top: 0px;<br />right: 0px;<br />bottom: 0px;<br />left: 0px;     |       |
| inset-px                        | top: 1px;<br />right: 1px;<br />bottom: 1px;<br />left: 1px;     |       |
| inset-auto                      | top: auto;<br />right: auto;<br />bottom: auto;<br />left: auto; |       |
| inset-full                      | top: 100%;<br />right: 100%;<br />bottom: 100%;<br />left: 100%; |       |
| top-{0-50}                      | top: {0-50}px;                                                   |       |
| top-{1-100}r                    | top: {1-100}rpx;                                                 |       |
| right-{0-50}                    | right: {0-50}px;                                                 |       |
| right-{1-100}r                  | right: {1-100}rpx;                                               |       |
| bottom-{0-50}                   | bottom: {0-50}px;                                                |       |
| bottom-{1-100}r                 | bottom: {1-100}rpx;                                              |       |
| left-{0-50}                     | left: {0-50}px;                                                  |       |
| left-{1-100}r                   | left: {1-100}rpx;                                                |       |
|                                 |                                                                  |       |
| **Floats**                      |                                                                  |       |
| float-right                     | float: right;                                                    | !nvue |
| float-left                      | float: left;                                                     | !nvue |
| float-none                      | float: none;                                                     | !nvue |
|                                 |                                                                  |       |
| **Clear**                       |                                                                  |       |
| clear-right                     | clear: right;                                                    | !nvue |
| clear-left                      | clear: left;                                                     | !nvue |
| clear-both                      | clear: both;                                                     | !nvue |
| clear-none                      | clear: none;                                                     | !nvue |
|                                 |                                                                  |       |
| **Object Fit**                  |                                                                  |       |
| object-contain                  | object-fit: contain;                                             | !nvue |
| object-cover                    | object-fit: cover;                                               | !nvue |
| object-fill                     | object-fit: fill;                                                | !nvue |
| object-none                     | object-fit: none;                                                | !nvue |
| object-scale-down               | object-fit: scale-down;                                          | !nvue |
|                                 |                                                                  |       |
| **Object Position**             |                                                                  |       |
| object-bottom                   | object-position: bottom;                                         | !nvue |
| object-center                   | object-position: center;                                         | !nvue |
| object-left                     | object-position: left;                                           | !nvue |
| object-left-bottom              | object-position: left bottom;                                    | !nvue |
| object-left-top                 | object-position: left top;                                       | !nvue |
| object-right                    | object-position: right;                                          | !nvue |
| object-right-bottom             | object-position: right bottom;                                   | !nvue |
| object-right-top                | object-position: right top;                                      | !nvue |
| object-top                      | object-position: top;                                            | !nvue |
|                                 |                                                                  |       |
| **Z-Index**                     |                                                                  |       |
| z-auto                          | z-index: auto;                                                   | !nvue |
| z-{0~16}                        | z-index: {0~16} !important;                                      |       |

#### 尺寸

|                | **样式参考**             | 说明 |
| -------------- | ------------------------ | ---- |
| **width**      |                          |      |
| w-{0~750}r     | width: {0~750}rpx;       |      |
| w-{0~500}      | width: {0~500}px;        |      |
| w-{0~100}p     | width: {0~100}%;         |      |
|                |                          |      |
| **height**     |                          |      |
| h-{0~750}r     | height: {0~750}rpx;      |      |
| h-{0~500}      | height: {0~500}px;       |      |
| h-{0~100}p     | height: {0~100}%;        |      |
|                |                          |      |
| **Box Sizing** |                          |      |
| box-border     | box-sizing: border-box;  |      |
| box-content    | box-sizing: content-box; |      |

### 间隔

|             | **样式参考**                                                | 说明 |
| ----------- | ----------------------------------------------------------- | ---- |
| **Padding** |                                                             |      |
| pt-{0~100}  | padding-top: {0~100}px;                                     |      |
| pt-{1~200}r | padding-top: {1~200}rpx;                                    |      |
| pr-{0~100}  | padding-right: {0~100}px;                                   |      |
| pr-{1~200}r | padding-right: {1~200}rpx;                                  |      |
| pb-{0~100}  | padding-bottom: {0~100}px;                                  |      |
| pb-{1~200}r | padding-bottom: {1~200}rpx;                                 |      |
| pl-{0~100}  | padding-left: {0~100}px;                                    |      |
| pl-{1~200}r | padding-left: {1~200}rpx;                                   |      |
| p-{0-100}   | padding: {0~100}px;                                         |      |
| p-{1-200}r  | padding: {1~200}rpx;                                        |      |
| px-{0-100}  | padding-right: {0\~100}px;<br />padding-left: {0\~100}px;   |      |
| px-{1-200}r | padding-right: {1\~200}rpx;<br />padding-left: {1\~200}rpx; |      |
| py-{0-100}  | padding-top: {0\~100}px;<br />padding-bottom: {0\~100}px;   |      |
| py-{1-200}r | padding-top: {1\~200}rpx;<br />padding-bottom: {1\~200}rpx; |      |
|             |                                                             |      |
| **Margin**  |                                                             |      |
| mt-{0~100}  | margin-top: {0~100}px;                                      |      |
| mt-{1~200}r | margin-top: {1~200}rpx;                                     |      |
| mr-{0~100}  | margin-right: {0~100}px;                                    |      |
| mr-{1~200}r | margin-right: {1~200}rpx;                                   |      |
| mb-{0~100}  | margin-bottom: {0~100}px;                                   |      |
| mb-{1~200}r | margin-bottom: {1~200}rpx;                                  |      |
| ml-{0~100}  | margin-left: {0~100}px;                                     |      |
| ml-{1~200}r | margin-left: {1~200}rpx;                                    |      |
| m-{0-100}   | margin: {0~100}px;                                          |      |
| m-{1-200}r  | margin: {1~200}rpx;                                         |      |
| mx-{0-100}  | margin-right: {0\~100}px;<br />margin-left: {0\~100}px;     |      |
| mx-{1-200}r | margin-right: {1\~200}rpx;<br />margin-left: {1\~200}rpx;   |      |
| my-{0-100}  | margin-top: {0\~100}px;<br />margin-bottom: {0\~100}px;     |      |
| my-{1-200}r | margin-top: {1\~200}rpx;<br />margin-bottom: {1\~200}rpx;   |      |
| mx-auto     | margin-right: auto;<br />margin-left: auto;                 |      |

## 5️⃣ 问题？

1. 为什么没有 `max-width` 、`min-width`、`max-height`、`min-height` 等类？

   付出 > 收益，性价比不高，项目中用到的地方不多。增加之后文件增大了 100 多 kb。没有必要。

## 6️⃣ 更新日志（CHANGELOG）

### 0.1.0

- 文档修正

### 0.0.8

- 文档增加插件市场下载方式安装使用，支持 `uni_modules`

### 0.0.7

- 移除 nvue 下的断字相关的类，避免警告
  - break-normal
  - break-words
  - break-all

### 0.0.6

- 文档颜色描述修正

### 0.0.5

- 修正文本溢出行数无效

### 0.0.4

- 增加文本溢出功能类
- 增加 nvue 下 lines-{1~8} 功能类

### 0.0.3

- 文档颜色描述修正
- 增加边框颜色 border-black
- 增加边框颜色 border-{000~999}

### 0.0.2

- 增加背景色 bg-{000~999}
- 增加背景色 bg-black
- 增加文字颜色 text-fff、text-white
- 增加文字颜色 text-black

### 0.0.1

- 第一个可用版本
