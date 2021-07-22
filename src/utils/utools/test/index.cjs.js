/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-07-22 20:33:07
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 20:39:53
 */

const utools = require('../dist/bundle.cjs')

const { EncodeUtil, EncryptUtil } = utools

/**
 * ###### EncodeUtil ######
 */
const encodeStr = EncodeUtil.urlEncode('只要不出一点问题，我是不会重装的。')
const decodeStr = EncodeUtil.urlDecode(encodeStr)
const decodeStrNotUrl = EncodeUtil.urlDecode(encodeStr, false)
console.log({ encodeStr, decodeStr, decodeStrNotUrl })

// console.log(utools)
