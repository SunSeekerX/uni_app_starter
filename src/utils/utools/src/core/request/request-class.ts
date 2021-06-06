/**
 * @name:请求对象
 * @author: SunSeekerX
 * @Date: 2021-05-17 21:08:55
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-06 13:10:03
 */

import RequestSuccessCallbackResult = UniApp.RequestSuccessCallbackResult
import RequestOptions = UniApp.RequestOptions
import UploadFileOption = UniApp.UploadFileOption

/**
 * 创建请求对象 config
 */
interface CreateRequestConfig {
  header?: any
  baseUrl: string
  sslVerify?: boolean
  withCredentials?: boolean
}

interface RequestConfig {
  header?: any
  url: string
  /**
   * 默认为 GET
   * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
   */
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
  data: any
  sslVerify?: boolean
  withCredentials?: boolean
}

interface UploadConfig {
  header?: any
  url: string
}

interface ValidateStatus {
  (statusCode: number): boolean
}

interface RequestBeforeFun<T> {
  (config: T): T
}

interface RequestCompleteFun {
  (response: RequestSuccessCallbackResult): RequestSuccessCallbackResult
}

interface RequestFailFun {
  (response: any): any
}

export default class Request {
  /**
   * 请求配置信息
   */
  private config: CreateRequestConfig

  constructor(config: CreateRequestConfig) {
    this.config = Object.assign(
      {
        sslVerify: false,
      },
      config
    )
  }

  interceptor = {
    request: (cb: RequestBeforeFun<unknown>) => {
      cb && (this.requestBeforeFun = cb)
    },
    response: (cb: RequestCompleteFun, ecb: RequestFailFun) => {
      cb && (this.requestComFun = cb)
      ecb && (this.requestComFail = ecb)
    },
  }

  /**
   * 设置自定义 httpCode 判断器，有时候 http code 为 401 也需要进入请求成功拦截器需要用到该方法。
   * @param { Function } cb
   * @return { null }
   */
  setValidateStatus = (cb: ValidateStatus) => {
    cb && (this.validateStatus = cb)
  }

  /**
   * 请求验证器
   * @param statusCode
   * @returns
   */
  validateStatus(statusCode: number) {
    return statusCode === 200
  }

  // 请求拦截器
  requestBeforeFun: RequestBeforeFun<unknown> = (config) => config
  // 响应拦截器
  requestComFun = (response: RequestSuccessCallbackResult) => response
  // 错误响应拦截器
  requestComFail = (response: any) => response

  /**
   * 网路请求
   * @param { Object } options 请求配置
   * @returns { Promise }
   */
  async request(options: RequestConfig) {
    return new Promise(async (resolve, reject) => {
      // options.baseUrl = this.config.baseUrl
      const { sslVerify } = this.config
      options.header = Object.assign(options.header || {}, this.config.header)
      if (options.sslVerify === undefined) {
        options.sslVerify = sslVerify as boolean
      }
      // 请求之前处理参数
      const handleRe = (await this.requestBeforeFun(options)) as RequestConfig
      // 请求参数
      const _config: RequestOptions = {
        url: `${this.config.baseUrl}${handleRe.url}`,
        data: handleRe.data,
        method: handleRe.method,
        // #ifdef APP-PLUS
        sslVerify: handleRe.sslVerify,
        // #endif
        // #ifdef H5
        withCredentials: !!handleRe.withCredentials,
        // #endif
        success: async (response) => {
          // 验证statusCode是否成功
          if (this.validateStatus(response.statusCode)) {
            resolve(await this.requestComFun(response))
          } else {
            reject(await this.requestComFail(response))
          }
        },
        fail: async (e) => {
          reject(await this.requestComFail(e))
        },
        // complete: async (response) => {
        //   // 验证statusCode是否成功
        //   if (this.validateStatus(response.statusCode)) {
        //     resolve(this.requestComFun(response))
        //   } else {
        //     reject(this.requestComFail(response))
        //   }
        // },
      }
      // 请求
      uni.request(_config)
    })
  }

  /**
   * 上传文件
   */
  async upload(options: UploadConfig) {
    return new Promise((resolve, reject) => {
      // options.baseUrl = this.config.baseUrl
      options.header = Object.assign(options.header || {}, this.config.header)

      delete options.header['content-type']
      delete options.header['Content-Type']
      delete options.header['Content-type']
      // 请求之前处理参数
      // const handleRe = this.reqInterceptor(options)
      const handleRe = this.requestBeforeFun(options)
      // 请求参数
      const _config: UploadFileOption = {
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
