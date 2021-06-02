/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-06-02 18:04:22
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-02 18:06:28
 */
import { EncodeUtil } from '../index'

const encodeStr = '测试123123》》'

const encodeRes = EncodeUtil.base64Encode2String(encodeStr)
const decodeRes = EncodeUtil.base64Decode(encodeRes)
console.log({
  encodeStr,
  encodeRes,
  decodeRes,
})
