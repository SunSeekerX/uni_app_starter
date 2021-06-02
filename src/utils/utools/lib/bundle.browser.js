!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self).utools = {}))
})(this, function (e) {
  'use strict'
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self
  var t = { exports: {} }
  !(function (e, t) {
    e.exports = (function () {
      var e = 1e3,
        t = 6e4,
        n = 36e5,
        r = 'millisecond',
        i = 'second',
        a = 'minute',
        o = 'hour',
        s = 'day',
        u = 'week',
        c = 'month',
        f = 'quarter',
        d = 'year',
        l = 'date',
        h = 'Invalid Date',
        p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        y = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        },
        g = function (e, t, n) {
          var r = String(e)
          return !r || r.length >= t ? e : '' + Array(t + 1 - r.length).join(n) + e
        },
        $ = {
          s: g,
          z: function (e) {
            var t = -e.utcOffset(),
              n = Math.abs(t),
              r = Math.floor(n / 60),
              i = n % 60
            return (t <= 0 ? '+' : '-') + g(r, 2, '0') + ':' + g(i, 2, '0')
          },
          m: function e(t, n) {
            if (t.date() < n.date()) return -e(n, t)
            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              i = t.clone().add(r, c),
              a = n - i < 0,
              o = t.clone().add(r + (a ? -1 : 1), c)
            return +(-(r + (n - i) / (a ? i - o : o - i)) || 0)
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function (e) {
            return (
              { M: c, y: d, w: u, d: s, D: l, h: o, m: a, s: i, ms: r, Q: f }[e] ||
              String(e || '')
                .toLowerCase()
                .replace(/s$/, '')
            )
          },
          u: function (e) {
            return void 0 === e
          },
        },
        b = 'en',
        v = {}
      v[b] = y
      var w = function (e) {
          return e instanceof M
        },
        S = function (e, t, n) {
          var r
          if (!e) return b
          if ('string' == typeof e) v[e] && (r = e), t && ((v[e] = t), (r = e))
          else {
            var i = e.name
            ;(v[i] = e), (r = i)
          }
          return !n && r && (b = r), r || (!n && b)
        },
        D = function (e, t) {
          if (w(e)) return e.clone()
          var n = 'object' == typeof t ? t : {}
          return (n.date = e), (n.args = arguments), new M(n)
        },
        C = $
      ;(C.l = S),
        (C.i = w),
        (C.w = function (e, t) {
          return D(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset })
        })
      var M = (function () {
          function y(e) {
            ;(this.$L = S(e.locale, null, !0)), this.parse(e)
          }
          var g = y.prototype
          return (
            (g.parse = function (e) {
              ;(this.$d = (function (e) {
                var t = e.date,
                  n = e.utc
                if (null === t) return new Date(NaN)
                if (C.u(t)) return new Date()
                if (t instanceof Date) return new Date(t)
                if ('string' == typeof t && !/Z$/i.test(t)) {
                  var r = t.match(p)
                  if (r) {
                    var i = r[2] - 1 || 0,
                      a = (r[7] || '0').substring(0, 3)
                    return n
                      ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a))
                      : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)
                  }
                }
                return new Date(t)
              })(e)),
                (this.$x = e.x || {}),
                this.init()
            }),
            (g.init = function () {
              var e = this.$d
              ;(this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds())
            }),
            (g.$utils = function () {
              return C
            }),
            (g.isValid = function () {
              return !(this.$d.toString() === h)
            }),
            (g.isSame = function (e, t) {
              var n = D(e)
              return this.startOf(t) <= n && n <= this.endOf(t)
            }),
            (g.isAfter = function (e, t) {
              return D(e) < this.startOf(t)
            }),
            (g.isBefore = function (e, t) {
              return this.endOf(t) < D(e)
            }),
            (g.$g = function (e, t, n) {
              return C.u(e) ? this[t] : this.set(n, e)
            }),
            (g.unix = function () {
              return Math.floor(this.valueOf() / 1e3)
            }),
            (g.valueOf = function () {
              return this.$d.getTime()
            }),
            (g.startOf = function (e, t) {
              var n = this,
                r = !!C.u(t) || t,
                f = C.p(e),
                h = function (e, t) {
                  var i = C.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n)
                  return r ? i : i.endOf(s)
                },
                p = function (e, t) {
                  return C.w(n.toDate()[e].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                },
                m = this.$W,
                y = this.$M,
                g = this.$D,
                $ = 'set' + (this.$u ? 'UTC' : '')
              switch (f) {
                case d:
                  return r ? h(1, 0) : h(31, 11)
                case c:
                  return r ? h(1, y) : h(0, y + 1)
                case u:
                  var b = this.$locale().weekStart || 0,
                    v = (m < b ? m + 7 : m) - b
                  return h(r ? g - v : g + (6 - v), y)
                case s:
                case l:
                  return p($ + 'Hours', 0)
                case o:
                  return p($ + 'Minutes', 1)
                case a:
                  return p($ + 'Seconds', 2)
                case i:
                  return p($ + 'Milliseconds', 3)
                default:
                  return this.clone()
              }
            }),
            (g.endOf = function (e) {
              return this.startOf(e, !1)
            }),
            (g.$set = function (e, t) {
              var n,
                u = C.p(e),
                f = 'set' + (this.$u ? 'UTC' : ''),
                h = ((n = {}),
                (n[s] = f + 'Date'),
                (n[l] = f + 'Date'),
                (n[c] = f + 'Month'),
                (n[d] = f + 'FullYear'),
                (n[o] = f + 'Hours'),
                (n[a] = f + 'Minutes'),
                (n[i] = f + 'Seconds'),
                (n[r] = f + 'Milliseconds'),
                n)[u],
                p = u === s ? this.$D + (t - this.$W) : t
              if (u === c || u === d) {
                var m = this.clone().set(l, 1)
                m.$d[h](p), m.init(), (this.$d = m.set(l, Math.min(this.$D, m.daysInMonth())).$d)
              } else h && this.$d[h](p)
              return this.init(), this
            }),
            (g.set = function (e, t) {
              return this.clone().$set(e, t)
            }),
            (g.get = function (e) {
              return this[C.p(e)]()
            }),
            (g.add = function (r, f) {
              var l,
                h = this
              r = Number(r)
              var p = C.p(f),
                m = function (e) {
                  var t = D(h)
                  return C.w(t.date(t.date() + Math.round(e * r)), h)
                }
              if (p === c) return this.set(c, this.$M + r)
              if (p === d) return this.set(d, this.$y + r)
              if (p === s) return m(1)
              if (p === u) return m(7)
              var y = ((l = {}), (l[a] = t), (l[o] = n), (l[i] = e), l)[p] || 1,
                g = this.$d.getTime() + r * y
              return C.w(g, this)
            }),
            (g.subtract = function (e, t) {
              return this.add(-1 * e, t)
            }),
            (g.format = function (e) {
              var t = this
              if (!this.isValid()) return h
              var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                r = C.z(this),
                i = this.$locale(),
                a = this.$H,
                o = this.$m,
                s = this.$M,
                u = i.weekdays,
                c = i.months,
                f = function (e, r, i, a) {
                  return (e && (e[r] || e(t, n))) || i[r].substr(0, a)
                },
                d = function (e) {
                  return C.s(a % 12 || 12, e, '0')
                },
                l =
                  i.meridiem ||
                  function (e, t, n) {
                    var r = e < 12 ? 'AM' : 'PM'
                    return n ? r.toLowerCase() : r
                  },
                p = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: s + 1,
                  MM: C.s(s + 1, 2, '0'),
                  MMM: f(i.monthsShort, s, c, 3),
                  MMMM: f(c, s),
                  D: this.$D,
                  DD: C.s(this.$D, 2, '0'),
                  d: String(this.$W),
                  dd: f(i.weekdaysMin, this.$W, u, 2),
                  ddd: f(i.weekdaysShort, this.$W, u, 3),
                  dddd: u[this.$W],
                  H: String(a),
                  HH: C.s(a, 2, '0'),
                  h: d(1),
                  hh: d(2),
                  a: l(a, o, !0),
                  A: l(a, o, !1),
                  m: String(o),
                  mm: C.s(o, 2, '0'),
                  s: String(this.$s),
                  ss: C.s(this.$s, 2, '0'),
                  SSS: C.s(this.$ms, 3, '0'),
                  Z: r,
                }
              return n.replace(m, function (e, t) {
                return t || p[e] || r.replace(':', '')
              })
            }),
            (g.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }),
            (g.diff = function (r, l, h) {
              var p,
                m = C.p(l),
                y = D(r),
                g = (y.utcOffset() - this.utcOffset()) * t,
                $ = this - y,
                b = C.m(this, y)
              return (
                (b =
                  ((p = {}),
                  (p[d] = b / 12),
                  (p[c] = b),
                  (p[f] = b / 3),
                  (p[u] = ($ - g) / 6048e5),
                  (p[s] = ($ - g) / 864e5),
                  (p[o] = $ / n),
                  (p[a] = $ / t),
                  (p[i] = $ / e),
                  p)[m] || $),
                h ? b : C.a(b)
              )
            }),
            (g.daysInMonth = function () {
              return this.endOf(c).$D
            }),
            (g.$locale = function () {
              return v[this.$L]
            }),
            (g.locale = function (e, t) {
              if (!e) return this.$L
              var n = this.clone(),
                r = S(e, t, !0)
              return r && (n.$L = r), n
            }),
            (g.clone = function () {
              return C.w(this.$d, this)
            }),
            (g.toDate = function () {
              return new Date(this.valueOf())
            }),
            (g.toJSON = function () {
              return this.isValid() ? this.toISOString() : null
            }),
            (g.toISOString = function () {
              return this.$d.toISOString()
            }),
            (g.toString = function () {
              return this.$d.toUTCString()
            }),
            y
          )
        })(),
        A = M.prototype
      return (
        (D.prototype = A),
        [
          ['$ms', r],
          ['$s', i],
          ['$m', a],
          ['$H', o],
          ['$W', s],
          ['$M', c],
          ['$y', d],
          ['$D', l],
        ].forEach(function (e) {
          A[e[1]] = function (t) {
            return this.$g(t, e[0], e[1])
          }
        }),
        (D.extend = function (e, t) {
          return e.$i || (e(t, M, D), (e.$i = !0)), D
        }),
        (D.locale = S),
        (D.isDayjs = w),
        (D.unix = function (e) {
          return D(1e3 * e)
        }),
        (D.en = v[b]),
        (D.Ls = v),
        (D.p = {}),
        D
      )
    })()
  })(t)
  var n = t.exports
  function r() {
    return plus.navigator.getUIStyle()
  }
  function i(e, t) {
    uni.showToast(Object.assign({ icon: 'none', title: e, duration: 2e3 }, t))
  }
  let a = !1
  function o(e = {}) {
    if (a) return
    a = !0
    const t = {
      url: '',
      type: 'navigateTo',
      delta: 1,
      animationType: 'pop-in',
      animationDuration: 300,
      fail(e) {
        console.warn(e)
      },
      complete() {
        a = !1
      },
    }
    Object.assign(t, e)
    const { url: n, animationType: r, animationDuration: i, fail: o, complete: s, delta: u, type: c } = t
    switch (c) {
      case 'navigateTo':
        uni.navigateTo({ url: n, animationType: r, animationDuration: i, fail: o, complete: s })
        break
      case 'redirectTo':
        uni.redirectTo({ url: n, fail: o, complete: s })
        break
      case 'reLaunch':
        uni.reLaunch({ url: n, fail: o, complete: s })
        break
      case 'switchTab':
        uni.switchTab({ url: n, fail: o, complete: s })
        break
      case 'navigateBack':
        uni.navigateBack({ delta: u, animationDuration: i, fail: o, complete: s })
    }
  }
  function s(e, t) {
    const n = Object.assign({ msg: '' }, t),
      { msg: r } = n
    uni.setClipboardData({
      data: String(e),
      complete() {
        uni.hideToast(), r && i(r)
      },
    })
    const a = document.createElement('input')
    if (((a.value = e), document.body.appendChild(a), a.select(), navigator.userAgent.match(/ipad|ipod|iphone/i))) {
      ;(a.contentEditable = 'true'), (a.readOnly = !1)
      const e = document.createRange()
      e.selectNodeContents(a)
      const t = window.getSelection()
      t.removeAllRanges(), t.addRange(e), a.setSelectionRange(0, 999999)
    }
    try {
      document.execCommand('copy'), r && i(r)
    } catch (e) {
      console.error('Copy error!', e)
    }
    a.remove()
  }
  function u(e, t) {
    const n = Object.assign({ h5Inside: !1, appInside: !0 }, t),
      { h5Inside: r, appInside: i } = n,
      a = encodeURI(decodeURIComponent(e))
    i ? plus.runtime.openWeb(a) : plus.runtime.openURL(a), r ? window.open(a) : window.open(a, 'target', '')
  }
  var c = Object.freeze({ __proto__: null, getUIStyle: r, toast: i, route: o, copy: s, openUrl: u })
  class f {
    constructor(e = {}) {
      this.config = Object.assign({ header: {}, baseUrl: '', sslVerify: !1 }, e)
    }
    interceptor = {
      request: (e) => {
        e && (this.requestBeforeFun = e)
      },
      response: (e, t) => {
        e && (this.requestComFun = e), t && (this.requestComFail = t)
      },
    }
    setValidateStatus = (e) => {
      e && (this.validateStatus = e)
    }
    requestBeforeFun = (e) => e
    requestComFun = (e) => e
    requestComFail = (e) => e
    validateStatus(e) {
      return 200 === e
    }
    async request(e = {}) {
      return new Promise((t, n) => {
        ;(e.baseUrl = this.config.baseUrl), (e.header = Object.assign(e.header || {}, this.config.header))
        const r = this.requestBeforeFun(e),
          i = {
            url: `${r.baseUrl}${r.url}`,
            data: r.data,
            method: r.method.toUpperCase(),
            sslVerify: r.sslVerify,
            withCredentials: r.withCredentials,
            complete: async (e) => {
              ;(e.config = r), this.validateStatus(e.statusCode) ? t(this.requestComFun(e)) : n(this.requestComFail(e))
            },
          }
        uni.request(i)
      })
    }
    async upload(e) {
      return new Promise((t, n) => {
        ;(e.baseUrl = this.config.baseUrl),
          (e.header = Object.assign(e.header || {}, this.config.header)),
          delete e.header['content-type'],
          delete e.header['Content-Type'],
          delete e.header['Content-type'],
          delete e.method
        const r = this.reqInterceptor(e),
          i = {
            url: `${r.baseUrl}${r.url}`,
            fileType: r.fileType,
            filePath: r.filePath,
            name: r.name,
            header: r.header,
            formData: r.formData,
            success: (e) => {
              'string' == typeof e.data && (e.data = JSON.parse(e.data)), t(this.resInterceptor(e))
            },
            fail: (e) => {
              n(this.resFailInterceptor(e))
            },
          }
        uni.uploadFile(i)
      })
    }
  }
  const d = 'function' == typeof atob,
    l = 'function' == typeof btoa,
    h = 'function' == typeof Buffer,
    p = 'function' == typeof TextDecoder ? new TextDecoder() : void 0,
    m = 'function' == typeof TextEncoder ? new TextEncoder() : void 0,
    y = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='],
    g = ((e) => {
      let t = {}
      return e.forEach((e, n) => (t[e] = n)), t
    })(y),
    $ = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    b = String.fromCharCode.bind(String),
    v =
      'function' == typeof Uint8Array.from
        ? Uint8Array.from.bind(Uint8Array)
        : (e, t = (e) => e) => new Uint8Array(Array.prototype.slice.call(e, 0).map(t)),
    w = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ''),
    S = l
      ? (e) => btoa(e)
      : h
      ? (e) => Buffer.from(e, 'binary').toString('base64')
      : (e) => {
          let t,
            n,
            r,
            i,
            a = ''
          const o = e.length % 3
          for (let o = 0; o < e.length; ) {
            if ((n = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255)
              throw new TypeError('invalid character found')
            ;(t = (n << 16) | (r << 8) | i), (a += y[(t >> 18) & 63] + y[(t >> 12) & 63] + y[(t >> 6) & 63] + y[63 & t])
          }
          return o ? a.slice(0, o - 3) + '==='.substring(o) : a
        },
    D = h
      ? (e) => Buffer.from(e).toString('base64')
      : (e) => {
          let t = []
          for (let n = 0, r = e.length; n < r; n += 4096) t.push(b.apply(null, e.subarray(n, n + 4096)))
          return S(t.join(''))
        },
    C = (e) => {
      if (e.length < 2)
        return (t = e.charCodeAt(0)) < 128
          ? e
          : t < 2048
          ? b(192 | (t >>> 6)) + b(128 | (63 & t))
          : b(224 | ((t >>> 12) & 15)) + b(128 | ((t >>> 6) & 63)) + b(128 | (63 & t))
      var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320)
      return b(240 | ((t >>> 18) & 7)) + b(128 | ((t >>> 12) & 63)) + b(128 | ((t >>> 6) & 63)) + b(128 | (63 & t))
    },
    M = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    A = h ? (e) => Buffer.from(e, 'utf8').toString('base64') : m ? (e) => D(m.encode(e)) : (e) => S(e.replace(M, C)),
    _ = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    O = (e) => {
      switch (e.length) {
        case 4:
          var t =
            (((7 & e.charCodeAt(0)) << 18) |
              ((63 & e.charCodeAt(1)) << 12) |
              ((63 & e.charCodeAt(2)) << 6) |
              (63 & e.charCodeAt(3))) -
            65536
          return b(55296 + (t >>> 10)) + b(56320 + (1023 & t))
        case 3:
          return b(((15 & e.charCodeAt(0)) << 12) | ((63 & e.charCodeAt(1)) << 6) | (63 & e.charCodeAt(2)))
        default:
          return b(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)))
      }
    },
    T = d
      ? (e) => atob(w(e))
      : h
      ? (e) => Buffer.from(e, 'base64').toString('binary')
      : (e) => {
          if (((e = e.replace(/\s+/g, '')), !$.test(e))) throw new TypeError('malformed base64.')
          e += '=='.slice(2 - (3 & e.length))
          let t,
            n,
            r,
            i = ''
          for (let a = 0; a < e.length; )
            (t =
              (g[e.charAt(a++)] << 18) |
              (g[e.charAt(a++)] << 12) |
              ((n = g[e.charAt(a++)]) << 6) |
              (r = g[e.charAt(a++)])),
              (i +=
                64 === n
                  ? b((t >> 16) & 255)
                  : 64 === r
                  ? b((t >> 16) & 255, (t >> 8) & 255)
                  : b((t >> 16) & 255, (t >> 8) & 255, 255 & t))
          return i
        },
    x = h ? (e) => v(Buffer.from(e, 'base64')) : (e) => v(T(e), (e) => e.charCodeAt(0)),
    F = h ? (e) => Buffer.from(e, 'base64').toString('utf8') : p ? (e) => p.decode(x(e)) : (e) => T(e).replace(_, O),
    U = (e) => F(w(e.replace(/[-_]/g, (e) => ('-' == e ? '+' : '/'))))
  var I = Object.freeze({
    __proto__: null,
    base64Encode2String: function (e) {
      return ((e, t = !1) =>
        t ? ((e) => e.replace(/[+\/]/g, (e) => ('+' == e ? '-' : '_')).replace(/=+$/m, ''))(A(e)) : A(e))(e)
    },
    base64Decode: function (e) {
      return U(e)
    },
  })
  const j = require('md5')
  var q = Object.freeze({
      __proto__: null,
      encryptMD5: function (e) {
        return j(e)
      },
    }),
    B = '0.0.1',
    E = { ...c, dayjs: n, Request: f, EncodeUtil: I, EncryptUtil: q, version: B }
  ;(e.EncodeUtil = I),
    (e.EncryptUtil = q),
    (e.Request = f),
    (e.copy = s),
    (e.dayjs = n),
    (e.default = E),
    (e.getUIStyle = r),
    (e.openUrl = u),
    (e.route = o),
    (e.toast = i),
    (e.version = B),
    Object.defineProperty(e, '__esModule', { value: !0 })
}),
  'undefined' != typeof window && (window._utools_VERSION_ = '0.0.1')
