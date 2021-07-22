var t =
  'undefined' !== typeof globalThis
    ? globalThis
    : 'undefined' !== typeof window
    ? window
    : 'undefined' !== typeof global
    ? global
    : 'undefined' !== typeof self
    ? self
    : {}
var e = { exports: {} }
;(function (e, n) {
  !(function (t, n) {
    e.exports = n()
  })(t, function () {
    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = 'millisecond',
      o = 'second',
      i = 'minute',
      s = 'hour',
      a = 'day',
      u = 'week',
      c = 'month',
      f = 'quarter',
      l = 'year',
      d = 'date',
      h = 'Invalid Date',
      p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      y = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      },
      m = function (t, e, n) {
        var r = String(t)
        return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t
      },
      v = {
        s: m,
        z: function (t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            o = n % 60
          return (e <= 0 ? '+' : '-') + m(r, 2, '0') + ':' + m(o, 2, '0')
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e)
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            o = e.clone().add(r, c),
            i = n - o < 0,
            s = e.clone().add(r + (i ? -1 : 1), c)
          return +(-(r + (n - o) / (i ? o - s : s - o)) || 0)
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        },
        p: function (t) {
          return (
            { M: c, y: l, w: u, d: a, D: d, h: s, m: i, s: o, ms: r, Q: f }[t] ||
            String(t || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (t) {
          return void 0 === t
        },
      },
      $ = 'en',
      b = {}
    b[$] = y
    var w = function (t) {
        return t instanceof T
      },
      S = function (t, e, n) {
        var r
        if (!t) return $
        if ('string' == typeof t) b[t] && (r = t), e && ((b[t] = e), (r = t))
        else {
          var o = t.name
          ;(b[o] = t), (r = o)
        }
        return !n && r && ($ = r), r || (!n && $)
      },
      D = function (t, e) {
        if (w(t)) return t.clone()
        var n = 'object' == typeof e ? e : {}
        return (n.date = t), (n.args = arguments), new T(n)
      },
      A = v
    ;(A.l = S),
      (A.i = w),
      (A.w = function (t, e) {
        return D(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset })
      })
    var T = (function () {
        function y(t) {
          ;(this.$L = S(t.locale, null, !0)), this.parse(t)
        }
        var m = y.prototype
        return (
          (m.parse = function (t) {
            ;(this.$d = (function (t) {
              var e = t.date,
                n = t.utc
              if (null === e) return new Date(NaN)
              if (A.u(e)) return new Date()
              if (e instanceof Date) return new Date(e)
              if ('string' == typeof e && !/Z$/i.test(e)) {
                var r = e.match(p)
                if (r) {
                  var o = r[2] - 1 || 0,
                    i = (r[7] || '0').substring(0, 3)
                  return n
                    ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i))
                    : new Date(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)
                }
              }
              return new Date(e)
            })(t)),
              (this.$x = t.x || {}),
              this.init()
          }),
          (m.init = function () {
            var t = this.$d
            ;(this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds())
          }),
          (m.$utils = function () {
            return A
          }),
          (m.isValid = function () {
            return !(this.$d.toString() === h)
          }),
          (m.isSame = function (t, e) {
            var n = D(t)
            return this.startOf(e) <= n && n <= this.endOf(e)
          }),
          (m.isAfter = function (t, e) {
            return D(t) < this.startOf(e)
          }),
          (m.isBefore = function (t, e) {
            return this.endOf(e) < D(t)
          }),
          (m.$g = function (t, e, n) {
            return A.u(t) ? this[e] : this.set(n, t)
          }),
          (m.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (m.valueOf = function () {
            return this.$d.getTime()
          }),
          (m.startOf = function (t, e) {
            var n = this,
              r = !!A.u(e) || e,
              f = A.p(t),
              h = function (t, e) {
                var o = A.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n)
                return r ? o : o.endOf(a)
              },
              p = function (t, e) {
                return A.w(n.toDate()[t].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
              },
              g = this.$W,
              y = this.$M,
              m = this.$D,
              v = 'set' + (this.$u ? 'UTC' : '')
            switch (f) {
              case l:
                return r ? h(1, 0) : h(31, 11)
              case c:
                return r ? h(1, y) : h(0, y + 1)
              case u:
                var $ = this.$locale().weekStart || 0,
                  b = (g < $ ? g + 7 : g) - $
                return h(r ? m - b : m + (6 - b), y)
              case a:
              case d:
                return p(v + 'Hours', 0)
              case s:
                return p(v + 'Minutes', 1)
              case i:
                return p(v + 'Seconds', 2)
              case o:
                return p(v + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (m.endOf = function (t) {
            return this.startOf(t, !1)
          }),
          (m.$set = function (t, e) {
            var n,
              u = A.p(t),
              f = 'set' + (this.$u ? 'UTC' : ''),
              h = ((n = {}),
              (n[a] = f + 'Date'),
              (n[d] = f + 'Date'),
              (n[c] = f + 'Month'),
              (n[l] = f + 'FullYear'),
              (n[s] = f + 'Hours'),
              (n[i] = f + 'Minutes'),
              (n[o] = f + 'Seconds'),
              (n[r] = f + 'Milliseconds'),
              n)[u],
              p = u === a ? this.$D + (e - this.$W) : e
            if (u === c || u === l) {
              var g = this.clone().set(d, 1)
              g.$d[h](p), g.init(), (this.$d = g.set(d, Math.min(this.$D, g.daysInMonth())).$d)
            } else h && this.$d[h](p)
            return this.init(), this
          }),
          (m.set = function (t, e) {
            return this.clone().$set(t, e)
          }),
          (m.get = function (t) {
            return this[A.p(t)]()
          }),
          (m.add = function (r, f) {
            var d,
              h = this
            r = Number(r)
            var p = A.p(f),
              g = function (t) {
                var e = D(h)
                return A.w(e.date(e.date() + Math.round(t * r)), h)
              }
            if (p === c) return this.set(c, this.$M + r)
            if (p === l) return this.set(l, this.$y + r)
            if (p === a) return g(1)
            if (p === u) return g(7)
            var y = ((d = {}), (d[i] = e), (d[s] = n), (d[o] = t), d)[p] || 1,
              m = this.$d.getTime() + r * y
            return A.w(m, this)
          }),
          (m.subtract = function (t, e) {
            return this.add(-1 * t, e)
          }),
          (m.format = function (t) {
            var e = this
            if (!this.isValid()) return h
            var n = t || 'YYYY-MM-DDTHH:mm:ssZ',
              r = A.z(this),
              o = this.$locale(),
              i = this.$H,
              s = this.$m,
              a = this.$M,
              u = o.weekdays,
              c = o.months,
              f = function (t, r, o, i) {
                return (t && (t[r] || t(e, n))) || o[r].substr(0, i)
              },
              l = function (t) {
                return A.s(i % 12 || 12, t, '0')
              },
              d =
                o.meridiem ||
                function (t, e, n) {
                  var r = t < 12 ? 'AM' : 'PM'
                  return n ? r.toLowerCase() : r
                },
              p = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: A.s(a + 1, 2, '0'),
                MMM: f(o.monthsShort, a, c, 3),
                MMMM: f(c, a),
                D: this.$D,
                DD: A.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: f(o.weekdaysMin, this.$W, u, 2),
                ddd: f(o.weekdaysShort, this.$W, u, 3),
                dddd: u[this.$W],
                H: String(i),
                HH: A.s(i, 2, '0'),
                h: l(1),
                hh: l(2),
                a: d(i, s, !0),
                A: d(i, s, !1),
                m: String(s),
                mm: A.s(s, 2, '0'),
                s: String(this.$s),
                ss: A.s(this.$s, 2, '0'),
                SSS: A.s(this.$ms, 3, '0'),
                Z: r,
              }
            return n.replace(g, function (t, e) {
              return e || p[t] || r.replace(':', '')
            })
          }),
          (m.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (m.diff = function (r, d, h) {
            var p,
              g = A.p(d),
              y = D(r),
              m = (y.utcOffset() - this.utcOffset()) * e,
              v = this - y,
              $ = A.m(this, y)
            return (
              ($ =
                ((p = {}),
                (p[l] = $ / 12),
                (p[c] = $),
                (p[f] = $ / 3),
                (p[u] = (v - m) / 6048e5),
                (p[a] = (v - m) / 864e5),
                (p[s] = v / n),
                (p[i] = v / e),
                (p[o] = v / t),
                p)[g] || v),
              h ? $ : A.a($)
            )
          }),
          (m.daysInMonth = function () {
            return this.endOf(c).$D
          }),
          (m.$locale = function () {
            return b[this.$L]
          }),
          (m.locale = function (t, e) {
            if (!t) return this.$L
            var n = this.clone(),
              r = S(t, e, !0)
            return r && (n.$L = r), n
          }),
          (m.clone = function () {
            return A.w(this.$d, this)
          }),
          (m.toDate = function () {
            return new Date(this.valueOf())
          }),
          (m.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (m.toISOString = function () {
            return this.$d.toISOString()
          }),
          (m.toString = function () {
            return this.$d.toUTCString()
          }),
          y
        )
      })(),
      _ = T.prototype
    return (
      (D.prototype = _),
      [
        ['$ms', r],
        ['$s', o],
        ['$m', i],
        ['$H', s],
        ['$W', a],
        ['$M', c],
        ['$y', l],
        ['$D', d],
      ].forEach(function (t) {
        _[t[1]] = function (e) {
          return this.$g(e, t[0], t[1])
        }
      }),
      (D.extend = function (t, e) {
        return t.$i || (t(e, T, D), (t.$i = !0)), D
      }),
      (D.locale = S),
      (D.isDayjs = w),
      (D.unix = function (t) {
        return D(1e3 * t)
      }),
      (D.en = b[$]),
      (D.Ls = b),
      (D.p = {}),
      D
    )
  })
})(e)
var n = e.exports
/**
 * uni-app api 二次封装
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:14:50
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 18:02:13
 */
/**
 * 获取主题模式
 * @returns { string } - 返回当前系统使用的外观样式
 */ function r() {
  // @ts-ignore
  return plus.navigator.getUIStyle()
}
/**
 * uni-app toast 提示
 * @param { string } msg 需要显示的消息
 * @param { Object } options 参数配置,同uni-app官网
 * @returns { null }
 */ function o(t, e) {
  e?.title && delete e.title
  uni.showToast(Object.assign({ icon: 'none', title: t, duration: 2e3 }, e))
}
// 是否正在跳转
let i = false
/**
 * uni-app 路由封装
 * @param { Object } options - 参数配置
 * @param { string } options.url - uni-app 页面地址
 * @param { string } [options.type='navigateTo'] - 跳转类型
 * @param { string } [options.delta=1] - 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 * @param { string } [options.animationType='pop-in'] - 窗口显示的动画效果
 * @param { string } [options.animationDuration=300] - 窗口动画持续时间，单位为 ms
 * @param { function } [options.fail=cb] - 失败回调
 * @param { function } [options.complete=cb] - 完成回调
 * @returns { null }
 */ function s(t) {
  if (i) return
  // 正在跳转
  i = true
  const e = {
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
    fail(t) {
      console.warn(t)
    },
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    complete() {
      i = false
    },
  }
  // 合并参数
  Object.assign(e, t)
  const { url: n, animationType: r, animationDuration: o, fail: s, complete: a, delta: u, type: c } = e
  switch (c) {
    case 'navigateTo':
      // 保留当前页面，跳转到应用内的某个页面
      uni.navigateTo({ url: n, animationType: r, animationDuration: o, fail: s, complete: a })
      break
    case 'redirectTo':
      // 关闭当前页面，跳转到应用内的某个页面
      uni.redirectTo({ url: n, fail: s, complete: a })
      break
    case 'reLaunch':
      // 关闭所有页面，打开到应用内的某个页面
      uni.reLaunch({ url: n, fail: s, complete: a })
      break
    case 'switchTab':
      // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      uni.switchTab({ url: n, fail: s, complete: a })
      break
    case 'navigateBack':
      // 关闭当前页面，返回上一页面或多级页面
      uni.navigateBack({ delta: u, animationDuration: o })
      break
  }
}
/**
 * uni-app 复制文字方法
 * @param { string } value - 需要复制的内容
 * @param { Object } [options] - 参数配置
 * @param { string } [options.msg=''] - 复制完成提示文字
 * @returns { void }
 */ function a(t, e) {
  const n = Object.assign({ msg: '' }, e)
  const { msg: r } = n
  // #ifndef H5
  uni.setClipboardData({
    data: String(t),
    complete() {
      uni.hideToast()
      if (r) o(r)
    },
  })
  // #endif
  /**
   * H5 实现
   */
  // #ifdef H5
  const i = document.createElement('input')
  i.value = String(t)
  document.body.appendChild(i)
  i.select()
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    i.contentEditable = 'true'
    i.readOnly = false
    const t = document.createRange()
    t.selectNodeContents(i)
    const e = window.getSelection()
    e && e.removeAllRanges()
    e && e.addRange(t)
    i.setSelectionRange(0, 999999)
  }
  try {
    document.execCommand('copy')
    if (r) o(r)
  } catch (t) {
    console.error('Copy error!', t)
  }
  i.remove()
  // #endif
}
/**
 * uni-app 打开链接
 * @param { string } url - 要跳转的地址
 * @param { Object } [options] - 参数配置
 * @param { boolean } [options.h5Inside=false] - H5 是否在当前窗口打开链接
 * @param { boolean } [options.appInside=true] - App 是否使用内部的浏览器打开链接
 */ function u(t, e) {
  const n = Object.assign({ h5Inside: false, appInside: true }, e)
  const { h5Inside: r, appInside: o } = n
  const i = encodeURI(decodeURIComponent(t))
  // #ifdef APP-PLUS
  if (o) plus.runtime.openWeb(i)
  else plus.runtime.openURL(i)
  // #endif
  // #ifdef H5
  if (r) window.open(i)
  else window.open(i, 'target', '')
  // #endif
}
var c = Object.freeze({ __proto__: null, getUIStyle: r, toast: o, route: s, copy: a, openUrl: u })
/**
 * 校验相关
 * @author: SunSeekerX
 * @Date: 2020-05-26 16:15:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 17:57:46
 */
/**
 * 校验手机号码
 * @param { string|number } val - 手机号码
 * @return { Boolean }
 */ function f(t) {
  return /^1[3456789]\d{9}$/.test(String(t))
}
/**
 * 校验身份证号码
 * @param { string } val - 身份证号码
 * @returns { boolean }
 */ function l(t) {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t)
}
/**
 * 验证电子邮箱格式
 * @param { string } val - 邮箱号码
 * @returns { boolean }
 */ function d(t) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)
}
/**
 * 验证十进制数字
 * @param { string } val - 数字值
 */ function h(t) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(String(t))
}
/**
 * 验证是否为一个 url 地址
 * @param { string } val - 需要验证的地址字符串
 * @returns { boolean }
 */ function p(t) {
  return /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/.test(String(t))
}
var g = Object.freeze({ __proto__: null, isMobilePhone: f, isCardNo: l, isEmail: d, isNumber: h, isUrl: p })
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */ const y = 'function' === typeof atob
const m = 'function' === typeof btoa
const v = 'function' === typeof Buffer
const $ = 'function' === typeof TextDecoder ? new TextDecoder() : void 0
const b = 'function' === typeof TextEncoder ? new TextEncoder() : void 0
const w = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const S = [...w]
const D = ((t) => {
  let e = {}
  t.forEach((t, n) => (e[t] = n))
  return e
})(S)
const A = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
const T = String.fromCharCode.bind(String)
const _ =
  'function' === typeof Uint8Array.from
    ? Uint8Array.from.bind(Uint8Array)
    : (t, e = (t) => t) => new Uint8Array(Array.prototype.slice.call(t, 0).map(e))
const M = (t) => t.replace(/[+\/]/g, (t) => ('+' == t ? '-' : '_')).replace(/=+$/m, '')
const x = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, '')
/**
 * polyfill version of `btoa`
 */ const C = (t) => {
  // console.log('polyfilled');
  let e,
    n,
    r,
    o,
    i = ''
  const s = t.length % 3
  for (let s = 0; s < t.length; ) {
    if ((n = t.charCodeAt(s++)) > 255 || (r = t.charCodeAt(s++)) > 255 || (o = t.charCodeAt(s++)) > 255)
      throw new TypeError('invalid character found')
    e = (n << 16) | (r << 8) | o
    i += S[(e >> 18) & 63] + S[(e >> 12) & 63] + S[(e >> 6) & 63] + S[63 & e]
  }
  return s ? i.slice(0, s - 3) + '==='.substring(s) : i
}
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */ const O = m ? (t) => btoa(t) : v ? (t) => Buffer.from(t, 'binary').toString('base64') : C
const B = v
  ? (t) => Buffer.from(t).toString('base64')
  : (t) => {
      // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
      const e = 4096
      let n = []
      for (let r = 0, o = t.length; r < o; r += e) n.push(T.apply(null, t.subarray(r, r + e)))
      return O(n.join(''))
    }
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const U = (t) => {
  if (t.length < 2) {
    var e = t.charCodeAt(0)
    return e < 128
      ? t
      : e < 2048
      ? T(192 | (e >>> 6)) + T(128 | (63 & e))
      : T(224 | ((e >>> 12) & 15)) + T(128 | ((e >>> 6) & 63)) + T(128 | (63 & e))
  } else {
    var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320)
    return T(240 | ((e >>> 18) & 7)) + T(128 | ((e >>> 12) & 63)) + T(128 | ((e >>> 6) & 63)) + T(128 | (63 & e))
  }
}
const I = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */ const F = (t) => t.replace(I, U)
const z = v ? (t) => Buffer.from(t, 'utf8').toString('base64') : b ? (t) => B(b.encode(t)) : (t) => O(F(t))
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */ const E = (t, e = false) => (e ? M(z(t)) : z(t))
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp;
const j = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
const k = (t) => {
  switch (t.length) {
    case 4:
      var e =
          ((7 & t.charCodeAt(0)) << 18) |
          ((63 & t.charCodeAt(1)) << 12) |
          ((63 & t.charCodeAt(2)) << 6) |
          (63 & t.charCodeAt(3)),
        n = e - 65536
      return T((n >>> 10) + 55296) + T((1023 & n) + 56320)
    case 3:
      return T(((15 & t.charCodeAt(0)) << 12) | ((63 & t.charCodeAt(1)) << 6) | (63 & t.charCodeAt(2)))
    default:
      return T(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)))
  }
}
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */ const H = (t) => t.replace(j, k)
/**
 * polyfill version of `atob`
 */ const R = (t) => {
  // console.log('polyfilled');
  t = t.replace(/\s+/g, '')
  if (!A.test(t)) throw new TypeError('malformed base64.')
  t += '=='.slice(2 - (3 & t.length))
  let e,
    n = '',
    r,
    o
  for (let i = 0; i < t.length; ) {
    e = (D[t.charAt(i++)] << 18) | (D[t.charAt(i++)] << 12) | ((r = D[t.charAt(i++)]) << 6) | (o = D[t.charAt(i++)])
    n +=
      64 === r
        ? T((e >> 16) & 255)
        : 64 === o
        ? T((e >> 16) & 255, (e >> 8) & 255)
        : T((e >> 16) & 255, (e >> 8) & 255, 255 & e)
  }
  return n
}
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */ const Y = y ? (t) => atob(x(t)) : v ? (t) => Buffer.from(t, 'base64').toString('binary') : R

const L = v ? (t) => _(Buffer.from(t, 'base64')) : (t) => _(Y(t), (t) => t.charCodeAt(0))
const W = v ? (t) => Buffer.from(t, 'base64').toString('utf8') : $ ? (t) => $.decode(L(t)) : (t) => H(Y(t))
const Z = (t) => x(t.replace(/[-_]/g, (t) => ('-' == t ? '+' : '/')))
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */ const N = (t) => W(Z(t))
/**
 * 编码解码相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 17:52:15
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-22 17:57:16
 */
/**
 * URL 编码
 * @param val - 需要 URL 编码的内容
 * @returns { string }
 */ function V(t) {
  return encodeURIComponent(t)
}
/**
 * URL 解码
 * @param { string } [val=""] - 需要 URL 解码的内容
 * @param { boolean } [url=true] - 是否需要解码为可识别的 url 链接
 * @returns { string }
 */ function J(t = '', e = true) {
  return e ? encodeURI(decodeURIComponent(t)) : decodeURIComponent(t)
}
/**
 * base64 编码
 * @param { string } val - 需要 base64 编码的内容
 * @returns { string }
 */ function q(t) {
  return E(t)
}
/**
 * base64 解码
 * @param {string} val - 需要解码的内容
 * @returns { string }
 */ function P(t) {
  return N(t)
}
var Q = Object.freeze({ __proto__: null, urlEncode: V, urlDecode: J, base64Encode2String: q, base64Decode: P })
var X = { exports: {} }
var G = { exports: {} }
;(function () {
  var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    e = {
      // Bit-wise rotation left
      rotl: function (t, e) {
        return (t << e) | (t >>> (32 - e))
      },
      // Bit-wise rotation right
      rotr: function (t, e) {
        return (t << (32 - e)) | (t >>> e)
      },
      // Swap big-endian to little-endian and vice versa
      endian: function (t) {
        // If number given, swap endian
        if (t.constructor == Number) return (16711935 & e.rotl(t, 8)) | (4278255360 & e.rotl(t, 24))
        // Else, assume array and swap all items
        for (var n = 0; n < t.length; n++) t[n] = e.endian(t[n])
        return t
      },
      // Generate an array of any length of random bytes
      randomBytes: function (t) {
        for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()))
        return e
      },
      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function (t) {
        for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << (24 - (r % 32))
        return e
      },
      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function (t) {
        for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push((t[n >>> 5] >>> (24 - (n % 32))) & 255)
        return e
      },
      // Convert a byte array to a hex string
      bytesToHex: function (t) {
        for (var e = [], n = 0; n < t.length; n++) {
          e.push((t[n] >>> 4).toString(16))
          e.push((15 & t[n]).toString(16))
        }
        return e.join('')
      },
      // Convert a hex string to a byte array
      hexToBytes: function (t) {
        for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16))
        return e
      },
      // Convert a byte array to a base-64 string
      bytesToBase64: function (e) {
        for (var n = [], r = 0; r < e.length; r += 3) {
          var o = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2]
          for (var i = 0; i < 4; i++)
            if (8 * r + 6 * i <= 8 * e.length) n.push(t.charAt((o >>> (6 * (3 - i))) & 63))
            else n.push('=')
        }
        return n.join('')
      },
      // Convert a base-64 string to a byte array
      base64ToBytes: function (e) {
        // Remove non-base-64 characters
        e = e.replace(/[^A-Z0-9+\/]/gi, '')
        for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4) {
          if (0 == o) continue
          n.push(
            ((t.indexOf(e.charAt(r - 1)) & (Math.pow(2, -2 * o + 8) - 1)) << (2 * o)) |
              (t.indexOf(e.charAt(r)) >>> (6 - 2 * o))
          )
        }
        return n
      },
    }
  G.exports = e
})()
var K = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function (t) {
      return K.bin.stringToBytes(unescape(encodeURIComponent(t)))
    },
    // Convert a byte array to a string
    bytesToString: function (t) {
      return decodeURIComponent(escape(K.bin.bytesToString(t)))
    },
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n))
      return e
    },
    // Convert a byte array to a string
    bytesToString: function (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]))
      return e.join('')
    },
  },
}
var tt = K
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var et = function (t) {
  return null != t && (nt(t) || rt(t) || !!t._isBuffer)
}
function nt(t) {
  return !!t.constructor && 'function' === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
}
// For Node v0.10 support. Remove this eventually.
function rt(t) {
  return 'function' === typeof t.readFloatLE && 'function' === typeof t.slice && nt(t.slice(0, 0))
}
;(function () {
  var t = G.exports,
    e = tt.utf8,
    n = et,
    r = tt.bin,
    // The core
    o = function (i, s) {
      // Convert to byte array
      if (i.constructor == String)
        if (s && 'binary' === s.encoding) i = r.stringToBytes(i)
        else i = e.stringToBytes(i)
      else if (n(i)) i = Array.prototype.slice.call(i, 0)
      else if (!Array.isArray(i) && i.constructor !== Uint8Array) i = i.toString()
      // else, assume byte array already
      var a = t.bytesToWords(i),
        u = 8 * i.length,
        c = 1732584193,
        f = -271733879,
        l = -1732584194,
        d = 271733878
      // Swap endian
      for (var h = 0; h < a.length; h++)
        a[h] = (16711935 & ((a[h] << 8) | (a[h] >>> 24))) | (4278255360 & ((a[h] << 24) | (a[h] >>> 8)))
      // Padding
      a[u >>> 5] |= 128 << u % 32
      a[(((u + 64) >>> 9) << 4) + 14] = u
      // Method shortcuts
      var p = o._ff,
        g = o._gg,
        y = o._hh,
        m = o._ii
      for (var h = 0; h < a.length; h += 16) {
        var v = c,
          $ = f,
          b = l,
          w = d
        c = p(c, f, l, d, a[h + 0], 7, -680876936)
        d = p(d, c, f, l, a[h + 1], 12, -389564586)
        l = p(l, d, c, f, a[h + 2], 17, 606105819)
        f = p(f, l, d, c, a[h + 3], 22, -1044525330)
        c = p(c, f, l, d, a[h + 4], 7, -176418897)
        d = p(d, c, f, l, a[h + 5], 12, 1200080426)
        l = p(l, d, c, f, a[h + 6], 17, -1473231341)
        f = p(f, l, d, c, a[h + 7], 22, -45705983)
        c = p(c, f, l, d, a[h + 8], 7, 1770035416)
        d = p(d, c, f, l, a[h + 9], 12, -1958414417)
        l = p(l, d, c, f, a[h + 10], 17, -42063)
        f = p(f, l, d, c, a[h + 11], 22, -1990404162)
        c = p(c, f, l, d, a[h + 12], 7, 1804603682)
        d = p(d, c, f, l, a[h + 13], 12, -40341101)
        l = p(l, d, c, f, a[h + 14], 17, -1502002290)
        f = p(f, l, d, c, a[h + 15], 22, 1236535329)
        c = g(c, f, l, d, a[h + 1], 5, -165796510)
        d = g(d, c, f, l, a[h + 6], 9, -1069501632)
        l = g(l, d, c, f, a[h + 11], 14, 643717713)
        f = g(f, l, d, c, a[h + 0], 20, -373897302)
        c = g(c, f, l, d, a[h + 5], 5, -701558691)
        d = g(d, c, f, l, a[h + 10], 9, 38016083)
        l = g(l, d, c, f, a[h + 15], 14, -660478335)
        f = g(f, l, d, c, a[h + 4], 20, -405537848)
        c = g(c, f, l, d, a[h + 9], 5, 568446438)
        d = g(d, c, f, l, a[h + 14], 9, -1019803690)
        l = g(l, d, c, f, a[h + 3], 14, -187363961)
        f = g(f, l, d, c, a[h + 8], 20, 1163531501)
        c = g(c, f, l, d, a[h + 13], 5, -1444681467)
        d = g(d, c, f, l, a[h + 2], 9, -51403784)
        l = g(l, d, c, f, a[h + 7], 14, 1735328473)
        f = g(f, l, d, c, a[h + 12], 20, -1926607734)
        c = y(c, f, l, d, a[h + 5], 4, -378558)
        d = y(d, c, f, l, a[h + 8], 11, -2022574463)
        l = y(l, d, c, f, a[h + 11], 16, 1839030562)
        f = y(f, l, d, c, a[h + 14], 23, -35309556)
        c = y(c, f, l, d, a[h + 1], 4, -1530992060)
        d = y(d, c, f, l, a[h + 4], 11, 1272893353)
        l = y(l, d, c, f, a[h + 7], 16, -155497632)
        f = y(f, l, d, c, a[h + 10], 23, -1094730640)
        c = y(c, f, l, d, a[h + 13], 4, 681279174)
        d = y(d, c, f, l, a[h + 0], 11, -358537222)
        l = y(l, d, c, f, a[h + 3], 16, -722521979)
        f = y(f, l, d, c, a[h + 6], 23, 76029189)
        c = y(c, f, l, d, a[h + 9], 4, -640364487)
        d = y(d, c, f, l, a[h + 12], 11, -421815835)
        l = y(l, d, c, f, a[h + 15], 16, 530742520)
        f = y(f, l, d, c, a[h + 2], 23, -995338651)
        c = m(c, f, l, d, a[h + 0], 6, -198630844)
        d = m(d, c, f, l, a[h + 7], 10, 1126891415)
        l = m(l, d, c, f, a[h + 14], 15, -1416354905)
        f = m(f, l, d, c, a[h + 5], 21, -57434055)
        c = m(c, f, l, d, a[h + 12], 6, 1700485571)
        d = m(d, c, f, l, a[h + 3], 10, -1894986606)
        l = m(l, d, c, f, a[h + 10], 15, -1051523)
        f = m(f, l, d, c, a[h + 1], 21, -2054922799)
        c = m(c, f, l, d, a[h + 8], 6, 1873313359)
        d = m(d, c, f, l, a[h + 15], 10, -30611744)
        l = m(l, d, c, f, a[h + 6], 15, -1560198380)
        f = m(f, l, d, c, a[h + 13], 21, 1309151649)
        c = m(c, f, l, d, a[h + 4], 6, -145523070)
        d = m(d, c, f, l, a[h + 11], 10, -1120210379)
        l = m(l, d, c, f, a[h + 2], 15, 718787259)
        f = m(f, l, d, c, a[h + 9], 21, -343485551)
        c = (c + v) >>> 0
        f = (f + $) >>> 0
        l = (l + b) >>> 0
        d = (d + w) >>> 0
      }
      return t.endian([c, f, l, d])
    }
  // Auxiliary functions
  o._ff = function (t, e, n, r, o, i, s) {
    var a = t + ((e & n) | (~e & r)) + (o >>> 0) + s
    return ((a << i) | (a >>> (32 - i))) + e
  }
  o._gg = function (t, e, n, r, o, i, s) {
    var a = t + ((e & r) | (n & ~r)) + (o >>> 0) + s
    return ((a << i) | (a >>> (32 - i))) + e
  }
  o._hh = function (t, e, n, r, o, i, s) {
    var a = t + (e ^ n ^ r) + (o >>> 0) + s
    return ((a << i) | (a >>> (32 - i))) + e
  }
  o._ii = function (t, e, n, r, o, i, s) {
    var a = t + (n ^ (e | ~r)) + (o >>> 0) + s
    return ((a << i) | (a >>> (32 - i))) + e
  }
  // Package private blocksize
  o._blocksize = 16
  o._digestsize = 16
  X.exports = function (e, n) {
    if (void 0 === e || null === e) throw new Error('Illegal argument ' + e)
    var i = t.wordsToBytes(o(e, n))
    return n && n.asBytes ? i : n && n.asString ? r.bytesToString(i) : t.bytesToHex(i)
  }
})()
var ot = X.exports
/**
 * 加密解密相关
 * @author: SunSeekerX
 * @Date: 2021-06-02 19:13:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-03 23:46:14
 */
/**
 * md5 加密
 * @param { string } val - 需要加密的数据
 * @returns { string }
 */ function it(t) {
  return ot(t)
}
var st = Object.freeze({ __proto__: null, encryptMD5: it })
/**
 * @name: utools 入口
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:00:14
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-07-03 12:55:55
 */
// version
const { version: at } = require('../package.json')
const ut = {
  // uni-app 方法直接调用
  ...c,
  // 时间处理
  dayjs: n,
  // Validate
  ValidateUtil: g,
  // Encode
  EncodeUtil: Q,
  // Encrypt
  EncryptUtil: st,
  // 版本号
  version: at,
}
export default ut
export {
  Q as EncodeUtil,
  st as EncryptUtil,
  g as ValidateUtil,
  a as copy,
  n as dayjs,
  r as getUIStyle,
  u as openUrl,
  s as route,
  o as toast,
}
if ('undefined' !== typeof window) window._utools_VERSION_ = '0.0.1'
