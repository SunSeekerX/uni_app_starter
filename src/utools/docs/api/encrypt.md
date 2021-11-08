---
title: EncryptUtil
---

## encryptMD5ToString

```typescript
/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptMD5ToString(val: string): string
```

## encryptAES2Base64

```typescript
interface CipherOption {
  iv?: string | LibWordArray
  mode?: Mode
  padding?: Padding
  [option: string]: any
}
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
```

## encryptAES2HexString

```typescript
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
```

## decryptBase64AES2String

```typescript
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
```

## decryptHexAES2String

```typescript
/**
 * AES 解密 hex
 * @param { string } data - 需要解密的数据
 * @param { string } key - 需要解密的密码
 * @param { CryptoJS.CipherOption | undefined } cfg - 解密配置
 * @returns { string } - 解密的数据
 */
export declare function decryptHexAES2String(data: string, key: string, cfg?: CryptoJS.CipherOption | undefined): string
```

```typescript
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
```

## encryptSHA1ToString

```typescript
/**
 * SHA1 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptSHA1ToString(val: string): string
```

## encryptSHA256ToString

```typescript
/**
 * SHA256 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */
export declare function encryptSHA256ToString(val: string): string
```

## encryptSHA512ToString

```typescript
/**
 * SHA512 加密
 * @param { string } val - 需要加密的数据
 * @returns { string } string
 */
export declare function encryptSHA512ToString(val: string): string
```

## encryptRSA2Base64

```typescript
/**
 * RSA 加密
 * @param { string } data - 需要加密的数据
 * @param { string } publicKey - 公钥
 * @returns { string | boolean } - 加密结果
 */
export declare function encryptRSA2Base64(data: string, publicKey: string): string | boolean
```

## encryptRSA2Base64Plain

```typescript
/**
 * RSA 加密
 * @param { string } data - 需要加密的数据
 * @param { JSEncrypt } encryptor - 加密器
 * @returns { string | boolean } - 加密结果
 */
export declare function encryptRSA2Base64Plain(data: string, encryptor: JSEncrypt): string | boolean
```

## decryptRSABase64

```typescript
/**
 * RSA 解密
 * @param { string } data - 需要解密的数据
 * @param { string } privateKey - 私钥
 * @returns { string | boolean } - 解密结果
 */
export declare function decryptRSABase64(data: string, privateKey: string): string | false
```

## decryptRSABase64Plain

```typescript
/**
 * RSA 解密
 * @param { string } data - 需要解密的数据
 * @param { JSEncrypt } encryptor - 解密器
 * @returns { string | boolean } - 解密结果
 */
export declare function decryptRSABase64Plain(data: string, encryptor: JSEncrypt): string | boolean
```
