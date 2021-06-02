/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-06-02 18:04:22
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-02 19:30:14
 */
import utools from '../lib/bundle.esm' // utools

console.log('utools>>>', utools)

import { EncodeUtil, EncryptUtil } from '../lib/bundle.esm'

// ------EncodeUtil------
const encodeStr = '测试123123》》'

const encodeRes = EncodeUtil.base64Encode2String(encodeStr)
const decodeRes = EncodeUtil.base64Decode(encodeRes)
console.log({
  encodeStr,
  encodeRes,
  decodeRes,
})

// ------EncodeUtil------
console.log(EncryptUtil.encryptMD5(encodeStr))
