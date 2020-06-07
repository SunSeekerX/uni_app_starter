/**
 * @name: 巡检相关接口
 * @author: SunSeekerX
 * @Date: 2020-06-04 09:41:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-04 09:54:08
 */

import { defauleRequest as request } from '@/utils/request/index'

export default {
  // 巡检记录
  patrols({ checkBy, symptom, beginCheckTime, endCheckTime, checkTime }) {
    return request({
      url: '/inspection/inspects',
      method: 'GET',
      params: {
        // 巡检人
        checkBy,
        // 异常症状
        symptom,
        // 巡检时间 >=
        beginCheckTime,
        // 巡检时间 <
        endCheckTime,
        // 巡检时间 =
        checkTime,
      },
    })
  },
  
  // 添加巡检记录
  addPatrol({ symptom, imgUrl, remark, patientId }) {
    return request({
      url: '/inspection/add',
      method: 'POST',
      params: {
        // 异常症状
        symptom,
        // 传的是什么储存什么
        imgUrl,
        // 备注
        remark,
        // 病患id
        patientId,
      },
    })
  },
}
