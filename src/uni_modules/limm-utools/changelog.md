## 0.0.18（2023-03-22）
**功能（Features）**

1. 更新 changelog.md
## 0.0.17（2023-03-22）
**功能（Features）**

1. 更新 README.md
## 0.0.16（2023-03-22）

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
## 0.0.14（2023-03-03）
**功能（Features）**

1. Request 响应拦截器支持剩余的参数
## 0.0.13（2022-07-11）

**功能（Features）**

1. Request 支持剩余的参数扩展请求配置，但只有以一个参数作为请求参数

   ```javascript
   // 实例对象
   const http = new Request(options)
     
   http.request(config, ...others)
   http.upload(config, ...others)
   
   // 可以在请求拦截器接收到剩余的参数
   ```

## 0.0.12（2022-06-21）

第一次上传到插件市场
