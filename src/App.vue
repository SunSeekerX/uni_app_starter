<script>
import { defineComponent } from '@vue/composition-api'
// #ifdef APP-PLUS
import pushy from '@/utils/pushy/index'
// #endif

export default defineComponent({
  onLaunch() {
    console.log('App Launch')

    // #ifdef APP-PLUS
    // App 端启动需要的操作
    this.handleAppPlus()
    // #endif
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  methods: {
    // App 端启动需要的操作
    handleAppPlus() {
      // 锁定屏幕
      plus.screen.lockOrientation('portrait-primary')
      if (plus.runtime.appid !== 'HBuilder') {
        // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
        // 检查更新
        pushy.getUpdate()
      }
    },
  },
})
</script>

<style lang="scss">
// @import '../packages/limm-markrgba-css/src/index.scss'; /* Some magic css */
@import '../packages/limm-windi-css-uni/src/index.scss';

/* #ifndef APP-NVUE */

/* uview */
@import '@/uni_modules/uview-ui/index.scss';

/* CNode 需要 */
@import '~@/apps/cnode/components/feng-parse/parse.css';

image {
  will-change: transform;
}

// 不加 view 微信小程序不会生效
*,
view {
  box-sizing: border-box;
}

/* #endif */
</style>
