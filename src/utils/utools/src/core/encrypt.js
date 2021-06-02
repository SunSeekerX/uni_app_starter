/**
 * @name: 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-02 19:24:18
 */

const md5 = require('md5')

export function encryptMD5(val) {
  return md5(val)
}
