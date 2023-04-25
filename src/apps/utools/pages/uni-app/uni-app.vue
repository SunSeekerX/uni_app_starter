<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <AppOutput :output="consoleText" />

    <AppOperationContent name="uni-app api 二次封装">
      <!-- copy -->
      <AppOperationInput v-model="copyText" operation-name="请输入需要 copy 的内容" />
      <AppOperationButton button-text="复制: copy(val: string [, options: Object]): void" @onTap="copy" />

      <!-- toast -->
      <AppOperationInput v-model="toastText" operation-name="请输入需要 toast 提示的内容" />
      <AppOperationButton button-text="toast 提示: copy(val: string [, options: Object]): void" @onTap="toast" />

      <!-- route -->
      <view class="wd-text-12 wd-mt-12">路由跳转</view>
      <AppOperationButton
        button-text="路由跳转 - navigateTo: route(options: Object): void"
        @onTap="
          onRoute({
            url: '/apps/utools/pages/uni-app/route?type=navigateTo',
          })
        "
      />
      <AppOperationButton
        button-text="路由跳转 - redirectTo: route(options: Object): void"
        @onTap="
          onRoute({
            url: '/apps/utools/pages/uni-app/route?type=redirectTo',
            type: 'redirectTo',
          })
        "
      />
      <AppOperationButton
        button-text="路由跳转 - reLaunch: route(options: Object): void"
        @onTap="
          onRoute({
            url: '/apps/utools/pages/uni-app/route?type=reLaunch',
            type: 'reLaunch',
          })
        "
      />
      <AppOperationButton
        button-text="路由跳转 - switchTab: route(options: Object): void (回到工具页)"
        @onTap="
          onRoute({
            url: '/pages/tools/tools',
            type: 'switchTab',
          })
        "
      />
      <AppOperationButton
        button-text="路由跳转 - navigateBack: route(options: Object): void"
        @onTap="
          onRoute({
            type: 'navigateBack',
          })
        "
      />

      <!-- request -->
      <view class="wd-text-12 wd-mt-12">网络请求</view>
      <AppOperationButton button-text="网络请求 - GET: route(options: Object): void" @onTap="onGet" />
      <AppOperationButton button-text="网络请求 - POST: route(options: Object): void" @onTap="onPost" />
      <AppOperationButton button-text="网络请求 - PUT: route(options: Object): void" @onTap="onPut" />
      <AppOperationButton button-text="网络请求 - DELETE: route(options: Object): void" @onTap="onDelete" />
      <AppOperationButton button-text="网络请求 - UPLOAD: route(options: Object): void" @onTap="onUpload" />
    </AppOperationContent>
  </c-page>
</template>

<script>
import utools from '@root/packages/limm-utools'

import combined from '@/utils/combined'

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
    onRoute(options) {
      utools.route(options)
    },
    copy() {
      const { copyText } = this
      if (copyText) {
        utools.UniAppUtil.copy(copyText, {
          msg: '复制成功',
        })
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
        this.copyText = Date.now()
      } else {
        utools.toast('请输入内容！')
      }
    },
    toast() {
      const { toastText } = this
      if (toastText) {
        utools.UniAppUtil.toast(toastText)
      } else {
        utools.toast('请输入内容！')
      }
    },
    async onGet() {
      this.consoleText = await combined.api.Express.getApi()
    },
    async onPost() {
      this.consoleText = await combined.api.Express.postApi()
    },
    async onPut() {
      this.consoleText = await combined.api.Express.putApi()
    },
    async onDelete() {
      this.consoleText = await combined.api.Express.deleteApi()
    },
    async onUpload() {
      uni.chooseImage({
        success: async (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths
          this.consoleText = await combined.api.Express.uploadApi({
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              user: 'test',
            },
          })
          // uni.uploadFile({
          //   url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: 'file',
          //   formData: {
          //     user: 'test',
          //   },
          //   success: (uploadFileRes) => {
          //     console.log(uploadFileRes.data)
          //   },
          // })
        },
      })
    },
  },
}
</script>
