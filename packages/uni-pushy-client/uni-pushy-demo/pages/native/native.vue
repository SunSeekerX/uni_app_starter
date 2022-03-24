<template>
  <view class="page">
    <!-- 信息 -->
    <view>
      <view class="item">
        <view class="label">原生版本：</view> <view class="value">{{ appInfo.nativeVersion }}</view>
      </view>
      <view class="item">
        <text class="label">原生版本号：</text>
        <text class="value">{{ appInfo.nativeVersionCode }}</text>
      </view>

      <view class="item">
        <text class="label">wgt 版本：</text> <text class="value">{{ appInfo.wgtVersion }}</text>
      </view>
      <view class="item">
        <text class="label">wgt 版本号：</text>
        <text class="value">{{ appInfo.wgtVersionCode }}</text>
      </view>
    </view>
    <button @click="onUpdateConfig" class="btn" style="background-color: #999;">切换语言 当前：{{ locale }}</button>
    <button @click="onGetInfo" class="btn" style="background-color: #999;">获取信息</button>
    <button @click="() => onGetUpdate()" class="btn" style="background-color: #dd524d;">检查更新</button>
    <button @click="() => onGetUpdate(true)" class="btn" style="background-color: #dd524d;">检查更新(手动)</button>

    <!-- <view class="info-board" style="color: #007AFF;">
      {{ appInfoString }}
    </view> -->

    <scroll-view class="info-board" scroll-x="true">
      <y-json-view :json="appInfoJson" />
    </scroll-view>
  </view>
</template>

<script>
import { pushy } from '@/utils/pushy/index'
import yJsonView from '@/components/y-json-view/y-json-view'
export default {
  name: 'Native',
  components: {
    yJsonView,
  },
  watch: {
    locale(newVal) {
      pushy.updateConfig({
        locale: newVal,
      })
    },
  },
  data() {
    return {
      // en_US zh_CN
      locale: 'en_US',
      appInfo: {},
      appInfoJson: {},
    }
  },
  methods: {
    async onGetUpdate(manual) {
      const res = await pushy.getUpdate(manual)
      this.appInfoJson = res

      uni.showToast({
        title: res.message,
        icon: 'none',
      })
    },

    // 更新语言
    onUpdateConfig() {
      if (this.locale === 'en_US') {
        this.locale = 'zh_CN'
      } else {
        this.locale = 'en_US'
      }
    },

    async onGetInfo() {
      const appInfo = await pushy.getInfo()
      this.appInfo = appInfo
      this.appInfoJson = appInfo
      uni.showToast({
        title: '获取信息成功',
        icon: 'none',
      })
    },
  },
  onLoad() {
    this.onGetInfo()
  },
}
</script>

<style lang="scss" scoped>
$padding: 15px;

.page {
  padding: $padding;

  .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    border-bottom: 1px solid #eee;

    .label {
      color: #333;
      font-size: 18px;
      font-weight: bold;
    }

    .value {
      color: #666;
      font-size: 16px;
    }
  }

  .btn {
    box-sizing: border-box;
    margin-top: $padding;
    color: #fff;
  }

  .info-board {
    box-sizing: border-box;
    margin-top: $padding;
    padding: $padding;
    border: 1px solid #eee;
    border-radius: 6px;
  }
}
</style>
