---
title: 简介
---

# utools

适合 uni-app 开发者的工具包，旨在作为开发 uni-app 的万金油工具包，只要是通用的方法基本都会集成进来。方便敏捷快速的开发。

## 📌 快速上手

### npm 安装

```shell
yarn add @limm/utools
```

简单使用

```javascript
import { EncryptUtil } from '@limm/utools'
console.log(EncryptUtil.encryptAES2Base64('我是需要 AES 加密的数据'))

// 或
import utools from '@limm/utools'
console.log(utools.EncryptUtil.encryptAES2Base64('我是需要 AES 加密的数据'))
```

### uni_modules

```javascript
// 如果你是 npm 下载的，还是保持一样的
import utools from '@limm/utools'
// 导入小程序版本
import utools from '@limm/utools/esm/bundle.esm.mp'

// 如果你是 uni_modules 版本，导入全量
import utools from '@/uni_modules/limm-utools' // utools
// 如果你是 uni_modules 版本，导入小程序版本
import utools from '@/uni_modules/limm-utools/esm/bundle.esm.mp' // utools
```

## 📌 依赖库

- [@limm/jsencrypt-mp - https://github.com/SunSeekerX/jsencrypt-mp](https://github.com/SunSeekerX/jsencrypt-mp)
- [crypto-js - https://github.com/brix/crypto-js](https://github.com/brix/crypto-js)
- [dayjs - https://github.com/brix/crypto-js](https://github.com/brix/crypto-js)
- [js-base64 - https://github.com/dankogai/js-base64](https://github.com/dankogai/js-base64)
- [md5 - https://github.com/pvorb/node-md5](https://github.com/pvorb/node-md5)
- [uuid - https://github.com/uuidjs/uuid](https://github.com/uuidjs/uuid)
