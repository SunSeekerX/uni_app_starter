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
    <view class="console" @tap="$utools.copy(consoleObj.res, { msg: '复制成功' })">
      <text class="output">{{ consoleObj.res }}</text>
    </view>

    <!-- 操作区域 -->
    <view class="operation">
      <!-- 操作标题 -->
      <view class="h-33 c-3 dp-f ai-c">
        <text class="fs-16">📌 URL 编码 </text>
        <c-icon class="ml-6" name="icon-fl-xinxi" color="#ffffff" size="24" :svg="false"></c-icon>
      </view>

      <!-- 操作块 -->
      <label>
        <text class="label">请输入需要 URL 编码的内容</text>
        <textarea class="content-input" v-model="encodeText" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onEncode" class="content-button dp-fc">URL 编码: urlEncode(val: string)</button>

      <view class="dp-f fd-c">
        <text class="fs-12">解码为可识别的 url 链接</text>
        <radio-group @change="onRadioChange">
          <radio value="true" :checked="isUrl">true</radio>
          <radio class="ml-12" value="false" :checked="!isUrl">false</radio>
        </radio-group>
      </view>
      <label>
        <text class="label">请输入需要 URL 解码的内容</text>

        <textarea class="content-input" v-model="decodeText" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onDecode" class="content-button dp-fc">
        URL 解码 - urlDecode(val: string, [url: boolean = true])
      </button>

      <!-- 操作标题 -->
      <view class="h-33 c-3 dp-f ai-c mt-18">
        <text class="title fs-16">📌 base64 编码</text>
        <c-icon class="ml-6" name="icon-fl-xinxi" color="#ffffff" size="24" :svg="false"></c-icon>
      </view>

      <label>
        <text class="label">请输入需要 base64 编码的内容</text>
        <textarea class="content-input" v-model="encodeTextBase64" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onEncodeBase64" class="content-button dp-fc">
        base64 编码: base64Encode2String(val: string)
      </button>
      <label>
        <text class="label">请输入需要 base64 解码的内容</text>
        <textarea class="content-input" v-model="decodeTextBase64" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onDecodeBase64" class="content-button dp-fc">
        base64 解码: base64Decode(val: string)
      </button>
    </view>

    <!-- 说明区域 -->
    <!-- <view class="description">
      <view class="title">说明</view>
      <view class="text"
        >有些时候 Url 发送给后台需要进行编码防止在传输过程中被转码，后台返回无法使用，这个过程是需要前端独立完成的。 像
        IOS 设备打开 Url 的 （plus.runtime.openURL、plus.runtime.openWeb ）是不支持类似
        "https://doc.yoouu.cn/basic/resource/#📌-开源软件" 这种 Url 打开的，必须要先经过编码才可以。</view
      >
    </view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      encodeText: 'https://doc.yoouu.cn/basic/resource/#📌-开源软件',
      decodeText:
        'https%3A%2F%2Fdoc.yoouu.cn%2Fbasic%2Fresource%2F%23%F0%9F%93%8C-%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6',
      encodeTextBase64: '富贵不能淫，贫贱不能移，威武不能屈。',
      decodeTextBase64: '5a+M6LS15LiN6IO95rer77yM6LSr6LSx5LiN6IO956e777yM5aiB5q2m5LiN6IO95bGI44CC',

      isUrl: false,

      consoleObj: {
        res: '输出区(可点击复制)',
      },
    }
  },

  methods: {
    onEncode() {
      const { encodeText } = this
      if (encodeText) {
        this.consoleObj = {
          time: new Date().getTime(),
          res: this.$utools.EncodeUtil.urlEncode(encodeText),
        }
      } else {
        this.$utools.toast('清输入需要编码的内容！')
      }
    },

    onDecode() {
      const { decodeText } = this
      if (decodeText) {
        const decodeTextStr = this.$utools.EncodeUtil.urlDecode(decodeText, this.isUrl)
        this.consoleObj = {
          time: new Date().getTime(),
          res: decodeTextStr,
        }
      } else {
        this.$utools.toast('解码的内容为空！')
      }
    },

    onEncodeBase64() {
      const { encodeTextBase64 } = this
      if (encodeTextBase64) {
        const encodeTextStr = this.$utools.EncodeUtil.base64Encode2String(encodeTextBase64)
        this.consoleObj = {
          time: new Date().getTime(),
          res: encodeTextStr,
        }
      } else {
        this.$utools.toast('清输入需要编码的内容！')
      }
    },

    onDecodeBase64() {
      const { decodeTextBase64 } = this
      if (decodeTextBase64) {
        const decodeTextStr = this.$utools.EncodeUtil.base64Decode(decodeTextBase64)
        this.consoleObj = {
          time: new Date().getTime(),
          res: decodeTextStr,
        }
      } else {
        this.$utools.toast('解码的内容为空！')
      }
    },

    onRadioChange(e) {
      if (e.detail.value === 'true') {
        this.isUrl = true
      } else {
        this.isUrl = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/apps/utools/common/scss/index.scss';
</style>
