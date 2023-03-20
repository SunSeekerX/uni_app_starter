<template>
  <c-page background-color="#f6f6f6" box-class="wd-p-25r">
    <AppOperationContent name="日志工具">
      <AppOperationInput v-model="tagName" operation-name="请输入标签名" />

      <AppOperationButton button-text="设置标签名" @onTap="onSetName" />

      <AppOperationButton button-text="debug" @onTap="onDebug" />
      <AppOperationButton button-text="log" @onTap="onLog" />
      <AppOperationButton button-text="warn" @onTap="onLogWarn" />
      <AppOperationButton button-text="error" @onTap="onLogError" />
    </AppOperationContent>
  </c-page>
</template>

<script>
import utools from '@root/packages/limm-utools'

/**
 * LogUtil 实用性不强，待废弃
 */
import AppOperationContent from '../../components/app-operation-content/app-operation-content'
import AppOperationInput from '../../components/app-operation-input/app-operation-input'
import AppOperationButton from '../../components/app-operation-button/app-operation-button'

import { appName } from '@/constant'

export default {
  name: 'UtoolsLogUtil',
  components: { AppOperationContent, AppOperationInput, AppOperationButton },
  data() {
    return {
      consoleText: '输出区(可点击复制)',
      tagName: appName,
    }
  },
  methods: {
    onSetName() {
      const { tagName } = this
      if (tagName) {
        this.$util.LogUtil.setName(tagName)
        utools.toast(`成功！${utools.dayjs().format('YYYY-MM-DD HH:mm:ss:SSS')}`)
      } else {
        utools.toast('请输入内容！')
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
