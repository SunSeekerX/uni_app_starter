/**
 * @name: 全局配置文件
 * @author: SunSeekerX
 * @Date: 2020-05-19 09:19:37
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-04-03 18:06:25
 */

import constant from './constant'
import { defaultEnv } from './default'
import dev from './cdev.config'
import stage from './stage.config'
import online from './online.config'

export const envs = {
  dev,
  stage,
  online,
}

// 默认的环境变量
export let ENV = defaultEnv
// 本地的环境变量
export const appEnv = uni.getStorageSync(constant.appEnv)
// 如果本地有环境变量，优先使用本地环境变量
if (Object.keys(envs).includes(appEnv)) {
  ENV = appEnv
}

/**
 * @name 获取环境变量的值
 * @param {String} key - 变量的 key 值
 */
export default function getEnv(key) {
  const val = envs[ENV][key]
  if (![null, undefined].includes(val)) {
    return val
  } else {
    console.error(`ENV: Cannot get the ${key} value!`)
    return null
  }
}
