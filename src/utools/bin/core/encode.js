/**
 * 编码解码相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:17:21
 */
// import { encode, decode } from 'js-base64'
import CryptoJS from 'crypto-js';
/**
 * URL 编码
 * @param val - 需要 URL 编码的内容
 * @returns { string }
 */
export function urlEncode(val) {
    return encodeURIComponent(val);
}
/**
 * URL 解码
 * @param { string } [val=""] - 需要 URL 解码的内容
 * @param { boolean } [url=true] - 是否需要解码为可识别的 url 链接
 * @returns { string }
 */
export function urlDecode(val = '', url = true) {
    return url ? encodeURI(decodeURIComponent(val)) : decodeURIComponent(val);
}
/**
 * base64 编码
 * @param { string } val - 需要 base64 编码的内容
 * @returns { string }
 */
export function base64Encode2String(val) {
    const wordArray = CryptoJS.enc.Utf8.parse(val);
    // const base64 =
    return CryptoJS.enc.Base64.stringify(wordArray);
    // return encode(val)
}
/**
 * base64 解码
 * @param {string} val - 需要 base64 解码的内容
 * @returns { string }
 */
export function base64Decode(val) {
    const parsedWordArray = CryptoJS.enc.Base64.parse(val);
    // var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8)
    return parsedWordArray.toString(CryptoJS.enc.Utf8);
    // return decode(val)
}
