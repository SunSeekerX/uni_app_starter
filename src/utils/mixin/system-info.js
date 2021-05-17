/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-05-13 10:17:50
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-14 02:57:11
 */

export default {
  data() {
    return {
      systemInfo: {},
    }
  },
  created() {
    this.systemInfo = uni.getSystemInfoSync()
  },
}
