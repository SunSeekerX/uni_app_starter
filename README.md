# **[uni-app-starter](https://github.com/SunSeekerX/uni-app-starter)**

**一切伟大的行动和思想,都有一个微不足道的开始。**

> uni-app 业务解决集成方案。
>
> 用来记录使用 uni-app 之中出现的问题、踩过的坑、解决业务的写法、工具函数、通用组件。

## 项目亮点

- 代码风格统一：使用 `eslint+prettier+stylelint`集成代码提交格式化检测，避免团队代码风格不一致。
- 业务实现模板：集成 `uni-app` 中常用业务流程处理方案，提供众多优秀实现。
- 无瑕疵：遵循“写代码如写诗”的理念，对每一处的代码进行优化力求结构精简，功能完善。
- 大量多端统一的业务组件：自写大量多端通用的业务组件，减少寻找轮子，造轮子的时间。
- 完美：尽量做到 **no warning, no error.**

## 项目说明

> 因为是 Uni-app 项目全局引入了 [uview](https://www.uviewui.com/) 组件库，可以说是目前最好看最好用的组件库了。

### 组件

#### `c-icon` nvue

自定义图标组件，支持 nvue。nvue 需要配置 `icons.js`，需要配合 `iconfont` 进行使用。

**基本使用**

```html
<template>
  <c-icon name="iconqiehuanyuyan" size="18"></c-icon>
</template>
```

**Props**

| 属性名 | 说明                | 类型             | 默认值  | 可选值       | 平台差异说明                                                                          |
| :----- | :------------------ | :--------------- | :------ | :----------- | :------------------------------------------------------------------------------------ |
| name   | 图标名              | String           | -       | -            | -                                                                                     |
| size   | 字体图标大小        | String \| Number | inherit | -            | -                                                                                     |
| width  | 宽度                | String \| Number | auto    | -            | -                                                                                     |
| height | 高度                | String \| Number | auto    | -            | -                                                                                     |
| color  | 颜色                | String           | #333333 | -            | -                                                                                     |
| rpx    | 是否使用 rpx 单位？ | Boolean          | false   | false / true | -                                                                                     |
| bubble | 是否阻止事件冒泡？  | Boolean          | false   | false / true | 只在 Nvue 生效，H5 阻止事件冒泡需要在组件外套一个 view 将点击事件加到外部的 view 上面 |

**Events**

| 事件名 | 说明      | 回调参数 |
| :----- | :-------- | :------- |
| click  | icon 点击 | -        |

###

## 问题解决

1. 运行到小程序模拟器出现 `Cannot read property 'mark' of undefined` ?

   > 初步判断是引入 `uView` 导致的，点击小程序开发者工具右上角选择详情>本地设置>取消 es6 转 es5

## 更新日志

❗ 本项目正处于并且长期处于开发中。有任何想、功能、bug 都可以提出来，包括不限于

- 想要的组件
- 想要实现的功能
- Bug
- ...

等等，我会尽力集成进来给个示例。💗💗💗

## 发布信息

**发布**

应用名：`UAS - prod`

包名：`cn.yoouu.uni.app.starter.prod`

**开发**

应用名：`Uni-app-starter`

包名：`cn.yoouu.uni.app.starter`

## 鸣谢

本项目参考或直接复制了以下项目的实现

- [uView](https://github.com/YanxinNet/uView)
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin)
