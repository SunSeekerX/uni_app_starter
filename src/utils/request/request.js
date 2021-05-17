/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-19 14:38:47
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 18:23:52
 */

import store from '@/store'
import Request from './core/request-class'

/**
 * @name 创建请求函数对象
 * @param { Object } 配置参数
 * @returns { Function } 请求函数对象
 */
export default function createRequest(options) {
  // 实例对象
  const http = new Request(options)

  // 请求拦截器
  http.interceptor.request((config, cancel) => {
    /**
     * @name 合并参数
     */
    if (config.method === 'get' || config.method === 'GET') {
      config.data = {
        ...config.params,
        _t: new Date().getTime(),
      }
    }
    // 开启请求弹框
    uni.showLoading({
      title: '请稍后...',
      mask: true,
    })

    // 删除值为null或者undefined的参数
    for (const [key, value] of Object.entries(config.data || {})) {
      if (value === null || value === undefined) {
        delete config.data[key]
      }
    }

    // 请求token
    const { token } = store.state
    if (token) {
      config.header['Authorization'] = `YbtEeasf ${token}`
    }

    return config
  })

  // 响应拦截器
  http.interceptor.response(
    (response) => {
      /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
      // 关闭请求弹框
      uni.hideLoading()

      return response.data ? response.data : response
    },

    (response) => {
      uni.hideLoading()
      return response.data ? response.data : response
    }
  )

  /**
   * @name 导出请求方法函数,项目中所有请求应该走此方法，不存在例外
   */
  return async function request(config) {
    try {
      const res = await http.request(config)
      return Promise.resolve(res)
    } catch (error) {
      /**
       * @name 封装的错误对象
       */
      return Promise.resolve({
        success: false,
        msg: '网络错误!',
        obj: error,
        code: 500,
      })
    }
  }
}
