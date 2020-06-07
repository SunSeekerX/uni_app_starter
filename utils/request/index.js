/**
 * @name:导出所有请求对象，支持不同的baseUrl
 * @author: SunSeekerX
 * @Date: 2020-05-18 23:09:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-19 16:30:53
 */

import createRequest from './request'
import { UPDATE_BASE_API, DEFAULT_BASE_API } from '@/config/index'

// Export defaule request instance
export const defauleRequest = createRequest({
  baseUrl: DEFAULT_BASE_API,
  withCredentials: false,
  header: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  // sslVerify: true,
})

// Export update request instance
export const updateRequest = createRequest({
  baseUrl: UPDATE_BASE_API,
  withCredentials: false,
  header: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  // sslVerify: true,
})
