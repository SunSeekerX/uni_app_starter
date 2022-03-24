<!--
 * 操作按钮
 * @author: SunSeekerX
 * @Date: 2021-09-16 17:15:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 18:32:10
-->

<template>
  <!-- 确认 -->
  <button type="primary" @tap="$emit('onTap')" class="content-button dp-fc">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'AppOperationButton',
  props: {
    // 按钮文本
    buttonText: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.content-button {
  width: 100%;
  margin-top: 12px;

  /* height: 33px; */
  padding: 6px 0;
  border-radius: 3px;
  font-size: 12px;
  line-height: normal;
}
</style>
