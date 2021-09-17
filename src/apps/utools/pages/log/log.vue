<!--
 * 日志工具
 * @author: SunSeekerX
 * @Date: 2021-09-17 21:36:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:48:09
-->

<template>
  <view class="page">
    <!-- <AppOutput :output="consoleText" /> -->
    <AppOperationContent name="日志工具">
      <AppOperationInput operation-name="请输入标签名" v-model="tagName" />

      <AppOperationButton buttonText="设置标签名" @onTap="onSetName" />

      <AppOperationButton buttonText="debug" @onTap="onDebug" />
      <AppOperationButton buttonText="log" @onTap="onLog" />
      <AppOperationButton buttonText="warn" @onTap="onLogWarn" />
      <AppOperationButton buttonText="error" @onTap="onLogError" />
    </AppOperationContent>
  </view>
</template>

<script>
import AppOutput from '../../components/app-output/app-output'
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

import { appName } from '@/config/constant'

export default {
  name: 'UtoolsLogUtil',

  components: { AppOutput, AppOperationContent, AppOperationInput, AppOperationButton },

  data() {
    return {
      consoleText: '输出区(可点击复制)',

      tagName: appName,
    }
  },

  methods: {
    onSetName() {
      const { tagName, $utools } = this
      if (tagName) {
        this.$util.LogUtil.setName(tagName)
        $utools.toast(`成功！${$utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        $utools.toast('请输入内容！')
      }
    },
    onDebug() {
      this.$util.LogUtil.debug('debug')
    },
    onLog() {
      this.$util.LogUtil.log('log')
    },
    onLogWarn() {
      this.$util.LogUtil.warn('warn')
    },
    onLogError() {
      this.$util.LogUtil.error('error')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../common/styles/index.scss';
</style>
