/**
 * Utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:15
 */

// 时间格式化
import dayjs from 'dayjs'
// uuid
import * as uuid from 'uuid'

// uni-app
import * as UniAppUtil from './core/uni-app'
// Validate
import * as ValidateUtil from './core/validate'
// Encode
import * as EncodeUtil from './core/encode'
// Encrypt
import * as EncryptUtil from './core/encrypt'
// Performance
import * as PerformanceUtil from './core/performance'
// Random
import * as RandomUtil from './core/random'
// version
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
export { dayjs, uuid, ValidateUtil, EncodeUtil, EncryptUtil, PerformanceUtil, RandomUtil }
// 导出 uni-app 方法封装
export * from './core/uni-app'

const utools = {
  // uni-app 方法直接调用
  ...UniAppUtil,
  UniAppUtil,
  // 时间处理
  dayjs,
  // uuid
  uuid,
  // Validate
  ValidateUtil,
  // Encode
  EncodeUtil,
  // Encrypt
  EncryptUtil,
  // Performance
  PerformanceUtil,
  // Random
  RandomUtil,
  // 版本号
  version,
}

export default utools
