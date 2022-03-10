/**
 * 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:13:30
 */
import CryptoJS from 'crypto-js'
import type { WordArray, DecryptedMessage } from 'crypto-js'
import { JSEncrypt } from '@limm/jsencrypt-mp'
import type { IJSEncryptOptions } from '@limm/jsencrypt-mp/lib/JSEncrypt'
/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { WordArray }
 */
export declare function encryptMD5(val: string): WordArray
/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptMD5ToString(val: string): string
/**
 * AES 加密
 * @param { string } data - 需要加密的数据
 * @param { string } key - 需要加密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 加密配置
 * @returns { WordArray }
 */
export declare function encryptAES(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): WordArray
/**
 * AES 加密输出 base64
 * @param { string } data - 需要加密的数据
 * @param { string } key - 需要加密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 加密配置
 * @returns { string } - 输出的结果
 */
export declare function encryptAES2Base64(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): string
/**
 * AES 加密输出 hex
 * @param { string } data - 需要加密的数据
 * @param { string } key - 需要加密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 加密配置
 * @returns { string } - 输出的结果
 */
export declare function encryptAES2HexString(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): string
/**
 * AES 解密
 * @param { string | WordArray } data - 需要解密的数据
 * @param { string } key - 需要解密的密码
 * @returns { string } - 解密的数据
 */
export declare function decryptAES(
  data: string | WordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): DecryptedMessage
/**
 * AES 解密 base64
 * @param { string } data - 需要解密的数据
 * @param { string } key - 需要解密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 解密配置
 * @returns { string } - 解密的数据
 */
export declare function decryptBase64AES2String(
  data: string,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): string
/**
 * AES 解密 hex
 * @param { string } data - 需要解密的数据
 * @param { string } key - 需要解密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 解密配置
 * @returns { DecryptedMessage } - 解密的数据
 */
export declare function decryptHexAES(
  data: string,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): DecryptedMessage
/**
 * AES 解密 hex
 * @param { string } data - 需要解密的数据
 * @param { string } key - 需要解密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 解密配置
 * @returns { string } - 解密的数据
 */
export declare function decryptHexAES2String(data: string, key: string, cfg?: CryptoJS.CipherOption | undefined): string
export declare const AesModes: {
  CBC: CryptoJS.Mode
  CFB: CryptoJS.Mode
  CTR: CryptoJS.Mode
  CTRGladman: CryptoJS.Mode
  OFB: CryptoJS.Mode
  ECB: CryptoJS.Mode
}
export declare const AesPads: {
  Pkcs7: CryptoJS.Padding
  AnsiX923: CryptoJS.Padding
  Iso10126: CryptoJS.Padding
  Iso97971: CryptoJS.Padding
  ZeroPadding: CryptoJS.Padding
  NoPadding: CryptoJS.Padding
}
/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export declare function encryptSHA1(val: string): WordArray
/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptSHA1ToString(val: string): string
/**
 * SHA256 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export declare function encryptSHA256(val: string): WordArray
/**
 * SHA256 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptSHA256ToString(val: string): string
/**
 * SHA512 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export declare function encryptSHA512(val: string): WordArray
/**
 * SHA512 加密
 * @param { string } val - 需要加密的数据
 * @returns { string } string
 */
export declare function encryptSHA512ToString(val: string): string
/**
 * RSA 加密
 * @return { string | boolean } the signature encoded in base64
 */
interface GetRSAEnCryptorOptions {
  publicKey?: string
  privateKey?: string
}
export declare function getRSAEnCryptor(
  options: IJSEncryptOptions | undefined,
  initOptions?: GetRSAEnCryptorOptions
): JSEncrypt
/**
 * RSA 加密
 * @param { string } data - 需要加密的数据
 * @param { string } publicKey - 公钥
 * @returns { string | boolean } - 加密结果
 */
export declare function encryptRSA2Base64(data: string, publicKey: string): string | boolean
/**
 * RSA 加密
 * @param { string } data - 需要加密的数据
 * @param { JSEncrypt } encryptor - 加密器
 * @returns { string | boolean } - 加密结果
 */
export declare function encryptRSA2Base64Plain(data: string, encryptor: JSEncrypt): string | boolean
/**
 * RSA 解密
 * @param { string } data - 需要解密的数据
 * @param { string } privateKey - 私钥
 * @returns { string | boolean } - 解密结果
 */
export declare function decryptRSABase64(data: string, privateKey: string): string | false
/**
 * RSA 解密
 * @param { string } data - 需要解密的数据
 * @param { JSEncrypt } encryptor - 解密器
 * @returns { string | boolean } - 解密结果
 */
export declare function decryptRSABase64Plain(data: string, encryptor: JSEncrypt): string | boolean
export {}
