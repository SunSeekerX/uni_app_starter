<template>
  <view> <button @click="toLog">log</button> </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toLog() {
      this.$util.router({
        url: '/pages/tools/log/log',
      })
    },
  },
}
</script>

<style></style>
