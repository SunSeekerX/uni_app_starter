## 📌 更新日志（Changelog）

## 0.0.16 2023-03-22

**功能（Features）**

1. 小程序单独发布一个不包含 aes 加密功能的版本，既 EncryptUtil 对象不包含 aes 相关的内容

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

## 0.0.15 2023-03-20

**功能（Features）**

1. 测试在小程序 aes 加密无法使用

## 0.0.13 2022-07-11

**功能（Features）**

1. Request 支持剩余的参数扩展请求配置，但只有以一个参数作为请求参数

   ```javascript
   // 实例对象
   const http = new Request(options)

   http.request(config, ...others)
   http.upload(config, ...others)

   // 可以在请求拦截器接收到剩余的参数
   ```

## 0.0.12 2022-06-21

**功能（Features）**

1. 上传到 uni-app 插件市场，修改文档
