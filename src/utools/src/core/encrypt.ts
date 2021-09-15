/**
 * 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-15 11:28:58
 */

import md5 from 'md5'
import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'

/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export function encryptMD5(val: string): string {
  return md5(val)
}

/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { any }
 */
export function encryptSHA1(val: string): CryptoJS.lib.WordArray {
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
export function encryptSHA256(val: string): CryptoJS.lib.WordArray {
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
export function encryptSHA512(val: string): CryptoJS.lib.WordArray {
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
export function encryptRSA2Base64(data: string, publicKey: string): string | boolean {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(data)
}
export function encryptRSA2Base64Plain(encryptor: JSEncrypt, data: string): string | boolean {
  if (encryptor.getPublicKey()) {
    return encryptor.encrypt(data)
  } else {
    return false
  }
}

/**
 * RSA 解密
 */
export function decryptBase64RSA(data: string, privateKey: string){
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(data)
}
export function decryptBase64RSAPlain(encryptor: JSEncrypt, data: string): string | boolean {
  if (encryptor.getPrivateKey()) {
    return encryptor.decrypt(data)
  } else {
    return false
  }
}
