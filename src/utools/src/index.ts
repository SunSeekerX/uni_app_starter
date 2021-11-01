/**
 * Utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:15
 */

import dayjs from 'dayjs'
import * as uuid from 'uuid'

import * as CommonUtil from './core/common'
import * as UniAppUtil from './core/uni-app'
import * as ValidateUtil from './core/validate'
import * as EncodeUtil from './core/encode'
import * as EncryptUtil from './core/encrypt'
import * as PerformanceUtil from './core/performance'
import * as RandomUtil from './core/random'

export * from './core/uni-app'

export { dayjs, uuid, CommonUtil, ValidateUtil, EncodeUtil, EncryptUtil, PerformanceUtil, RandomUtil }

export default {
  ...UniAppUtil,
  CommonUtil,
  UniAppUtil,
  dayjs,
  uuid,
  ValidateUtil,
  EncodeUtil,
  EncryptUtil,
  PerformanceUtil,
  RandomUtil,
}
