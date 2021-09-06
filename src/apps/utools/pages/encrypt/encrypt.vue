<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-06 17:43:10
-->

<template>
  <view class="page">
    <AppOutput :output="consoleText" />

    <AppOperationContent name="md5 加密">
      <!-- encryptMD5 -->
      <AppOperation
        operation-name="请输入需要 md5 加密的内容"
        v-model="md5EncryptionText"
        button-text="md5 加密: encryptMD5(val: string): string"
        @onTap="onMd5Encrypt"
      />
    </AppOperationContent>

    <AppOperationContent name="SHA 加密">
      <!-- encryptSHA1ToString -->
      <AppOperation
        operation-name="请输入需要 SHA1 加密的内容"
        v-model="sha1EncryptionText"
        button-text="SHA1 加密: encryptSHA1ToString(val: string): string"
        @onTap="onEncryptSHA1"
      />
      <!-- encryptSHA256ToString -->
      <AppOperation
        operation-name="请输入需要 SHA256 加密的内容"
        v-model="sha256EncryptionText"
        button-text="SHA256 加密: encryptSHA256ToString(val: string): string"
        @onTap="onEncryptSHA256"
      />
      <!-- encryptSHA51ToString -->
      <AppOperation
        operation-name="请输入需要 SHA512 加密的内容"
        v-model="sha512EncryptionText"
        button-text="SHA512 加密: encryptSHA256ToString(val: string): string"
        @onTap="onEncryptSHA512"
      />
    </AppOperationContent>
  </view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperation from '../../components/app-operation/app-operation'

export default {
  name: 'UtoolsEncryptUtil',

  components: { AppOutput, AppOperationContent, AppOperation },

  data() {
    return {
      consoleText: '输出区(可点击复制)',
      md5EncryptionText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
      sha1EncryptionText: 'sha1EncryptionText',
      sha256EncryptionText: 'sha256EncryptionText',
      sha512EncryptionText: 'sha512EncryptionText',
    }
  },

  methods: {
    onMd5Encrypt() {
      const { md5EncryptionText, $utools } = this
      if (md5EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptMD5(md5EncryptionText)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容！')
      }
    },

    onEncryptSHA1() {
      const { sha1EncryptionText, $utools } = this
      if (sha1EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA1ToString(sha1EncryptionText)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容！')
      }
    },

    onEncryptSHA256() {
      const { sha256EncryptionText, $utools } = this
      if (sha256EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA256ToString(sha256EncryptionText)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容！')
      }
    },

    onEncryptSHA512() {
      const { sha512EncryptionText, $utools } = this
      if (sha512EncryptionText) {
        this.consoleText = $utools.EncryptUtil.encryptSHA51ToString(sha512EncryptionText)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容！')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
