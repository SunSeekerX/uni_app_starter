/**
 * 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-23 14:14:47
 */

import md5 from 'md5'
import CryptoJS from 'crypto-js'

/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export function encryptMD5(val: string): string {
  return md5(val)
}

export function encryptSHA1(val: string) {
  return CryptoJS.SHA1(val)
}

export function encryptSHA1ToString(val: string): string {
  return CryptoJS.SHA1(val).toString()
}
