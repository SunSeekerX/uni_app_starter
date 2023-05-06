/**
 * Utools 入口
 */

import CryptoJS from 'crypto-js'
import * as uuid from 'uuid'

import * as CommonUtil from './core/common'
import * as UniAppUtil from './core/uni-app'
import * as ValidateUtil from './core/validate'
import * as EncodeUtil from './core/encode'
import * as EncryptUtil from './core/encrypt'
import * as PerformanceUtil from './core/performance'
import * as RandomUtil from './core/random'
import * as ImageUtil from './core/image'
import { SnowFlake } from './core/snowflake'

export * from './core/uni-app'

export {
  uuid,
  UniAppUtil,
  CommonUtil,
  ValidateUtil,
  EncodeUtil,
  EncryptUtil,
  PerformanceUtil,
  RandomUtil,
  CryptoJS,
  SnowFlake,
  ImageUtil,
}

export default {
  uuid,
  ...UniAppUtil,
  UniAppUtil,
  CommonUtil,
  ValidateUtil,
  EncodeUtil,
  EncryptUtil,
  PerformanceUtil,
  RandomUtil,
  CryptoJS,
  SnowFlake,
  ImageUtil,
}
