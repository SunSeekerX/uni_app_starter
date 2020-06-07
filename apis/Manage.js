/**
 * @name: 患者管理相关接口
 * @author: SunSeekerX
 * @Date: 2020-06-04 09:45:22
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 17:05:12
 */

import { defauleRequest as request } from '@/utils/request/index'

export default {
  /**
   * @name 床位管理
   */
  // 列表
  bedList({
    status,
    type,
    hospitalId,
    createBy,
    pageNum,
    pageSize,
    createTime,
  }) {
    return request({
      url: '/bed/list',
      method: 'GET',
      data: {
        // 0-空闲，1-占用 数据字典
        status,
        // 床位类型，1-固定床位，2-临时床位
        type,
        // 医院id
        hospitalId,
        // oo
        createBy,
        // 第几页 手机端按时间分页可不传
        pageNum,
        // 每页几个
        pageSize,
        // 时间查询
        createTime,
      },
    })
  },

  // 床位详情
  bedDetails({ bedId }) {
    return request({
      url: '/bed/details',
      method: 'GET',
      data: {
        // 床位id
        bedId,
      },
    })
  },

  // 添加床位
  bedAdd({ type, status, region, beginNum, endNum }) {
    return request({
      url: '/bed',
      method: 'POST',
      data: {
        // 床位类型，1-固定床位，2-临时床位
        type,
        // 状态，0-空闲，1-占用
        status,
        // 不强制填写 例如A
        region,
        // 起始床位号
        beginNum,
        // 截止床位编号
        endNum,
      },
    })
  },

  // 状态修改
  bedStatusModify({ status, bedIds }) {
    return request({
      url: '/bed/status',
      method: 'POST',
      data: {
        // 0-空闲，1-占用 数据字典
        status,
        // 床位id
        bedIds,
      },
    })
  },

  // 床位删除
  bedDelete({ bedIds }) {
    return request({
      url: '/bed/delete',
      method: 'POST',
      data: {
        // 床位id
        bedIds,
      },
    })
  },

  // 床位修改
  bedModify({ bedId, hospitalId }) {
    return request({
      url: '/bed',
      method: 'PUT',
      data: {
        // 床位id
        bedId,
        // 医院id
        hospitalId,
      },
    })
  },
  
  // 添加患者
  addPatient({ mobile,idCard,name,bedId,sex }) {
    return request({
      url: '/patient/add',
      method: 'post',
      data: {
        // 手机号
		mobile,
		//身份证号码
		idCard,
		//患者名称
		name,
		//床位id
		bedId,
		//性别
		sex,
      },
    })
  },
}
