<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 19:12:59
-->

<template>
  <view class="page">
    <AppOutput :output="consoleText" />

    <AppOperationContent name="md5 加密">
      <!-- encryptMD5 -->
      <AppOperationInput operation-name="请输入需要 md5 加密的内容" v-model="md5EncryptionText" />
      <AppOperationButton buttonText="md5 加密: encryptMD5(val: string): string" @onTap="onMd5Encrypt" />
    </AppOperationContent>

    <AppOperationContent name="SHA 加密">
      <!-- encryptSHA1ToString -->
      <AppOperationInput operation-name="请输入需要 SHA1 加密的内容" v-model="sha1EncryptionText" />
      <AppOperationButton buttonText="SHA1 加密: encryptSHA1ToString(val: string): string" @onTap="onEncryptSHA1" />

      <!-- encryptSHA256ToString -->
      <AppOperationInput operation-name="请输入需要 SHA256 加密的内容" v-model="sha256EncryptionText" />
      <AppOperationButton
        buttonText="SHA256 加密: encryptSHA256ToString(val: string): string"
        @onTap="onEncryptSHA256"
      />

      <!-- encryptSHA51ToString -->
      <AppOperationInput operation-name="请输入需要 SHA512 加密的内容" v-model="sha512EncryptionText" />
      <AppOperationButton
        buttonText="SHA512 加密: encryptSHA512ToString(val: string): string"
        @onTap="onEncryptSHA512"
      />
    </AppOperationContent>

    <AppOperationContent name="RSA 加密">
      <!-- encryptRSA2Base64 -->
      <AppOperationInput operation-name="请输入需要 RSA 加密的内容" v-model="rsaEncryptionText" />
      <AppOperationInput input-height="88" operation-name="请输入需要 RSA 加密公钥" v-model="rsaEncryptionPublicKey" />
      <AppOperationButton
        @onTap="onEncryptRSA2Base64"
        buttonText="RSA 加密: encryptRSA2Base64(data: string, publicKey: string): string | boolean"
      />
      <!-- encryptRSA2Base64Plain -->
      <AppOperationButton
        @onTap="onEncryptRSA2Base64Plain"
        buttonText="RSA 加密: encryptRSA2Base64Plain(data: string, encryptor: JSEncrypt): string | boolean"
      />
      <AppOperationButton
        @onTap="onEncryptRSA2Base64Plain(false, true)"
        buttonText="RSA 加密: 使用存储在 data 的加密器，直接加密"
      />
      <AppOperationButton
        @onTap="onEncryptRSA2Base64Plain(true, true)"
        buttonText="RSA 加密: 使用本地存储的加密器，直接加密"
      />
      <AppOperationButton
        @onTap="onEncryptRSA2Base64Plain(true, false)"
        buttonText="RSA 加密: 使用本地存储的加密器，用封装方法加密"
      />

      <!-- decryptRSABase64 -->
      <AppOperationInput operation-name="请输入需要 RSA 解密的内容" v-model="rsaDecryptionText" />
      <AppOperationInput input-height="88" operation-name="请输入需要 RSA 解密私钥" v-model="rsaEncryptionPrivateKey" />
      <AppOperationButton
        @onTap="onDecryptRSABase64RSA"
        buttonText="RSA 解密: decryptRSABase64(data: string, privateKey: string): string | boolean"
      />
      <!-- decryptRSABase64Plain -->
      <AppOperationButton
        @onTap="onDecryptRSABase64RSAPlain"
        buttonText="RSA 解密: decryptRSABase64Plain(data: string, encryptor: JSEncrypt): string | boolean"
      />
      <AppOperationButton
        @onTap="onDecryptRSABase64RSAPlain(false, true)"
        buttonText="RSA 解密: 使用存储在 data 的加密器，直接解密"
      />
      <AppOperationButton
        @onTap="onDecryptRSABase64RSAPlain(true, true)"
        buttonText="RSA 解密: 使用本地存储的加密器，直接解密"
      />
      <AppOperationButton
        @onTap="onDecryptRSABase64RSAPlain(true, false)"
        buttonText="RSA 解密: 使用本地存储的加密器，用封装方法解密"
      />
    </AppOperationContent>
  </view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

/**
 * 加密器不需要放在 data，因为不需要动态响应，放在顶层效率更高
 */
let rsaEnCryptor = null

export default {
  name: 'UtoolsEncryptUtil',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      consoleText: '输出区(可点击复制)',
      md5EncryptionText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
      sha1EncryptionText: 'sha1EncryptionText',
      sha256EncryptionText: 'sha256EncryptionText',
      sha512EncryptionText: 'sha512EncryptionText',
      /**
       * 这里在 data 放置了一个加密器，发现使用速度比放置在顶层慢了 10 倍。下面有对比数据
       */
      rsaEnCryptor: null,
      rsaEncryptionText: 'rsaEncryptionText',
      rsaDecryptionText:
        'qOEypB88lYUn3VPleD9UwEhIaoSP9RpauGHpNyXorpPbibXNEiwXcm/ungvUITRxUalqBLwMlNckjeyKAtGVGXgPhDInkuUZU8D25C3sdxowC6OyGUE+UFDkQvud1EXqW1yqmVfaSG889Tt5XvH3oyi+a3zpCFnjbNoKoFAQvBc=',
      rsaEncryptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyH9AnCQL3Gy9Ed3PDGV7xPnpt
0+65mlzzKNxIg3+sG8ndPvke1gTpcCAOA/nz2dHyEnJqsQGEfETXqjxb1ayvitX2
TW48tNEbos/nYyDqjV1cXibcMSqxFTJbyRpwH9r4kkAHImmAJ+8ggnzmulogvlmP
FueS0S+KwrM7uoi23QIDAQAB
-----END PUBLIC KEY-----
`,
      rsaEncryptionPrivateKey: `-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBALIf0CcJAvcbL0R3
c8MZXvE+em3T7rmaXPMo3EiDf6wbyd0++R7WBOlwIA4D+fPZ0fIScmqxAYR8RNeq
PFvVrK+K1fZNbjy00Ruiz+djIOqNXVxeJtwxKrEVMlvJGnAf2viSQAciaYAn7yCC
fOa6WiC+WY8W55LRL4rCszu6iLbdAgMBAAECgYAld22YGFwoT+6ETz/pRLfktIiZ
+18WaTKt7uVO12IOeJXgVLOf2dKUq4ICkLGNqj5v1ZN9f5fbHyx31JX3lx1IQVRu
zJP1hMWaAvNLJ23nySRf1YRa8uDFSuHhss1u7gkTEUVog2BL7IPv2e97wCHyXzEB
Ldba6FI14hpZEJrAQQJBAN+3HQCxjYjDeFJCdcLJtXOKicue4RM5P5VxrOOhkRO0
tFqqM8MVfMUkozF3mn68y1CsJPqtk7fbdfnawr7Lxe0CQQDL1GVJfdtpuZvNQCGX
QiTed8nT12/sdPWZsWg4qtm+/L1xDaryj9fXMi7Dj1KXXEn8dk7G2v4OQguHyZNa
3JaxAkBmUKP2Dj4x31wnGvgqtv/CsQimVKqRlSwsWAn/LYRhY9LcaF02Cpy+uSvd
0tqYvhWqdqCO+VXGz5scQ12vzxhdAkEAxKBm+SdNI0dnEe/8t4KaOHXMH+yizrLh
PdtTE99U4JXFVir+LrIuYCzLyeEXpmXkBYRHaDNXg3+Yyevdl3hWcQJAZ/m7aUKq
4n9hLxJj85EOJBNscMxxzaVplPqmJvwO2rr7HDxl3bB31flvWIUik/CfrsYdWy5Q
fhe0p/VKfqSYgA==
-----END PRIVATE KEY-----
`,
    }
  },

  methods: {
    onMd5Encrypt() {
      const { md5EncryptionText, $utools } = this
      if (md5EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptMD5(md5EncryptionText)
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容!')
      }
    },

    onEncryptSHA1() {
      const { sha1EncryptionText, $utools } = this
      if (sha1EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA1ToString(sha1EncryptionText)
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容!')
      }
    },

    onEncryptSHA256() {
      const { sha256EncryptionText, $utools } = this
      if (sha256EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA256ToString(sha256EncryptionText)
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容!')
      }
    },

    onEncryptSHA512() {
      const { sha512EncryptionText, $utools } = this
      if (sha512EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA512ToString(sha512EncryptionText)
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容!')
      }
    },

    onEncryptRSA2Base64() {
      const { rsaEncryptionText, rsaEncryptionPublicKey, $utools } = this
      if (!rsaEncryptionText) {
        return $utools.toast('请输入内容!')
      } else if (!rsaEncryptionPublicKey) {
        return $utools.toast('请输入RSA加密公钥!')
      }
      const start = performance.now()
      const res = $utools.EncryptUtil.encryptRSA2Base64(rsaEncryptionText, rsaEncryptionPublicKey)
      const end = performance.now()
      if (!res) {
        $utools.toast(`公钥设置失败! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      }
      this.consoleText = res
      $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}, 用时 ${(end - start).toFixed(3)}ms`)
    },

    onEncryptRSA2Base64Plain(isUseLocalCryptor, direct) {
      const { rsaEncryptionText, rsaEncryptionPublicKey, $utools } = this
      if (!rsaEncryptionText) {
        return $utools.toast('请输入内容!')
      } else if (!rsaEncryptionPublicKey) {
        return $utools.toast('请输入RSA加密公钥!')
      }
      if (isUseLocalCryptor) {
        if (!rsaEnCryptor) {
          rsaEnCryptor = $utools.EncryptUtil.getRSAEnCryptor()
          rsaEnCryptor.setPublicKey(rsaEncryptionPublicKey)
        }
      } else {
        if (!this.rsaEnCryptor) {
          this.rsaEnCryptor = $utools.EncryptUtil.getRSAEnCryptor()
          this.rsaEnCryptor.setPublicKey(rsaEncryptionPublicKey)
        }
      }

      try {
        /**
         * 公钥无变化不需要每次设置，这里提供了修改功能，所以每次都更新了
         */
        if (rsaEnCryptor) {
          rsaEnCryptor.setPublicKey(rsaEncryptionPublicKey)
        } else {
          this.rsaEnCryptor.setPublicKey(rsaEncryptionPublicKey)
        }

        const start = performance.now()
        if (isUseLocalCryptor) {
          if (direct) {
            this.consoleText = rsaEnCryptor.encrypt(rsaEncryptionText)
          } else {
            this.consoleText = $utools.EncryptUtil.encryptRSA2Base64Plain(rsaEncryptionText, rsaEnCryptor)
          }
        } else {
          if (direct) {
            this.consoleText = this.rsaEnCryptor.encrypt(rsaEncryptionText)
          } else {
            this.consoleText = $utools.EncryptUtil.encryptRSA2Base64Plain(rsaEncryptionText, this.rsaEnCryptor)
          }
        }
        const end = performance.now()
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}, 用时 ${(end - start).toFixed(3)}ms`)
      } catch (error) {
        $utools.toast(`公钥设置失败! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      }
    },

    onDecryptRSABase64RSA() {
      const { rsaDecryptionText, rsaEncryptionPrivateKey, $utools } = this
      if (!rsaDecryptionText) {
        return $utools.toast('请输入内容!')
      } else if (!rsaEncryptionPrivateKey) {
        return $utools.toast('请输入RSA解密私钥!')
      }
      try {
        const start = performance.now()
        const res = $utools.EncryptUtil.decryptRSABase64(rsaDecryptionText, rsaEncryptionPrivateKey)
        const end = performance.now()
        this.consoleText = res
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}, 用时 ${(end - start).toFixed(3)}ms`)
      } catch (error) {
        $utools.toast(`私钥解密失败! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      }
    },

    onDecryptRSABase64RSAPlain(isUseLocalCryptor, direct) {
      const { rsaDecryptionText, rsaEncryptionPrivateKey, $utools } = this
      if (!rsaDecryptionText) {
        return $utools.toast('请输入内容!')
      } else if (!rsaEncryptionPrivateKey) {
        return $utools.toast('请输入RSA解密私钥!')
      }
      if (isUseLocalCryptor) {
        if (!rsaEnCryptor) {
          rsaEnCryptor = $utools.EncryptUtil.getRSAEnCryptor()
          rsaEnCryptor.setPrivateKey(rsaEncryptionPrivateKey)
        }
      } else {
        if (!this.rsaEnCryptor) {
          this.rsaEnCryptor = $utools.EncryptUtil.getRSAEnCryptor()
          this.rsaEnCryptor.setPrivateKey(rsaEncryptionPrivateKey)
        }
      }

      try {
        /**
         * 私钥无变化不需要每次设置，这里提供了修改功能，所以每次都更新了
         */
        if (rsaEnCryptor) {
          rsaEnCryptor.setPrivateKey(rsaEncryptionPrivateKey)
        } else {
          this.rsaEnCryptor.setPrivateKey(rsaEncryptionPrivateKey)
        }
        const start = performance.now()
        if (isUseLocalCryptor) {
          if (direct) {
            this.consoleText = rsaEnCryptor.decrypt(rsaDecryptionText)
          } else {
            this.consoleText = $utools.EncryptUtil.decryptRSABase64Plain(rsaDecryptionText, rsaEnCryptor)
          }
        } else {
          if (direct) {
            this.consoleText = this.rsaEnCryptor.decrypt(rsaDecryptionText)
          } else {
            this.consoleText = $utools.EncryptUtil.decryptRSABase64Plain(rsaDecryptionText, this.rsaEnCryptor)
          }
        }
        // this.consoleText = $utools.EncryptUtil.decryptRSABase64Plain(rsaDecryptionText, this.rsaEnCryptor)
        const end = performance.now()
        $utools.toast(`成功! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}, 用时 ${(end - start).toFixed(3)}ms`)
      } catch (error) {
        $utools.toast(`私钥设置失败! ${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
