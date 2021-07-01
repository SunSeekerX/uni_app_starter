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
      o = 'second',
      i = 'minute',
      a = 'hour',
      s = 'day',
      u = 'week',
      c = 'month',
      f = 'quarter',
      d = 'year',
      l = 'date',
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
      $ = {
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
            a = e.clone().add(r + (i ? -1 : 1), c)
          return +(-(r + (n - o) / (i ? o - a : a - o)) || 0)
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        },
        p: function (t) {
          return (
            { M: c, y: d, w: u, d: s, D: l, h: a, m: i, s: o, ms: r, Q: f }[t] ||
            String(t || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (t) {
          return void 0 === t
        },
      },
      v = 'en',
      b = {}
    b[v] = y
    var w = function (t) {
        return t instanceof T
      },
      S = function (t, e, n) {
        var r
        if (!t) return v
        if ('string' == typeof t) b[t] && (r = t), e && ((b[t] = e), (r = t))
        else {
          var o = t.name
          ;(b[o] = t), (r = o)
        }
        return !n && r && (v = r), r || (!n && v)
      },
      D = function (t, e) {
        if (w(t)) return t.clone()
        var n = 'object' == typeof e ? e : {}
        return (n.date = t), (n.args = arguments), new T(n)
      },
      A = $
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
                return r ? o : o.endOf(s)
              },
              p = function (t, e) {
                return A.w(n.toDate()[t].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
              },
              g = this.$W,
              y = this.$M,
              m = this.$D,
              $ = 'set' + (this.$u ? 'UTC' : '')
            switch (f) {
              case d:
                return r ? h(1, 0) : h(31, 11)
              case c:
                return r ? h(1, y) : h(0, y + 1)
              case u:
                var v = this.$locale().weekStart || 0,
                  b = (g < v ? g + 7 : g) - v
                return h(r ? m - b : m + (6 - b), y)
              case s:
              case l:
                return p($ + 'Hours', 0)
              case a:
                return p($ + 'Minutes', 1)
              case i:
                return p($ + 'Seconds', 2)
              case o:
                return p($ + 'Milliseconds', 3)
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
              (n[s] = f + 'Date'),
              (n[l] = f + 'Date'),
              (n[c] = f + 'Month'),
              (n[d] = f + 'FullYear'),
              (n[a] = f + 'Hours'),
              (n[i] = f + 'Minutes'),
              (n[o] = f + 'Seconds'),
              (n[r] = f + 'Milliseconds'),
              n)[u],
              p = u === s ? this.$D + (e - this.$W) : e
            if (u === c || u === d) {
              var g = this.clone().set(l, 1)
              g.$d[h](p), g.init(), (this.$d = g.set(l, Math.min(this.$D, g.daysInMonth())).$d)
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
            var l,
              h = this
            r = Number(r)
            var p = A.p(f),
              g = function (t) {
                var e = D(h)
                return A.w(e.date(e.date() + Math.round(t * r)), h)
              }
            if (p === c) return this.set(c, this.$M + r)
            if (p === d) return this.set(d, this.$y + r)
            if (p === s) return g(1)
            if (p === u) return g(7)
            var y = ((l = {}), (l[i] = e), (l[a] = n), (l[o] = t), l)[p] || 1,
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
              a = this.$m,
              s = this.$M,
              u = o.weekdays,
              c = o.months,
              f = function (t, r, o, i) {
                return (t && (t[r] || t(e, n))) || o[r].substr(0, i)
              },
              d = function (t) {
                return A.s(i % 12 || 12, t, '0')
              },
              l =
                o.meridiem ||
                function (t, e, n) {
                  var r = t < 12 ? 'AM' : 'PM'
                  return n ? r.toLowerCase() : r
                },
              p = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: s + 1,
                MM: A.s(s + 1, 2, '0'),
                MMM: f(o.monthsShort, s, c, 3),
                MMMM: f(c, s),
                D: this.$D,
                DD: A.s(this.$D, 2, '0'),
                d: String(this.$W),
                dd: f(o.weekdaysMin, this.$W, u, 2),
                ddd: f(o.weekdaysShort, this.$W, u, 3),
                dddd: u[this.$W],
                H: String(i),
                HH: A.s(i, 2, '0'),
                h: d(1),
                hh: d(2),
                a: l(i, a, !0),
                A: l(i, a, !1),
                m: String(a),
                mm: A.s(a, 2, '0'),
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
          (m.diff = function (r, l, h) {
            var p,
              g = A.p(l),
              y = D(r),
              m = (y.utcOffset() - this.utcOffset()) * e,
              $ = this - y,
              v = A.m(this, y)
            return (
              (v =
                ((p = {}),
                (p[d] = v / 12),
                (p[c] = v),
                (p[f] = v / 3),
                (p[u] = ($ - m) / 6048e5),
                (p[s] = ($ - m) / 864e5),
                (p[a] = $ / n),
                (p[i] = $ / e),
                (p[o] = $ / t),
                p)[g] || $),
              h ? v : A.a(v)
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
        ['$H', a],
        ['$W', s],
        ['$M', c],
        ['$y', d],
        ['$D', l],
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
      (D.en = b[v]),
      (D.Ls = b),
      (D.p = {}),
      D
    )
  })())
function n() {
  return plus.navigator.getUIStyle()
}
function r(t, e) {
  e?.title && delete e.title, uni.showToast(Object.assign({ icon: 'none', title: t, duration: 2e3 }, e))
}
let o = !1
function i(t) {
  if (o) return
  o = !0
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
      o = !1
    },
  }
  Object.assign(e, t)
  const { url: n, animationType: r, animationDuration: i, fail: a, complete: s, delta: u, type: c } = e
  switch (c) {
    case 'navigateTo':
      uni.navigateTo({ url: n, animationType: r, animationDuration: i, fail: a, complete: s })
      break
    case 'redirectTo':
      uni.redirectTo({ url: n, fail: a, complete: s })
      break
    case 'reLaunch':
      uni.reLaunch({ url: n, fail: a, complete: s })
      break
    case 'switchTab':
      uni.switchTab({ url: n, fail: a, complete: s })
      break
    case 'navigateBack':
      uni.navigateBack({ delta: u, animationDuration: i })
  }
}
function a(t, e) {
  const n = Object.assign({ msg: '' }, e),
    { msg: o } = n
  uni.setClipboardData({
    data: String(t),
    complete() {
      uni.hideToast(), o && r(o)
    },
  })
  const i = document.createElement('input')
  if (
    ((i.value = String(t)), document.body.appendChild(i), i.select(), navigator.userAgent.match(/ipad|ipod|iphone/i))
  ) {
    ;(i.contentEditable = 'true'), (i.readOnly = !1)
    const t = document.createRange()
    t.selectNodeContents(i)
    const e = window.getSelection()
    e && e.removeAllRanges(), e && e.addRange(t), i.setSelectionRange(0, 999999)
  }
  try {
    document.execCommand('copy'), o && r(o)
  } catch (t) {
    console.error('Copy error!', t)
  }
  i.remove()
}
function s(t, e) {
  const n = Object.assign({ h5Inside: !1, appInside: !0 }, e),
    { h5Inside: r, appInside: o } = n,
    i = encodeURI(decodeURIComponent(t))
  o ? plus.runtime.openWeb(i) : plus.runtime.openURL(i), r ? window.open(i) : window.open(i, 'target', '')
}
var u = Object.freeze({ __proto__: null, getUIStyle: n, toast: r, route: i, copy: a, openUrl: s })
var c = Object.freeze({
  __proto__: null,
  isMobilePhone: function (t) {
    return /^1[3456789]\d{9}$/.test(String(t))
  },
  isCardNo: function (t) {
    return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t)
  },
  isEmail: function (t) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)
  },
  isNumber: function (t) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(String(t))
  },
  isUrl: function (t) {
    return /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/.test(String(t))
  },
})
const f = 'function' == typeof atob,
  d = 'function' == typeof btoa,
  l = 'function' == typeof Buffer,
  h = 'function' == typeof TextDecoder ? new TextDecoder() : void 0,
  p = 'function' == typeof TextEncoder ? new TextEncoder() : void 0,
  g = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='],
  y = ((t) => {
    let e = {}
    return g.forEach((t, n) => (e[t] = n)), e
  })(),
  m = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
  $ = String.fromCharCode.bind(String),
  v =
    'function' == typeof Uint8Array.from
      ? Uint8Array.from.bind(Uint8Array)
      : (t, e = (t) => t) => new Uint8Array(Array.prototype.slice.call(t, 0).map(e)),
  b = (t) => t.replace(/[^A-Za-z0-9\+\/]/g, ''),
  w = d
    ? (t) => btoa(t)
    : l
    ? (t) => Buffer.from(t, 'binary').toString('base64')
    : (t) => {
        let e,
          n,
          r,
          o,
          i = ''
        const a = t.length % 3
        for (let a = 0; a < t.length; ) {
          if ((n = t.charCodeAt(a++)) > 255 || (r = t.charCodeAt(a++)) > 255 || (o = t.charCodeAt(a++)) > 255)
            throw new TypeError('invalid character found')
          ;(e = (n << 16) | (r << 8) | o), (i += g[(e >> 18) & 63] + g[(e >> 12) & 63] + g[(e >> 6) & 63] + g[63 & e])
        }
        return a ? i.slice(0, a - 3) + '==='.substring(a) : i
      },
  S = l
    ? (t) => Buffer.from(t).toString('base64')
    : (t) => {
        let e = []
        for (let n = 0, r = t.length; n < r; n += 4096) e.push($.apply(null, t.subarray(n, n + 4096)))
        return w(e.join(''))
      },
  D = (t) => {
    if (t.length < 2)
      return (e = t.charCodeAt(0)) < 128
        ? t
        : e < 2048
        ? $(192 | (e >>> 6)) + $(128 | (63 & e))
        : $(224 | ((e >>> 12) & 15)) + $(128 | ((e >>> 6) & 63)) + $(128 | (63 & e))
    var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320)
    return $(240 | ((e >>> 18) & 7)) + $(128 | ((e >>> 12) & 63)) + $(128 | ((e >>> 6) & 63)) + $(128 | (63 & e))
  },
  A = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
  T = l ? (t) => Buffer.from(t, 'utf8').toString('base64') : p ? (t) => S(p.encode(t)) : (t) => w(t.replace(A, D)),
  _ = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
  M = (t) => {
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
  x = f
    ? (t) => atob(b(t))
    : l
    ? (t) => Buffer.from(t, 'base64').toString('binary')
    : (t) => {
        if (((t = t.replace(/\s+/g, '')), !m.test(t))) throw new TypeError('malformed base64.')
        t += '=='.slice(2 - (3 & t.length))
        let e,
          n,
          r,
          o = ''
        for (let i = 0; i < t.length; )
          (e =
            (y[t.charAt(i++)] << 18) |
            (y[t.charAt(i++)] << 12) |
            ((n = y[t.charAt(i++)]) << 6) |
            (r = y[t.charAt(i++)])),
            (o +=
              64 === n
                ? $((e >> 16) & 255)
                : 64 === r
                ? $((e >> 16) & 255, (e >> 8) & 255)
                : $((e >> 16) & 255, (e >> 8) & 255, 255 & e))
        return o
      },
  C = l ? (t) => v(Buffer.from(t, 'base64')) : (t) => v(x(t), (t) => t.charCodeAt(0)),
  O = l ? (t) => Buffer.from(t, 'base64').toString('utf8') : h ? (t) => h.decode(C(t)) : (t) => x(t).replace(_, M),
  B = (t) => O(b(t.replace(/[-_]/g, (t) => ('-' == t ? '+' : '/'))))
var U,
  I,
  F = Object.freeze({
    __proto__: null,
    urlEncode: function (t) {
      return encodeURIComponent(t)
    },
    urlDecode: function (t = '', e = !0) {
      return e ? encodeURI(decodeURIComponent(t)) : decodeURIComponent(t)
    },
    base64Encode2String: function (t) {
      return ((t, e = !1) =>
        e ? ((t) => t.replace(/[+\/]/g, (t) => ('+' == t ? '-' : '_')).replace(/=+$/m, ''))(T(t)) : T(t))(t)
    },
    base64Decode: function (t) {
      return B(t)
    },
  }),
  z = { exports: {} },
  E = { exports: {} }
;(U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
  (I = {
    rotl: function (t, e) {
      return (t << e) | (t >>> (32 - e))
    },
    rotr: function (t, e) {
      return (t << (32 - e)) | (t >>> e)
    },
    endian: function (t) {
      if (t.constructor == Number) return (16711935 & I.rotl(t, 8)) | (4278255360 & I.rotl(t, 24))
      for (var e = 0; e < t.length; e++) t[e] = I.endian(t[e])
      return t
    },
    randomBytes: function (t) {
      for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()))
      return e
    },
    bytesToWords: function (t) {
      for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << (24 - (r % 32))
      return e
    },
    wordsToBytes: function (t) {
      for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push((t[n >>> 5] >>> (24 - (n % 32))) & 255)
      return e
    },
    bytesToHex: function (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16))
      return e.join('')
    },
    hexToBytes: function (t) {
      for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16))
      return e
    },
    bytesToBase64: function (t) {
      for (var e = [], n = 0; n < t.length; n += 3)
        for (var r = (t[n] << 16) | (t[n + 1] << 8) | t[n + 2], o = 0; o < 4; o++)
          8 * n + 6 * o <= 8 * t.length ? e.push(U.charAt((r >>> (6 * (3 - o))) & 63)) : e.push('=')
      return e.join('')
    },
    base64ToBytes: function (t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, '')
      for (var e = [], n = 0, r = 0; n < t.length; r = ++n % 4)
        0 != r &&
          e.push(
            ((U.indexOf(t.charAt(n - 1)) & (Math.pow(2, -2 * r + 8) - 1)) << (2 * r)) |
              (U.indexOf(t.charAt(n)) >>> (6 - 2 * r))
          )
      return e
    },
  }),
  (E.exports = I)
var j = {
    utf8: {
      stringToBytes: function (t) {
        return j.bin.stringToBytes(unescape(encodeURIComponent(t)))
      },
      bytesToString: function (t) {
        return decodeURIComponent(escape(j.bin.bytesToString(t)))
      },
    },
    bin: {
      stringToBytes: function (t) {
        for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n))
        return e
      },
      bytesToString: function (t) {
        for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]))
        return e.join('')
      },
    },
  },
  k = j,
  H = function (t) {
    return (
      null != t &&
      (R(t) ||
        (function (t) {
          return 'function' == typeof t.readFloatLE && 'function' == typeof t.slice && R(t.slice(0, 0))
        })(t) ||
        !!t._isBuffer)
    )
  }
function R(t) {
  return !!t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
}
!(function () {
  var t = E.exports,
    e = k.utf8,
    n = H,
    r = k.bin,
    o = function (i, a) {
      i.constructor == String
        ? (i = a && 'binary' === a.encoding ? r.stringToBytes(i) : e.stringToBytes(i))
        : n(i)
        ? (i = Array.prototype.slice.call(i, 0))
        : Array.isArray(i) || i.constructor === Uint8Array || (i = i.toString())
      for (
        var s = t.bytesToWords(i),
          u = 8 * i.length,
          c = 1732584193,
          f = -271733879,
          d = -1732584194,
          l = 271733878,
          h = 0;
        h < s.length;
        h++
      )
        s[h] = (16711935 & ((s[h] << 8) | (s[h] >>> 24))) | (4278255360 & ((s[h] << 24) | (s[h] >>> 8)))
      ;(s[u >>> 5] |= 128 << u % 32), (s[14 + (((u + 64) >>> 9) << 4)] = u)
      var p = o._ff,
        g = o._gg,
        y = o._hh,
        m = o._ii
      for (h = 0; h < s.length; h += 16) {
        var $ = c,
          v = f,
          b = d,
          w = l
        ;(c = p(c, f, d, l, s[h + 0], 7, -680876936)),
          (l = p(l, c, f, d, s[h + 1], 12, -389564586)),
          (d = p(d, l, c, f, s[h + 2], 17, 606105819)),
          (f = p(f, d, l, c, s[h + 3], 22, -1044525330)),
          (c = p(c, f, d, l, s[h + 4], 7, -176418897)),
          (l = p(l, c, f, d, s[h + 5], 12, 1200080426)),
          (d = p(d, l, c, f, s[h + 6], 17, -1473231341)),
          (f = p(f, d, l, c, s[h + 7], 22, -45705983)),
          (c = p(c, f, d, l, s[h + 8], 7, 1770035416)),
          (l = p(l, c, f, d, s[h + 9], 12, -1958414417)),
          (d = p(d, l, c, f, s[h + 10], 17, -42063)),
          (f = p(f, d, l, c, s[h + 11], 22, -1990404162)),
          (c = p(c, f, d, l, s[h + 12], 7, 1804603682)),
          (l = p(l, c, f, d, s[h + 13], 12, -40341101)),
          (d = p(d, l, c, f, s[h + 14], 17, -1502002290)),
          (c = g(c, (f = p(f, d, l, c, s[h + 15], 22, 1236535329)), d, l, s[h + 1], 5, -165796510)),
          (l = g(l, c, f, d, s[h + 6], 9, -1069501632)),
          (d = g(d, l, c, f, s[h + 11], 14, 643717713)),
          (f = g(f, d, l, c, s[h + 0], 20, -373897302)),
          (c = g(c, f, d, l, s[h + 5], 5, -701558691)),
          (l = g(l, c, f, d, s[h + 10], 9, 38016083)),
          (d = g(d, l, c, f, s[h + 15], 14, -660478335)),
          (f = g(f, d, l, c, s[h + 4], 20, -405537848)),
          (c = g(c, f, d, l, s[h + 9], 5, 568446438)),
          (l = g(l, c, f, d, s[h + 14], 9, -1019803690)),
          (d = g(d, l, c, f, s[h + 3], 14, -187363961)),
          (f = g(f, d, l, c, s[h + 8], 20, 1163531501)),
          (c = g(c, f, d, l, s[h + 13], 5, -1444681467)),
          (l = g(l, c, f, d, s[h + 2], 9, -51403784)),
          (d = g(d, l, c, f, s[h + 7], 14, 1735328473)),
          (c = y(c, (f = g(f, d, l, c, s[h + 12], 20, -1926607734)), d, l, s[h + 5], 4, -378558)),
          (l = y(l, c, f, d, s[h + 8], 11, -2022574463)),
          (d = y(d, l, c, f, s[h + 11], 16, 1839030562)),
          (f = y(f, d, l, c, s[h + 14], 23, -35309556)),
          (c = y(c, f, d, l, s[h + 1], 4, -1530992060)),
          (l = y(l, c, f, d, s[h + 4], 11, 1272893353)),
          (d = y(d, l, c, f, s[h + 7], 16, -155497632)),
          (f = y(f, d, l, c, s[h + 10], 23, -1094730640)),
          (c = y(c, f, d, l, s[h + 13], 4, 681279174)),
          (l = y(l, c, f, d, s[h + 0], 11, -358537222)),
          (d = y(d, l, c, f, s[h + 3], 16, -722521979)),
          (f = y(f, d, l, c, s[h + 6], 23, 76029189)),
          (c = y(c, f, d, l, s[h + 9], 4, -640364487)),
          (l = y(l, c, f, d, s[h + 12], 11, -421815835)),
          (d = y(d, l, c, f, s[h + 15], 16, 530742520)),
          (c = m(c, (f = y(f, d, l, c, s[h + 2], 23, -995338651)), d, l, s[h + 0], 6, -198630844)),
          (l = m(l, c, f, d, s[h + 7], 10, 1126891415)),
          (d = m(d, l, c, f, s[h + 14], 15, -1416354905)),
          (f = m(f, d, l, c, s[h + 5], 21, -57434055)),
          (c = m(c, f, d, l, s[h + 12], 6, 1700485571)),
          (l = m(l, c, f, d, s[h + 3], 10, -1894986606)),
          (d = m(d, l, c, f, s[h + 10], 15, -1051523)),
          (f = m(f, d, l, c, s[h + 1], 21, -2054922799)),
          (c = m(c, f, d, l, s[h + 8], 6, 1873313359)),
          (l = m(l, c, f, d, s[h + 15], 10, -30611744)),
          (d = m(d, l, c, f, s[h + 6], 15, -1560198380)),
          (f = m(f, d, l, c, s[h + 13], 21, 1309151649)),
          (c = m(c, f, d, l, s[h + 4], 6, -145523070)),
          (l = m(l, c, f, d, s[h + 11], 10, -1120210379)),
          (d = m(d, l, c, f, s[h + 2], 15, 718787259)),
          (f = m(f, d, l, c, s[h + 9], 21, -343485551)),
          (c = (c + $) >>> 0),
          (f = (f + v) >>> 0),
          (d = (d + b) >>> 0),
          (l = (l + w) >>> 0)
      }
      return t.endian([c, f, d, l])
    }
  ;(o._ff = function (t, e, n, r, o, i, a) {
    var s = t + ((e & n) | (~e & r)) + (o >>> 0) + a
    return ((s << i) | (s >>> (32 - i))) + e
  }),
    (o._gg = function (t, e, n, r, o, i, a) {
      var s = t + ((e & r) | (n & ~r)) + (o >>> 0) + a
      return ((s << i) | (s >>> (32 - i))) + e
    }),
    (o._hh = function (t, e, n, r, o, i, a) {
      var s = t + (e ^ n ^ r) + (o >>> 0) + a
      return ((s << i) | (s >>> (32 - i))) + e
    }),
    (o._ii = function (t, e, n, r, o, i, a) {
      var s = t + (n ^ (e | ~r)) + (o >>> 0) + a
      return ((s << i) | (s >>> (32 - i))) + e
    }),
    (o._blocksize = 16),
    (o._digestsize = 16),
    (z.exports = function (e, n) {
      if (null == e) throw new Error('Illegal argument ' + e)
      var i = t.wordsToBytes(o(e, n))
      return n && n.asBytes ? i : n && n.asString ? r.bytesToString(i) : t.bytesToHex(i)
    })
})()
var Y = z.exports
var L = Object.freeze({
  __proto__: null,
  encryptMD5: function (t) {
    return Y(t)
  },
})
const { version: W } = require('../package.json')
var Z = { ...u, dayjs: e, ValidateUtil: c, EncodeUtil: F, EncryptUtil: L, version: W }
export default Z
export {
  F as EncodeUtil,
  L as EncryptUtil,
  c as ValidateUtil,
  a as copy,
  e as dayjs,
  n as getUIStyle,
  s as openUrl,
  i as route,
  r as toast,
}
'undefined' != typeof window && (window._utools_VERSION_ = '0.0.1')
