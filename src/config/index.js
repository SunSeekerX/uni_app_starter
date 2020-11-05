/**
 * @name: 全局配置文件
 * @author: SunSeekerX
 * @Date: 2020-05-19 09:19:37
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-11-05 20:07:38
 */

import * as cdev from './cdev.config'
import * as stage from './stage.config'

class Config {
  config = {}
  // constructor() {
  //   switch (ENV) {
  //     case 'cdev':
  //       this.config = cdev
  //       break
  //     case 'stage':
  //       this.config = stage
  //       break
  //     default:
  //       this.config = cdev
  //       break
  //   }
  // }

  // 设置环境
  static _setEnv(env) {
    switch (env) {
      case 'cdev':
        this.config = cdev
        break
      case 'stage':
        this.config = stage
        break
      default:
        this.config = cdev
        break
    }
  }

  // 取值
  get(key) {
    return this.config[key]
  }
}

// 设置环境
Config._setEnv('cdev')

export default Config
