<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 16:24:58
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-04-03 18:05:35
-->

<template>
  <view>
    <!-- 环境切换 -->
    <u-button @click="state.isShowEnvActionSheet = true">
      {{ `环境切换，当前环境：${debug_env}` }}
    </u-button>

    <u-modal
      v-model="state.isShowEnvChangeModal"
      content="本操作将会清除本地数据并重启应用,确定吗？"
      :show-cancel-button="true"
      @cancel="state.isShowEnvChangeModal = false"
      @confirm="onConfirmEnvChange"
    ></u-modal>
    <u-action-sheet
      @click="onConfirmSelectEnv"
      :list="envList"
      v-model="state.isShowEnvActionSheet"
    ></u-action-sheet>
  </view>
</template>

<script>
import { envs } from '@/config/index'
import { ENV as debug_env } from '@/config/index'
const envList = []
for (const env of Object.keys(envs)) {
  envList.push({
    text: env,
  })
}

export default {
  data() {
    return {
      debug_env,
      // 页面控件状态
      state: {
        isShowEnvChangeModal: false,
        // 环境选择 ActionSheet 操作菜单
        isShowEnvActionSheet: false,
      },
      // 环境列表
      envList,
      // 已选环境
      selectedEnv: '',
    }
  },
  methods: {
    // 环境切换
    onConfirmSelectEnv(index) {
      const env = this.envList[index].text
      // this.state.isShowEnvChangeModal = false
      this.state.isShowEnvChangeModal = true
      this.selectedEnv = env
    },
    // 环境切换
    onConfirmEnvChange() {
      uni.clearStorageSync()
      uni.setStorageSync(this.$constant.appEnv, this.selectedEnv)
      // #ifdef H5
      location.reload()
      // #endif
      // #ifdef APP-PLUS
      plus.runtime.restart()
      // #endif
    },
  },
}
</script>

<style lang="scss" scoped></style>
