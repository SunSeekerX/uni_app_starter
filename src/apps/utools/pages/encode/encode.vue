<!--
 * 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 23:52:48
-->

<template>
  <view class="page">
    <!-- 内容输出区域 -->
    <view class="console" @tap="$utools.copy(consoleObj.res, { msg: '复制成功' })">
      <text class="output">{{ consoleObj.res }}</text>
    </view>

    <!-- 操作区域 -->
    <view class="operation">
      <view class="desc">
        <text class="title"> URL 编码 </text>
        <c-icon name="icon-shouye" color="#0000ff" size="24" :svg="false"></c-icon>
      </view>

      <label>
        <text class="label">请输入需要 URL 编码的内容</text>
        <textarea class="content-input" v-model="encodeText" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onEncode" class="content-button dp-fc">URL 编码: urlEncode(val: string)</button>

      <label>
        <text class="label">请输入需要 URL 解码的内容</text>
        <view class="dp-f fd-c">
          <text class="fs-12">解码为可识别的 url 链接</text>
          <radio-group @change="onRadioChange">
            <radio value="true" :checked="isUrl">true</radio>
            <radio value="false" :checked="!isUrl">false</radio>
          </radio-group>
        </view>
        <textarea class="content-input" v-model="decodeText" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onDecode" class="content-button dp-fc"
        >URL 解码 - urlDecode(val: string, [url: boolean = true])</button
      >

      <view class="desc mt-24">
        <text class="title">base64 编码</text>
        <c-icon name="icon-shouye" color="#0000ff" size="24" :svg="false"></c-icon>
      </view>

      <label>
        <text class="label">请输入需要 base64 编码的内容</text>
        <textarea class="content-input" v-model="encodeTextBase64" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onEncodeBase64" class="content-button dp-fc"
        >base64 编码: base64Encode2String(val: string)</button
      >

      <label>
        <text class="label">请输入需要 base64 解码的内容</text>
        <textarea class="content-input" v-model="decodeTextBase64" maxlength="-1" type="text" />
      </label>
      <button type="primary" @tap="onDecodeBase64" class="content-button dp-fc"
        >base64 解码: base64Decode(val: string)</button
      >
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

    // 复制
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 12px 15rpx;
  // 内容输出区域
  .console {
    position: sticky;
    top: calc(var(--window-top) + 6px);
    z-index: 1;
    padding: 6px;
    word-break: break-all;
    background: #fff;
    border-color: #ddd;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    // background-color: #d3d3d3;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .output {
      font-size: 12px;
      color: #333;
    }
  }

  // 说明区域
  .description {
    padding: 20px 10px;
    color: #fff;
    white-space: pre-wrap;
    background-color: $uni-color-error;
    border-color: #ddd;
    border-style: dashed;
    border-width: 1px;
    border-radius: 3px;

    .title {
      padding-bottom: 6px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
  }

  // 操作区域
  .operation {
    margin-top: 6px;
    color: #666;
    border-radius: 3px;

    .desc {
      color: #fff;
      text-align: center;
      background-color: $uni-color-success;
      border-bottom: 1px #ddd solid;
      // border-color: #ddd;
      // border-style: solid;
    }

    .label {
      font-size: 12px;
    }

    .content-input {
      width: 720rpx;
      height: 66px;
      padding: 12px 6px;
      margin-top: 6px;
      font-size: 12px;
      border: solid 1px #eee;
      border-color: #ddd;
      border-style: dashed;
      border-width: 1px;
      border-radius: 6px;
    }

    .content-button {
      width: 100%;
      height: 33px;
      margin-top: 12px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
}
</style>
