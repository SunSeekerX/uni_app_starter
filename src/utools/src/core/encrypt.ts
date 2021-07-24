/**
 * 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-24 14:27:42
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

/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export function encryptSHA1(val: string): CryptoJS.lib.WordArray {
  return CryptoJS.SHA1(val)
}

/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export function encryptSHA1ToString(val: string): string {
  return encryptSHA1(val).toString()
}

/**
 * SHA256 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export function encryptSHA256(val: string): CryptoJS.lib.WordArray {
  return CryptoJS.SHA256(val)
}

/**
 * SHA256 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export function encryptSHA256ToString(val: string): string {
  return encryptSHA256(val).toString()
}
