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
 * @returns { string }
 */
export function encryptMD5(val: string): WordArray {
  return CryptoJS.MD5(val)
}

export function encryptMD5ToString(val: string): string {
  return encryptMD5(val).toString()
}

/**
 * AES 加密
 * @param data 需要加密的数据
 * @param key 需要加密的密码
 * @param cfg 加密配置
 * @returns
 */
export function encryptAES(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): WordArray {
  const cipherOption: CryptoJS.CipherOption = Object.assign(
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    },
    cfg
  )
  if (cipherOption.iv && typeof cipherOption.iv === 'string') {
    cipherOption.iv = CryptoJS.enc.Utf8.parse(cipherOption.iv)
  }
  return CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), cipherOption)
}
export function encryptAES2Base64(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): string {
  return encryptAES(data, key, cfg).toString()
}
export function encryptAES2HexString(
  data: string | CryptoJS.LibWordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): string {
  return encryptAES(data, key, cfg).toString(CryptoJS.format.Hex)
}
/**
 * AES 解密
 * @param val
 * @returns
 */
export function decryptAES(
  data: string | WordArray,
  key: string,
  cfg?: CryptoJS.CipherOption | undefined
): DecryptedMessage {
  const cipherOption: CryptoJS.CipherOption = Object.assign(
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    },
    cfg
  )
  if (cipherOption.iv && typeof cipherOption.iv === 'string') {
    cipherOption.iv = CryptoJS.enc.Utf8.parse(cipherOption.iv)
  }
  return CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), cipherOption)
}
export function decryptBase64AES2String(data: string, key: string, cfg?: CryptoJS.CipherOption | undefined): string {
  return decryptAES(data, key, cfg).toString(CryptoJS.enc.Utf8)
}
export function decryptHexAES(data: string, key: string, cfg?: CryptoJS.CipherOption | undefined): DecryptedMessage {
  const encryptedHex = CryptoJS.enc.Hex.parse(data)
  const encryptedBase64 = CryptoJS.enc.Base64.stringify(encryptedHex)
  return decryptAES(encryptedBase64, key, cfg)
}
export function decryptHexAES2String(data: string, key: string, cfg?: CryptoJS.CipherOption | undefined): string {
  return decryptHexAES(data, key, cfg).toString(CryptoJS.enc.Utf8)
}

export const AesModes = CryptoJS.mode
export const AesPads = CryptoJS.pad

/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export function encryptSHA1(val: string): WordArray {
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
export function encryptSHA256(val: string): WordArray {
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

/**
 * SHA512 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export function encryptSHA512(val: string): WordArray {
  return CryptoJS.SHA512(val)
}

/**
 * SHA512 加密
 * @param { string } val - 需要加密的数据
 * @returns { string } string
 */
export function encryptSHA512ToString(val: string): string {
  return encryptSHA512(val).toString()
}

/**
 * RSA 加密
 * @return { string | boolean } the signature encoded in base64
 */
interface GetRSAEnCryptorOptions {
  publicKey?: string
  privateKey?: string
}

export function getRSAEnCryptor(
  options: IJSEncryptOptions | undefined,
  initOptions?: GetRSAEnCryptorOptions
): JSEncrypt {
  const cryptor = new JSEncrypt(options)
  if (initOptions?.publicKey) {
    cryptor.setPublicKey(initOptions.publicKey)
  }
  if (initOptions?.privateKey) {
    cryptor.setPrivateKey(initOptions.privateKey)
  }
  return cryptor
}

export function encryptRSA2Base64(data: string, publicKey: string): string | boolean {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(data)
}
export function encryptRSA2Base64Plain(data: string, encryptor: JSEncrypt): string | boolean {
  if (encryptor.getPublicKey()) {
    return encryptor.encrypt(data)
  }
  throw new Error('No public key!')
}

/**
 * RSA 解密
 */
export function decryptRSABase64(data: string, privateKey: string): string | false {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(data)
}
export function decryptRSABase64Plain(data: string, encryptor: JSEncrypt): string | boolean {
  if (encryptor.getPrivateKey()) {
    return encryptor.decrypt(data)
  }
  throw new Error('No private key!')
}
