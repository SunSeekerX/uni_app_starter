/**
 * @name 获取主题模式
 */
export function getUIStyle() {
  return plus.navigator.getUIStyle()
}

/**
 * @param { String } msg 需要显示的消息
 * @param { Object } options 配置,同uni-app官网
 */
export function toast(msg, options) {
  uni.showToast(
    Object.assign(
      {
        icon: 'none',
        title: msg,
        duration: 2000,
      },
      options
    )
  )
}

/**
 * @name uni-app 路由封装
 * @param { Object } options
 * @returns void
 */
export function router(options = {}) {
  const config = {
    // 页面路径
    url: '',
    // 跳转类型
    type: 'navigateTo',
    // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
    delta: 1,
    // 窗口显示的动画效果
    animationType: 'pop-in',
    // 窗口动画持续时间，单位为 ms
    animationDuration: 300,
    // 接口调用成功的回调函数
    // success() {},
    // 接口调用失败的回调函数
    fail(e) {
      console.warn(e)
    },
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    // complete() {},
  }

  // 合并参数
  Object.assign(config, options)

  // 判断跳转类型
  switch (config.type) {
    case 'navigateTo':
      // 保留当前页面，跳转到应用内的某个页面
      uni.navigateTo({
        url: config.url,
        animationType: config.animationType,
        animationDuration: config.animationDuration,
        fail: config.fail,
      })
      break

    case 'redirectTo':
      // 关闭当前页面，跳转到应用内的某个页面
      uni.redirectTo({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'reLaunch':
      // 关闭所有页面，打开到应用内的某个页面
      uni.reLaunch({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'switchTab':
      // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      uni.switchTab({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'navigateBack':
      // 关闭当前页面，返回上一页面或多级页面
      uni.navigateBack({
        delta: config.delta,
        animationDuration: config.animationDuration,
        fail: config.fail,
      })
      break

    default:
      break
  }
}

/**
 * @name 复制文字
 * @param {String} text
 */
export function copy(value) {
  // #ifndef H5
  uni.setClipboardData({
    data: value,
    complete() {
      uni.hideToast()
    },
  })
  // #endif
  // #ifdef H5
  // console.warn('H5 不支持uni-app 复制api， 请使用其他方式实现！')
  if (!value) {
    this.fail(this.t('TRX_BANLANCES_LACKING'))
  }
  const s = document.createElement('input')
  s.value = value
  document.body.appendChild(s)
  s.select()

  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    s.contentEditable = 'true'
    s.readOnly = false
    const range = document.createRange()
    range.selectNodeContents(s)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    s.setSelectionRange(0, 999999)
  }

  try {
    document.execCommand('copy')
    console.warn('Copied Success!')
  } catch (err) {
    console.warn('Copy error!')
  }
  s.remove()
  // #endif
}

/**
 * 设置粘贴板数据
 * @param {String} text 要设置的字符串
 * 如果未设置参数，则清空数据
 */
export function setClipboardText(text) {
  // #ifndef H5
  try {
    var os = plus.os.name
    text = text || ''
    if (os == 'iOS') {
      // var UIPasteboard  = plus.ios.importClass('UIPasteboard');
      // var pasteboard = UIPasteboard.generalPasteboard();
      // pasteboard.setValueforPasteboardType(text, 'public.utf8-plain-text');
      var pasteboard = plus.ios.invoke('UIPasteboard', 'generalPasteboard')
      plus.ios.invoke(
        pasteboard,
        'setValue:forPasteboardType:',
        text,
        'public.utf8-plain-text'
      )
    } else {
      var main = plus.android.runtimeMainActivity()
      // var Context = plus.android.importClass('android.content.Context');
      // var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
      var clip = main.getSystemService('clipboard')
      plus.android.invoke(clip, 'setText', text)
    }
  } catch (e) {
    console.error('error @setClipboardText!!')
  }
  // #endif
}

export function getClipboardText() {
  try {
    var os = plus.os.name
    if (os == 'iOS') {
      var pasteboard = plus.ios.invoke('UIPasteboard', 'generalPasteboard')
      return plus.ios.invoke(
        pasteboard,
        'valueForPasteboardType:',
        'public.utf8-plain-text'
      )
    } else {
      var main = plus.android.runtimeMainActivity()
      var clip = main.getSystemService('clipboard')
      return plus.android.invoke(clip, 'getText')
    }
  } catch (e) {
    console.error('error @getClipboardText!!')
  }
}

/**
 * @name uni-app previewImage封装
 * @param Array arr 预览图片的数组 必须要传
 * @param Number index 作为预览图片首张索引值 可以不传
 */
export function previewImage(arr, index) {
  if (arr.length === 0 || !Array.isArray(arr)) {
    uni.showToast({
      icon: 'none',
      title: 'previewImage数组不能为空',
      duration: 2000,
    })
    console.error('previewImage数组不能为空')
    return
  }
  uni.previewImage({
    current: index,
    urls: arr,
    longPressActions: {
      itemList: ['发送给朋友', '保存图片'],
      success: function(data) {
        // 用户点击保存图片按钮
        if (data.tapIndex === 1) {
          console.log(arr[data.index])
          uni.saveImageToPhotosAlbum({
            filePath: arr[data.index],
            success: () => {
              uni.showToast({
                icon: 'none',
                title: '保存成功',
                duration: 2000,
              })
            },
            fail: () => {
              uni.showToast({
                icon: 'none',
                title: '保存失败',
                duration: 2000,
              })
            },
          })
        } else if (data.tapIndex === 0) {
          uni.share({
            provider: 'weixin',
            type: 2, //0	图文	 1 纯文字 2	纯图片 3	音乐 4 视频 5 小程序
            scene: 'WXSceneSession',
            imageUrl: arr[data.index],
            success: (res) => {
              console.log(res)
            },
            fail: (res) => {
              console.log(res)
            },
          })
        }
      },
      fail: function(err) {
        console.log(err.errMsg)
      },
    },
  })
}
