<template>
  <view>
    <view>请查看控制台效果</view>
    <button @click="onLogError">Error</button>
    <button @click="onLog">Log</button>
    <button @click="onLogWarn">Warn</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onLogError() {
      this.$util.LogUtil.error('error')
    },
    onLog() {
      this.$util.LogUtil.log('log')
    },
    onLogWarn() {
      this.$util.LogUtil.warn('warn')
    },
  },
}
</script>

<style></style>
