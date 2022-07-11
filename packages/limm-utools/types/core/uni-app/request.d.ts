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
export declare class Request {
  /**
   * 请求配置信息
   */
  config: {
    sslVerify: boolean
  } & CreateRequestConfig
  constructor(config: CreateRequestConfig)
  reqInterceptor: ReqInterceptor
  resInterceptor: ResInterceptor
  resFailInterceptor: ResFailInterceptor
  /**
   * 设置请求拦截器
   * @param cb 请求拦截器
   */
  setReqInterceptor: (cb: ReqInterceptor) => void
  /**
   * 设置响应拦截器
   * @param sucCb 响应拦截器
   * @param failCb 请求失败拦截器
   */
  setResInterceptor: (sucCb: ResInterceptor, failCb: ResFailInterceptor) => void
  /**
   * 设置自定义 httpCode 判断器，有时候 http code 为 401 也需要进入请求成功拦截器需要用到该方法。
   * @param { Function } cb
   * @return { null }
   */
  setValidateStatus: (cb: ValidateStatus) => void
  /**
   * 请求验证器
   * @param statusCode
   * @returns
   */
  validateStatus(statusCode: number): boolean
  /**
   * 网路请求
   * @param { Object } options 请求配置
   * @returns { Promise }
   */
  request(options: RequestConfig, ...others: any[]): Promise<unknown>
  /**
   * 上传文件
   */
  upload(options: UploadConfig, ...others: any[]): Promise<unknown>
}
