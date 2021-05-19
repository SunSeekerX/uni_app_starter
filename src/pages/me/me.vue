<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-03-27 16:24:58
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-04-03 18:05:35
-->

<template>
  <view class="content">
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

    <!-- 项目菜单 -->
    <view class="menu">
      <view
        @tap="onGetUpdate"
        class="item dp-f jc-sb ai-c h-44 mt-12 pl-12 pr-12 br-6"
        style="border: solid 1px #eee; box-shadow: 0 2px 5px rgba(0, 0, 0, .1);"
      >
        <text class="c-6">检查更新</text>
        <c-icon color="#666666" name="icon-gengduo" size="16"></c-icon>
      </view>
    </view>
  </view>
</template>

<script>
// #ifdef APP-PLUS
import pushy from '@/utils/pushy/index'
// #endif
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
    // 检查更新
    async onGetUpdate() {
      // #ifndef APP-PLUS
      this.$util.toast('请在App端检查更新哦~')
      // #endif
      // #ifdef APP-PLUS
      if (plus.runtime.appid !== 'HBuilder') {
        // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
        // 检查更新
        const res = await pushy.getUpdate()
        this.$util.toast(res.message)
      } else {
        this.$util.toast('自定义基座才能检查更新哦~')
      }
      // #endif
    },
  },
}
</script>

<style lang="scss" scoped></style>
