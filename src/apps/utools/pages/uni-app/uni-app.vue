<template>
  <view>
    <input v-model="text" type="text" placeholder="再次输入你要复制的文本" /> <button @tap="onCopy">复制</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onCopy() {
      this.$utools.copy(this.text, {
        msg: '复制成功',
      })
    },
  },
}
</script>

<style></style>
