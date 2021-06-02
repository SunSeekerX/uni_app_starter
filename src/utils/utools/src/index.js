/**
 * @name: utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-02 11:21:23
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-03 00:13:02
 */

// 时间格式化
import dayjs from 'dayjs'
// uni-app
import * as uniApp from './core/uni-app'
// Request
import Request from './core/request/request-class'
// Encode
import * as EncodeUtil from './core/encode'
// Encrypt
import * as EncryptUtil from './core/encrypt'
// version
import { version } from '../package.json'

/**
 * 导出
 */
export { dayjs, Request, EncodeUtil, EncryptUtil, version }
// 导出 uni-app 方法封装
export * from './core/uni-app'

/**
 * 默认导出对象
 */
export default {
  // uni-app 方法直接调用
  ...uniApp,
  // 时间处理
  dayjs,
  // 请求类
  Request,
  // Encode
  EncodeUtil,
  // Encrypt
  EncryptUtil,
  // 版本号
  version,
}
