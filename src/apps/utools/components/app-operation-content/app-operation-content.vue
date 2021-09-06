<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-09-06 16:24:49
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-06 16:27:41
-->

<template>
  <view class="operation">
    <!-- 操作标题 -->
    <view class="h-33 c-3 dp-f ai-c">
      <text class="fs-16">📌 {{ name }} </text>
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
  color: #666;
  border-radius: 3px;
}
</style>
