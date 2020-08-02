/**
 * @name: 认证相关接口
 * @author: SunSeekerX
 * @Date: 2020-06-02 16:01:38
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-04 15:24:52
 */

import {
  defauleRequest as request
} from '@/utils/request/index'

export default {
  // 初始化极验
  initGeetest() {
    return request({
      url: '/user/startCaptchaServlet',
      method: 'GET',
      params: {
        source: 'pc'
      }
    })
  },

  // 微信登录
  wxLogin({
    code
  }) {
    return request({
      url: '/appletLogin/login',
      method: 'post',
      data: {
        code,
      },
    })
  },

  // 账号密码或验证码登录
  login({
    phone,
    password,
    captcha
  }) {
    return request({
      url: '/appletLogin',
      method: 'POST',
      data: {
        // 手机号码
        phone,
        // 与后台登录设置加密方式保持一致即可 或者明文 后端会进行hash加密
        password,
        // 验证码还未集成进来
        captcha,
      },
    })
  },

  // 获取用户信息,进行敏感操作前应该获取一次防止用户信息被修改
  getUserInfo() {
    return request({
      url: '/getInfo',
      method: 'GET',
    })
  },

  // 护士注册
  register({
    mobile,
    password,
    openId,
    code
  }) {
    return request({
      url: '/nurse/registry',
      method: 'POST',
      data: {
        // 手机号
        mobile,
        // 密码
        password,
        // openId
        openId,
        // 验证码
        code,
      },
    })
  },

  // 护士注册验证码
  registerVeCode({
    mobile
  }) {
    return request({
      url: '/nurse/sendRegistryVerifyCode',
      method: 'POST',
      data: {
        // 手机号
        mobile,
      },
    })
  },

  // 护士绑定信息
  apply({
    name,
    jobNo,
    deptId,
    type
  }) {
    return request({
      url: '/nurse/apply',
      method: 'POST',
      data: {
        name,
        jobNo,
        deptId,
        type
      },
    })
  },
}
