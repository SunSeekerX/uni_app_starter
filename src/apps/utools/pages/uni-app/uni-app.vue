<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-09-06 14:22:51
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:45:27
-->

<template>
  <view class="page">
    <AppOutput :output="consoleText" />

    <AppOperationContent name="uni-app api 二次封装">
      <!-- copy -->
      <AppOperationInput operation-name="请输入需要 copy 的内容" v-model="copyText" />
      <AppOperationButton buttonText="复制: copy(val: string [, options: Object]): void" @onTap="copy" />

      <!-- toast -->
      <AppOperationInput operation-name="请输入需要 toast 提示的内容" v-model="toastText" />
      <AppOperationButton buttonText="toast 提示: copy(val: string [, options: Object]): void" @onTap="toast" />

      <!-- route -->
      <text class="fs-12">路由跳转</text>
    </AppOperationContent>
  </view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

export default {
  name: 'UtoolsUniApp',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      consoleText: '输出区(可点击复制)',
      copyText: 'copyText',
      toastText: '我是提示的文字',
    }
  },
  methods: {
    copy() {
      const { copyText, $utools } = this
      if (copyText) {
        $utools.UniAppUtil.copy(copyText, {
          msg: '复制成功',
        })
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
        this.copyText = Date.now()
      } else {
        $utools.toast('请输入内容！')
      }
    },

    toast() {
      const { toastText, $utools } = this
      if (toastText) {
        $utools.UniAppUtil.toast(toastText)
      } else {
        $utools.toast('请输入内容！')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
