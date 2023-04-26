/**
 * Utools 小程序版本入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:15
 */

import dayjs from 'dayjs'
import CryptoJS from 'crypto-js'
import * as uuid from 'uuid'

import * as CommonUtil from './core/common'
import * as UniAppUtil from './core/uni-app'
import * as ValidateUtil from './core/validate'
import * as EncodeUtil from './core/encode'
// import * as EncryptUtil from './core/encrypt'
import * as PerformanceUtil from './core/performance'
import * as RandomUtil from './core/random'
import {
  encryptMD5,
  encryptMD5ToString,
  getRSAEnCryptor,
  encryptRSA2Base64,
  encryptRSA2Base64Plain,
  decryptRSABase64,
  decryptRSABase64Plain,
} from './core/encrypt'

const EncryptUtil = {
  encryptMD5,
  encryptMD5ToString,
  getRSAEnCryptor,
  encryptRSA2Base64,
  encryptRSA2Base64Plain,
  decryptRSABase64,
  decryptRSABase64Plain,
}

export * from './core/uni-app'

export { dayjs, uuid, CommonUtil, ValidateUtil, EncodeUtil, EncryptUtil, PerformanceUtil, RandomUtil, CryptoJS }

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
  CryptoJS,
}
