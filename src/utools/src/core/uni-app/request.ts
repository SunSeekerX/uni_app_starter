/**
 * uni-app 请求类
 * @author: SunSeekerX
 * @Date: 2021-05-17 21:08:55
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:27:35
 */

import type {
  CreateRequestConfig,
  ReqInterceptor,
  ResInterceptor,
  ResFailInterceptor,
  RequestConfig,
  UploadConfig,
  ValidateStatus,
} from './interface'

export class Request {
  /**
   * 请求配置信息
   */
  config: { sslVerify: boolean } & CreateRequestConfig

  constructor(config: CreateRequestConfig) {
    this.config = Object.assign(
      {
        sslVerify: false,
      },
      config
    )
  }

  // 请求拦截器
  reqInterceptor: ReqInterceptor = (config) => config
  // 响应拦截器
  resInterceptor: ResInterceptor = (response) => response
  // 请求失败拦截器
  resFailInterceptor: ResFailInterceptor = (response) => response

  /**
   * 设置请求拦截器
   * @param cb 请求拦截器
   */
  setReqInterceptor = (cb: ReqInterceptor): void => {
    this.reqInterceptor = cb
  }

  /**
   * 设置响应拦截器
   * @param sucCb 响应拦截器
   * @param failCb 请求失败拦截器
   */
  setResInterceptor = (sucCb: ResInterceptor, failCb: ResFailInterceptor): void => {
    this.resInterceptor = sucCb
    this.resFailInterceptor = failCb
  }

  /**
   * 设置自定义 httpCode 判断器，有时候 http code 为 401 也需要进入请求成功拦截器需要用到该方法。
   * @param { Function } cb
   * @return { null }
   */
  setValidateStatus = (cb: ValidateStatus): void => {
    cb && (this.validateStatus = cb)
  }

  /**
   * 请求验证器
   * @param statusCode
   * @returns
   */
  validateStatus(statusCode: number): boolean {
    return statusCode === 200
  }

  /**
   * 网路请求
   * @param { Object } options 请求配置
   * @returns { Promise }
   */
  request(options: RequestConfig): Promise<unknown> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const { sslVerify } = this.config
      options.header = Object.assign(options.header || {}, this.config.header)
      if (options.sslVerify === undefined) {
        options.sslVerify = sslVerify as boolean
      }
      // 请求之前处理参数
      const handleRe = (await this.reqInterceptor(options)) as UniApp.RequestOptions
      // 请求参数
      const _config: UniApp.RequestOptions = {
        url: `${this.config.baseUrl}${handleRe.url}`,
        data: handleRe.data,
        method: handleRe.method,
        // #ifdef APP-PLUS
        sslVerify: handleRe.sslVerify as boolean,
        // #endif
        // #ifdef H5
        withCredentials: !!handleRe.withCredentials,
        // #endif
        success: async (response) => {
          // 验证statusCode是否成功
          if (this.validateStatus(response.statusCode)) {
            const res = await this.resInterceptor(response)
            resolve(res)
          } else {
            const res = await this.resFailInterceptor(response)
            reject(res)
          }
        },
        fail: async (e) => {
          const res = await this.resFailInterceptor(e)
          reject(res)
        },
      }
      // 请求
      uni.request(_config)
    })
  }

  /**
   * 上传文件
   */
  async upload(options: UploadConfig): Promise<unknown> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      options.header = Object.assign(options.header || {}, this.config.header)

      delete options.header['content-type']
      delete options.header['Content-Type']
      delete options.header['Content-type']
      // 请求之前处理参数
      const handleRe = this.reqInterceptor(options) as UniApp.UploadFileOption
      // 请求参数
      const _config: UniApp.UploadFileOption = {
        url: `${this.config.baseUrl}${handleRe.url}`,
        // #ifdef MP-ALIPAY
        fileType: handleRe.fileType,
        // #endif
        filePath: handleRe.filePath,
        name: handleRe.name,
        header: handleRe.header,
        formData: handleRe.formData,
        success: async (response) => {
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data)
          }
          // 验证statusCode是否成功
          if (this.validateStatus(response.statusCode)) {
            const res = await this.resInterceptor(response)
            resolve(res)
          } else {
            const res = await this.resFailInterceptor(response)
            reject(res)
          }
        },
        fail: async (e) => {
          const res = await this.resFailInterceptor(e)
          reject(res)
        },
      }
      // 请求
      uni.uploadFile(_config)
    })
  }
}
