<!--
 * 操作
 * @author: SunSeekerX
 * @Date: 2021-09-06 16:09:39
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-16 17:30:08
-->

<template>
  <view>
    <!-- 输入区 -->
    <label>
      <text class="label">{{ operationName }}</text>
      <textarea
        @input="$emit('change', $event.target.value)"
        :value="value"
        :placeholder="placeholder"
        class="content-input"
        maxlength="-1"
        type="text"
      />
    </label>

    <!-- 内容显示 -->
    <!-- <slot name="content" /> -->

    <!-- 参数设置 -->
    <!-- <view class="dp-f fd-c">
      <slot name="params" />
    </view> -->

    <slot />

    <!-- 确认 -->
    <!-- <button type="primary" @tap="$emit('onTap')" class="content-button dp-fc mb-15">{{ buttonText }}</button> -->
  </view>
</template>

<script>
export default {
  name: 'AppOperation',
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
    // 按钮文本
    // buttonText: {
    //   type: String,
    //   required: true,
    // },
  },
}
</script>

<style lang="scss" scoped>
.label {
  font-size: 12px;
}

.content-input {
  width: 720rpx;
  height: 66px;
  margin-top: 6px;
  padding: 6px;
  border: solid 1px #eee;
  border-width: 1px;
  border-style: dashed;
  border-radius: 6px;
  border-color: #ddd;
  font-size: 12px;
}

.content-button {
  width: 100%;
  height: 33px;
  margin-top: 12px;
  border-radius: 3px;
  font-size: 12px;
  line-height: normal;
}
</style>
