<!--
 * 操作输入
 * @author: SunSeekerX
 * @Date: 2021-09-16 15:16:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 18:34:25
-->
<template>
  <!-- 输入区 -->
  <label>
    <text class="label">{{ operationName }}</text>
    <textarea
      @input="$emit('change', $event.target.value)"
      :value="value"
      :placeholder="placeholder"
      class="content-input"
      :style="`height: ${inputHeight}px;`"
      maxlength="-1"
      type="text"
    />
  </label>
</template>

<script>
export default {
  name: 'AppOperationInput',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    // 操作名
    operationName: {
      type: String,
      required: true,
    },
    // 输入的值
    value: {
      type: String,
      default: '',
      required: true,
    },
    // placeholder
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    // 输入框高度
    inputHeight: {
      type: [String, Number],
      required: false,
      default: '66',
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  font-size: 12px;
}

.content-input {
  width: 720rpx;
  padding: 6px;
  margin-top: 6px;
  overflow-y: scroll;
  font-size: 12px;
  line-height: normal;
  border: solid 1px #eee;
  border-color: #ddd;
  border-style: dashed;
  border-width: 1px;
  border-radius: 6px;
}
</style>
