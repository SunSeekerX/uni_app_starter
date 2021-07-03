<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-03 12:45:11
-->

<template>
  <view class="content">
    <!-- 操作区域 -->
    <view>
      <view class="dp-f ai-c">
        <input v-model="encodeText" class="content-input" type="text" placeholder="请输入内容" />
        <button @tap="onEncode" class="content-button dp-fc">URL 编码</button>
      </view>

      <view class="dp-f ai-c mt-6">
        <input v-model="decodeText" class="content-input" type="text" placeholder="请输入内容" />
        <button @tap="onDecode" class="content-button dp-fc">URL 解码</button>
      </view>
    </view>

    <!-- 内容输出区域 -->
    <view>
      <view class="dp-fc">
        <text class="fs-16 c-6 mt-24">内容输出区域</text>
      </view>
      <view @tap="utools.copy(consoleObj.res)" class="console w-700r">
        {{ consoleObj.res }}
        <!-- <text class="console-item fw-w" v-for="item of consoleArr" :key="item.time">{{ item.res }}</text> -->
      </view>
    </view>
  </view>
</template>

<script>
import utools from '@/utils/utools/lib/bundle.esm'

console.log(utools)

export default {
  data() {
    return {
      utools,

      encodeText: '',
      decodeText: '',

      consoleObj: {},
      consoleArr: [],
    }
  },
  methods: {
    onEncode() {
      const { encodeText } = this
      if (encodeText) {
        // this.consoleArr.push({
        //   time: new Date().getTime(),
        //   res: utools.EncodeUtil.urlEncode(encodeText)
        // })

        this.consoleObj = {
          time: new Date().getTime(),
          res: utools.EncodeUtil.urlEncode(encodeText),
        }
      } else {
        utools.toast('清输入需要编码的内容！')
      }
    },

    onDecode() {
      const { decodeText } = this
      if (decodeText) {
        this.consoleObj = {
          time: new Date().getTime(),
          res: utools.EncodeUtil.urlDecode(decodeText),
        }
      } else if (this.consoleObj.res) {
        this.consoleObj = {
          time: new Date().getTime(),
          res: utools.EncodeUtil.urlDecode(this.consoleObj.res),
        }
      } else {
        utools.toast('解码的内容为空！')
      }
    },

    // 复制
  },
}
</script>

<style lang="scss" scoped>
.content-input {
  height: 40px;
  padding: 0 6px;
  border: solid 1px #eee;
  border-radius: 6px;
  flex: 2;
}

.content-button {
  height: 40px;
  margin-left: 6px;
  font-size: 16px;
  outline: none;
  flex: 1;
}

// 内容输出区域
.console {
  min-height: 200px;
  padding: 12px;
  margin-top: 24px;
  word-break: break-all;
  background-color: #d3d3d3;
  border-radius: 3px;
}

.console-item {
  // border-bottom: solid 1px #eee;
  padding: 12px 6px;
  word-wrap: break-word;
}
</style>
