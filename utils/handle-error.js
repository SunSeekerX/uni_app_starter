/**
 * @name Handle error
 * @author SunSeekerX
 * @time 2019-11-27 15:18:44
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-05 15:25:48
 */

import { toast } from './index'

/**
 * @name Handle api request exception
 * @description when api request fail, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApiRequestException(e) {
	console.error(e)
  if (e?.errMsg) {
    toast(e.errMsg)
  } else if(e.msg){
		// 提示接口请求失败的msg, 此处捕获来自vuex的actions内接口错误
		toast(e.message)
	} else if (e.message) {
    // 提示自定义的错误对象抛出的信息,例如用户标识未找到
    toast(e.message)
  }
}

/**
 * @name Handle WebSocket exception
 * @description when WebSocket exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleWebSocketException(e) {
  console.error(e)
}

/**
 * @name Handle application exception
 * @description when Application exception, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApplicationException(e) {
  console.error(e)
}

/**
 * @name Hanle when request result success no true
 * @param { String } msg tips message
 */
function handleRequestFail(msg) {
  toast(msg)
}

export {
  // Api请求出错
  handleApiRequestException,
  // WebSocket错误
  handleWebSocketException,
  // 程序出错
  handleApplicationException,
  // 请求失败
  handleRequestFail,
}
