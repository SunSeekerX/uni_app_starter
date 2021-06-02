'undefined' != typeof globalThis
  ? globalThis
  : 'undefined' != typeof window
  ? window
  : 'undefined' != typeof global
  ? global
  : 'undefined' != typeof self && self
var t = { exports: {} },
  e = (t.exports = (function () {
    var t = 1e3,
      e = 6e4,
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
      g = {
        name: 'en',
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      },
      y = function (t, e, n) {
        var r = String(t)
        return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t
      },
      $ = {
        s: y,
        z: function (t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60
          return (e <= 0 ? '+' : '-') + y(r, 2, '0') + ':' + y(i, 2, '0')
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e)
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, c),
            a = n - i < 0,
            o = e.clone().add(r + (a ? -1 : 1), c)
          return +(-(r + (n - i) / (a ? i - o : o - i)) || 0)
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        },
        p: function (t) {
          return (
            { M: c, y: d, w: u, d: s, D: l, h: o, m: a, s: i, ms: r, Q: f }[t] ||
            String(t || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (t) {
          return void 0 === t
        },
      },
      b = 'en',
      v = {}
    v[b] = g
    var w = function (t) {
        return t instanceof M
      },
      D = function (t, e, n) {
        var r
        if (!t) return b
        if ('string' == typeof t) v[t] && (r = t), e && ((v[t] = e), (r = t))
        else {
          var i = t.name
          ;(v[i] = t), (r = i)
        }
        return !n && r && (b = r), r || (!n && b)
      },
      S = function (t, e) {
        if (w(t)) return t.clone()
        var n = 'object' == typeof e ? e : {}
        return (n.date = t), (n.args = arguments), new M(n)
      },
      C = $
    ;(C.l = D),
      (C.i = w),
      (C.w = function (t, e) {
        return S(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset })
      })
    var M = (function () {
        function g(t) {
          ;(this.$L = D(t.locale, null, !0)), this.parse(t)
        }
        var y = g.prototype
        return (
          (y.parse = function (t) {
            ;(this.$d = (function (t) {
              var e = t.date,
                n = t.utc
              if (null === e) return new Date(NaN)
              if (C.u(e)) return new Date()
              if (e instanceof Date) return new Date(e)
              if ('string' == typeof e && !/Z$/i.test(e)) {
                var r = e.match(p)
                if (r) {
                  var i = r[2] - 1 || 0,
                    a = (r[7] || '0').substring(0, 3)
                  return n
                    ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a))
                    : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, a)
                }
              }
              return new Date(e)
            })(t)),
              (this.$x = t.x || {}),
              this.init()
          }),
          (y.init = function () {
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
          (y.$utils = function () {
            return C
          }),
          (y.isValid = function () {
            return !(this.$d.toString() === h)
          }),
          (y.isSame = function (t, e) {
            var n = S(t)
            return this.startOf(e) <= n && n <= this.endOf(e)
          }),
          (y.isAfter = function (t, e) {
            return S(t) < this.startOf(e)
          }),
          (y.isBefore = function (t, e) {
            return this.endOf(e) < S(t)
          }),
          (y.$g = function (t, e, n) {
            return C.u(t) ? this[e] : this.set(n, t)
          }),
          (y.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (y.valueOf = function () {
            return this.$d.getTime()
          }),
          (y.startOf = function (t, e) {
            var n = this,
              r = !!C.u(e) || e,
              f = C.p(t),
              h = function (t, e) {
                var i = C.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n)
                return r ? i : i.endOf(s)
              },
              p = function (t, e) {
                return C.w(n.toDate()[t].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
              },
              m = this.$W,
              g = this.$M,
              y = this.$D,
              $ = 'set' + (this.$u ? 'UTC' : '')
            switch (f) {
              case d:
                return r ? h(1, 0) : h(31, 11)
              case c:
                return r ? h(1, g) : h(0, g + 1)
              case u:
                var b = this.$locale().weekStart || 0,
                  v = (m < b ? m + 7 : m) - b
                return h(r ? y - v : y + (6 - v), g)
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
          (y.endOf = function (t) {
            return this.startOf(t, !1)
          }),
          (y.$set = function (t, e) {
            var n,
              u = C.p(t),
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
              p = u === s ? this.$D + (e - this.$W) : e
            if (u === c || u === d) {
              var m = this.clone().set(l, 1)
              m.$d[h](p), m.init(), (this.$d = m.set(l, Math.min(this.$D, m.daysInMonth())).$d)
            } else h && this.$d[h](p)
            return this.init(), this
          }),
          (y.set = function (t, e) {
            return this.clone().$set(t, e)
          }),
          (y.get = function (t) {
            return this[C.p(t)]()
          }),
          (y.add = function (r, f) {
            var l,
              h = this
            r = Number(r)
            var p = C.p(f),
              m = function (t) {
                var e = S(h)
                return C.w(e.date(e.date() + Math.round(t * r)), h)
              }
            if (p === c) return this.set(c, this.$M + r)
            if (p === d) return this.set(d, this.$y + r)
            if (p === s) return m(1)
            if (p === u) return m(7)
            var g = ((l = {}), (l[a] = e), (l[o] = n), (l[i] = t), l)[p] || 1,
              y = this.$d.getTime() + r * g
            return C.w(y, this)
          }),
          (y.subtract = function (t, e) {
            return this.add(-1 * t, e)
          }),
          (y.format = function (t) {
            var e = this
            if (!this.isValid()) return h
            var n = t || 'YYYY-MM-DDTHH:mm:ssZ',
              r = C.z(this),
              i = this.$locale(),
              a = this.$H,
              o = this.$m,
              s = this.$M,
              u = i.weekdays,
              c = i.months,
              f = function (t, r, i, a) {
                return (t && (t[r] || t(e, n))) || i[r].substr(0, a)
              },
              d = function (t) {
                return C.s(a % 12 || 12, t, '0')
              },
              l =
                i.meridiem ||
                function (t, e, n) {
                  var r = t < 12 ? 'AM' : 'PM'
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
            return n.replace(m, function (t, e) {
              return e || p[t] || r.replace(':', '')
            })
          }),
          (y.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (y.diff = function (r, l, h) {
            var p,
              m = C.p(l),
              g = S(r),
              y = (g.utcOffset() - this.utcOffset()) * e,
              $ = this - g,
              b = C.m(this, g)
            return (
              (b =
                ((p = {}),
                (p[d] = b / 12),
                (p[c] = b),
                (p[f] = b / 3),
                (p[u] = ($ - y) / 6048e5),
                (p[s] = ($ - y) / 864e5),
                (p[o] = $ / n),
                (p[a] = $ / e),
                (p[i] = $ / t),
                p)[m] || $),
              h ? b : C.a(b)
            )
          }),
          (y.daysInMonth = function () {
            return this.endOf(c).$D
          }),
          (y.$locale = function () {
            return v[this.$L]
          }),
          (y.locale = function (t, e) {
            if (!t) return this.$L
            var n = this.clone(),
              r = D(t, e, !0)
            return r && (n.$L = r), n
          }),
          (y.clone = function () {
            return C.w(this.$d, this)
          }),
          (y.toDate = function () {
            return new Date(this.valueOf())
          }),
          (y.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (y.toISOString = function () {
            return this.$d.toISOString()
          }),
          (y.toString = function () {
            return this.$d.toUTCString()
          }),
          g
        )
      })(),
      A = M.prototype
    return (
      (S.prototype = A),
      [
        ['$ms', r],
        ['$s', i],
        ['$m', a],
        ['$H', o],
        ['$W', s],
        ['$M', c],
        ['$y', d],
        ['$D', l],
      ].forEach(function (t) {
        A[t[1]] = function (e) {
          return this.$g(e, t[0], t[1])
        }
      }),
      (S.extend = function (t, e) {
        return t.$i || (t(e, M, S), (t.$i = !0)), S
      }),
      (S.locale = D),
      (S.isDayjs = w),
      (S.unix = function (t) {
        return S(1e3 * t)
      }),
      (S.en = v[b]),
      (S.Ls = v),
      (S.p = {}),
      S
    )
  })())
function n() {
  return plus.navigator.getUIStyle()
}
function r(t, e) {
  uni.showToast(Object.assign({ icon: 'none', title: t, duration: 2e3 }, e))
}
let i = !1
function a(t = {}) {
  if (i) return
  i = !0
  const e = {
    url: '',
    type: 'navigateTo',
    delta: 1,
    animationType: 'pop-in',
    animationDuration: 300,
    fail(t) {
      console.warn(t)
    },
    complete() {
      i = !1
    },
  }
  Object.assign(e, t)
  const { url: n, animationType: r, animationDuration: a, fail: o, complete: s, delta: u, type: c } = e
  switch (c) {
    case 'navigateTo':
      uni.navigateTo({ url: n, animationType: r, animationDuration: a, fail: o, complete: s })
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
      uni.navigateBack({ delta: u, animationDuration: a, fail: o, complete: s })
  }
}
function o(t, e) {
  const n = Object.assign({ msg: '' }, e),
    { msg: i } = n
  uni.setClipboardData({
    data: String(t),
    complete() {
      uni.hideToast(), i && r(i)
    },
  })
  const a = document.createElement('input')
  if (((a.value = t), document.body.appendChild(a), a.select(), navigator.userAgent.match(/ipad|ipod|iphone/i))) {
    ;(a.contentEditable = 'true'), (a.readOnly = !1)
    const t = document.createRange()
    t.selectNodeContents(a)
    const e = window.getSelection()
    e.removeAllRanges(), e.addRange(t), a.setSelectionRange(0, 999999)
  }
  try {
    document.execCommand('copy'), i && r(i)
  } catch (t) {
    console.error('Copy error!', t)
  }
  a.remove()
}
function s(t, e) {
  const n = Object.assign({ h5Inside: !1, appInside: !0 }, e),
    { h5Inside: r, appInside: i } = n,
    a = encodeURI(decodeURIComponent(t))
  i ? plus.runtime.openWeb(a) : plus.runtime.openURL(a), r ? window.open(a) : window.open(a, 'target', '')
}
var u = Object.freeze({ __proto__: null, getUIStyle: n, toast: r, route: a, copy: o, openUrl: s })
class c {
  constructor(t = {}) {
    this.config = Object.assign({ header: {}, baseUrl: '', sslVerify: !1 }, t)
  }
  interceptor = {
    request: (t) => {
      t && (this.requestBeforeFun = t)
    },
    response: (t, e) => {
      t && (this.requestComFun = t), e && (this.requestComFail = e)
    },
  }
  setValidateStatus = (t) => {
    t && (this.validateStatus = t)
  }
  requestBeforeFun = (t) => t
  requestComFun = (t) => t
  requestComFail = (t) => t
  validateStatus(t) {
    return 200 === t
  }
  async request(t = {}) {
    return new Promise((e, n) => {
      ;(t.baseUrl = this.config.baseUrl), (t.header = Object.assign(t.header || {}, this.config.header))
      const r = this.requestBeforeFun(t),
        i = {
          url: `${r.baseUrl}${r.url}`,
          data: r.data,
          method: r.method.toUpperCase(),
          sslVerify: r.sslVerify,
          withCredentials: r.withCredentials,
          complete: async (t) => {
            ;(t.config = r), this.validateStatus(t.statusCode) ? e(this.requestComFun(t)) : n(this.requestComFail(t))
          },
        }
      uni.request(i)
    })
  }
  async upload(t) {
    return new Promise((e, n) => {
      ;(t.baseUrl = this.config.baseUrl),
        (t.header = Object.assign(t.header || {}, this.config.header)),
        delete t.header['content-type'],
        delete t.header['Content-Type'],
        delete t.header['Content-type'],
        delete t.method
      const r = this.reqInterceptor(t),
        i = {
          url: `${r.baseUrl}${r.url}`,
          fileType: r.fileType,
          filePath: r.filePath,
          name: r.name,
          header: r.header,
          formData: r.formData,
          success: (t) => {
            'string' == typeof t.data && (t.data = JSON.parse(t.data)), e(this.resInterceptor(t))
          },
          fail: (t) => {
            n(this.resFailInterceptor(t))
          },
        }
      uni.uploadFile(i)
    })
  }
}
const f = 'function' == typeof atob,
  d = 'function' == typeof btoa,
  l = 'function' == typeof Buffer,
  h = 'function' == typeof TextDecoder ? new TextDecoder() : void 0,
  p = 'function' == typeof TextEncoder ? new TextEncoder() : void 0,
  m = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='],
  g = ((t) => {
    let e = {}
    return m.forEach((t, n) => (e[t] = n)), e
  })(),
  y = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
  $ = String.fromCharCode.bind(String),
  b =
    'function' == typeof Uint8Array.from
      ? Uint8Array.from.bind(Uint8Array)
      : (t, e = (t) => t) => new Uint8Array(Array.prototype.slice.call(t, 0).map(e)),
  v = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, ''),
  w = d
    ? (t) => btoa(t)
    : l
    ? (t) => Buffer.from(t, 'binary').toString('base64')
    : (t) => {
        let e,
          n,
          r,
          i,
          a = ''
        const o = t.length % 3
        for (let o = 0; o < t.length; ) {
          if ((n = t.charCodeAt(o++)) > 255 || (r = t.charCodeAt(o++)) > 255 || (i = t.charCodeAt(o++)) > 255)
            throw new TypeError('invalid character found')
          ;(e = (n << 16) | (r << 8) | i), (a += m[(e >> 18) & 63] + m[(e >> 12) & 63] + m[(e >> 6) & 63] + m[63 & e])
        }
        return o ? a.slice(0, o - 3) + '==='.substring(o) : a
      },
  D = l
    ? (t) => Buffer.from(t).toString('base64')
    : (t) => {
        let e = []
        for (let n = 0, r = t.length; n < r; n += 4096) e.push($.apply(null, t.subarray(n, n + 4096)))
        return w(e.join(''))
      },
  S = (t) => {
    if (t.length < 2)
      return (e = t.charCodeAt(0)) < 128
        ? t
        : e < 2048
        ? $(192 | (e >>> 6)) + $(128 | (63 & e))
        : $(224 | ((e >>> 12) & 15)) + $(128 | ((e >>> 6) & 63)) + $(128 | (63 & e))
    var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320)
    return $(240 | ((e >>> 18) & 7)) + $(128 | ((e >>> 12) & 63)) + $(128 | ((e >>> 6) & 63)) + $(128 | (63 & e))
  },
  C = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  M = l ? (t) => Buffer.from(t, 'utf8').toString('base64') : p ? (t) => D(p.encode(t)) : (t) => w(t.replace(C, S)),
  A = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
  O = (t) => {
    switch (t.length) {
      case 4:
        var e =
          (((7 & t.charCodeAt(0)) << 18) |
            ((63 & t.charCodeAt(1)) << 12) |
            ((63 & t.charCodeAt(2)) << 6) |
            (63 & t.charCodeAt(3))) -
          65536
        return $(55296 + (e >>> 10)) + $(56320 + (1023 & e))
      case 3:
        return $(((15 & t.charCodeAt(0)) << 12) | ((63 & t.charCodeAt(1)) << 6) | (63 & t.charCodeAt(2)))
      default:
        return $(((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1)))
    }
  },
  _ = f
    ? (t) => atob(v(t))
    : l
    ? (t) => Buffer.from(t, 'base64').toString('binary')
    : (t) => {
        if (((t = t.replace(/\s+/g, '')), !y.test(t))) throw new TypeError('malformed base64.')
        t += '=='.slice(2 - (3 & t.length))
        let e,
          n,
          r,
          i = ''
        for (let a = 0; a < t.length; )
          (e =
            (g[t.charAt(a++)] << 18) |
            (g[t.charAt(a++)] << 12) |
            ((n = g[t.charAt(a++)]) << 6) |
            (r = g[t.charAt(a++)])),
            (i +=
              64 === n
                ? $((e >> 16) & 255)
                : 64 === r
                ? $((e >> 16) & 255, (e >> 8) & 255)
                : $((e >> 16) & 255, (e >> 8) & 255, 255 & e))
        return i
      },
  T = l ? (t) => b(Buffer.from(t, 'base64')) : (t) => b(_(t), (t) => t.charCodeAt(0)),
  x = l ? (t) => Buffer.from(t, 'base64').toString('utf8') : h ? (t) => h.decode(T(t)) : (t) => _(t).replace(A, O),
  F = (t) => x(v(t.replace(/[-_]/g, (t) => ('-' == t ? '+' : '/'))))
var U = Object.freeze({
  __proto__: null,
  base64Encode2String: function (t) {
    return ((t, e = !1) =>
      e ? ((t) => t.replace(/[+\/]/g, (t) => ('+' == t ? '-' : '_')).replace(/=+$/m, ''))(M(t)) : M(t))(t)
  },
  base64Decode: function (t) {
    return F(t)
  },
})
const I = require('md5')
var B = Object.freeze({
    __proto__: null,
    encryptMD5: function (t) {
      return I(t)
    },
  }),
  q = '0.0.1',
  j = { ...u, dayjs: e, Request: c, EncodeUtil: U, EncryptUtil: B, version: '0.0.1' }
export default j
export {
  U as EncodeUtil,
  B as EncryptUtil,
  c as Request,
  o as copy,
  e as dayjs,
  n as getUIStyle,
  s as openUrl,
  a as route,
  r as toast,
  q as version,
}
'undefined' != typeof window && (window._utools_VERSION_ = '0.0.1')
