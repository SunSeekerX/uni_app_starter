<!--
 * 操作输出
 * @author: SunSeekerX
 * @Date: 2021-09-06 16:05:46
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:45:45
-->

<template>
  <!-- 内容输出区域 -->
  <view class="console" @tap="$utools.copy(output, { msg: '复制成功' })">
    <text class="output">{{ output }}</text>
  </view>
</template>

<script>
export default {
  name: 'AppOutput',
  props: {
    output: {
      type: [String, Boolean, Object, null, undefined],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// 内容输出区域
.console {
  position: sticky;
  top: calc(var(--window-top) + 6px);
  z-index: 1;
  max-height: 200px;
  padding: 6px;
  overflow-y: scroll;
  word-break: break-all;
  background: #fff;
  border-color: #ddd;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .output {
    font-size: 12px;
    color: #333;
  }
}
</style>
