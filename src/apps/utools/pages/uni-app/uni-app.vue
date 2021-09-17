<!--
 * uni-app 相关
 * @author: SunSeekerX
 * @Date: 2021-09-06 14:22:51
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 18:01:06
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
      <view class="fs-12 mt-12">路由跳转</view>
      <AppOperationButton
        buttonText="路由跳转 - navigateTo: route(options: Object): void"
        @onTap="
          $utools.route({
            url: '/apps/utools/pages/uni-app/route?type=navigateTo',
          })
        "
      />
      <AppOperationButton
        buttonText="路由跳转 - redirectTo: route(options: Object): void"
        @onTap="
          $utools.route({
            url: '/apps/utools/pages/uni-app/route?type=redirectTo',
            type: 'redirectTo',
          })
        "
      />
      <AppOperationButton
        buttonText="路由跳转 - reLaunch: route(options: Object): void"
        @onTap="
          $utools.route({
            url: '/apps/utools/pages/uni-app/route?type=reLaunch',
            type: 'reLaunch',
          })
        "
      />
      <AppOperationButton
        buttonText="路由跳转 - switchTab: route(options: Object): void (回到工具页)"
        @onTap="
          $utools.route({
            url: '/pages/tools/tools',
            type: 'switchTab',
          })
        "
      />
      <AppOperationButton
        buttonText="路由跳转 - navigateBack: route(options: Object): void"
        @onTap="
          $utools.route({
            type: 'navigateBack',
          })
        "
      />

      <!-- request -->
      <view class="fs-12 mt-12">网络请求</view>
      <AppOperationButton buttonText="网络请求 - GET: route(options: Object): void" @onTap="onGet" />
      <AppOperationButton buttonText="网络请求 - POST: route(options: Object): void" @onTap="onPost" />
      <AppOperationButton buttonText="网络请求 - PUT: route(options: Object): void" @onTap="onPut" />
      <AppOperationButton buttonText="网络请求 - DELETE: route(options: Object): void" @onTap="onDelete" />
      <AppOperationButton buttonText="网络请求 - UPLOAD: route(options: Object): void" @onTap="onUpload" />
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

    async onGet() {
      this.consoleText = await this.$api.Express.get()
    },

    async onPost() {
      this.consoleText = await this.$api.Express.post()
    },

    async onPut() {
      this.consoleText = await this.$api.Express.put()
    },

    async onDelete() {
      this.consoleText = await this.$api.Express.delete()
    },

    async onUpload() {
      this.consoleText = await this.$api.Express.upload()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
