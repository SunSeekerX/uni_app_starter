/**
 * Utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:15
 */
/// <reference types="@dcloudio/types" />
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
declare const _default: {
  CommonUtil: typeof CommonUtil
  UniAppUtil: typeof UniAppUtil
  dayjs: typeof dayjs
  uuid: typeof uuid
  ValidateUtil: typeof ValidateUtil
  EncodeUtil: typeof EncodeUtil
  EncryptUtil: typeof EncryptUtil
  PerformanceUtil: typeof PerformanceUtil
  RandomUtil: typeof RandomUtil
  Request: typeof UniAppUtil.Request
  LogUtil: UniAppUtil.Log
  Log: typeof UniAppUtil.Log
  getUIStyle(): string
  toast(msg: string, options?: UniApp.ShowToastOptions): void
  route(options: import('./core/uni-app/interface').UniRouteOptions): void
  copy(value: string | number, options: import('./core/uni-app/interface').UniCopyOptions): void
  openUrl(url: string, options?: import('./core/uni-app/interface').UniOpenUrlOptions): void
}
export default _default
