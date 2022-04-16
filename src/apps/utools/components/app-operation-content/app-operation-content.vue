<!--
 * 操作内容
 * @author: SunSeekerX
 * @Date: 2021-09-06 16:24:49
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 17:18:07
-->

<template>
  <view class="operation">
    <!-- 操作标题 -->
    <view class="wd-h-33 wd-text-333 wd-flex wd-items-center">
      <text class="wd-text-16">📌 {{ name }} </text>
    </view>

    <slot />
  </view>
</template>

<script>
export default {
  name: 'AppOperationContent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// 操作区域
.operation {
  margin-top: 6px;
  border-radius: 3px;
  color: #666;
}
</style>
