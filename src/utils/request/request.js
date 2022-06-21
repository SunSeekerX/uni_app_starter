/**
 * 请求对象
 * @author: SunSeekerX
 * @Date: 2020-05-19 14:38:47
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:33:41
 */

import { Request } from '@root/packages/limm-utools'
import { LogUtil } from '@/utils/index'

/**
 * 创建请求函数对象
 * @param { Object } options 配置参数
 * @param { Boolean } packErr 是否包装错误，
 * 包装了错误，请求时不会 reject，只需要判断请求是否成功，会包装和后台返回类似的数据结构，便于前端统一处理请求结果，适合后台返回的数据结构统一
 *  例如如下格式，可自行修改数据格式 {
 *  success: false,
 *  msg: '操作成功',
 *  data: {},
 * }
 * 不包装错误，需要每个请求加上 catch 块进行错误处理，适合后台返回的数据结构不统一
 * @returns { Function } 请求函数对象
 */
export default function createRequest(options, packErr = true) {
  // 实例对象
  const http = new Request(options)

  // 请求拦截器
  http.setReqInterceptor((config) => {
    // Get 请求添加时间戳防止缓存
    if (['get', 'GET'].includes(config.method)) {
      config.data = {
        ...config.data,
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
    return config
  })

  // 响应拦截器
  http.setResInterceptor(
    (res) => {
      // 请求成功 http code === 200
      uni.hideLoading()
      return res.data
    },

    (res) => {
      // 请求失败 http code !== 200
      uni.hideLoading()
      return res
    }
  )

  /**
   * 导出请求方法函数,项目中所有请求应该走此方法，不存在例外
   * @return {Promise}
   */
  return async function request(config) {
    try {
      if (config.method.toUpperCase() === 'UPLOAD') {
        // 文件上传
        const res = await http.upload(config)
        return Promise.resolve(res)
      } else {
        // 网络请求
        return Promise.resolve(await http.request(config))
      }
    } catch (res) {
      let packRes = null
      if (res instanceof Error) {
        LogUtil.error('捕捉到前端代码错误>>>', res)
        packRes = {
          success: false,
          msg: '系统错误',
        }
      } else {
        LogUtil.error('捕捉到后端服务错误>>>', res)
        packRes = {
          success: false,
          msg: '内部服务器错误',
        }
      }
      return packErr ? Promise.resolve(packRes) : Promise.reject(packRes)
    }
  }
}
