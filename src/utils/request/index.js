/**
 * @name:导出所有请求对象，支持不同的baseUrl
 * @author: SunSeekerX
 * @Date: 2020-05-18 23:09:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-12-08 16:56:57
 */

import createRequest from './request'
import getEnv from '@/config/index'

// 导出币安请求对象
export const bianceRequest = createRequest({
  baseUrl: getEnv('BIANCE_BASE_URL'),
  withCredentials: false,
})
