<template>
  <view>
    <button @click="onToMonoFont">等宽字体</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onToMonoFont() {
      this.$util.router({
        url: '/pages/module/mono-font/mono-font',
      })
    },
  },
}
</script>

<style></style>
