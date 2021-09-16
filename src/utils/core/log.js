/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-03-27 15:17:20
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-17 16:42:28
 */

import { appName } from '@/config/constant'

export function error() {
  // #ifndef APP-PLUS
  console.error(`%c ${appName}: >>> `, 'color: #fff;background-color: #fa3534;', ...arguments)
  // #endif

  // #ifdef APP-PLUS
  console.error(`${appName}: >>> `, ...arguments)
  // #endif
}

export function log() {
  // #ifndef APP-PLUS
  console.log(`%c ${appName}: >>> `, 'color: #fff;background-color: #19be6b;', ...arguments)
  // #endif

  // #ifdef APP-PLUS
  console.log(`${appName}: >>> `, ...arguments)
  // #endif
}

export function warn() {
  // #ifndef APP-PLUS
  console.warn(`%c ${appName}: >>> `, 'color: #fff; background-color: #ff9900;', ...arguments)
  // #endif

  // #ifdef APP-PLUS
  console.warn(`${appName}: >>> `, ...arguments)
  // #endif
}
