/**
 * 错误处理
 * @author SunSeekerX
 * @time 2019-11-27 15:18:44
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 20:15:04
 */

import { toast } from '@/uni_modules/limm-utools'
import errCode from './err-code'

/**
 * @name Handle api request exception
 * @description when api request fail, you should using this in your catch block
 * @param { Error } e exception object
 * @returns void
 */
function handleApiRequestException(res) {
  console.warn('Capture request exception >>>', res)

  if (Object.keys(errCode).includes(res.code)) {
    toast(errCode[res.code])
  } else {
    toast(res.msg)
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
 * @name Handle when request result success no true
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
