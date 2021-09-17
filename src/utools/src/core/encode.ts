/**
 * 编码解码相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:17:21
 */

import { encode, decode } from 'js-base64'

/**
 * URL 编码
 * @param val - 需要 URL 编码的内容
 * @returns { string }
 */
export function urlEncode(val: string): string {
  return encodeURIComponent(val)
}

/**
 * URL 解码
 * @param { string } [val=""] - 需要 URL 解码的内容
 * @param { boolean } [url=true] - 是否需要解码为可识别的 url 链接
 * @returns { string }
 */
export function urlDecode(val = '', url = true): string {
  return url ? encodeURI(decodeURIComponent(val)) : decodeURIComponent(val)
}

/**
 * base64 编码
 * @param { string } val - 需要 base64 编码的内容
 * @returns { string }
 */
export function base64Encode2String(val: string): string {
  return encode(val)
}

/**
 * base64 解码
 * @param {string} val - 需要 base64 解码的内容
 * @returns { string }
 */
export function base64Decode(val: string): string {
  return decode(val)
}
