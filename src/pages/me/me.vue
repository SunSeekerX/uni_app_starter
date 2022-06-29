<template>
  <c-page backgroundColor="#f6f6f6" class="wd-p-25r">
    <!-- 环境切换 -->
    <!-- <u-button @click="state.isShowEnvActionSheet = true">
      {{ `环境切换，当前环境：${debug_env}` }}
    </u-button> -->

    <u-modal
      v-model="state.isShowEnvChangeModal"
      content="本操作将会清除本地数据并重启应用,确定吗？"
      :show-cancel-button="true"
      @cancel="state.isShowEnvChangeModal = false"
      @confirm="onConfirmEnvChange"
    ></u-modal>
    <u-action-sheet @click="onConfirmSelectEnv" :list="envList" v-model="state.isShowEnvActionSheet"></u-action-sheet>

    <!-- 项目菜单 -->
    <view class="menu">
      <view
        @tap="onGetUpdate"
        class="wd-bg-fff wd-flex wd-justify-between wd-items-center wd-h-44 wd-mt-12 wd-pl-12 wd-pr-12 wd-rounded-6"
        style="border: solid 1px #eee; box-shadow: 0 2px 5px rgb(0 0 0 / 10%)"
      >
        <text class="wd-text-666 wd-text-14">检查更新</text>
        <c-icon color="#666666" name="icon-gengduo" size="16"></c-icon>
      </view>
    </view>

    <!-- 项目版本 -->
    <!-- #ifdef APP-PLUS -->
    <view class="infomation">
      <view class="title">App 版本</view> <view>{{ appInfo.nativeVersion }}</view>
    </view>
    <view class="infomation">
      <view class="title">版本号</view>
      <view>Build:{{ appInfo.nativeVersionCode }}</view>
    </view>
    <view class="infomation">
      <view class="title">资源版本</view>
      <view>{{ appInfo.wgtVersion }}</view>
    </view>
    <view class="infomation">
      <view class="title">版本号</view>
      <view>{{ debug_env }}:{{ appInfo.wgtVersionCode }}</view>
    </view>
    <!-- #endif -->
  </c-page>
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
  name: 'PageMe',
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
      // #ifdef APP-PLUS
      // App 信息
      appInfo: {},
      // #endif
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
      this.$utools.toast('请在App端检查更新哦~')
      // #endif
      // #ifdef APP-PLUS
      if (plus.runtime.appid !== 'HBuilder') {
        // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
        // 检查更新
        const res = await pushy.getUpdate()
        this.$utools.toast(res.message)
      } else {
        this.$utools.toast('自定义基座才能检查更新哦~')
      }
      // #endif
    },
  },
  async onLoad() {
    // #ifdef APP-PLUS
    this.appInfo = await pushy.getInfo()
    // #endif
  },
}
</script>

<style lang="scss" scoped></style>
