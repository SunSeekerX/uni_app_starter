/**
 * @name: 全局公用方法函数，单一功能的函数
 * @author: SunSeekerX
 * @Date: 2020-05-19 15:34:13
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 21:55:55
 */

// 参数校验
import * as Validate from './core/Validate'

/**
 * @param { String } msg 需要显示的消息
 * @param { Object } options 配置,同uni-app官网
 */
export function toast(msg, options) {
  uni.showToast(
    Object.assign(
      {
        icon: 'none',
        title: msg,
        duration: 2000,
      },
      options,
    ),
  )
}

export * from './core/Route'

export { Validate }
