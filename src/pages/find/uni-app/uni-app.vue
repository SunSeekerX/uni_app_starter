<template>
  <view>
    <!-- 默认用法 -->
    <zero-markdown-view :markdown="content" />
  </view>
</template>

<script>
export default {
  name: 'FindUniApp',
  data() {
    return {
      content: `# Uni-app 原生插件

## 📌 演示 APP

插件需要一些 申请的 key，可能已经过期。实际只要能启动就代表能使用。

### Android

| 版本号 | 二维码 |
| :-: | :-: |
| 2.1.0 | <img src="https://static.yoouu.cn/imgs/doc/pic-go/uni-plugin-android-starter-app-release_v2.1.0-210.png" alt="app-release_v2.1.0-210" style="zoom: 50%;" /> |
| 1.0 | <img src="https://static.yoouu.cn/imgs/doc/pic-go/uni-plugin-android-starterv1.0-100.png" style="zoom:50%;" /> |

### IOS

没有证书

## 📌 海康威视 SADP SDK_IOS - Super-Module-HKWS

文档地址：[super-module-hkws-sadp.md](./super-module-hkws-sadp.md)

插件地址：[https://ext.dcloud.net.cn/plugin?id=10241](https://ext.dcloud.net.cn/plugin?id=10241)

## 📌 Crisp 客服

文档地址：[crisp.md](./crisp.md)

插件地址：[https://ext.dcloud.net.cn/plugin?id=5790](https://ext.dcloud.net.cn/plugin?id=5790)

截图预览：

| IOS | Android |
| --- | --- |
| <img src="https://static.yoouu.cn/imgs/2021/pic-go/crisp-ios-screenshot.png" width="300" /> | <img src="https://static.yoouu.cn/imgs/2021/pic-go/crisp-android-screenshot.jpeg" width="300"/> |

## 📌 Geetest 极验

文档地址：[geetest.md](./geetest.md)

插件地址：[https://ext.dcloud.net.cn/plugin?id=5824](https://ext.dcloud.net.cn/plugin?id=5824)

截图预览：

| IOS | Android |
| --- | --- |
| <img src="https://static.yoouu.cn/imgs/2021/pic-go/geetest-ios1.jpg" width="300" /> | <img src="https://static.yoouu.cn/imgs/2021/pic-go/geetest-android1.jpeg" width="300" /> |

## 📌 Screenshot 截屏监听

文档地址：[screenshot-listen.md](./screenshot-listen.md)

插件地址：[https://ext.dcloud.net.cn/plugin?id=5791](https://ext.dcloud.net.cn/plugin?id=5791)

截图预览：

| IOS | Android |
| --- | --- |
| <img src="https://static.yoouu.cn/imgs/2021/pic-go/screenshot-listen-ios-screenshot.jpg" width="300" /> | <img src="https://static.yoouu.cn/imgs/2021/pic-go/screenshot-listen-android-screenshot.jpeg" width="300" /> |

## 📌 SuperWebp

文档地址：[superwebp.md](./superwebp.md)

插件地址：[https://ext.dcloud.net.cn/plugin?id=7679](https://ext.dcloud.net.cn/plugin?id=7679)

截图预览：

| Android |
| --- |
| <img src="https://static.yoouu.cn/imgs/doc/front-end/uni-app-nativeplugins/202203221053019.webp" style="zoom:33%;" /> |

## 📌 Sensetime 商汤人脸识别

插件需要授权文件，需要单独定制。

文档地址：[sensetime.md](./sensetime.md)

插件地址：暂无

## 📌 Jumio kyc

插件需要授权文件，需要单独定制。

文档地址：[jumio.md](./jumio.md)

插件地址：暂无
`,
    }
  },
}
</script>

<style lang="scss" scoped></style>
