/**
 * @name Handle error
 * @author SunSeekerX
 * @time 2019-11-27 15:18:44
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-09-11 11:07:44
 */

import { toast } from './index'
import errCode from './err-code'

/**
 * @name Handle api request exception
 * @description when api request fail, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApiRequestException(res) {
  console.warn('Capture request exception >>>', res)

  if (res.message === '401') {
    toast('登录过期，请重新登录')
  } else if (Object.keys(errCode).includes(res.code)) {
    toast(errCode[res.code])
  } else if (res.msg) {
    toast(res.msg)
  } else if (res.errMsg === 'request:fail' || res.status === 500) {
    toast('网络错误')
  } else {
    console.warn('未知错误类型 >>>', res)
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
function handleRequestFail(res) {
  console.warn('Capture request fail >>>', res)
  if (Object.keys(errCode).includes(res.code)) {
    toast(errCode[res.code])
  } else {
    toast(res.msg)
  }
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
