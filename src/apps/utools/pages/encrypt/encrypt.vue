<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-23 10:34:47
-->

<template>
  <view class="page">
    <!-- 内容输出区域 -->
    <view class="console" @tap="$utools.copy(consoleText, { msg: '复制成功' })">
      <text class="output">{{ consoleText }}</text>
    </view>

    <!-- 操作区域 -->
    <view class="operation">
      <!-- MD5 -->
      <view class="h-33 c-3 dp-f ai-c">
        <text class="fs-16">📌 md5 加密 </text>
        <c-icon class="ml-6" name="icon-fl-xinxi" color="#ffffff" size="24" :svg="false"></c-icon>
      </view>
      <label>
        <text class="label">请输入需要内容</text>
        <textarea class="content-input" v-model="md5EncryptText" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onMd5Encrypt" class="content-button dp-fc"
        >md5 加密: encryptMD5(val: string): string
      </button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      md5EncryptText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
      consoleText: '输出区(可点击复制)',
    }
  },

  methods: {
    onMd5Encrypt() {
      const { md5EncryptText, $utools } = this
      if (md5EncryptText) {
        this.consoleText = $utools.EncryptUtil.encryptMD5(md5EncryptText)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('清输入内容！')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/apps/utools/common/scss/index.scss';
</style>
