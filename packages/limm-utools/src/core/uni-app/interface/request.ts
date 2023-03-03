/**
 * 类型定义
 * @author: SunSeekerX
 * @Date: 2021-09-17 16:00:29
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:11:32
 */

export interface AnyObject {
  [key: string]: unknown
}

/**
 * *****************普通请求*****************
 */
/**
 * 创建请求对象 config
 */
export interface CreateRequestConfig {
  header?: unknown
  baseUrl: string
  sslVerify?: boolean
  withCredentials?: boolean
}

export interface ValidateStatus {
  (statusCode: number): boolean
}

/**
 * 请求拦截器
 */
export interface ReqInterceptor {
  (config: RequestConfig | UniApp.UploadFileOption, ...others: any[]):
    | Promise<RequestConfig | UniApp.UploadFileOption>
    | RequestConfig
    | UniApp.UploadFileOption
}
/**
 * 响应拦截器
 */
export interface ResInterceptor {
  (response: UniApp.RequestSuccessCallbackResult | UniApp.UploadFileSuccessCallbackResult, ...others: any[]):
    | Promise<unknown>
    | unknown
}

/**
 * 请求失败拦截器
 */
export interface ResFailInterceptor {
  (
    response:
      | UniApp.RequestSuccessCallbackResult
      | UniApp.UploadFileSuccessCallbackResult
      | UniApp.GeneralCallbackResult,
    ...others: any[]
  ): Promise<unknown> | unknown
}

export interface RequestConfig {
  header: {}
  url: string
  /**
   * 默认为 GET
   * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
   */
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
  data: string | AnyObject | ArrayBuffer
  sslVerify?: boolean
  withCredentials?: boolean
}

/**
 * *****************文件上传*****************
 */
export interface UploadConfig {
  url: string
  fileType?: 'image' | 'video' | 'audio'
  /**
   * 要上传的文件对象
   */
  file?: File
  /**
   * 要上传文件资源的路径
   */
  filePath?: string
  /**
   * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
   */
  name?: string
  /**
   * 需要上传的文件列表。
   */
  files?: UniApp.UploadFileOptionFiles[]
  /**
   * HTTP 请求 Header, header 中不能设置 Referer
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: any
  /**
   * HTTP 请求中其他额外的 form data
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData?: any
  /**
   * 超时时间，单位 ms
   */
  timeout?: number
}
