/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-03-27 15:17:20
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-03-27 16:11:04
 */

import constant from '@/config/constant'

const name = `%c ${constant.appName}: >>> `

export function error() {
  // eslint-disable-next-line no-console
  console.error(name, 'color: #fff;background-color: #fa3534;', ...arguments)
}

export function log() {
  // eslint-disable-next-line no-console
  console.log(name, 'color: #fff;background-color: #19be6b;', ...arguments)
}

export function warn() {
  // eslint-disable-next-line no-console
  console.warn(name, 'color: #fff;background-color: #ff9900;', ...arguments)
}
