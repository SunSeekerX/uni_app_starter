/**
 * 热更新
 * @author: SunSeekerX
 * @Date: 2020-12-20 10:54:51
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-07 20:47:11
 */

import getEnv from '@/config/index'
import Pushy from '#root/packages/uni-pushy-client'

export default new Pushy({
  // 项目id
  projectId: getEnv('UPDATE_PROJECT_ID'),
  // 更新地址
  updateUrl: getEnv('UPDATE_BASE_API'),
  // 主题色
  mainColor: '#EA5455',
  // logo
  logo: '/static/images/update/ic_ar.png',
  // 是否打开检查更新
  update: true,
  // 是否强制安装更新包
  forceUpdate: true,
  // 是否打开log
  log: getEnv('UPDATE_LOG'),
  // log 是否转换成 string, 解决某些使用情况下无法打印对象形式的 log
  logString: true,
})
