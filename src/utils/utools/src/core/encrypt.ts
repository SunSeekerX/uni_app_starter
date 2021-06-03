/**
 * @name: 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-03 23:46:14
 */

import md5 from 'md5'

/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export function encryptMD5(val: string): string {
  return md5(val)
}
