/**
 * @name: utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-02 01:16:34
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
// version
const { version } = require('../package.json')
/**
 * TODO 这里使用 import rollup 第一次无法解析，
 * 需要去除 .json 文件扩展名打包，然后改回来.
 * 原因不明，暂时使用 require
 */
// import { version } from '../package.json'

/**
 * 导出
 */
export { dayjs, ValidateUtil, EncodeUtil, EncryptUtil }
// 导出 uni-app 方法封装
export * from './core/uni-app'

export default {
  // uni-app 方法直接调用
  ...uniApp,
  // 时间处理
  dayjs,
  // Validate
  ValidateUtil,
  // Encode
  EncodeUtil,
  // Encrypt
  EncryptUtil,
  // 版本号
  version,
}
