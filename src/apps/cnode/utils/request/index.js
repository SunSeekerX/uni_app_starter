/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-05-26 13:48:57
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 15:09:08
 */

import createRequest from '@/utils/request/request'
import getEnv from '@/config/index'

// 导出 CNode 请求对象
export const cNodeRequest = createRequest(
  {
    baseUrl: getEnv('C_NODE_BASE_URL'),
    withCredentials: false,
  },
  false
)
