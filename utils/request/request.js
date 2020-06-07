/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-19 14:38:47
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-04 14:43:32
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

	/**
	 * @param { Function} cancel - 取消请求,调用cancel 会取消本次请求，但是该函数的catch() 仍会执行; 不会进入响应拦截器
	 *
	 * @param {String} text ['handle cancel'| any] - catch((err) => {}) err.errMsg === 'handle cancel'。非必传，默认'handle cancel'
	 * @cancel {Object} config - catch((err) => {}) err.config === config; 非必传，默认为request拦截器修改之前的config
	 * function cancel(text, config) {}
	 */
	http.interceptor.request((config, cancel) => {
		/**
		 * @name 合并参数
		 */
		switch (config.method) {
			case 'get':
				config.data = {
					...config.params,
					_t: new Date().getTime(),
				}
				break
			case 'post':
				break
			default:
				break
		}
		/* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
		// config.header = {
		//   ...config.header,
		//   a: 1, // 演示拦截器header加参
		// }
		// 演示custom 用处
		// if (config.custom.auth) {
		//   config.header.token = 'token'
		// }
		/**
  /* 演示cancel 函数
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，不会进入响应拦截器，但是该函数的catch() 仍会执行
    cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
  }
  **/
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
		const {
			token
		} = store.state
		if (token) {
			config.header['Authorization'] = `YbtEeasf ${token}`
		}

		return config
	})

	http.interceptor.response(
		response => {
			/* 对响应成功做点什么 （statusCode === 200），必须return response*/
			//  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
			//    return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
			// if (response.config.custom.verification) { // 演示自定义参数的作用
			//   return response.data
			// }
			// console.log(response)
			// 关闭请求弹框
			uni.hideLoading()
			return response.data
		},
		response => {
			/*  对响应错误做点什么 （statusCode !== 200），必须return response*/
			// console.log(response)
			// 关闭请求弹框
			uni.hideLoading()
			return response.data ? response.data : response
		},
	)

	/**
	 * @name 导出请求方法函数,项目中所有请求应该走此方法，不存在例外
	 */
	return async function request(config) {
		const res = await http.request(config)
		return res
	}
}
