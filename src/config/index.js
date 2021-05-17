/**
 * @name: 全局配置文件
 * @author: SunSeekerX
 * @Date: 2020-05-19 09:19:37
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 16:43:29
 */

import { appEnv } from './constant'
import { defaultEnv } from './default'
import dev from './dev.config'
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
export const appEnvLocal = uni.getStorageSync(appEnv)
// 如果本地有环境变量，优先使用本地环境变量
if (Object.keys(envs).includes(appEnvLocal)) {
  ENV = appEnvLocal
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
