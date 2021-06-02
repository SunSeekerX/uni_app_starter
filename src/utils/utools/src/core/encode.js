/**
 * @name: 编码解码相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-02 18:08:31
 */

import { encode, decode } from 'js-base64'

/**
 * base64 编码
 * @param { string } val - 需要 base64 编码的内容
 * @returns { string }
 */
export function base64Encode2String(val) {
  return encode(val)
}

/**
 * base64 解码
 * @param {string} val - 需要解码的内容
 * @returns { string }
 */
export function base64Decode(val) {
  return decode(val)
}
