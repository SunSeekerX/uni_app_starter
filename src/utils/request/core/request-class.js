/**
 * @name 请求对象
 */
export default class Request {
  /**
   *
   * @param { 配置信息 } config
   */
  constructor(config) {
    this.config = Object.assign(
      {
        baseUrl: '',
        header: {},
        method: 'GET',
        dataType: 'json',
        // #ifndef MP-ALIPAY || APP-PLUS
        responseType: 'text',
        // #endif
        custom: {},
        // #ifdef MP-ALIPAY || MP-WEIXIN
        timeout: 30000,
        // #endif
        // #ifdef APP-PLUS
        sslVerify: true,
        // #endif
        // #ifdef H5
        withCredentials: false,
        // #endif
      },
      config
    )
  }

  /**
   * @property {Function} request 请求拦截器
   * @property {Function} response 响应拦截器
   * @type {{request: Request.interceptor.request, response: Request.interceptor.response}}
   */
  interceptor = {
    /**
     * @param {Request~requestCallback} cb - 请求之前拦截,接收一个函数（config, cancel）=> {return config}。第一个参数为全局config,第二个参数为函数，调用则取消本次请求。
     */
    request: (cb) => {
      if (cb) {
        this.requestBeforeFun = cb
      }
    },

    /**
     * @param {Request~responseCallback} cb 响应拦截器，对响应数据做点什么
     * @param {Request~responseErrCallback} ecb 响应拦截器，对响应错误做点什么
     */
    response: (cb, ecb) => {
      if (cb) {
        this.requestComFun = cb
      }
      if (ecb) {
        this.requestComFail = ecb
      }
    },
  }

  requestBeforeFun = (config) => {
    return config
  }

  requestComFun = (response) => {
    return response
  }

  requestComFail = (response) => {
    return response
  }

  /**
   * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
   * @param { Number } statusCode - 请求响应体statusCode（只读）
   * @return { Boolean } 如果为true,则 resolve, 否则 reject
   */
  validateStatus(statusCode) {
    return statusCode === 200
  }

  /**
   * @Function
   * @param {Request~setConfigCallback} f - 设置全局默认配置
   */
  setConfig(f) {
    this.config = f(this.config)
  }

  /**
   * @Function
   * @param {Object} options - 请求配置项
   * @prop {String} options.url - 请求路径
   * @prop {Object} options.data - 请求参数
   * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
   * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
   * @prop {Object} [options.header = config.header] - 请求header
   * @prop {Object} [options.method = config.method] - 请求方法
   * @returns {Promise<unknown>}
   */
  async request(options = {}) {
    return new Promise((resolve, reject) => {
      options.baseUrl = this.config.baseUrl
      options.dataType = options.dataType || this.config.dataType
      // #ifndef MP-ALIPAY || APP-PLUS
      options.responseType = options.responseType || this.config.responseType
      // #endif
      // #ifdef MP-ALIPAY || MP-WEIXIN
      options.timeout = options.timeout || this.config.timeout
      // #endif
      // #ifdef H5
      options.withCredentials =
        typeof options.withCredentials === 'boolean'
          ? options.withCredentials
          : this.config.withCredentials
      // #endif
      options.url = options.url || ''
      options.params = options.params || {}
      options.header = {
        ...this.config.header,
        ...(options.header || {}),
      }
      options.method = options.method || this.config.method
      options.custom = {
        ...this.config.custom,
        ...(options.custom || {}),
      }
      // #ifdef APP-PLUS
      options.sslVerify =
        options.sslVerify === undefined
          ? this.config.sslVerify
          : options.sslVerify
      // #endif
      options.getTask = options.getTask || this.config.getTask
      let next = true
      const cancel = (t = 'handle cancel', config = options) => {
        const err = {
          errMsg: t,
          config: config,
        }
        reject(err)
        next = false
      }

      const handleRe = {
        ...this.requestBeforeFun(options, cancel),
      }
      const _config = {
        ...handleRe,
      }
      if (!next) return

      const requestTask = uni.request({
        url: _config.baseUrl + _config.url,
        data: _config.data,
        header: _config.header,
        // 将请求方法转换为大写
        method: _config.method.toUpperCase(),
        // #ifdef MP-ALIPAY || MP-WEIXIN
        timeout: _config.timeout,
        // #endif
        dataType: _config.dataType,
        // #ifndef MP-ALIPAY || APP-PLUS
        responseType: _config.responseType,
        // #endif
        // #ifdef APP-PLUS
        sslVerify: _config.sslVerify,
        // #endif
        // #ifdef H5
        withCredentials: _config.withCredentials,
        // #endif
        complete: (response) => {
          response.config = handleRe
          // 验证statusCode是否成功
          if (this.validateStatus(response.statusCode)) {
            // 成功
            response = this.requestComFun(response)
            resolve(response)
          } else {
            response = this.requestComFail(response)
            reject(response)
          }
        },
      })
      if (handleRe.getTask) {
        handleRe.getTask(requestTask, handleRe)
      }
    })
  }
}
