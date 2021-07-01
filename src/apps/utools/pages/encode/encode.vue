<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-07-01 23:39:11
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-01 23:48:21
-->

<template>
  <view class="content">
    <!-- 操作区域 -->
    <view>
      <view class="dp-f ai-c">
        <input class="content-input" type="text" placeholder="请输入内容" />

        <button class="content-button dp-fc">URL 编码</button>
      </view>
    </view>

    <!-- 内容输出区域 -->
    <view class="dp-fc">
      <text class="fs-16 c-6 mt-24">内容输出区域</text>
    </view>
    <view class="console w-700r"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
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
  min-height: 400px;
  padding: 12px;
  margin-top: 24px;
  background-color: #d3d3d3;
  border-radius: 3px;
}
</style>
