/**
 * @name:请求对象
 * @author: SunSeekerX
 * @Date: 2021-05-17 21:08:55
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 23:43:33
 */

export default class Request {
  constructor(config = {}) {
    this.config = Object.assign(
      {
        header: {},
        baseUrl: '',
        // #ifdef APP-PLUS
        sslVerify: false,
        // #endif
      },
      config
    )
  }

  interceptor = {
    request: (cb) => {
      cb && (this.requestBeforeFun = cb)
    },
    response: (cb, ecb) => {
      cb && (this.requestComFun = cb)
      ecb && (this.requestComFail = ecb)
    },
  }
  /**
   * 设置自定义 httpCode 判断器，有时候 http code 为 401 也需要进入请求成功拦截器需要用到该方法。
   * @param { Function } cb
   * @return { null }
   */
  setValidateStatus = (cb) => {
    cb && (this.validateStatus = cb)
  }

  // 请求拦截器
  requestBeforeFun = (config) => config
  // 响应拦截器
  requestComFun = (response) => response
  // 错误响应拦截器
  requestComFail = (response) => response

  validateStatus(statusCode) {
    return statusCode === 200
  }

  /**
   * 网路请求
   * @param { Object } options 请求配置
   * @returns { Promise }
   */
  async request(options = {}) {
    return new Promise((resolve, reject) => {
      options.baseUrl = this.config.baseUrl
      options.header = Object.assign(options.header || {}, this.config.header)
      // 请求之前处理参数
      const handleRe = this.requestBeforeFun(options)
      // 请求参数
      const _config = {
        url: `${handleRe.baseUrl}${handleRe.url}`,
        data: handleRe.data,
        // 将请求方法转换为大写
        method: handleRe.method.toUpperCase(),
        // #ifdef APP-PLUS
        sslVerify: handleRe.sslVerify,
        // #endif
        // #ifdef H5
        withCredentials: handleRe.withCredentials,
        // #endif
        complete: async (response) => {
          response.config = handleRe
          // 验证statusCode是否成功
          if (this.validateStatus(response.statusCode)) {
            resolve(this.requestComFun(response))
          } else {
            reject(this.requestComFail(response))
          }
        },
      }
      // 请求
      uni.request(_config)
    })
  }

  /**
   * 上传文件
   */
  async upload(options) {
    return new Promise((resolve, reject) => {
      options.baseUrl = this.config.baseUrl
      options.header = Object.assign(options.header || {}, this.config.header)

      delete options.header['content-type']
      delete options.header['Content-Type']
      delete options.header['Content-type']
      delete options.method
      // 请求之前处理参数
      const handleRe = this.reqInterceptor(options)
      // 请求参数
      const _config = {
        url: `${handleRe.baseUrl}${handleRe.url}`,
        // #ifdef MP-ALIPAY
        fileType: handleRe.fileType,
        // #endif
        filePath: handleRe.filePath,
        name: handleRe.name,
        header: handleRe.header,
        formData: handleRe.formData,
        success: (response) => {
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data)
          }
          resolve(this.resInterceptor(response))
        },
        fail: (e) => {
          reject(this.resFailInterceptor(e))
        },
      }
      // 请求
      uni.uploadFile(_config)
    })
  }
}
