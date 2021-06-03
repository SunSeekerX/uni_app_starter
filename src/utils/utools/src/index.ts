/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-03 23:48:36
 */

// 时间格式化
import dayjs from 'dayjs'
// uni-app
import * as uniApp from './core/uni-app'
// Validate
import * as ValidateUtil from './core/validate'
// Encode
import * as EncodeUtil from './core/encode'
// Encrypt
import * as EncryptUtil from './core/encrypt'

/**
 * 导出
 */
export { dayjs, ValidateUtil, EncodeUtil, EncryptUtil }
// 导出 uni-app 方法封装
export * from './core/uni-app'

export default {
  // uni-app 方法直接调用
  ...uniApp,
  // Validate
  ValidateUtil,
  // Encode
  EncodeUtil,
  // Encrypt
  EncryptUtil,
}
