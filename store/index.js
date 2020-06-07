/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2019-12-02 15:09:43
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 16:17:07
 */

/**
 * @name 引入依赖库
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * @name 引入文件
 */
import { Auth, Dictionary } from '@/apis'

Vue.use(Vuex)

/**
 * @name 创建vuex之前从本地读取数据
 */
const token = uni.getStorageSync('TOKEN')
const refreshToken = uni.getStorageSync('REFRESH_TOKEN')
const userInfo = uni.getStorageSync('USER_INFO')
const appStatus = uni.getStorageSync('APP_STATUS')

export default new Vuex.Store({
  state: {
    // Global token
    token: token || '',

    // Refresh token
    refreshToken: refreshToken || '',

    // User info
    userInfo: userInfo || {},

    /**
     * @name App local status/ unreset when reflash
     * @description English:App local status/ unreset when reflash
     * @description Chiness: 这个对象放置了全局需要用到的属性，并且是自己设置的，会随着应用运行自行更改。当刷新页面会从本地读取刷新之前的数据。
     */
    appStatus: Object.assign({}, appStatus),

    /**
     * @name App session status / reset when reflash
     * @description English:App session status / reset when reflash
     * @description Chiness: 这个对象放置了全局需要用到的属性，并且是通过接口拉取的。当刷新页面会重新拉取数据。在使用之前必须进行空值判断。
     */
    appSessionStatus: {
      // App config
      appConfig: {
        // 是否通过接口更新
        isUpdated: false,
      },
      // Socket info
      socketInfo: {
        // 是否通过接口更新
        isUpdated: false,
      },
      // 网站信息
      siteConfig: {
        // 是否通过接口更新
        isUpdated: false,
      },
      // 所有交易对小数点精度
      coinDecimal: {
        // 是否通过接口更新
        isUpdated: false,
      },
    },
    dict: [], //数据字典
  },

  mutations: {
    /**
     * @name 更新token，同时存入本地
     */
    UPDATE_TOKEN(state, { token }) {
      // Update vuex token
      state.token = token
      // Storage token
      uni.setStorageSync('TOKEN', token)
    },

    /**
     * @name 更新refreshToken，同时存入本地
     */
    UPDATE_REFRESH_TOKEN(state, { refreshToken }) {
      // Update vuex refreshToken
      state.refreshToken = refreshToken
      // Storage refreshToken
      uni.setStorageSync('REFRESH_TOKEN', refreshToken)
    },

    /**
     * @name 更新userInfo，同时存入本地
     */
    UPDATE_USER_INFO(state, { userInfo }) {
      // Update vuex user info
      state.userInfo = userInfo
      // Storage user info
      uni.setStorageSync('USER_INFO', userInfo)
    },

    /**
     * @name 更新appStatus，同时存入本地
     */
    UPDATE_APP_STATUS(state, { appStatus }) {
      // Update vuex app status
      Object.assign(state.appStatus, appStatus)
      // Storage app status
      uni.setStorageSync('APP_STATUS', appStatus)
    },

    /**
     * @name 退出登录
     */
    USER_LOGIN_OUT(state) {
      state.token = ''
      state.refreshToken = ''
      state.userInfo = {}
      uni.removeStorageSync('TOKEN')
      uni.removeStorageSync('REFRESH_TOKEN')
      uni.removeStorageSync('USER_INFO')
    },
    /**
     * 更新数据字典
     */
    GET_DICT: (state, dict) => {
      state.dict = dict
    },
    /**
     * @name 更新appSessionStatus
     * @param {Object} state
     * @param {Object} * 更新对象
     */
    UPDATE_APP_SESSION_STATUS(
      state,
      { socketInfo, siteConfig, coinDecimal, appConfig },
    ) {
      if (socketInfo) {
        Object.assign(
          state.appSessionStatus.socketInfo,
          {
            isUpdated: true,
          },
          socketInfo,
        )
      } else if (siteConfig) {
        Object.assign(
          state.appSessionStatus.siteConfig,
          {
            isUpdated: true,
          },
          siteConfig,
        )
      } else if (coinDecimal) {
        Object.assign(
          state.appSessionStatus.coinDecimal,
          {
            isUpdated: true,
          },
          coinDecimal,
        )
      } else if (appConfig) {
        Object.assign(
          state.appSessionStatus.appConfig,
          {
            isUpdated: true,
          },
          appConfig,
        )
      }
    },
  },

  actions: {
    /**
     * @desc actions 不捕获错误，向上冒泡
     */
    /**
     * @name 获取用户信息
     */
    async GET_USER_INFO({ commit }) {
      const res = await Auth.getUserInfo()

      // Success
      if (res.success) {
        // 处理用户类型
        const role = res.obj?.user?.roles[0]

        if (role && role.roleKey) {
          const userInfo = res.obj.user

          userInfo.userType = role.roleKey === 'fenqu' ? 'manage' : 'nurse'

          // 存入vuex
          commit('UPDATE_USER_INFO', {
            userInfo: userInfo,
          })
        } else {
          throw new Error('未找到用户角色标识')
        }
      } else {
        throw new Error(res)
      }
    },
    async getDictLsit({ commit }) {
		try{
			const res = await Dictionary.getSystemDict()
			if (res.success && res.obj.length > 0) {
			  commit('GET_DICT', res.obj)
			} else {
				throw new Error('获取数据字典失败')
			}
		}catch(e){
			//TODO handle the exception
			throw new Error('获取数据字典失败')
		}
    },
  },
  
  getters: {
    filterDict: state => (key, value) => {
      if (state.dict && state.dict.length > 0) {
        let label = ''
        const ary = []
        state.dict.forEach(item => {
          if (item.dictType == key && item.dictValue == value) {
            label = item.dictLabel
          } else if (item.dictType == key && value == 'all') {
            ary.push({
              label: item.dictLabel,
              value: item.dictValue,
            })
          } else {
            return null
          }
        })
        if (ary.length > 0) {
          return ary
        } else {
          return label
        }
      } else {
        return null
      }
    },
  },
})
