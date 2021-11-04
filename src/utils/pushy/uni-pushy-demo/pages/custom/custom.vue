<!--
 * @name: 
 * @author: SunSeekerX
 * @Date: 2021-02-18 18:01:53
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-02-19 21:11:32
-->

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

    <button @click="onGetInfo" class="btn" style="background-color: #999;">获取信息</button>
    <!-- <button @click="() => onGetUpdate()" class="btn" style="background-color: #dd524d"
      >检查更新</button
    > -->
    <button @click="onGetUpdate" class="btn" style="background-color: #dd524d;">检查更新(手动)</button>
    <button @click="onRestart" class="btn" style="background-color: #dd524d;">重启</button>

    <!-- <view class="info-board" style="color: #007AFF;">
      {{ appInfoString }}
    </view> -->

    <scroll-view class="info-board" scroll-x="true">
      <y-json-view :json="appInfoJson" />
    </scroll-view>

    <!-- 更新弹窗 -->
    <u-popup v-model="state.isShowPopup" mode="center" :closeable="true">
      <view class="popup">
        <view>发现新版本：{{ apiInfo.version }}</view>

        <view>更新日志</view>
        <view>{{ apiInfo.changelog }}</view>

        <u-line-progress active-color="#2979ff" :percent="progress"></u-line-progress>

        <view>已下载：{{ downloadedSize }}/{{ totalSize }}</view>
        <view>当前状态：{{ curStatus }}</view>

        <view v-if="state.isUpdateSuccess">
          <button @click="onRestart" class="btn" style="background-color: #dd524d;">重启</button>
        </view>

        <view v-else class="popup-button">
          <u-button @click="state.isShowPopup = false" type="default">暂不升级</u-button>
          <u-button @click="onStartDownload" type="success">立即更新</u-button>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import { customPushy as pushy } from '@/utils/pushy/index'
import yJsonView from '@/components/y-json-view/y-json-view'
export default {
  name: 'Custom',
  components: {
    yJsonView,
  },
  data() {
    return {
      state: {
        // 是否显示更新弹窗
        isShowPopup: false,
        // 是否已经更新完成
        isUpdateSuccess: false,
      },
      // App 信息
      appInfo: {},
      // debug 信息
      appInfoJson: {},
      // 接口返回信息
      apiInfo: {},
      // 当前状态
      curStatus: '',
      // 下载进度
      progress: 0,
      // 以下载的大小
      downloadedSize: 0,
      // 总大小
      totalSize: 0,
    }
  },
  methods: {
    // 检查更新
    async onGetUpdate() {
      const res = await pushy.getUpdate()
      if (res.statusCode === 252 || res.statusCode === 251) {
        // 252：需要更新 wgt 版本 251：需要更新原生版本
        this.apiInfo = res.data
      }
      this.appInfoJson = res
      console.log(res.message)
    },

    // 获取 app 信息
    async onGetInfo() {
      const appInfo = await pushy.getInfo()
      this.appInfo = appInfo
      this.appInfoJson = appInfo
      uni.showToast({
        title: '获取信息成功',
        icon: 'none',
      })
    },

    // 启动下载
    async onStartDownload() {
      pushy.startDownload()
    },

    // 重启
    onRestart() {
      pushy.restart()
    },
  },
  onLoad() {
    pushy.on('onInitSuccess', () => {
      console.log('onInitSuccess>>>')
    })
    pushy.on('onInitFail', () => {
      console.log('onInitFail>>>')
    })
    pushy.on('onStartGetUpdate', () => {
      console.log('onStartGetUpdate>>>')
    })
    pushy.on('onNativeUpdateRequired', () => {
      console.log('onNativeUpdateRequired>>>')
      this.state.isShowPopup = true
    })
    pushy.on('onWgtUpdateRequired', () => {
      console.log('onWgtUpdateRequired>>>')
      this.curStatus = '需要更新wgt资源版本...'
      this.state.isShowPopup = true
    })
    pushy.on('onNoUpdate', () => {
      console.log('onNoUpdate>>>')
    })
    pushy.on('onUpdateRequestFalse', () => {
      console.log('onUpdateRequestFalse>>>')
    })
    pushy.on('onUpdateRequestFail', () => {
      console.log('onUpdateRequestFail>>>')
    })
    pushy.on('onUpdateRequestFailUnknown', () => {
      console.log('onUpdateRequestFailUnknown>>>')
    })
    pushy.on('onUpdateSuccess', () => {
      console.log('onUpdateSuccess>>>')
      this.curStatus = '更新成功'
      this.state.isUpdateSuccess = true
    })
    pushy.on('onStartDownload', () => {
      console.log('onStartDownload>>>')
      this.curStatus = '开始下载...'
    })
    pushy.on('onStartInstall', () => {
      this.curStatus = '开始安装...'
      console.log('onStartInstall>>>')
    })
    pushy.on('onDownloadProgress', ({ progress, downloadedSize, totalSize }) => {
      console.log('onDownloadProgress>>>', progress, downloadedSize, totalSize)
      this.progress = progress
      this.downloadedSize = downloadedSize
      if (this.totalSize !== totalSize) {
        this.totalSize = totalSize
      }
    })

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
    height: 44px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    .label {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .value {
      font-size: 16px;
      color: #666;
    }
  }

  .btn {
    margin-top: $padding;
    color: #fff;
    box-sizing: border-box;
  }

  .info-board {
    padding: $padding;
    margin-top: $padding;
    border: 1px solid #eee;
    border-radius: 6px;
    box-sizing: border-box;
  }

  .popup {
    width: 700rpx;
    padding: $padding;
    border-radius: 6px;
    box-sizing: border-box;

    .popup-button {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
