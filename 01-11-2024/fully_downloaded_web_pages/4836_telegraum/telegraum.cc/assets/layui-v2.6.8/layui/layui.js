/*! MIT Licensed */ !(function (t) {
  'use strict';
  var e = t.document,
    n = { modules: {}, status: {}, timeout: 10, event: {} },
    r = function () {
      this.v = '2.6.8';
    },
    o = t.LAYUI_GLOBAL || {},
    a = (function () {
      var t = e.currentScript
        ? e.currentScript.src
        : (function () {
            for (var t, n = e.scripts, r = n.length - 1, o = r; o > 0; o--)
              if ('interactive' === n[o].readyState) {
                t = n[o].src;
                break;
              }
            return t || n[r].src;
          })();
      return (n.dir = o.dir || t.substring(0, t.lastIndexOf('/') + 1));
    })(),
    i = function (e, n) {
      (n = n || 'log'),
        t.console && console[n] && console[n]('layui error hint: ' + e);
    },
    u = 'undefined' != typeof opera && '[object Opera]' === opera.toString(),
    l = (n.builtin = {
      lay: 'lay',
      layer: 'layer',
      laydate: 'laydate',
      laypage: 'laypage',
      laytpl: 'laytpl',
      layedit: 'layedit',
      form: 'form',
      upload: 'upload',
      dropdown: 'dropdown',
      transfer: 'transfer',
      tree: 'tree',
      table: 'table',
      element: 'element',
      rate: 'rate',
      colorpicker: 'colorpicker',
      slider: 'slider',
      carousel: 'carousel',
      flow: 'flow',
      util: 'util',
      code: 'code',
      jquery: 'jquery',
      all: 'all',
      'layui.all': 'layui.all'
    });
  (r.prototype.cache = n),
    (r.prototype.define = function (t, e) {
      var r = this,
        o = 'function' == typeof t,
        a = function () {
          var t = function (t, e) {
            (layui[t] = e), (n.status[t] = !0);
          };
          return (
            'function' == typeof e &&
              e(function (r, o) {
                t(r, o),
                  (n.callback[r] = function () {
                    e(t);
                  });
              }),
            this
          );
        };
      return o && ((e = t), (t = [])), r.use(t, a, null, 'define'), r;
    }),
    (r.prototype.use = function (r, o, c, s) {
      function p(t, e) {
        var r =
          'PLaySTATION 3' === navigator.platform
            ? /^complete$/
            : /^(complete|loaded)$/;
        ('load' === t.type ||
          r.test((t.currentTarget || t.srcElement).readyState)) &&
          ((n.modules[h] = e),
          v.removeChild(b),
          (function o() {
            return ++m > (1e3 * n.timeout) / 4
              ? i(h + ' is not a valid module', 'error')
              : void (n.status[h] ? f() : setTimeout(o, 4));
          })());
      }
      function f() {
        c.push(layui[h]),
          r.length > 1
            ? y.use(r.slice(1), o, c, s)
            : 'function' == typeof o &&
              (function () {
                return layui.jquery &&
                  'function' == typeof layui.jquery &&
                  'define' !== s
                  ? layui.jquery(function () {
                      o.apply(layui, c);
                    })
                  : void o.apply(layui, c);
              })();
      }
      var y = this,
        d = (n.dir = n.dir ? n.dir : a),
        v = e.getElementsByTagName('head')[0];
      (r = (function () {
        return 'string' == typeof r
          ? [r]
          : 'function' == typeof r
          ? ((o = r), ['all'])
          : r;
      })()),
        t.jQuery &&
          jQuery.fn.on &&
          (y.each(r, function (t, e) {
            'jquery' === e && r.splice(t, 1);
          }),
          (layui.jquery = layui.$ = jQuery));
      var h = r[0],
        m = 0;
      if (
        ((c = c || []),
        (n.host =
          n.host ||
          (d.match(/\/\/([\s\S]+?)\//) || ['//' + location.host + '/'])[0]),
        0 === r.length || (layui['layui.all'] && l[h]))
      )
        return f(), y;
      var g =
        (l[h]
          ? d + 'modules/'
          : /^\{\/\}/.test(y.modules[h])
          ? ''
          : n.base || '') +
        (y.modules[h] || h) +
        '.js';
      if (
        ((g = g.replace(/^\{\/\}/, '')),
        !n.modules[h] && layui[h] && (n.modules[h] = g),
        n.modules[h])
      )
        !(function S() {
          return ++m > (1e3 * n.timeout) / 4
            ? i(h + ' is not a valid module', 'error')
            : void ('string' == typeof n.modules[h] && n.status[h]
                ? f()
                : setTimeout(S, 4));
        })();
      else {
        var b = e.createElement('script');
        (b.async = !0),
          (b.charset = 'utf-8'),
          (b.src =
            g +
            (function () {
              var t =
                n.version === !0
                  ? n.v || new Date().getTime()
                  : n.version || '';
              return t ? '?v=' + t : '';
            })()),
          v.appendChild(b),
          !b.attachEvent ||
          (b.attachEvent.toString &&
            b.attachEvent.toString().indexOf('[native code') < 0) ||
          u
            ? b.addEventListener(
                'load',
                function (t) {
                  p(t, g);
                },
                !1
              )
            : b.attachEvent('onreadystatechange', function (t) {
                p(t, g);
              }),
          (n.modules[h] = g);
      }
      return y;
    }),
    (r.prototype.getStyle = function (e, n) {
      var r = e.currentStyle ? e.currentStyle : t.getComputedStyle(e, null);
      return r[r.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](n);
    }),
    (r.prototype.link = function (t, r, o) {
      var a = this,
        u = e.getElementsByTagName('head')[0],
        l = e.createElement('link');
      'string' == typeof r && (o = r);
      var c = (o || t).replace(/\.|\//g, ''),
        s = (l.id = 'layuicss-' + c),
        p = 'creating',
        f = 0;
      return (
        (l.rel = 'stylesheet'),
        (l.href = t + (n.debug ? '?v=' + new Date().getTime() : '')),
        (l.media = 'all'),
        e.getElementById(s) || u.appendChild(l),
        'function' != typeof r
          ? a
          : ((function y(o) {
              var u = 100,
                l = e.getElementById(s);
              return ++f > (1e3 * n.timeout) / u
                ? i(t + ' timeout')
                : void (1989 === parseInt(a.getStyle(l, 'width'))
                    ? (o === p && l.removeAttribute('lay-status'),
                      l.getAttribute('lay-status') === p
                        ? setTimeout(y, u)
                        : r())
                    : (l.setAttribute('lay-status', p),
                      setTimeout(function () {
                        y(p);
                      }, u)));
            })(),
            a)
      );
    }),
    (r.prototype.addcss = function (t, e, r) {
      return layui.link(n.dir + 'css/' + t, e, r);
    }),
    (n.callback = {}),
    (r.prototype.factory = function (t) {
      if (layui[t])
        return 'function' == typeof n.callback[t] ? n.callback[t] : null;
    }),
    (r.prototype.img = function (t, e, n) {
      var r = new Image();
      return (
        (r.src = t),
        r.complete
          ? e(r)
          : ((r.onload = function () {
              (r.onload = null), 'function' == typeof e && e(r);
            }),
            void (r.onerror = function (t) {
              (r.onerror = null), 'function' == typeof n && n(t);
            }))
      );
    }),
    (r.prototype.config = function (t) {
      t = t || {};
      for (var e in t) n[e] = t[e];
      return this;
    }),
    (r.prototype.modules = (function () {
      var t = {};
      for (var e in l) t[e] = l[e];
      return t;
    })()),
    (r.prototype.extend = function (t) {
      var e = this;
      t = t || {};
      for (var n in t)
        e[n] || e.modules[n]
          ? i(n + ' Module already exists', 'error')
          : (e.modules[n] = t[n]);
      return e;
    }),
    (r.prototype.router = function (t) {
      var e = this,
        t = t || location.hash,
        n = {
          path: [],
          search: {},
          hash: (t.match(/[^#](#.*$)/) || [])[1] || ''
        };
      return /^#\//.test(t)
        ? ((t = t.replace(/^#\//, '')),
          (n.href = '/' + t),
          (t = t.replace(/([^#])(#.*$)/, '$1').split('/') || []),
          e.each(t, function (t, e) {
            /^\w+=/.test(e)
              ? (function () {
                  (e = e.split('=')), (n.search[e[0]] = e[1]);
                })()
              : n.path.push(e);
          }),
          n)
        : n;
    }),
    (r.prototype.url = function (t) {
      var e = this,
        n = {
          pathname: (function () {
            var e = t
              ? (function () {
                  var e = (t.match(/\.[^.]+?\/.+/) || [])[0] || '';
                  return e.replace(/^[^\/]+/, '').replace(/\?.+/, '');
                })()
              : location.pathname;
            return e.replace(/^\//, '').split('/');
          })(),
          search: (function () {
            var n = {},
              r = (
                t
                  ? (function () {
                      var e = (t.match(/\?.+/) || [])[0] || '';
                      return e.replace(/\#.+/, '');
                    })()
                  : location.search
              )
                .replace(/^\?+/, '')
                .split('&');
            return (
              e.each(r, function (t, e) {
                var r = e.indexOf('='),
                  o = (function () {
                    return r < 0
                      ? e.substr(0, e.length)
                      : 0 !== r && e.substr(0, r);
                  })();
                o && (n[o] = r > 0 ? e.substr(r + 1) : null);
              }),
              n
            );
          })(),
          hash: e.router(
            (function () {
              return t ? (t.match(/#.+/) || [])[0] || '/' : location.hash;
            })()
          )
        };
      return n;
    }),
    (r.prototype.data = function (e, n, r) {
      if (
        ((e = e || 'layui'), (r = r || localStorage), t.JSON && t.JSON.parse)
      ) {
        if (null === n) return delete r[e];
        n = 'object' == typeof n ? n : { key: n };
        try {
          var o = JSON.parse(r[e]);
        } catch (a) {
          var o = {};
        }
        return (
          'value' in n && (o[n.key] = n.value),
          n.remove && delete o[n.key],
          (r[e] = JSON.stringify(o)),
          n.key ? o[n.key] : o
        );
      }
    }),
    (r.prototype.sessionData = function (t, e) {
      return this.data(t, e, sessionStorage);
    }),
    (r.prototype.device = function (e) {
      var n = navigator.userAgent.toLowerCase(),
        r = function (t) {
          var e = new RegExp(t + '/([^\\s\\_\\-]+)');
          return (t = (n.match(e) || [])[1]), t || !1;
        },
        o = {
          os: (function () {
            return /windows/.test(n)
              ? 'windows'
              : /linux/.test(n)
              ? 'linux'
              : /iphone|ipod|ipad|ios/.test(n)
              ? 'ios'
              : /mac/.test(n)
              ? 'mac'
              : void 0;
          })(),
          ie: (function () {
            return (
              !!(t.ActiveXObject || 'ActiveXObject' in t) &&
              ((n.match(/msie\s(\d+)/) || [])[1] || '11')
            );
          })(),
          weixin: r('micromessenger')
        };
      return (
        e && !o[e] && (o[e] = r(e)),
        (o.android = /android/.test(n)),
        (o.ios = 'ios' === o.os),
        (o.mobile = !(!o.android && !o.ios)),
        o
      );
    }),
    (r.prototype.hint = function () {
      return { error: i };
    }),
    (r.prototype._typeof = function (t) {
      return null === t
        ? String(t)
        : 'object' == typeof t || 'function' == typeof t
        ? (function () {
            var e = Object.prototype.toString.call(t).match(/\s(.+)\]$/) || [],
              n = 'Function|Array|Date|RegExp|Object|Error|Symbol';
            return (
              (e = e[1] || 'Object'),
              new RegExp('\\b(' + n + ')\\b').test(e)
                ? e.toLowerCase()
                : 'object'
            );
          })()
        : typeof t;
    }),
    (r.prototype._isArray = function (e) {
      var n,
        r = this,
        o = r._typeof(e);
      return (
        !(!e || 'object' != typeof e || e === t) &&
        ((n = 'length' in e && e.length),
        'array' === o ||
          0 === n ||
          ('number' == typeof n && n > 0 && n - 1 in e))
      );
    }),
    (r.prototype.each = function (t, e) {
      var n,
        r = this,
        o = function (t, n) {
          return e.call(n[t], t, n[t]);
        };
      if ('function' != typeof e) return r;
      if (((t = t || []), r._isArray(t)))
        for (n = 0; n < t.length && !o(n, t); n++);
      else for (n in t) if (o(n, t)) break;
      return r;
    }),
    (r.prototype.sort = function (t, e, n) {
      var r = JSON.parse(JSON.stringify(t || []));
      return e
        ? (r.sort(function (t, n) {
            var r = t[e],
              o = n[e],
              a = [!isNaN(r), !isNaN(o)];
            return a[0] && a[1]
              ? r && !o && 0 !== o
                ? 1
                : !r && 0 !== r && o
                ? -1
                : r - o
              : a[0] || a[1]
              ? a[0] || !a[1]
                ? -1
                : !a[0] || a[1]
                ? 1
                : void 0
              : r > o
              ? 1
              : r < o
              ? -1
              : 0;
          }),
          n && r.reverse(),
          r)
        : r;
    }),
    (r.prototype.stope = function (e) {
      e = e || t.event;
      try {
        e.stopPropagation();
      } catch (n) {
        e.cancelBubble = !0;
      }
    });
  var c = 'LAYUI-EVENT-REMOVE';
  (r.prototype.onevent = function (t, e, n) {
    return 'string' != typeof t || 'function' != typeof n
      ? this
      : r.event(t, e, null, n);
  }),
    (r.prototype.event = r.event =
      function (t, e, r, o) {
        var a = this,
          i = null,
          u = (e || '').match(/\((.*)\)$/) || [],
          l = (t + '.' + e).replace(u[0], ''),
          s = u[1] || '',
          p = function (t, e) {
            var n = e && e.call(a, r);
            n === !1 && null === i && (i = !1);
          };
        return r === c
          ? (delete (a.cache.event[l] || {})[s], a)
          : o
          ? ((n.event[l] = n.event[l] || {}), (n.event[l][s] = [o]), this)
          : (layui.each(n.event[l], function (t, e) {
              return '{*}' === s
                ? void layui.each(e, p)
                : ('' === t && layui.each(e, p),
                  void (s && t === s && layui.each(e, p)));
            }),
            i);
      }),
    (r.prototype.on = function (t, e, n) {
      var r = this;
      return r.onevent.call(r, e, t, n);
    }),
    (r.prototype.off = function (t, e) {
      var n = this;
      return n.event.call(n, e, t, c);
    }),
    (t.layui = new r());
})(window);
layui.define(function (a) {
  var i = layui.cache;
  layui.config({ dir: i.dir.replace(/lay\/dest\/$/, '') }),
    a('layui.all', layui.v);
});
!(function (t) {
  'use strict';
  var e = 'lay',
    n = t.document,
    r = function (t) {
      return new o(t);
    },
    o = function (t) {
      for (
        var e = 0,
          r =
            'object' == typeof t
              ? [t]
              : ((this.selector = t), n.querySelectorAll(t || null));
        e < r.length;
        e++
      )
        this.push(r[e]);
    };
  (o.prototype = []),
    (o.prototype.constructor = o),
    (r.extend = function () {
      var t = 1,
        e = arguments,
        n = function (t, e) {
          t = t || ('array' === layui._typeof(e) ? [] : {});
          for (var r in e)
            t[r] = e[r] && e[r].constructor === Object ? n(t[r], e[r]) : e[r];
          return t;
        };
      for (e[0] = 'object' == typeof e[0] ? e[0] : {}; t < e.length; t++)
        'object' == typeof e[t] && n(e[0], e[t]);
      return e[0];
    }),
    (r.v = '1.0.8'),
    (r.ie = (function () {
      var e = navigator.userAgent.toLowerCase();
      return (
        !!(t.ActiveXObject || 'ActiveXObject' in t) &&
        ((e.match(/msie\s(\d+)/) || [])[1] || '11')
      );
    })()),
    (r.layui = layui || {}),
    (r.getPath = layui.cache.dir),
    (r.stope = layui.stope),
    (r.each = function () {
      return layui.each.apply(layui, arguments), this;
    }),
    (r.digit = function (t, e, n) {
      var r = '';
      (t = String(t)), (e = e || 2);
      for (var o = t.length; o < e; o++) r += '0';
      return t < Math.pow(10, e) ? r + (0 | t) : t;
    }),
    (r.elem = function (t, e) {
      var o = n.createElement(t);
      return (
        r.each(e || {}, function (t, e) {
          o.setAttribute(t, e);
        }),
        o
      );
    }),
    (r.hasScrollbar = function () {
      return (
        n.body.scrollHeight > (t.innerHeight || n.documentElement.clientHeight)
      );
    }),
    (r.position = function (e, o, i) {
      if (o) {
        (i = i || {}),
          (e !== n && e !== r('body')[0]) || (i.clickType = 'right');
        var c =
            'right' === i.clickType
              ? (function () {
                  var e = i.e || t.event || {};
                  return {
                    left: e.clientX,
                    top: e.clientY,
                    right: e.clientX,
                    bottom: e.clientY
                  };
                })()
              : e.getBoundingClientRect(),
          u = o.offsetWidth,
          a = o.offsetHeight,
          f = function (t) {
            return (
              (t = t ? 'scrollLeft' : 'scrollTop'),
              n.body[t] | n.documentElement[t]
            );
          },
          s = function (t) {
            return n.documentElement[t ? 'clientWidth' : 'clientHeight'];
          },
          l = 5,
          h = c.left,
          p = c.bottom;
        'center' === i.align
          ? (h -= (u - e.offsetWidth) / 2)
          : 'right' === i.align && (h = h - u + e.offsetWidth),
          h + u + l > s('width') && (h = s('width') - u - l),
          h < l && (h = l),
          p + a + l > s() &&
            (c.top > a + l
              ? (p = c.top - a - 2 * l)
              : 'right' === i.clickType &&
                ((p = s() - a - 2 * l), p < 0 && (p = 0)));
        var y = i.position;
        if (
          (y && (o.style.position = y),
          (o.style.left = h + ('fixed' === y ? 0 : f(1)) + 'px'),
          (o.style.top = p + ('fixed' === y ? 0 : f()) + 'px'),
          !r.hasScrollbar())
        ) {
          var d = o.getBoundingClientRect();
          !i.SYSTEM_RELOAD &&
            d.bottom + l > s() &&
            ((i.SYSTEM_RELOAD = !0),
            setTimeout(function () {
              r.position(e, o, i);
            }, 50));
        }
      }
    }),
    (r.options = function (t, e) {
      var n = r(t),
        o = e || 'lay-options';
      try {
        return new Function('return ' + (n.attr(o) || '{}'))();
      } catch (i) {
        return hint.error('parseerror\uff1a' + i, 'error'), {};
      }
    }),
    (r.isTopElem = function (t) {
      var e = [n, r('body')[0]],
        o = !1;
      return (
        r.each(e, function (e, n) {
          if (n === t) return (o = !0);
        }),
        o
      );
    }),
    (o.addStr = function (t, e) {
      return (
        (t = t.replace(/\s+/, ' ')),
        (e = e.replace(/\s+/, ' ').split(' ')),
        r.each(e, function (e, n) {
          new RegExp('\\b' + n + '\\b').test(t) || (t = t + ' ' + n);
        }),
        t.replace(/^\s|\s$/, '')
      );
    }),
    (o.removeStr = function (t, e) {
      return (
        (t = t.replace(/\s+/, ' ')),
        (e = e.replace(/\s+/, ' ').split(' ')),
        r.each(e, function (e, n) {
          var r = new RegExp('\\b' + n + '\\b');
          r.test(t) && (t = t.replace(r, ''));
        }),
        t.replace(/\s+/, ' ').replace(/^\s|\s$/, '')
      );
    }),
    (o.prototype.find = function (t) {
      var e = this,
        n = 0,
        o = [],
        i = 'object' == typeof t;
      return (
        this.each(function (r, c) {
          for (
            var u = i ? c.contains(t) : c.querySelectorAll(t || null);
            n < u.length;
            n++
          )
            o.push(u[n]);
          e.shift();
        }),
        i || (e.selector = (e.selector ? e.selector + ' ' : '') + t),
        r.each(o, function (t, n) {
          e.push(n);
        }),
        e
      );
    }),
    (o.prototype.each = function (t) {
      return r.each.call(this, this, t);
    }),
    (o.prototype.addClass = function (t, e) {
      return this.each(function (n, r) {
        r.className = o[e ? 'removeStr' : 'addStr'](r.className, t);
      });
    }),
    (o.prototype.removeClass = function (t) {
      return this.addClass(t, !0);
    }),
    (o.prototype.hasClass = function (t) {
      var e = !1;
      return (
        this.each(function (n, r) {
          new RegExp('\\b' + t + '\\b').test(r.className) && (e = !0);
        }),
        e
      );
    }),
    (o.prototype.css = function (t, e) {
      var n = this,
        o = function (t) {
          return isNaN(t) ? t : t + 'px';
        };
      return 'string' == typeof t && void 0 === e
        ? (function () {
            if (n.length > 0) return n[0].style[t];
          })()
        : n.each(function (n, i) {
            'object' == typeof t
              ? r.each(t, function (t, e) {
                  i.style[t] = o(e);
                })
              : (i.style[t] = o(e));
          });
    }),
    (o.prototype.width = function (t) {
      var e = this;
      return void 0 === t
        ? (function () {
            if (e.length > 0) return e[0].offsetWidth;
          })()
        : e.each(function (n, r) {
            e.css('width', t);
          });
    }),
    (o.prototype.height = function (t) {
      var e = this;
      return void 0 === t
        ? (function () {
            if (e.length > 0) return e[0].offsetHeight;
          })()
        : e.each(function (n, r) {
            e.css('height', t);
          });
    }),
    (o.prototype.attr = function (t, e) {
      var n = this;
      return void 0 === e
        ? (function () {
            if (n.length > 0) return n[0].getAttribute(t);
          })()
        : n.each(function (n, r) {
            r.setAttribute(t, e);
          });
    }),
    (o.prototype.removeAttr = function (t) {
      return this.each(function (e, n) {
        n.removeAttribute(t);
      });
    }),
    (o.prototype.html = function (t) {
      var e = this;
      return void 0 === t
        ? (function () {
            if (e.length > 0) return e[0].innerHTML;
          })()
        : this.each(function (e, n) {
            n.innerHTML = t;
          });
    }),
    (o.prototype.val = function (t) {
      var e = this;
      return void 0 === t
        ? (function () {
            if (e.length > 0) return e[0].value;
          })()
        : this.each(function (e, n) {
            n.value = t;
          });
    }),
    (o.prototype.append = function (t) {
      return this.each(function (e, n) {
        'object' == typeof t
          ? n.appendChild(t)
          : (n.innerHTML = n.innerHTML + t);
      });
    }),
    (o.prototype.remove = function (t) {
      return this.each(function (e, n) {
        t ? n.removeChild(t) : n.parentNode.removeChild(n);
      });
    }),
    (o.prototype.on = function (t, e) {
      return this.each(function (n, r) {
        r.attachEvent
          ? r.attachEvent('on' + t, function (t) {
              (t.target = t.srcElement), e.call(r, t);
            })
          : r.addEventListener(t, e, !1);
      });
    }),
    (o.prototype.off = function (t, e) {
      return this.each(function (n, r) {
        r.detachEvent
          ? r.detachEvent('on' + t, e)
          : r.removeEventListener(t, e, !1);
      });
    }),
    (t.lay = r),
    t.layui &&
      layui.define &&
      layui.define(function (t) {
        t(e, r);
      });
})(window, window.document);
layui.define(function (e) {
  'use strict';
  var r = { open: '{{', close: '}}' },
    c = {
      exp: function (e) {
        return new RegExp(e, 'g');
      },
      query: function (e, c, t) {
        var o = ['#([\\s\\S])+?', '([^{#}])*?'][e || 0];
        return n((c || '') + r.open + o + r.close + (t || ''));
      },
      escape: function (e) {
        return String(e || '')
          .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&#39;')
          .replace(/"/g, '&quot;');
      },
      error: function (e, r) {
        var c = 'Laytpl Error: ';
        return (
          'object' == typeof console && console.error(c + e + '\n' + (r || '')),
          c + e
        );
      }
    },
    n = c.exp,
    t = function (e) {
      this.tpl = e;
    };
  (t.pt = t.prototype),
    (window.errors = 0),
    (t.pt.parse = function (e, t) {
      var o = this,
        p = e,
        a = n('^' + r.open + '#', ''),
        l = n(r.close + '$', '');
      (e = e
        .replace(/\s+|\r|\t|\n/g, ' ')
        .replace(n(r.open + '#'), r.open + '# ')
        .replace(n(r.close + '}'), '} ' + r.close)
        .replace(/\\/g, '\\\\')
        .replace(n(r.open + '!(.+?)!' + r.close), function (e) {
          return (e = e
            .replace(n('^' + r.open + '!'), '')
            .replace(n('!' + r.close), '')
            .replace(n(r.open + '|' + r.close), function (e) {
              return e.replace(/(.)/g, '\\$1');
            }));
        })
        .replace(/(?="|')/g, '\\')
        .replace(c.query(), function (e) {
          return (
            (e = e.replace(a, '').replace(l, '')),
            '";' + e.replace(/\\(.)/g, '$1') + ';view+="'
          );
        })
        .replace(c.query(1), function (e) {
          var c = '"+(';
          return e.replace(/\s/g, '') === r.open + r.close
            ? ''
            : ((e = e.replace(n(r.open + '|' + r.close), '')),
              /^=/.test(e) && ((e = e.replace(/^=/, '')), (c = '"+_escape_(')),
              c + e.replace(/\\(.)/g, '$1') + ')+"');
        })),
        (e = '"use strict";var view = "' + e + '";return view;');
      try {
        return (o.cache = e = new Function('d, _escape_', e)), e(t, c.escape);
      } catch (u) {
        return delete o.cache, c.error(u, p);
      }
    }),
    (t.pt.render = function (e, r) {
      var n,
        t = this;
      return e
        ? ((n = t.cache ? t.cache(e, c.escape) : t.parse(t.tpl, e)),
          r ? void r(n) : n)
        : c.error('no data');
    });
  var o = function (e) {
    return 'string' != typeof e ? c.error('Template not found') : new t(e);
  };
  (o.config = function (e) {
    e = e || {};
    for (var c in e) r[c] = e[c];
  }),
    (o.v = '1.2.0'),
    e('laytpl', o);
});
layui.define(function (e) {
  'use strict';
  var a = document,
    t = 'getElementById',
    n = 'getElementsByTagName',
    i = 'laypage',
    r = 'layui-disabled',
    u = function (e) {
      var a = this;
      (a.config = e || {}), (a.config.index = ++s.index), a.render(!0);
    };
  (u.prototype.type = function () {
    var e = this.config;
    if ('object' == typeof e.elem) return void 0 === e.elem.length ? 2 : 3;
  }),
    (u.prototype.view = function () {
      var e = this,
        a = e.config,
        t = (a.groups = 'groups' in a ? 0 | a.groups : 5);
      (a.layout =
        'object' == typeof a.layout ? a.layout : ['prev', 'page', 'next']),
        (a.count = 0 | a.count),
        (a.curr = 0 | a.curr || 1),
        (a.limits =
          'object' == typeof a.limits ? a.limits : [10, 20, 30, 40, 50]),
        (a.limit = 0 | a.limit || 10),
        (a.pages = Math.ceil(a.count / a.limit) || 1),
        a.curr > a.pages && (a.curr = a.pages),
        t < 0 ? (t = 1) : t > a.pages && (t = a.pages),
        (a.prev = 'prev' in a ? a.prev : '&#x4E0A;&#x4E00;&#x9875;'),
        (a.next = 'next' in a ? a.next : '&#x4E0B;&#x4E00;&#x9875;');
      var n =
          a.pages > t
            ? Math.ceil((a.curr + (t > 1 ? 1 : 0)) / (t > 0 ? t : 1))
            : 1,
        i = {
          prev: (function () {
            return a.prev
              ? '<a href="javascript:;" class="layui-laypage-prev' +
                  (1 == a.curr ? ' ' + r : '') +
                  '" data-page="' +
                  (a.curr - 1) +
                  '">' +
                  a.prev +
                  '</a>'
              : '';
          })(),
          page: (function () {
            var e = [];
            if (a.count < 1) return '';
            n > 1 &&
              a.first !== !1 &&
              0 !== t &&
              e.push(
                '<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' +
                  (a.first || 1) +
                  '</a>'
              );
            var i = Math.floor((t - 1) / 2),
              r = n > 1 ? a.curr - i : 1,
              u =
                n > 1
                  ? (function () {
                      var e = a.curr + (t - i - 1);
                      return e > a.pages ? a.pages : e;
                    })()
                  : t;
            for (
              u - r < t - 1 && (r = u - t + 1),
                a.first !== !1 &&
                  r > 2 &&
                  e.push('<span class="layui-laypage-spr">&#x2026;</span>');
              r <= u;
              r++
            )
              r === a.curr
                ? e.push(
                    '<span class="layui-laypage-curr"><em class="layui-laypage-em" ' +
                      (/^#/.test(a.theme)
                        ? 'style="background-color:' + a.theme + ';"'
                        : '') +
                      '></em><em>' +
                      r +
                      '</em></span>'
                  )
                : e.push(
                    '<a href="javascript:;" data-page="' + r + '">' + r + '</a>'
                  );
            return (
              a.pages > t &&
                a.pages > u &&
                a.last !== !1 &&
                (u + 1 < a.pages &&
                  e.push('<span class="layui-laypage-spr">&#x2026;</span>'),
                0 !== t &&
                  e.push(
                    '<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' +
                      a.pages +
                      '">' +
                      (a.last || a.pages) +
                      '</a>'
                  )),
              e.join('')
            );
          })(),
          next: (function () {
            return a.next
              ? '<a href="javascript:;" class="layui-laypage-next' +
                  (a.curr == a.pages ? ' ' + r : '') +
                  '" data-page="' +
                  (a.curr + 1) +
                  '">' +
                  a.next +
                  '</a>'
              : '';
          })(),
          count:
            '<span class="layui-laypage-count">\u5171 ' +
            a.count +
            ' \u6761</span>',
          limit: (function () {
            var e = ['<span class="layui-laypage-limits"><select lay-ignore>'];
            return (
              layui.each(a.limits, function (t, n) {
                e.push(
                  '<option value="' +
                    n +
                    '"' +
                    (n === a.limit ? 'selected' : '') +
                    '>' +
                    n +
                    ' \u6761/\u9875</option>'
                );
              }),
              e.join('') + '</select></span>'
            );
          })(),
          refresh: [
            '<a href="javascript:;" data-page="' +
              a.curr +
              '" class="layui-laypage-refresh">',
            '<i class="layui-icon layui-icon-refresh"></i>',
            '</a>'
          ].join(''),
          skip: (function () {
            return [
              '<span class="layui-laypage-skip">&#x5230;&#x7B2C;',
              '<input type="text" min="1" value="' +
                a.curr +
                '" class="layui-input">',
              '&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>',
              '</span>'
            ].join('');
          })()
        };
      return [
        '<div class="layui-box layui-laypage layui-laypage-' +
          (a.theme ? (/^#/.test(a.theme) ? 'molv' : a.theme) : 'default') +
          '" id="layui-laypage-' +
          a.index +
          '">',
        (function () {
          var e = [];
          return (
            layui.each(a.layout, function (a, t) {
              i[t] && e.push(i[t]);
            }),
            e.join('')
          );
        })(),
        '</div>'
      ].join('');
    }),
    (u.prototype.jump = function (e, a) {
      if (e) {
        var t = this,
          i = t.config,
          r = e.children,
          u = e[n]('button')[0],
          l = e[n]('input')[0],
          p = e[n]('select')[0],
          c = function () {
            var e = 0 | l.value.replace(/\s|\D/g, '');
            e && ((i.curr = e), t.render());
          };
        if (a) return c();
        for (var o = 0, y = r.length; o < y; o++)
          'a' === r[o].nodeName.toLowerCase() &&
            s.on(r[o], 'click', function () {
              var e = 0 | this.getAttribute('data-page');
              e < 1 || e > i.pages || ((i.curr = e), t.render());
            });
        p &&
          s.on(p, 'change', function () {
            var e = this.value;
            i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)),
              (i.limit = e),
              t.render();
          }),
          u &&
            s.on(u, 'click', function () {
              c();
            });
      }
    }),
    (u.prototype.skip = function (e) {
      if (e) {
        var a = this,
          t = e[n]('input')[0];
        t &&
          s.on(t, 'keyup', function (t) {
            var n = this.value,
              i = t.keyCode;
            /^(37|38|39|40)$/.test(i) ||
              (/\D/.test(n) && (this.value = n.replace(/\D/, '')),
              13 === i && a.jump(e, !0));
          });
      }
    }),
    (u.prototype.render = function (e) {
      var n = this,
        i = n.config,
        r = n.type(),
        u = n.view();
      2 === r
        ? i.elem && (i.elem.innerHTML = u)
        : 3 === r
        ? i.elem.html(u)
        : a[t](i.elem) && (a[t](i.elem).innerHTML = u),
        i.jump && i.jump(i, e);
      var s = a[t]('layui-laypage-' + i.index);
      n.jump(s),
        i.hash && !e && (location.hash = '!' + i.hash + '=' + i.curr),
        n.skip(s);
    });
  var s = {
    render: function (e) {
      var a = new u(e);
      return a.index;
    },
    index: layui.laypage ? layui.laypage.index + 1e4 : 0,
    on: function (e, a, t) {
      return (
        e.attachEvent
          ? e.attachEvent('on' + a, function (a) {
              (a.target = a.srcElement), t.call(e, a);
            })
          : e.addEventListener(a, t, !1),
        this
      );
    }
  };
  e(i, s);
});
!(function (e, t) {
  'use strict';
  var a = e.layui && layui.define,
    n = {
      getPath: e.lay && lay.getPath ? lay.getPath : '',
      link: function (t, a, n) {
        l.path && e.lay && lay.layui && lay.layui.link(l.path + t, a, n);
      }
    },
    i = e.LAYUI_GLOBAL || {},
    l = {
      v: '5.3.1',
      config: {},
      index: e.laydate && e.laydate.v ? 1e5 : 0,
      path: i.laydate_dir || n.getPath,
      set: function (e) {
        var t = this;
        return (t.config = lay.extend({}, t.config, e)), t;
      },
      ready: function (e) {
        var t = 'laydate',
          i = '',
          r =
            (a ? 'modules/laydate/' : 'theme/') +
            'default/laydate.css?v=' +
            l.v +
            i;
        return a ? layui.addcss(r, e, t) : n.link(r, e, t), this;
      }
    },
    r = function () {
      var e = this,
        t = e.config,
        a = t.id;
      return (
        (r.that[a] = e),
        {
          hint: function (t) {
            e.hint.call(e, t);
          },
          config: e.config
        }
      );
    },
    o = 'laydate',
    s = '.layui-laydate',
    y = 'layui-this',
    d = 'laydate-disabled',
    m = [100, 2e5],
    c = 'layui-laydate-static',
    u = 'layui-laydate-list',
    h = 'layui-laydate-hint',
    f = 'layui-laydate-footer',
    p = '.laydate-btns-confirm',
    g = 'laydate-time-text',
    v = 'laydate-btns-time',
    T = 'layui-laydate-preview',
    D = function (e) {
      var t = this;
      (t.index = ++l.index),
        (t.config = lay.extend({}, t.config, l.config, e)),
        (e = t.config),
        (e.id = 'id' in e ? e.id : t.index),
        l.ready(function () {
          t.init();
        });
    },
    w = 'yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s';
  (r.formatArr = function (e) {
    return (e || '').match(new RegExp(w + '|.', 'g')) || [];
  }),
    (D.isLeapYear = function (e) {
      return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
    }),
    (D.prototype.config = {
      type: 'date',
      range: !1,
      format: 'yyyy-MM-dd',
      value: null,
      isInitValue: !0,
      min: '1900-1-1',
      max: '2099-12-31',
      trigger: 'click',
      show: !1,
      showBottom: !0,
      isPreview: !0,
      btns: ['clear', 'now', 'confirm'],
      lang: 'cn',
      theme: 'default',
      position: null,
      calendar: !1,
      mark: {},
      zIndex: null,
      done: null,
      change: null
    }),
    (D.prototype.lang = function () {
      var e = this,
        t = e.config,
        a = {
          cn: {
            weeks: [
              '\u65e5',
              '\u4e00',
              '\u4e8c',
              '\u4e09',
              '\u56db',
              '\u4e94',
              '\u516d'
            ],
            time: ['\u65f6', '\u5206', '\u79d2'],
            timeTips: '\u9009\u62e9\u65f6\u95f4',
            startTime: '\u5f00\u59cb\u65f6\u95f4',
            endTime: '\u7ed3\u675f\u65f6\u95f4',
            dateTips: '\u8fd4\u56de\u65e5\u671f',
            month: [
              '\u4e00',
              '\u4e8c',
              '\u4e09',
              '\u56db',
              '\u4e94',
              '\u516d',
              '\u4e03',
              '\u516b',
              '\u4e5d',
              '\u5341',
              '\u5341\u4e00',
              '\u5341\u4e8c'
            ],
            tools: {
              confirm: '\u786e\u5b9a',
              clear: '\u6e05\u7a7a',
              now: '\u73b0\u5728'
            },
            timeout:
              '\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9',
            invalidDate:
              '\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185',
            formatError: [
              '\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>',
              '<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e'
            ],
            preview: '\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c'
          },
          en: {
            weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            time: ['Hours', 'Minutes', 'Seconds'],
            timeTips: 'Select Time',
            startTime: 'Start Time',
            endTime: 'End Time',
            dateTips: 'Select Date',
            month: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
            tools: { confirm: 'Confirm', clear: 'Clear', now: 'Now' },
            timeout:
              'End time cannot be less than start Time<br>Please re-select',
            invalidDate: 'Invalid date',
            formatError: [
              'The date format error<br>Must be followed\uff1a<br>',
              '<br>It has been reset'
            ],
            preview: 'The selected result'
          }
        };
      return a[t.lang] || a.cn;
    }),
    (D.prototype.init = function () {
      var t = this,
        a = t.config,
        n = 'static' === a.position,
        i = {
          year: 'yyyy',
          month: 'yyyy-MM',
          date: 'yyyy-MM-dd',
          time: 'HH:mm:ss',
          datetime: 'yyyy-MM-dd HH:mm:ss'
        };
      (a.elem = lay(a.elem)),
        (a.eventElem = lay(a.eventElem)),
        a.elem[0] &&
          ((t.rangeStr = a.range
            ? 'string' == typeof a.range
              ? a.range
              : '-'
            : ''),
          'array' === layui._typeof(a.range) &&
            (t.rangeElem = [lay(a.range[0]), lay(a.range[1])]),
          i[a.type] ||
            (e.console &&
              console.error &&
              console.error(
                "laydate type error:'" + a.type + "' is not supported"
              ),
            (a.type = 'date')),
          a.format === i.date && (a.format = i[a.type] || i.date),
          (t.format = r.formatArr(a.format)),
          (t.EXP_IF = ''),
          (t.EXP_SPLIT = ''),
          lay.each(t.format, function (e, a) {
            var n = new RegExp(w).test(a)
              ? '\\d{' +
                (function () {
                  return new RegExp(w).test(
                    t.format[0 === e ? e + 1 : e - 1] || ''
                  )
                    ? /^yyyy|y$/.test(a)
                      ? 4
                      : a.length
                    : /^yyyy$/.test(a)
                    ? '1,4'
                    : /^y$/.test(a)
                    ? '1,308'
                    : '1,2';
                })() +
                '}'
              : '\\' + a;
            (t.EXP_IF = t.EXP_IF + n),
              (t.EXP_SPLIT = t.EXP_SPLIT + '(' + n + ')');
          }),
          (t.EXP_IF_ONE = new RegExp('^' + t.EXP_IF + '$')),
          (t.EXP_IF = new RegExp(
            '^' +
              (a.range
                ? t.EXP_IF + '\\s\\' + t.rangeStr + '\\s' + t.EXP_IF
                : t.EXP_IF) +
              '$'
          )),
          (t.EXP_SPLIT = new RegExp('^' + t.EXP_SPLIT + '$', '')),
          t.isInput(a.elem[0]) ||
            ('focus' === a.trigger && (a.trigger = 'click')),
          a.elem.attr('lay-key') ||
            (a.elem.attr('lay-key', t.index),
            a.eventElem.attr('lay-key', t.index)),
          (a.mark = lay.extend(
            {},
            a.calendar && 'cn' === a.lang
              ? {
                  '0-1-1': '\u5143\u65e6',
                  '0-2-14': '\u60c5\u4eba',
                  '0-3-8': '\u5987\u5973',
                  '0-3-12': '\u690d\u6811',
                  '0-4-1': '\u611a\u4eba',
                  '0-5-1': '\u52b3\u52a8',
                  '0-5-4': '\u9752\u5e74',
                  '0-6-1': '\u513f\u7ae5',
                  '0-9-10': '\u6559\u5e08',
                  '0-9-18': '\u56fd\u803b',
                  '0-10-1': '\u56fd\u5e86',
                  '0-12-25': '\u5723\u8bde'
                }
              : {},
            a.mark
          )),
          lay.each(['min', 'max'], function (e, t) {
            var n = [],
              i = [];
            if ('number' == typeof a[t]) {
              var l = a[t],
                r = new Date().getTime(),
                o = 864e5,
                s = new Date(l ? (l < o ? r + l * o : l) : r);
              (n = [s.getFullYear(), s.getMonth() + 1, s.getDate()]),
                l < o || (i = [s.getHours(), s.getMinutes(), s.getSeconds()]);
            } else (n = (a[t].match(/\d+-\d+-\d+/) || [''])[0].split('-')), (i = (a[t].match(/\d+:\d+:\d+/) || [''])[0].split(':'));
            a[t] = {
              year: 0 | n[0] || new Date().getFullYear(),
              month: n[1] ? (0 | n[1]) - 1 : new Date().getMonth(),
              date: 0 | n[2] || new Date().getDate(),
              hours: 0 | i[0],
              minutes: 0 | i[1],
              seconds: 0 | i[2]
            };
          }),
          (t.elemID = 'layui-laydate' + a.elem.attr('lay-key')),
          (a.show || n) && t.render(),
          n || t.events(),
          a.value &&
            a.isInitValue &&
            ('date' === layui._typeof(a.value)
              ? t.setValue(t.parse(0, t.systemDate(a.value)))
              : t.setValue(a.value)));
    }),
    (D.prototype.render = function () {
      var e = this,
        a = e.config,
        n = e.lang(),
        i = 'static' === a.position,
        r = (e.elem = lay.elem('div', {
          id: e.elemID,
          class: [
            'layui-laydate',
            a.range ? ' layui-laydate-range' : '',
            i ? ' ' + c : '',
            a.theme && 'default' !== a.theme && !/^#/.test(a.theme)
              ? ' laydate-theme-' + a.theme
              : ''
          ].join('')
        })),
        o = (e.elemMain = []),
        s = (e.elemHeader = []),
        y = (e.elemCont = []),
        d = (e.table = []),
        m = (e.footer = lay.elem('div', { class: f }));
      if (
        (a.zIndex && (r.style.zIndex = a.zIndex),
        lay.each(new Array(2), function (e) {
          if (!a.range && e > 0) return !0;
          var t = lay.elem('div', { class: 'layui-laydate-header' }),
            i = [
              (function () {
                var e = lay.elem('i', {
                  class: 'layui-icon laydate-icon laydate-prev-y'
                });
                return (e.innerHTML = '&#xe65a;'), e;
              })(),
              (function () {
                var e = lay.elem('i', {
                  class: 'layui-icon laydate-icon laydate-prev-m'
                });
                return (e.innerHTML = '&#xe603;'), e;
              })(),
              (function () {
                var e = lay.elem('div', { class: 'laydate-set-ym' }),
                  t = lay.elem('span'),
                  a = lay.elem('span');
                return e.appendChild(t), e.appendChild(a), e;
              })(),
              (function () {
                var e = lay.elem('i', {
                  class: 'layui-icon laydate-icon laydate-next-m'
                });
                return (e.innerHTML = '&#xe602;'), e;
              })(),
              (function () {
                var e = lay.elem('i', {
                  class: 'layui-icon laydate-icon laydate-next-y'
                });
                return (e.innerHTML = '&#xe65b;'), e;
              })()
            ],
            l = lay.elem('div', { class: 'layui-laydate-content' }),
            r = lay.elem('table'),
            m = lay.elem('thead'),
            c = lay.elem('tr');
          lay.each(i, function (e, a) {
            t.appendChild(a);
          }),
            m.appendChild(c),
            lay.each(new Array(6), function (e) {
              var t = r.insertRow(0);
              lay.each(new Array(7), function (a) {
                if (0 === e) {
                  var i = lay.elem('th');
                  (i.innerHTML = n.weeks[a]), c.appendChild(i);
                }
                t.insertCell(a);
              });
            }),
            r.insertBefore(m, r.children[0]),
            l.appendChild(r),
            (o[e] = lay.elem('div', {
              class: 'layui-laydate-main laydate-main-list-' + e
            })),
            o[e].appendChild(t),
            o[e].appendChild(l),
            s.push(i),
            y.push(l),
            d.push(r);
        }),
        lay(m).html(
          (function () {
            var e = [],
              t = [];
            return (
              'datetime' === a.type &&
                e.push(
                  '<span lay-type="datetime" class="' +
                    v +
                    '">' +
                    n.timeTips +
                    '</span>'
                ),
              (a.range || 'datetime' !== a.type) &&
                e.push(
                  '<span class="' + T + '" title="' + n.preview + '"></span>'
                ),
              lay.each(a.btns, function (e, l) {
                var r = n.tools[l] || 'btn';
                (a.range && 'now' === l) ||
                  (i &&
                    'clear' === l &&
                    (r = 'cn' === a.lang ? '\u91cd\u7f6e' : 'Reset'),
                  t.push(
                    '<span lay-type="' +
                      l +
                      '" class="laydate-btns-' +
                      l +
                      '">' +
                      r +
                      '</span>'
                  ));
              }),
              e.push(
                '<div class="laydate-footer-btns">' + t.join('') + '</div>'
              ),
              e.join('')
            );
          })()
        ),
        lay.each(o, function (e, t) {
          r.appendChild(t);
        }),
        a.showBottom && r.appendChild(m),
        /^#/.test(a.theme))
      ) {
        var u = lay.elem('style'),
          h = [
            '#{{id}} .layui-laydate-header{background-color:{{theme}};}',
            '#{{id}} .layui-this{background-color:{{theme}} !important;}'
          ]
            .join('')
            .replace(/{{id}}/g, e.elemID)
            .replace(/{{theme}}/g, a.theme);
        'styleSheet' in u
          ? (u.setAttribute('type', 'text/css'), (u.styleSheet.cssText = h))
          : (u.innerHTML = h),
          lay(r).addClass('laydate-theme-molv'),
          r.appendChild(u);
      }
      (l.thisId = a.id),
        e.remove(D.thisElemDate),
        i ? a.elem.append(r) : (t.body.appendChild(r), e.position()),
        e.checkDate().calendar(null, 0, 'init'),
        e.changeEvent(),
        (D.thisElemDate = e.elemID),
        'function' == typeof a.ready &&
          a.ready(lay.extend({}, a.dateTime, { month: a.dateTime.month + 1 })),
        e.preview();
    }),
    (D.prototype.remove = function (e) {
      var t = this,
        a = (t.config, lay('#' + (e || t.elemID)));
      return a[0]
        ? (a.hasClass(c) ||
            t.checkDate(function () {
              a.remove();
            }),
          t)
        : t;
    }),
    (D.prototype.position = function () {
      var e = this,
        t = e.config;
      return (
        lay.position(e.bindElem || t.elem[0], e.elem, { position: t.position }),
        e
      );
    }),
    (D.prototype.hint = function (e) {
      var t = this,
        a = (t.config, lay.elem('div', { class: h }));
      t.elem &&
        ((a.innerHTML = e || ''),
        lay(t.elem)
          .find('.' + h)
          .remove(),
        t.elem.appendChild(a),
        clearTimeout(t.hinTimer),
        (t.hinTimer = setTimeout(function () {
          lay(t.elem)
            .find('.' + h)
            .remove();
        }, 3e3)));
    }),
    (D.prototype.getAsYM = function (e, t, a) {
      return (
        a ? t-- : t++,
        t < 0 && ((t = 11), e--),
        t > 11 && ((t = 0), e++),
        [e, t]
      );
    }),
    (D.prototype.systemDate = function (e) {
      var t = e || new Date();
      return {
        year: t.getFullYear(),
        month: t.getMonth(),
        date: t.getDate(),
        hours: e ? e.getHours() : 0,
        minutes: e ? e.getMinutes() : 0,
        seconds: e ? e.getSeconds() : 0
      };
    }),
    (D.prototype.checkDate = function (e) {
      var t,
        a,
        n = this,
        i = (new Date(), n.config),
        r = n.lang(),
        o = (i.dateTime = i.dateTime || n.systemDate()),
        s = n.bindElem || i.elem[0],
        y =
          (n.isInput(s) ? 'val' : 'html',
          (function () {
            if (n.rangeElem) {
              var e = [n.rangeElem[0].val(), n.rangeElem[1].val()];
              if (e[0] && e[1]) return e.join(' ' + n.rangeStr + ' ');
            }
            return n.isInput(s)
              ? s.value
              : 'static' === i.position
              ? ''
              : lay(s).attr('lay-date');
          })()),
        d = function (e) {
          e.year > m[1] && ((e.year = m[1]), (a = !0)),
            e.month > 11 && ((e.month = 11), (a = !0)),
            e.hours > 23 && ((e.hours = 0), (a = !0)),
            e.minutes > 59 && ((e.minutes = 0), e.hours++, (a = !0)),
            e.seconds > 59 && ((e.seconds = 0), e.minutes++, (a = !0)),
            (t = l.getEndDate(e.month + 1, e.year)),
            e.date > t && ((e.date = t), (a = !0));
        },
        c = function (e, t, l) {
          var r = ['startTime', 'endTime'];
          (t = (t.match(n.EXP_SPLIT) || []).slice(1)),
            (l = l || 0),
            i.range && (n[r[l]] = n[r[l]] || {}),
            lay.each(n.format, function (o, s) {
              var y = parseFloat(t[o]);
              t[o].length < s.length && (a = !0),
                /yyyy|y/.test(s)
                  ? (y < m[0] && ((y = m[0]), (a = !0)), (e.year = y))
                  : /MM|M/.test(s)
                  ? (y < 1 && ((y = 1), (a = !0)), (e.month = y - 1))
                  : /dd|d/.test(s)
                  ? (y < 1 && ((y = 1), (a = !0)), (e.date = y))
                  : /HH|H/.test(s)
                  ? (y < 1 && ((y = 0), (a = !0)),
                    (e.hours = y),
                    i.range && (n[r[l]].hours = y))
                  : /mm|m/.test(s)
                  ? (y < 1 && ((y = 0), (a = !0)),
                    (e.minutes = y),
                    i.range && (n[r[l]].minutes = y))
                  : /ss|s/.test(s) &&
                    (y < 1 && ((y = 0), (a = !0)),
                    (e.seconds = y),
                    i.range && (n[r[l]].seconds = y));
            }),
            d(e);
        };
      if ('limit' === e) return d(o), n;
      (y = y || i.value),
        'string' == typeof y &&
          (y = y.replace(/\s+/g, ' ').replace(/^\s|\s$/g, ''));
      var u = function () {
        i.range &&
          (n.endDate =
            n.endDate ||
            lay.extend(
              {},
              i.dateTime,
              (function () {
                var e = {},
                  t = i.dateTime,
                  a = n.getAsYM(t.year, t.month);
                return (
                  'year' === i.type
                    ? (e.year = t.year + 1)
                    : 'time' !== i.type && ((e.year = a[0]), (e.month = a[1])),
                  ('datetime' !== i.type && 'time' !== i.type) ||
                    ((e.hours = 23), (e.minutes = e.seconds = 59)),
                  e
                );
              })()
            ));
      };
      u(),
        'string' == typeof y && y
          ? n.EXP_IF.test(y)
            ? i.range
              ? ((y = y.split(' ' + n.rangeStr + ' ')),
                lay.each([i.dateTime, n.endDate], function (e, t) {
                  c(t, y[e], e);
                }))
              : c(o, y)
            : (n.hint(
                r.formatError[0] +
                  (i.range
                    ? i.format + ' ' + n.rangeStr + ' ' + i.format
                    : i.format) +
                  r.formatError[1]
              ),
              (a = !0))
          : y && 'date' === layui._typeof(y)
          ? (i.dateTime = n.systemDate(y))
          : ((i.dateTime = n.systemDate()),
            delete n.startTime,
            delete n.endDate,
            u(),
            delete n.endTime),
        (function () {
          if (n.rangeElem) {
            var e = [n.rangeElem[0].val(), n.rangeElem[1].val()],
              t = [i.dateTime, n.endDate];
            lay.each(e, function (e, a) {
              n.EXP_IF_ONE.test(a) && c(t[e], a, e);
            });
          }
        })(),
        d(o),
        i.range && d(n.endDate),
        a &&
          y &&
          n.setValue(i.range ? (n.endDate ? n.parse() : '') : n.parse());
      var h = function (e) {
        return n.newDate(e).getTime();
      };
      return (
        (h(o) > h(i.max) || h(o) < h(i.min)) &&
          (o = i.dateTime = lay.extend({}, i.min)),
        i.range &&
          (h(n.endDate) < h(i.min) || h(n.endDate) > h(i.max)) &&
          (n.endDate = lay.extend({}, i.max)),
        e && e(),
        n
      );
    }),
    (D.prototype.mark = function (e, t) {
      var a,
        n = this,
        i = n.config;
      return (
        lay.each(i.mark, function (e, n) {
          var i = e.split('-');
          (i[0] != t[0] && 0 != i[0]) ||
            (i[1] != t[1] && 0 != i[1]) ||
            i[2] != t[2] ||
            (a = n || t[2]);
        }),
        a && e.html('<span class="laydate-day-mark">' + a + '</span>'),
        n
      );
    }),
    (D.prototype.limit = function (e, t, a, n) {
      var i,
        l = this,
        r = l.config,
        o = {},
        s = r[a > 41 ? 'endDate' : 'dateTime'],
        y = lay.extend({}, s, t || {});
      return (
        lay.each({ now: y, min: r.min, max: r.max }, function (e, t) {
          o[e] = l
            .newDate(
              lay.extend(
                { year: t.year, month: t.month, date: t.date },
                (function () {
                  var e = {};
                  return (
                    lay.each(n, function (a, n) {
                      e[n] = t[n];
                    }),
                    e
                  );
                })()
              )
            )
            .getTime();
        }),
        (i = o.now < o.min || o.now > o.max),
        e && e[i ? 'addClass' : 'removeClass'](d),
        i
      );
    }),
    (D.prototype.thisDateTime = function (e) {
      var t = this,
        a = t.config;
      return e ? t.endDate : a.dateTime;
    }),
    (D.prototype.calendar = function (e, t, a) {
      var n,
        i,
        r,
        o = this,
        s = o.config,
        t = t ? 1 : 0,
        d = e || o.thisDateTime(t),
        c = new Date(),
        u = o.lang(),
        h = 'date' !== s.type && 'datetime' !== s.type,
        f = lay(o.table[t]).find('td'),
        g = lay(o.elemHeader[t][2]).find('span');
      return (
        d.year < m[0] && ((d.year = m[0]), o.hint(u.invalidDate)),
        d.year > m[1] && ((d.year = m[1]), o.hint(u.invalidDate)),
        o.firstDate || (o.firstDate = lay.extend({}, d)),
        c.setFullYear(d.year, d.month, 1),
        (n = c.getDay()),
        (i = l.getEndDate(d.month || 12, d.year)),
        (r = l.getEndDate(d.month + 1, d.year)),
        lay.each(f, function (e, t) {
          var a = [d.year, d.month],
            l = 0;
          (t = lay(t)),
            t.removeAttr('class'),
            e < n
              ? ((l = i - n + e),
                t.addClass('laydate-day-prev'),
                (a = o.getAsYM(d.year, d.month, 'sub')))
              : e >= n && e < r + n
              ? ((l = e - n), l + 1 === d.date && t.addClass(y))
              : ((l = e - r - n),
                t.addClass('laydate-day-next'),
                (a = o.getAsYM(d.year, d.month))),
            a[1]++,
            (a[2] = l + 1),
            t.attr('lay-ymd', a.join('-')).html(a[2]),
            o
              .mark(t, a)
              .limit(t, { year: a[0], month: a[1] - 1, date: a[2] }, e);
        }),
        lay(g[0]).attr('lay-ym', d.year + '-' + (d.month + 1)),
        lay(g[1]).attr('lay-ym', d.year + '-' + (d.month + 1)),
        'cn' === s.lang
          ? (lay(g[0])
              .attr('lay-type', 'year')
              .html(d.year + ' \u5e74'),
            lay(g[1])
              .attr('lay-type', 'month')
              .html(d.month + 1 + ' \u6708'))
          : (lay(g[0]).attr('lay-type', 'month').html(u.month[d.month]),
            lay(g[1]).attr('lay-type', 'year').html(d.year)),
        h &&
          (s.range
            ? e &&
              ((o.listYM = [
                [s.dateTime.year, s.dateTime.month + 1],
                [o.endDate.year, o.endDate.month + 1]
              ]),
              o.list(s.type, 0).list(s.type, 1),
              'time' === s.type
                ? o.setBtnStatus(
                    '\u65f6\u95f4',
                    lay.extend({}, o.systemDate(), o.startTime),
                    lay.extend({}, o.systemDate(), o.endTime)
                  )
                : o.setBtnStatus(!0))
            : ((o.listYM = [[d.year, d.month + 1]]), o.list(s.type, 0))),
        s.range && 'init' === a && !e && o.calendar(o.endDate, 1),
        s.range ||
          o.limit(lay(o.footer).find(p), null, 0, [
            'hours',
            'minutes',
            'seconds'
          ]),
        o.setBtnStatus(),
        o
      );
    }),
    (D.prototype.list = function (e, t) {
      var a = this,
        n = a.config,
        i = n.dateTime,
        l = a.lang(),
        r = n.range && 'date' !== n.type && 'datetime' !== n.type,
        o = lay.elem('ul', {
          class:
            u +
            ' ' +
            {
              year: 'laydate-year-list',
              month: 'laydate-month-list',
              time: 'laydate-time-list'
            }[e]
        }),
        s = a.elemHeader[t],
        m = lay(s[2]).find('span'),
        c = a.elemCont[t || 0],
        h = lay(c).find('.' + u)[0],
        f = 'cn' === n.lang,
        T = f ? '\u5e74' : '',
        D = a.listYM[t] || {},
        w = ['hours', 'minutes', 'seconds'],
        x = ['startTime', 'endTime'][t];
      if ((D[0] < 1 && (D[0] = 1), 'year' === e)) {
        var M,
          E = (M = D[0] - 7);
        E < 1 && (E = M = 1),
          lay.each(new Array(15), function (e) {
            var i = lay.elem('li', { 'lay-ym': M }),
              l = { year: M };
            M == D[0] && lay(i).addClass(y),
              (i.innerHTML = M + T),
              o.appendChild(i),
              M < a.firstDate.year
                ? ((l.month = n.min.month), (l.date = n.min.date))
                : M >= a.firstDate.year &&
                  ((l.month = n.max.month), (l.date = n.max.date)),
              a.limit(lay(i), l, t),
              M++;
          }),
          lay(m[f ? 0 : 1])
            .attr('lay-ym', M - 8 + '-' + D[1])
            .html(E + T + ' - ' + (M - 1 + T));
      } else if ('month' === e)
        lay.each(new Array(12), function (e) {
          var i = lay.elem('li', { 'lay-ym': e }),
            r = { year: D[0], month: e };
          e + 1 == D[1] && lay(i).addClass(y),
            (i.innerHTML = l.month[e] + (f ? '\u6708' : '')),
            o.appendChild(i),
            D[0] < a.firstDate.year
              ? (r.date = n.min.date)
              : D[0] >= a.firstDate.year && (r.date = n.max.date),
            a.limit(lay(i), r, t);
        }),
          lay(m[f ? 0 : 1])
            .attr('lay-ym', D[0] + '-' + D[1])
            .html(D[0] + T);
      else if ('time' === e) {
        var C = function () {
          lay(o)
            .find('ol')
            .each(function (e, n) {
              lay(n)
                .find('li')
                .each(function (n, i) {
                  a.limit(
                    lay(i),
                    [
                      { hours: n },
                      { hours: a[x].hours, minutes: n },
                      { hours: a[x].hours, minutes: a[x].minutes, seconds: n }
                    ][e],
                    t,
                    [
                      ['hours'],
                      ['hours', 'minutes'],
                      ['hours', 'minutes', 'seconds']
                    ][e]
                  );
                });
            }),
            n.range ||
              a.limit(lay(a.footer).find(p), a[x], 0, [
                'hours',
                'minutes',
                'seconds'
              ]);
        };
        n.range
          ? a[x] || (a[x] = 'startTime' === x ? i : a.endDate)
          : (a[x] = i),
          lay.each([24, 60, 60], function (e, t) {
            var n = lay.elem('li'),
              i = ['<p>' + l.time[e] + '</p><ol>'];
            lay.each(new Array(t), function (t) {
              i.push(
                '<li' +
                  (a[x][w[e]] === t ? ' class="' + y + '"' : '') +
                  '>' +
                  lay.digit(t, 2) +
                  '</li>'
              );
            }),
              (n.innerHTML = i.join('') + '</ol>'),
              o.appendChild(n);
          }),
          C();
      }
      if (
        (h && c.removeChild(h), c.appendChild(o), 'year' === e || 'month' === e)
      )
        lay(a.elemMain[t]).addClass('laydate-ym-show'),
          lay(o)
            .find('li')
            .on('click', function () {
              var l = 0 | lay(this).attr('lay-ym');
              if (!lay(this).hasClass(d)) {
                0 === t
                  ? ((i[e] = l), a.limit(lay(a.footer).find(p), null, 0))
                  : (a.endDate[e] = l);
                var s = 'year' === n.type || 'month' === n.type;
                s
                  ? (lay(o)
                      .find('.' + y)
                      .removeClass(y),
                    lay(this).addClass(y),
                    'month' === n.type &&
                      'year' === e &&
                      ((a.listYM[t][0] = l),
                      r && ((t ? a.endDate : i).year = l),
                      a.list('month', t)))
                  : (a.checkDate('limit').calendar(null, t), a.closeList()),
                  a.setBtnStatus(),
                  n.range ||
                    ((('month' === n.type && 'month' === e) ||
                      ('year' === n.type && 'year' === e)) &&
                      a.setValue(a.parse()).remove().done()),
                  a.done(null, 'change'),
                  lay(a.footer)
                    .find('.' + v)
                    .removeClass(d);
              }
            });
      else {
        var I = lay.elem('span', { class: g }),
          k = function () {
            lay(o)
              .find('ol')
              .each(function (e) {
                var t = this,
                  n = lay(t).find('li');
                (t.scrollTop = 30 * (a[x][w[e]] - 2)),
                  t.scrollTop <= 0 &&
                    n.each(function (e, a) {
                      if (!lay(this).hasClass(d))
                        return (t.scrollTop = 30 * (e - 2)), !0;
                    });
              });
          },
          b = lay(s[2]).find('.' + g);
        k(),
          (I.innerHTML = n.range ? [l.startTime, l.endTime][t] : l.timeTips),
          lay(a.elemMain[t]).addClass('laydate-time-show'),
          b[0] && b.remove(),
          s[2].appendChild(I),
          lay(o)
            .find('ol')
            .each(function (e) {
              var t = this;
              lay(t)
                .find('li')
                .on('click', function () {
                  var l = 0 | this.innerHTML;
                  lay(this).hasClass(d) ||
                    (n.range ? (a[x][w[e]] = l) : (i[w[e]] = l),
                    lay(t)
                      .find('.' + y)
                      .removeClass(y),
                    lay(this).addClass(y),
                    C(),
                    k(),
                    (a.endDate || 'time' === n.type) && a.done(null, 'change'),
                    a.setBtnStatus());
                });
            });
      }
      return a;
    }),
    (D.prototype.listYM = []),
    (D.prototype.closeList = function () {
      var e = this;
      e.config;
      lay.each(e.elemCont, function (t, a) {
        lay(this)
          .find('.' + u)
          .remove(),
          lay(e.elemMain[t]).removeClass('laydate-ym-show laydate-time-show');
      }),
        lay(e.elem)
          .find('.' + g)
          .remove();
    }),
    (D.prototype.setBtnStatus = function (e, t, a) {
      var n,
        i = this,
        l = i.config,
        r = i.lang(),
        o = lay(i.footer).find(p);
      l.range &&
        'time' !== l.type &&
        ((t = t || l.dateTime),
        (a = a || i.endDate),
        (n = i.newDate(t).getTime() > i.newDate(a).getTime()),
        i.limit(null, t) || i.limit(null, a)
          ? o.addClass(d)
          : o[n ? 'addClass' : 'removeClass'](d),
        e &&
          n &&
          i.hint(
            'string' == typeof e
              ? r.timeout.replace(/\u65e5\u671f/g, e)
              : r.timeout
          ));
    }),
    (D.prototype.parse = function (e, t) {
      var a = this,
        n = a.config,
        i =
          t ||
          ('end' == e
            ? lay.extend({}, a.endDate, a.endTime)
            : n.range
            ? lay.extend({}, n.dateTime, a.startTime)
            : n.dateTime),
        r = l.parse(i, a.format, 1);
      return n.range && void 0 === e
        ? r + ' ' + a.rangeStr + ' ' + a.parse('end')
        : r;
    }),
    (D.prototype.newDate = function (e) {
      return (
        (e = e || {}),
        new Date(
          e.year || 1,
          e.month || 0,
          e.date || 1,
          e.hours || 0,
          e.minutes || 0,
          e.seconds || 0
        )
      );
    }),
    (D.prototype.setValue = function (e) {
      var t = this,
        a = t.config,
        n = t.bindElem || a.elem[0];
      return 'static' === a.position
        ? t
        : ((e = e || ''),
          t.isInput(n)
            ? lay(n).val(e)
            : t.rangeElem
            ? (t.rangeElem[0].val(e ? t.parse('start') : ''),
              t.rangeElem[1].val(e ? t.parse('end') : ''))
            : (0 === lay(n).find('*').length && lay(n).html(e),
              lay(n).attr('lay-date', e)),
          t);
    }),
    (D.prototype.preview = function () {
      var e = this,
        t = e.config;
      if (t.isPreview) {
        var a = lay(e.elem).find('.' + T),
          n = t.range ? (e.endDate ? e.parse() : '') : e.parse();
        a.html(n).css({ color: '#5FB878' }),
          setTimeout(function () {
            a.css({ color: '#666' });
          }, 300);
      }
    }),
    (D.prototype.done = function (e, t) {
      var a = this,
        n = a.config,
        i = lay.extend({}, lay.extend(n.dateTime, a.startTime)),
        l = lay.extend({}, lay.extend(a.endDate, a.endTime));
      return (
        lay.each([i, l], function (e, t) {
          'month' in t && lay.extend(t, { month: t.month + 1 });
        }),
        a.preview(),
        (e = e || [a.parse(), i, l]),
        'function' == typeof n[t || 'done'] && n[t || 'done'].apply(n, e),
        a
      );
    }),
    (D.prototype.choose = function (e, t) {
      var a = this,
        n = a.config,
        i = a.thisDateTime(t),
        l = (lay(a.elem).find('td'), e.attr('lay-ymd').split('-'));
      (l = { year: 0 | l[0], month: (0 | l[1]) - 1, date: 0 | l[2] }),
        e.hasClass(d) ||
          (lay.extend(i, l),
          n.range
            ? (lay.each(['startTime', 'endTime'], function (e, t) {
                a[t] = a[t] || { hours: 0, minutes: 0, seconds: 0 };
              }),
              a.calendar(null, t).done(null, 'change'))
            : 'static' === n.position
            ? a.calendar().done().done(null, 'change')
            : 'date' === n.type
            ? a.setValue(a.parse()).remove().done()
            : 'datetime' === n.type && a.calendar().done(null, 'change'));
    }),
    (D.prototype.tool = function (e, t) {
      var a = this,
        n = a.config,
        i = a.lang(),
        l = n.dateTime,
        r = 'static' === n.position,
        o = {
          datetime: function () {
            lay(e).hasClass(d) ||
              (a.list('time', 0),
              n.range && a.list('time', 1),
              lay(e).attr('lay-type', 'date').html(a.lang().dateTips));
          },
          date: function () {
            a.closeList(),
              lay(e).attr('lay-type', 'datetime').html(a.lang().timeTips);
          },
          clear: function () {
            r && (lay.extend(l, a.firstDate), a.calendar()),
              n.range &&
                (delete n.dateTime,
                delete a.endDate,
                delete a.startTime,
                delete a.endTime),
              a.setValue('').remove(),
              a.done(['', {}, {}]);
          },
          now: function () {
            var e = new Date();
            lay.extend(l, a.systemDate(), {
              hours: e.getHours(),
              minutes: e.getMinutes(),
              seconds: e.getSeconds()
            }),
              a.setValue(a.parse()).remove(),
              r && a.calendar(),
              a.done();
          },
          confirm: function () {
            if (n.range) {
              if (lay(e).hasClass(d))
                return a.hint(
                  'time' === n.type
                    ? i.timeout.replace(/\u65e5\u671f/g, '\u65f6\u95f4')
                    : i.timeout
                );
            } else if (lay(e).hasClass(d)) return a.hint(i.invalidDate);
            a.done(), a.setValue(a.parse()).remove();
          }
        };
      o[t] && o[t]();
    }),
    (D.prototype.change = function (e) {
      var t = this,
        a = t.config,
        n = t.thisDateTime(e),
        i = a.range && ('year' === a.type || 'month' === a.type),
        l = t.elemCont[e || 0],
        r = t.listYM[e],
        o = function (o) {
          var s = lay(l).find('.laydate-year-list')[0],
            y = lay(l).find('.laydate-month-list')[0];
          return (
            s && ((r[0] = o ? r[0] - 15 : r[0] + 15), t.list('year', e)),
            y && (o ? r[0]-- : r[0]++, t.list('month', e)),
            (s || y) &&
              (lay.extend(n, { year: r[0] }),
              i && (n.year = r[0]),
              a.range || t.done(null, 'change'),
              a.range || t.limit(lay(t.footer).find(p), { year: r[0] })),
            t.setBtnStatus(),
            s || y
          );
        };
      return {
        prevYear: function () {
          o('sub') ||
            (n.year--,
            t.checkDate('limit').calendar(null, e),
            t.done(null, 'change'));
        },
        prevMonth: function () {
          var a = t.getAsYM(n.year, n.month, 'sub');
          lay.extend(n, { year: a[0], month: a[1] }),
            t.checkDate('limit').calendar(null, e),
            t.done(null, 'change');
        },
        nextMonth: function () {
          var a = t.getAsYM(n.year, n.month);
          lay.extend(n, { year: a[0], month: a[1] }),
            t.checkDate('limit').calendar(null, e),
            t.done(null, 'change');
        },
        nextYear: function () {
          o() ||
            (n.year++,
            t.checkDate('limit').calendar(null, e),
            t.done(null, 'change'));
        }
      };
    }),
    (D.prototype.changeEvent = function () {
      var e = this;
      e.config;
      lay(e.elem)
        .on('click', function (e) {
          lay.stope(e);
        })
        .on('mousedown', function (e) {
          lay.stope(e);
        }),
        lay.each(e.elemHeader, function (t, a) {
          lay(a[0]).on('click', function (a) {
            e.change(t).prevYear();
          }),
            lay(a[1]).on('click', function (a) {
              e.change(t).prevMonth();
            }),
            lay(a[2])
              .find('span')
              .on('click', function (a) {
                var n = lay(this),
                  i = n.attr('lay-ym'),
                  l = n.attr('lay-type');
                i &&
                  ((i = i.split('-')),
                  (e.listYM[t] = [0 | i[0], 0 | i[1]]),
                  e.list(l, t),
                  lay(e.footer)
                    .find('.' + v)
                    .addClass(d));
              }),
            lay(a[3]).on('click', function (a) {
              e.change(t).nextMonth();
            }),
            lay(a[4]).on('click', function (a) {
              e.change(t).nextYear();
            });
        }),
        lay.each(e.table, function (t, a) {
          var n = lay(a).find('td');
          n.on('click', function () {
            e.choose(lay(this), t);
          });
        }),
        lay(e.footer)
          .find('span')
          .on('click', function () {
            var t = lay(this).attr('lay-type');
            e.tool(this, t);
          });
    }),
    (D.prototype.isInput = function (e) {
      return /input|textarea/.test(e.tagName.toLocaleLowerCase());
    }),
    (D.prototype.events = function () {
      var e = this,
        t = e.config,
        a = function (a, n) {
          a.on(t.trigger, function () {
            n && (e.bindElem = this), e.render();
          });
        };
      t.elem[0] &&
        !t.elem[0].eventHandler &&
        (a(t.elem, 'bind'), a(t.eventElem), (t.elem[0].eventHandler = !0));
    }),
    (r.that = {}),
    (r.getThis = function (e) {
      var t = r.that[e];
      return (
        !t &&
          a &&
          layui
            .hint()
            .error(
              e
                ? o + " instance with ID '" + e + "' not found"
                : 'ID argument required'
            ),
        t
      );
    }),
    (n.run = function (a) {
      a(t)
        .on('mousedown', function (e) {
          if (l.thisId) {
            var t = r.getThis(l.thisId);
            if (t) {
              var n = t.config;
              e.target !== n.elem[0] &&
                e.target !== n.eventElem[0] &&
                e.target !== a(n.closeStop)[0] &&
                t.remove();
            }
          }
        })
        .on('keydown', function (e) {
          if (l.thisId) {
            var t = r.getThis(l.thisId);
            t &&
              13 === e.keyCode &&
              a('#' + t.elemID)[0] &&
              t.elemID === D.thisElemDate &&
              (e.preventDefault(), a(t.footer).find(p)[0].click());
          }
        }),
        a(e).on('resize', function () {
          if (l.thisId) {
            var e = r.getThis(l.thisId);
            if (e) return !(!e.elem || !a(s)[0]) && void e.position();
          }
        });
    }),
    (l.render = function (e) {
      var t = new D(e);
      return r.call(t);
    }),
    (l.parse = function (e, t, a) {
      return (
        (e = e || {}),
        'string' == typeof t && (t = r.formatArr(t)),
        (t = (t || []).concat()),
        lay.each(t, function (n, i) {
          /yyyy|y/.test(i)
            ? (t[n] = lay.digit(e.year, i.length))
            : /MM|M/.test(i)
            ? (t[n] = lay.digit(e.month + (a || 0), i.length))
            : /dd|d/.test(i)
            ? (t[n] = lay.digit(e.date, i.length))
            : /HH|H/.test(i)
            ? (t[n] = lay.digit(e.hours, i.length))
            : /mm|m/.test(i)
            ? (t[n] = lay.digit(e.minutes, i.length))
            : /ss|s/.test(i) && (t[n] = lay.digit(e.seconds, i.length));
        }),
        t.join('')
      );
    }),
    (l.getEndDate = function (e, t) {
      var a = new Date();
      return (
        a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1),
        new Date(a.getTime() - 864e5).getDate()
      );
    }),
    a
      ? (l.ready(),
        layui.define('lay', function (e) {
          (l.path = layui.cache.dir), n.run(lay), e(o, l);
        }))
      : 'function' == typeof define && define.amd
      ? define(function () {
          return n.run(lay), l;
        })
      : (function () {
          l.ready(), n.run(e.lay), (e.laydate = l);
        })();
})(window, window.document);
!(function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && 'length' in e && e.length,
      n = pe.type(e);
    return (
      'function' !== n &&
      !pe.isWindow(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (pe.isFunction(t))
      return pe.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return pe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ('string' == typeof t) {
      if (Ce.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function (e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }
  function i(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = {};
    return (
      pe.each(e.match(De) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function a() {
    re.addEventListener
      ? (re.removeEventListener('DOMContentLoaded', s),
        e.removeEventListener('load', s))
      : (re.detachEvent('onreadystatechange', s), e.detachEvent('onload', s));
  }
  function s() {
    (re.addEventListener ||
      'load' === e.event.type ||
      'complete' === re.readyState) &&
      (a(), pe.ready());
  }
  function u(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = 'data-' + t.replace(_e, '-$1').toLowerCase();
      if (((n = e.getAttribute(r)), 'string' == typeof n)) {
        try {
          n =
            'true' === n ||
            ('false' !== n &&
              ('null' === n
                ? null
                : +n + '' === n
                ? +n
                : qe.test(n)
                ? pe.parseJSON(n)
                : n));
        } catch (i) {}
        pe.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function l(e) {
    var t;
    for (t in e)
      if (('data' !== t || !pe.isEmptyObject(e[t])) && 'toJSON' !== t)
        return !1;
    return !0;
  }
  function c(e, t, n, r) {
    if (He(e)) {
      var i,
        o,
        a = pe.expando,
        s = e.nodeType,
        u = s ? pe.cache : e,
        l = s ? e[a] : e[a] && a;
      if (
        (l && u[l] && (r || u[l].data)) ||
        void 0 !== n ||
        'string' != typeof t
      )
        return (
          l || (l = s ? (e[a] = ne.pop() || pe.guid++) : a),
          u[l] || (u[l] = s ? {} : { toJSON: pe.noop }),
          ('object' != typeof t && 'function' != typeof t) ||
            (r
              ? (u[l] = pe.extend(u[l], t))
              : (u[l].data = pe.extend(u[l].data, t))),
          (o = u[l]),
          r || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== n && (o[pe.camelCase(t)] = n),
          'string' == typeof t
            ? ((i = o[t]), null == i && (i = o[pe.camelCase(t)]))
            : (i = o),
          i
        );
    }
  }
  function f(e, t, n) {
    if (He(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? pe.cache : e,
        s = o ? e[pe.expando] : pe.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          pe.isArray(t)
            ? (t = t.concat(pe.map(t, pe.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = pe.camelCase(t)), (t = t in r ? [t] : t.split(' '))),
            (i = t.length);
          for (; i--; ) delete r[t[i]];
          if (n ? !l(r) : !pe.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, l(a[s]))) &&
          (o
            ? pe.cleanData([e], !0)
            : fe.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = void 0));
      }
    }
  }
  function d(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return pe.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (pe.cssNumber[t] ? '' : 'px'),
      c = (pe.cssNumber[t] || ('px' !== l && +u)) && Me.exec(pe.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do (o = o || '.5'), (c /= o), pe.style(e, t, c + l);
      while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  function p(e) {
    var t = ze.split('|'),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function h(e, t) {
    var n,
      r,
      i = 0,
      o =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
    return void 0 === t || (t && pe.nodeName(e, t)) ? pe.merge([e], o) : o;
  }
  function g(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      pe._data(n, 'globalEval', !t || pe._data(t[r], 'globalEval'));
  }
  function m(e) {
    Be.test(e.type) && (e.defaultChecked = e.checked);
  }
  function y(e, t, n, r, i) {
    for (
      var o, a, s, u, l, c, f, d = e.length, y = p(t), v = [], x = 0;
      x < d;
      x++
    )
      if (((a = e[x]), a || 0 === a))
        if ('object' === pe.type(a)) pe.merge(v, a.nodeType ? [a] : a);
        else if (Ue.test(a)) {
          for (
            u = u || y.appendChild(t.createElement('div')),
              l = (We.exec(a) || ['', ''])[1].toLowerCase(),
              f = Xe[l] || Xe._default,
              u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2],
              o = f[0];
            o--;

          )
            u = u.lastChild;
          if (
            (!fe.leadingWhitespace &&
              $e.test(a) &&
              v.push(t.createTextNode($e.exec(a)[0])),
            !fe.tbody)
          )
            for (
              a =
                'table' !== l || Ve.test(a)
                  ? '<table>' !== f[1] || Ve.test(a)
                    ? 0
                    : u
                  : u.firstChild,
                o = a && a.childNodes.length;
              o--;

            )
              pe.nodeName((c = a.childNodes[o]), 'tbody') &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (pe.merge(v, u.childNodes), u.textContent = ''; u.firstChild; )
            u.removeChild(u.firstChild);
          u = y.lastChild;
        } else v.push(t.createTextNode(a));
    for (
      u && y.removeChild(u),
        fe.appendChecked || pe.grep(h(v, 'input'), m),
        x = 0;
      (a = v[x++]);

    )
      if (r && pe.inArray(a, r) > -1) i && i.push(a);
      else if (
        ((s = pe.contains(a.ownerDocument, a)),
        (u = h(y.appendChild(a), 'script')),
        s && g(u),
        n)
      )
        for (o = 0; (a = u[o++]); ) Ie.test(a.type || '') && n.push(a);
    return (u = null), y;
  }
  function v() {
    return !0;
  }
  function x() {
    return !1;
  }
  function b() {
    try {
      return re.activeElement;
    } catch (e) {}
  }
  function w(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      'string' != typeof n && ((r = r || n), (n = void 0));
      for (s in t) w(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      i === !1)
    )
      i = x;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return pe().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = pe.guid++))),
      e.each(function () {
        pe.event.add(this, t, i, r, n);
      })
    );
  }
  function T(e, t) {
    return pe.nodeName(e, 'table') &&
      pe.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
          e.appendChild(e.ownerDocument.createElement('tbody'))
      : e;
  }
  function C(e) {
    return (e.type = (null !== pe.find.attr(e, 'type')) + '/' + e.type), e;
  }
  function E(e) {
    var t = it.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }
  function N(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n,
        r,
        i,
        o = pe._data(e),
        a = pe._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = pe.extend({}, a.data));
    }
  }
  function k(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !fe.noCloneEvent && t[pe.expando])) {
        i = pe._data(t);
        for (r in i.events) pe.removeEvent(t, r, i.handle);
        t.removeAttribute(pe.expando);
      }
      'script' === n && t.text !== e.text
        ? ((C(t).text = e.text), E(t))
        : 'object' === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          fe.html5Clone &&
            e.innerHTML &&
            !pe.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : 'input' === n && Be.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : 'option' === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ('input' !== n && 'textarea' !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function S(e, t, n, r) {
    t = oe.apply([], t);
    var i,
      o,
      a,
      s,
      u,
      l,
      c = 0,
      f = e.length,
      d = f - 1,
      p = t[0],
      g = pe.isFunction(p);
    if (g || (f > 1 && 'string' == typeof p && !fe.checkClone && rt.test(p)))
      return e.each(function (i) {
        var o = e.eq(i);
        g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r);
      });
    if (
      f &&
      ((l = y(t, e[0].ownerDocument, !1, e, r)),
      (i = l.firstChild),
      1 === l.childNodes.length && (l = i),
      i || r)
    ) {
      for (s = pe.map(h(l, 'script'), C), a = s.length; c < f; c++)
        (o = l),
          c !== d &&
            ((o = pe.clone(o, !0, !0)), a && pe.merge(s, h(o, 'script'))),
          n.call(e[c], o, c);
      if (a)
        for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++)
          (o = s[c]),
            Ie.test(o.type || '') &&
              !pe._data(o, 'globalEval') &&
              pe.contains(u, o) &&
              (o.src
                ? pe._evalUrl && pe._evalUrl(o.src)
                : pe.globalEval(
                    (o.text || o.textContent || o.innerHTML || '').replace(
                      ot,
                      ''
                    )
                  ));
      l = i = null;
    }
    return e;
  }
  function A(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || pe.cleanData(h(r)),
        r.parentNode &&
          (n && pe.contains(r.ownerDocument, r) && g(h(r, 'script')),
          r.parentNode.removeChild(r));
    return e;
  }
  function D(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body),
      r = pe.css(n[0], 'display');
    return n.detach(), r;
  }
  function j(e) {
    var t = re,
      n = lt[e];
    return (
      n ||
        ((n = D(e, t)),
        ('none' !== n && n) ||
          ((ut = (
            ut || pe("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = (ut[0].contentWindow || ut[0].contentDocument).document),
          t.write(),
          t.close(),
          (n = D(e, t)),
          ut.detach()),
        (lt[e] = n)),
      n
    );
  }
  function L(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      }
    };
  }
  function H(e) {
    if (e in Et) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--; )
      if (((e = Ct[n] + t), e in Et)) return e;
  }
  function q(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = pe._data(r, 'olddisplay')),
          (n = r.style.display),
          t
            ? (o[a] || 'none' !== n || (r.style.display = ''),
              '' === r.style.display &&
                Re(r) &&
                (o[a] = pe._data(r, 'olddisplay', j(r.nodeName))))
            : ((i = Re(r)),
              ((n && 'none' !== n) || !i) &&
                pe._data(r, 'olddisplay', i ? n : pe.css(r, 'display'))));
    for (a = 0; a < s; a++)
      (r = e[a]),
        r.style &&
          ((t && 'none' !== r.style.display && '' !== r.style.display) ||
            (r.style.display = t ? o[a] || '' : 'none'));
    return e;
  }
  function _(e, t, n) {
    var r = bt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function F(e, t, n, r, i) {
    for (
      var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      'margin' === n && (a += pe.css(e, n + Oe[o], !0, i)),
        r
          ? ('content' === n && (a -= pe.css(e, 'padding' + Oe[o], !0, i)),
            'margin' !== n &&
              (a -= pe.css(e, 'border' + Oe[o] + 'Width', !0, i)))
          : ((a += pe.css(e, 'padding' + Oe[o], !0, i)),
            'padding' !== n &&
              (a += pe.css(e, 'border' + Oe[o] + 'Width', !0, i)));
    return a;
  }
  function M(e, t, n) {
    var r = !0,
      i = 'width' === t ? e.offsetWidth : e.offsetHeight,
      o = ht(e),
      a = fe.boxSizing && 'border-box' === pe.css(e, 'boxSizing', !1, o);
    if (i <= 0 || null == i) {
      if (
        ((i = gt(e, t, o)),
        (i < 0 || null == i) && (i = e.style[t]),
        ft.test(i))
      )
        return i;
      (r = a && (fe.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + F(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
  }
  function O(e, t, n, r, i) {
    return new O.prototype.init(e, t, n, r, i);
  }
  function R() {
    return (
      e.setTimeout(function () {
        Nt = void 0;
      }),
      (Nt = pe.now())
    );
  }
  function P(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      (n = Oe[i]), (r['margin' + n] = r['padding' + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function B(e, t, n) {
    for (
      var r,
        i = ($.tweeners[t] || []).concat($.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function W(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = this,
      d = {},
      p = e.style,
      h = e.nodeType && Re(e),
      g = pe._data(e, 'fxshow');
    n.queue ||
      ((s = pe._queueHooks(e, 'fx')),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (u = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || u();
        })),
      s.unqueued++,
      f.always(function () {
        f.always(function () {
          s.unqueued--, pe.queue(e, 'fx').length || s.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ('height' in t || 'width' in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (l = pe.css(e, 'display')),
        (c = 'none' === l ? pe._data(e, 'olddisplay') || j(e.nodeName) : l),
        'inline' === c &&
          'none' === pe.css(e, 'float') &&
          (fe.inlineBlockNeedsLayout && 'inline' !== j(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = 'inline-block'))),
      n.overflow &&
        ((p.overflow = 'hidden'),
        fe.shrinkWrapBlocks() ||
          f.always(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((i = t[r]), St.exec(i))) {
        if (
          (delete t[r], (o = o || 'toggle' === i), i === (h ? 'hide' : 'show'))
        ) {
          if ('show' !== i || !g || void 0 === g[r]) continue;
          h = !0;
        }
        d[r] = (g && g[r]) || pe.style(e, r);
      } else l = void 0;
    if (pe.isEmptyObject(d))
      'inline' === ('none' === l ? j(e.nodeName) : l) && (p.display = l);
    else {
      g ? 'hidden' in g && (h = g.hidden) : (g = pe._data(e, 'fxshow', {})),
        o && (g.hidden = !h),
        h
          ? pe(e).show()
          : f.done(function () {
              pe(e).hide();
            }),
        f.done(function () {
          var t;
          pe._removeData(e, 'fxshow');
          for (t in d) pe.style(e, t, d[t]);
        });
      for (r in d)
        (a = B(h ? g[r] : 0, r, f)),
          r in g ||
            ((g[r] = a.start),
            h &&
              ((a.end = a.start),
              (a.start = 'width' === r || 'height' === r ? 1 : 0)));
    }
  }
  function I(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = pe.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        pe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = pe.cssHooks[r]),
        a && 'expand' in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function $(e, t, n) {
    var r,
      i,
      o = 0,
      a = $.prefilters.length,
      s = pe.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Nt || R(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
          a < u;
          a++
        )
          l.tweens[a].run(o);
        return (
          s.notifyWith(e, [l, o, n]),
          o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: pe.extend({}, t),
        opts: pe.extend(
          !0,
          { specialEasing: {}, easing: pe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Nt || R(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = pe.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        }
      }),
      c = l.props;
    for (I(c, l.opts.specialEasing); o < a; o++)
      if ((r = $.prefilters[o].call(l, e, c, l.opts)))
        return (
          pe.isFunction(r.stop) &&
            (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)),
          r
        );
    return (
      pe.map(c, B, l),
      pe.isFunction(l.opts.start) && l.opts.start.call(e, l),
      pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function z(e) {
    return pe.attr(e, 'class') || '';
  }
  function X(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var r,
        i = 0,
        o = t.toLowerCase().match(De) || [];
      if (pe.isFunction(n))
        for (; (r = o[i++]); )
          '+' === r.charAt(0)
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function U(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        pe.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return 'string' != typeof l || a || o[l]
            ? a
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === Qt;
    return i(t.dataTypes[0]) || (!o['*'] && i('*'));
  }
  function V(e, t) {
    var n,
      r,
      i = pe.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && pe.extend(!0, e, n), e;
  }
  function Y(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0]; )
      u.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          u.unshift(a);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (a in n) {
        if (!u[0] || e.converters[a + ' ' + u[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function J(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ('*' === o) o = u;
        else if ('*' !== u && u !== o) {
          if (((a = l[u + ' ' + o] || l['* ' + o]), !a))
            for (i in l)
              if (
                ((s = i.split(' ')),
                s[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]]))
              ) {
                a === !0
                  ? (a = l[i])
                  : l[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e['throws']) t = a(t);
            else
              try {
                t = a(t);
              } catch (f) {
                return {
                  state: 'parsererror',
                  error: a ? f : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return { state: 'success', data: t };
  }
  function G(e) {
    return (e.style && e.style.display) || pe.css(e, 'display');
  }
  function K(e) {
    if (!pe.contains(e.ownerDocument || re, e)) return !0;
    for (; e && 1 === e.nodeType; ) {
      if ('none' === G(e) || 'hidden' === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function Q(e, t, n, r) {
    var i;
    if (pe.isArray(t))
      pe.each(t, function (t, i) {
        n || rn.test(e)
          ? r(e, i)
          : Q(
              e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
              i,
              n,
              r
            );
      });
    else if (n || 'object' !== pe.type(t)) r(e, t);
    else for (i in t) Q(e + '[' + i + ']', t[i], n, r);
  }
  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }
  function te(e) {
    return pe.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [],
    re = e.document,
    ie = ne.slice,
    oe = ne.concat,
    ae = ne.push,
    se = ne.indexOf,
    ue = {},
    le = ue.toString,
    ce = ue.hasOwnProperty,
    fe = {},
    de = '1.12.4',
    pe = function (e, t) {
      return new pe.fn.init(e, t);
    },
    he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ge = /^-ms-/,
    me = /-([\da-z])/gi,
    ye = function (e, t) {
      return t.toUpperCase();
    };
  (pe.fn = pe.prototype =
    {
      jquery: de,
      constructor: pe,
      selector: '',
      length: 0,
      toArray: function () {
        return ie.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : ie.call(this);
      },
      pushStack: function (e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return pe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          pe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(ie.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ae,
      sort: ne.sort,
      splice: ne.splice
    }),
    (pe.extend = pe.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || pe.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                (n = i[r]),
                a !== n &&
                  (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && pe.isArray(e) ? e : []))
                        : (o = e && pe.isPlainObject(e) ? e : {}),
                      (a[r] = pe.extend(l, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    pe.extend({
      expando: 'jQuery' + (de + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === pe.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return 'array' === pe.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || 'object' !== pe.type(e) || e.nodeType || pe.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !ce.call(e, 'constructor') &&
            !ce.call(e.constructor.prototype, 'isPrototypeOf')
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!fe.ownFirst) for (t in e) return ce.call(e, t);
        for (t in e);
        return void 0 === t || ce.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? ue[le.call(e)] || 'object'
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          pe.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(ge, 'ms-').replace(me, ye);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var r,
          i = 0;
        if (n(e))
          for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++);
        else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(he, '');
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? pe.merge(r, 'string' == typeof e ? [e] : e)
              : ae.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (se) return se.call(t, e, n);
          for (
            r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
            n < r;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
        if (n !== n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)), r !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          o,
          a = 0,
          s = [];
        if (n(e))
          for (i = e.length; a < i; a++)
            (o = t(e[a], a, r)), null != o && s.push(o);
        else for (a in e) (o = t(e[a], a, r)), null != o && s.push(o);
        return oe.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        if (
          ('string' == typeof t && ((i = e[t]), (t = e), (e = i)),
          pe.isFunction(e))
        )
          return (
            (n = ie.call(arguments, 2)),
            (r = function () {
              return e.apply(t || this, n.concat(ie.call(arguments)));
            }),
            (r.guid = e.guid = e.guid || pe.guid++),
            r
          );
      },
      now: function () {
        return +new Date();
      },
      support: fe
    }),
    'function' == typeof Symbol &&
      (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        ue['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var ve = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        f,
        p,
        h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : B) !== H && L(t), (t = t || H), _)
      ) {
        if (11 !== g && (l = ye.exec(e)))
          if ((i = l[1])) {
            if (9 === g) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = l[3]) &&
              w.getElementsByClassName &&
              t.getElementsByClassName
            )
              return Q.apply(n, t.getElementsByClassName(i)), n;
          }
        if (w.qsa && !X[e + ' '] && (!F || !F.test(e))) {
          if (1 !== g) (h = t), (p = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute('id'))
                ? (s = s.replace(xe, '\\$&'))
                : t.setAttribute('id', (s = P)),
                f = N(e),
                o = f.length,
                u = de.test(s) ? '#' + s : "[id='" + s + "']";
              o--;

            )
              f[o] = u + ' ' + d(f[o]);
            (p = f.join(',')), (h = (ve.test(e) && c(t.parentNode)) || t);
          }
          if (p)
            try {
              return Q.apply(n, h.querySelectorAll(p)), n;
            } catch (m) {
            } finally {
              s === P && t.removeAttribute('id');
            }
        }
      }
      return S(e.replace(se, '$1'), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + ' ') > T.cacheLength && delete e[t.shift()],
          (e[n + ' '] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[P] = !0), e;
    }
    function i(e) {
      var t = H.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) T.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function l(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function d(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir,
        i = n && 'parentNode' === r,
        o = I++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              u,
              l,
              c = [W, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    ((l = t[P] || (t[P] = {})),
                    (u = l[t.uniqueID] || (l[t.uniqueID] = {})),
                    (s = u[r]) && s[0] === W && s[1] === o)
                  )
                    return (c[2] = s[2]);
                  if (((u[r] = c), (c[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function m(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function y(e, t, n, i, o, a) {
      return (
        i && !i[P] && (i = y(i)),
        o && !o[P] && (o = y(o, a)),
        r(function (r, a, s, u) {
          var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            y = r || g(t || '*', s.nodeType ? [s] : s, []),
            v = !e || (!r && t) ? y : m(y, d, e, s, u),
            x = n ? (o || (r ? e : h || i) ? [] : a) : v;
          if ((n && n(v, x, s, u), i))
            for (l = m(x, p), i(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = x.length; c--; )
                  (f = x[c]) && l.push((v[c] = f));
                o(null, (x = []), l, u);
              }
              for (c = x.length; c--; )
                (f = x[c]) &&
                  (l = o ? ee(r, f) : d[c]) > -1 &&
                  (r[l] = !(a[l] = f));
            }
          } else (x = m(x === a ? x.splice(h, x.length) : x)), o ? o(null, a, x, u) : Q.apply(a, x);
        })
      );
    }
    function v(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = T.relative[e[0].type],
          a = o || T.relative[' '],
          s = o ? 1 : 0,
          u = p(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          l = p(
            function (e) {
              return ee(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== A)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return (t = null), i;
            }
          ];
        s < i;
        s++
      )
        if ((n = T.relative[e[s].type])) c = [p(h(c), n)];
        else {
          if (((n = T.filter[e[s].type].apply(null, e[s].matches)), n[P])) {
            for (r = ++s; r < i && !T.relative[e[r].type]; r++);
            return y(
              s > 1 && h(c),
              s > 1 &&
                d(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(se, '$1'),
              n,
              s < r && v(e.slice(s, r)),
              r < i && v((e = e.slice(r))),
              r < i && d(e)
            );
          }
          c.push(n);
        }
      return h(c);
    }
    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, u, l) {
          var c,
            f,
            d,
            p = 0,
            h = '0',
            g = r && [],
            y = [],
            v = A,
            x = r || (o && T.find.TAG('*', l)),
            b = (W += null == v ? 1 : Math.random() || 0.1),
            w = x.length;
          for (
            l && (A = a === H || a || l);
            h !== w && null != (c = x[h]);
            h++
          ) {
            if (o && c) {
              for (
                f = 0, a || c.ownerDocument === H || (L(c), (s = !_));
                (d = e[f++]);

              )
                if (d(c, a || H, s)) {
                  u.push(c);
                  break;
                }
              l && (W = b);
            }
            i && ((c = !d && c) && p--, r && g.push(c));
          }
          if (((p += h), i && h !== p)) {
            for (f = 0; (d = n[f++]); ) d(g, y, a, s);
            if (r) {
              if (p > 0) for (; h--; ) g[h] || y[h] || (y[h] = G.call(u));
              y = m(y);
            }
            Q.apply(u, y),
              l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u);
          }
          return l && ((W = b), (A = v)), g;
        };
      return i ? r(a) : a;
    }
    var b,
      w,
      T,
      C,
      E,
      N,
      k,
      S,
      A,
      D,
      j,
      L,
      H,
      q,
      _,
      F,
      M,
      O,
      R,
      P = 'sizzle' + 1 * new Date(),
      B = e.document,
      W = 0,
      I = 0,
      $ = n(),
      z = n(),
      X = n(),
      U = function (e, t) {
        return e === t && (j = !0), 0;
      },
      V = 1 << 31,
      Y = {}.hasOwnProperty,
      J = [],
      G = J.pop,
      K = J.push,
      Q = J.push,
      Z = J.slice,
      ee = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      ne = '[\\x20\\t\\r\\n\\f]',
      re = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      ie =
        '\\[' +
        ne +
        '*(' +
        re +
        ')(?:' +
        ne +
        '*([*^$|!~]?=)' +
        ne +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        re +
        '))|)' +
        ne +
        '*\\]',
      oe =
        ':(' +
        re +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        ie +
        ')*)|.*)\\)|)',
      ae = new RegExp(ne + '+', 'g'),
      se = new RegExp(
        '^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$',
        'g'
      ),
      ue = new RegExp('^' + ne + '*,' + ne + '*'),
      le = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
      ce = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
      fe = new RegExp(oe),
      de = new RegExp('^' + re + '$'),
      pe = {
        ID: new RegExp('^#(' + re + ')'),
        CLASS: new RegExp('^\\.(' + re + ')'),
        TAG: new RegExp('^(' + re + '|[*])'),
        ATTR: new RegExp('^' + ie),
        PSEUDO: new RegExp('^' + oe),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ne +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ne +
            '*(?:([+-]|)' +
            ne +
            '*(\\d+)|))' +
            ne +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + te + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ne +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ne +
            '*((?:-\\d)?\\d*)' +
            ne +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      me = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      xe = /'|\\/g,
      be = new RegExp('\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)', 'ig'),
      we = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      Te = function () {
        L();
      };
    try {
      Q.apply((J = Z.call(B.childNodes)), B.childNodes),
        J[B.childNodes.length].nodeType;
    } catch (Ce) {
      Q = {
        apply: J.length
          ? function (e, t) {
              K.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    (w = t.support = {}),
      (E = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && 'HTML' !== t.nodeName;
        }),
      (L = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : B;
          return r !== H && 9 === r.nodeType && r.documentElement
            ? ((H = r),
              (q = H.documentElement),
              (_ = !E(H)),
              (n = H.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener('unload', Te, !1)
                  : n.attachEvent && n.attachEvent('onunload', Te)),
              (w.attributes = i(function (e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (w.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(H.createComment('')),
                  !e.getElementsByTagName('*').length
                );
              })),
              (w.getElementsByClassName = me.test(H.getElementsByClassName)),
              (w.getById = i(function (e) {
                return (
                  (q.appendChild(e).id = P),
                  !H.getElementsByName || !H.getElementsByName(P).length
                );
              })),
              w.getById
                ? ((T.find.ID = function (e, t) {
                    if ('undefined' != typeof t.getElementById && _) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      return e.getAttribute('id') === t;
                    };
                  }))
                : (delete T.find.ID,
                  (T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      var n =
                        'undefined' != typeof e.getAttributeNode &&
                        e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  })),
              (T.find.TAG = w.getElementsByTagName
                ? function (e, t) {
                    return 'undefined' != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : w.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (T.find.CLASS =
                w.getElementsByClassName &&
                function (e, t) {
                  if ('undefined' != typeof t.getElementsByClassName && _)
                    return t.getElementsByClassName(e);
                }),
              (M = []),
              (F = []),
              (w.qsa = me.test(H.querySelectorAll)) &&
                (i(function (e) {
                  (q.appendChild(e).innerHTML =
                    "<a id='" +
                    P +
                    "'></a><select id='" +
                    P +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      F.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length ||
                      F.push('\\[' + ne + '*(?:value|' + te + ')'),
                    e.querySelectorAll('[id~=' + P + '-]').length ||
                      F.push('~='),
                    e.querySelectorAll(':checked').length || F.push(':checked'),
                    e.querySelectorAll('a#' + P + '+*').length ||
                      F.push('.#.+[+~]');
                }),
                i(function (e) {
                  var t = H.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length &&
                      F.push('name' + ne + '*[*^$|!~]?='),
                    e.querySelectorAll(':enabled').length ||
                      F.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    F.push(',.*:');
                })),
              (w.matchesSelector = me.test(
                (O =
                  q.matches ||
                  q.webkitMatchesSelector ||
                  q.mozMatchesSelector ||
                  q.oMatchesSelector ||
                  q.msMatchesSelector)
              )) &&
                i(function (e) {
                  (w.disconnectedMatch = O.call(e, 'div')),
                    O.call(e, "[s!='']:x"),
                    M.push('!=', oe);
                }),
              (F = F.length && new RegExp(F.join('|'))),
              (M = M.length && new RegExp(M.join('|'))),
              (t = me.test(q.compareDocumentPosition)),
              (R =
                t || me.test(q.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (U = t
                ? function (e, t) {
                    if (e === t) return (j = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!w.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === H || (e.ownerDocument === B && R(B, e))
                            ? -1
                            : t === H || (t.ownerDocument === B && R(B, t))
                            ? 1
                            : D
                            ? ee(D, e) - ee(D, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (j = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      u = [t];
                    if (!i || !o)
                      return e === H
                        ? -1
                        : t === H
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : D
                        ? ee(D, e) - ee(D, t)
                        : 0;
                    if (i === o) return a(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; s[r] === u[r]; ) r++;
                    return r
                      ? a(s[r], u[r])
                      : s[r] === B
                      ? -1
                      : u[r] === B
                      ? 1
                      : 0;
                  }),
              H)
            : H;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== H && L(e),
          (n = n.replace(ce, "='$1']")),
          w.matchesSelector &&
            _ &&
            !X[n + ' '] &&
            (!M || !M.test(n)) &&
            (!F || !F.test(n)))
        )
          try {
            var r = O.call(e, n);
            if (
              r ||
              w.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (i) {}
        return t(n, H, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== H && L(e), R(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== H && L(e);
        var n = T.attrHandle[t.toLowerCase()],
          r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
        return void 0 !== r
          ? r
          : w.attributes || !_
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((j = !w.detectDuplicates),
          (D = !w.sortStable && e.slice(0)),
          e.sort(U),
          j)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (D = null), e;
      }),
      (C = t.getText =
        function (e) {
          var t,
            n = '',
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += C(t);
          return n;
        }),
      (T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: pe,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(be, we)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(be, we)),
                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                'nth' === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ('even' === e[3] || 'odd' === e[3]))),
                    (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return pe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      fe.test(n) &&
                      (t = N(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, we).toLowerCase();
              return '*' === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = $[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) &&
                  $(e, function (e) {
                    return t.test(
                      ('string' == typeof e.className && e.className) ||
                        ('undefined' != typeof e.getAttribute &&
                          e.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? '!=' === n
                  : !n ||
                      ((o += ''),
                      '=' === n
                        ? o === r
                        : '!=' === n
                        ? o !== r
                        : '^=' === n
                        ? r && 0 === o.indexOf(r)
                        : '*=' === n
                        ? r && o.indexOf(r) > -1
                        : '$=' === n
                        ? r && o.slice(-r.length) === r
                        : '~=' === n
                        ? (' ' + o.replace(ae, ' ') + ' ').indexOf(r) > -1
                        : '|=' === n &&
                          (o === r || o.slice(0, r.length + 1) === r + '-'));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = 'nth' !== e.slice(0, 3),
                a = 'last' !== e.slice(-4),
                s = 'of-type' === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      d,
                      p,
                      h,
                      g = o !== a ? 'nextSibling' : 'previousSibling',
                      m = t.parentNode,
                      y = s && t.nodeName.toLowerCase(),
                      v = !u && !s,
                      x = !1;
                    if (m) {
                      if (o) {
                        for (; g; ) {
                          for (d = t; (d = d[g]); )
                            if (
                              s
                                ? d.nodeName.toLowerCase() === y
                                : 1 === d.nodeType
                            )
                              return !1;
                          h = g = 'only' === e && !h && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                        for (
                          d = m,
                            f = d[P] || (d[P] = {}),
                            c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                            l = c[e] || [],
                            p = l[0] === W && l[1],
                            x = p && l[2],
                            d = p && m.childNodes[p];
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop());

                        )
                          if (1 === d.nodeType && ++x && d === t) {
                            c[e] = [W, p, x];
                            break;
                          }
                      } else if (
                        (v &&
                          ((d = t),
                          (f = d[P] || (d[P] = {})),
                          (c = f[d.uniqueID] || (f[d.uniqueID] = {})),
                          (l = c[e] || []),
                          (p = l[0] === W && l[1]),
                          (x = p)),
                        x === !1)
                      )
                        for (
                          ;
                          (d = (++p && d && d[g]) || (x = p = 0) || h.pop()) &&
                          ((s
                            ? d.nodeName.toLowerCase() !== y
                            : 1 !== d.nodeType) ||
                            !++x ||
                            (v &&
                              ((f = d[P] || (d[P] = {})),
                              (c = f[d.uniqueID] || (f[d.uniqueID] = {})),
                              (c[e] = [W, x])),
                            d !== t));

                        );
                      return (x -= i), x === r || (x % r === 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  T.pseudos[e] ||
                  T.setFilters[e.toLowerCase()] ||
                  t.error('unsupported pseudo: ' + e);
              return o[P]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, '', n]),
                  T.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                          (r = ee(e, i[a])), (e[r] = !(t[r] = i[a]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            }
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = k(e.replace(se, '$1'));
              return i[P]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(be, we)),
                function (t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                de.test(e || '') || t.error('unsupported lang: ' + e),
                (e = e.replace(be, we).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = _
                        ? t.lang
                        : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + '-')
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === q;
            },
            focus: function (e) {
              return (
                e === H.activeElement &&
                (!H.hasFocus || H.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ('input' === t && !!e.checked) ||
                ('option' === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function (e) {
              var t;
              return (
                'input' === e.nodeName.toLowerCase() &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) ||
                  'text' === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            })
          }
        }),
      (T.pseudos.nth = T.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      T.pseudos[b] = s(b);
    for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
    return (
      (f.prototype = T.filters = T.pseudos),
      (T.setFilters = new f()),
      (N = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = z[e + ' '];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, u = [], l = T.preFilter; s; ) {
            (r && !(i = ue.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = le.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(se, ' ') }),
                (s = s.slice(r.length)));
            for (a in T.filter)
              !(i = pe[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
        }),
      (k = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = X[e + ' '];
          if (!o) {
            for (t || (t = N(e)), n = t.length; n--; )
              (o = v(t[n])), o[P] ? r.push(o) : i.push(o);
            (o = X(e, x(i, r))), (o.selector = e);
          }
          return o;
        }),
      (S = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            f = !r && N((e = l.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              ((o = f[0] = f[0].slice(0)),
              o.length > 2 &&
                'ID' === (a = o[0]).type &&
                w.getById &&
                9 === t.nodeType &&
                _ &&
                T.relative[o[1].type])
            ) {
              if (
                ((t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0]),
                !t)
              )
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = pe.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !T.relative[(s = a.type)]);

            )
              if (
                (u = T.find[s]) &&
                (r = u(
                  a.matches[0].replace(be, we),
                  (ve.test(o[0].type) && c(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), (e = r.length && d(o)), !e))
                  return Q.apply(n, r), n;
                break;
              }
          }
          return (
            (l || k(e, f))(
              r,
              t,
              !_,
              n,
              !t || (ve.test(e) && c(t.parentNode)) || t
            ),
            n
          );
        }),
      (w.sortStable = P.split('').sort(U).join('') === P),
      (w.detectDuplicates = !!j),
      L(),
      (w.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(H.createElement('div'));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        o('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        o('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        o(te, function (e, t, n) {
          var r;
          if (!n)
            return e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      t
    );
  })(e);
  (pe.find = ve),
    (pe.expr = ve.selectors),
    (pe.expr[':'] = pe.expr.pseudos),
    (pe.uniqueSort = pe.unique = ve.uniqueSort),
    (pe.text = ve.getText),
    (pe.isXMLDoc = ve.isXML),
    (pe.contains = ve.contains);
  var xe = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && pe(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    be = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    we = pe.expr.match.needsContext,
    Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Ce = /^.[^:#\[\.,]*$/;
  (pe.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? pe.find.matchesSelector(r, e)
          ? [r]
          : []
        : pe.find.matches(
            e,
            pe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    pe.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ('string' != typeof e)
          return this.pushStack(
            pe(e).filter(function () {
              for (t = 0; t < i; t++) if (pe.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; t < i; t++) pe.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? pe.unique(n) : n)),
          (n.selector = this.selector ? this.selector + ' ' + e : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          'string' == typeof e && we.test(e) ? pe(e) : e || [],
          !1
        ).length;
      }
    });
  var Ee,
    Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ke = (pe.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || Ee), 'string' == typeof e)) {
        if (
          ((r =
            '<' === e.charAt(0) &&
            '>' === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : Ne.exec(e)),
          !r || (!r[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof pe ? t[0] : t),
            pe.merge(
              this,
              pe.parseHTML(
                r[1],
                t && t.nodeType ? t.ownerDocument || t : re,
                !0
              )
            ),
            Te.test(r[1]) && pe.isPlainObject(t))
          )
            for (r in t)
              pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        if (((i = re.getElementById(r[2])), i && i.parentNode)) {
          if (i.id !== r[2]) return Ee.find(e);
          (this.length = 1), (this[0] = i);
        }
        return (this.context = re), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : pe.isFunction(e)
        ? 'undefined' != typeof n.ready
          ? n.ready(e)
          : e(pe)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          pe.makeArray(e, this));
    });
  (ke.prototype = pe.fn), (Ee = pe(re));
  var Se = /^(?:parents|prev(?:Until|All))/,
    Ae = { children: !0, contents: !0, next: !0, prev: !0 };
  pe.fn.extend({
    has: function (e) {
      var t,
        n = pe(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (pe.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = we.test(e) || 'string' != typeof e ? pe(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && pe.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? pe.inArray(this[0], pe(e))
          : pe.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    pe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return xe(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return xe(e, 'parentNode', n);
        },
        next: function (e) {
          return i(e, 'nextSibling');
        },
        prev: function (e) {
          return i(e, 'previousSibling');
        },
        nextAll: function (e) {
          return xe(e, 'nextSibling');
        },
        prevAll: function (e) {
          return xe(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return xe(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return xe(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return be((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return be(e.firstChild);
        },
        contents: function (e) {
          return pe.nodeName(e, 'iframe')
            ? e.contentDocument || e.contentWindow.document
            : pe.merge([], e.childNodes);
        }
      },
      function (e, t) {
        pe.fn[e] = function (n, r) {
          var i = pe.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = pe.filter(r, i)),
            this.length > 1 &&
              (Ae[e] || (i = pe.uniqueSort(i)),
              Se.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var De = /\S+/g;
  (pe.Callbacks = function (e) {
    e = 'string' == typeof e ? o(e) : pe.extend({}, e);
    var t,
      n,
      r,
      i,
      a = [],
      s = [],
      u = -1,
      l = function () {
        for (i = e.once, r = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < a.length; )
            a[u].apply(n[0], n[1]) === !1 &&
              e.stopOnFalse &&
              ((u = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (a = n ? [] : '');
      },
      c = {
        add: function () {
          return (
            a &&
              (n && !t && ((u = a.length - 1), s.push(n)),
              (function r(t) {
                pe.each(t, function (t, n) {
                  pe.isFunction(n)
                    ? (e.unique && c.has(n)) || a.push(n)
                    : n && n.length && 'string' !== pe.type(n) && r(n);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            pe.each(arguments, function (e, t) {
              for (var n; (n = pe.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? pe.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (i = s = []), (a = n = ''), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (i = !0), n || c.disable(), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      };
    return c;
  }),
    pe.extend({
      Deferred: function (e) {
        var t = [
            ['resolve', 'done', pe.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', pe.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', pe.Callbacks('memory')]
          ],
          n = 'pending',
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return pe
                .Deferred(function (n) {
                  pe.each(t, function (t, o) {
                    var a = pe.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && pe.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[o[0] + 'With'](
                            this === r ? n.promise() : this,
                            a ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? pe.extend(e, r) : r;
            }
          },
          i = {};
        return (
          (r.pipe = r.then),
          pe.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + 'With'](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + 'With'] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = ie.call(arguments),
          a = o.length,
          s = 1 !== a || (e && pe.isFunction(e.promise)) ? a : 0,
          u = 1 === s ? e : pe.Deferred(),
          l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? ie.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
            };
          };
        if (a > 1)
          for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
            o[i] && pe.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .progress(l(i, n, t))
                  .done(l(i, r, o))
                  .fail(u.reject)
              : --s;
        return s || u.resolveWith(r, o), u.promise();
      }
    });
  var je;
  (pe.fn.ready = function (e) {
    return pe.ready.promise().done(e), this;
  }),
    pe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? pe.readyWait++ : pe.ready(!0);
      },
      ready: function (e) {
        (e === !0 ? --pe.readyWait : pe.isReady) ||
          ((pe.isReady = !0),
          (e !== !0 && --pe.readyWait > 0) ||
            (je.resolveWith(re, [pe]),
            pe.fn.triggerHandler &&
              (pe(re).triggerHandler('ready'), pe(re).off('ready'))));
      }
    }),
    (pe.ready.promise = function (t) {
      if (!je)
        if (
          ((je = pe.Deferred()),
          'complete' === re.readyState ||
            ('loading' !== re.readyState && !re.documentElement.doScroll))
        )
          e.setTimeout(pe.ready);
        else if (re.addEventListener)
          re.addEventListener('DOMContentLoaded', s),
            e.addEventListener('load', s);
        else {
          re.attachEvent('onreadystatechange', s), e.attachEvent('onload', s);
          var n = !1;
          try {
            n = null == e.frameElement && re.documentElement;
          } catch (r) {}
          n &&
            n.doScroll &&
            !(function i() {
              if (!pe.isReady) {
                try {
                  n.doScroll('left');
                } catch (t) {
                  return e.setTimeout(i, 50);
                }
                a(), pe.ready();
              }
            })();
        }
      return je.promise(t);
    }),
    pe.ready.promise();
  var Le;
  for (Le in pe(fe)) break;
  (fe.ownFirst = '0' === Le),
    (fe.inlineBlockNeedsLayout = !1),
    pe(function () {
      var e, t, n, r;
      (n = re.getElementsByTagName('body')[0]),
        n &&
          n.style &&
          ((t = re.createElement('div')),
          (r = re.createElement('div')),
          (r.style.cssText =
            'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
          n.appendChild(r).appendChild(t),
          'undefined' != typeof t.style.zoom &&
            ((t.style.cssText =
              'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
            (fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
            e && (n.style.zoom = 1)),
          n.removeChild(r));
    }),
    (function () {
      var e = re.createElement('div');
      fe.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        fe.deleteExpando = !1;
      }
      e = null;
    })();
  var He = function (e) {
      var t = pe.noData[(e.nodeName + ' ').toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (t !== !0 && e.getAttribute('classid') === t))
      );
    },
    qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _e = /([A-Z])/g;
  pe.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (e) {
      return (
        (e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]), !!e && !l(e)
      );
    },
    data: function (e, t, n) {
      return c(e, t, n);
    },
    removeData: function (e, t) {
      return f(e, t);
    },
    _data: function (e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return f(e, t, !0);
    }
  }),
    pe.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = pe.data(o)), 1 === o.nodeType && !pe._data(o, 'parsedAttrs'))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf('data-') &&
                  ((r = pe.camelCase(r.slice(5))), u(o, r, i[r])));
            pe._data(o, 'parsedAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof e
          ? this.each(function () {
              pe.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              pe.data(this, e, t);
            })
          : o
          ? u(o, e, pe.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          pe.removeData(this, e);
        });
      }
    }),
    pe.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = pe._data(e, t)),
            n &&
              (!r || pe.isArray(n)
                ? (r = pe._data(e, t, pe.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = pe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = pe._queueHooks(e, t),
          a = function () {
            pe.dequeue(e, t);
          };
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          pe._data(e, n) ||
          pe._data(e, n, {
            empty: pe.Callbacks('once memory').add(function () {
              pe._removeData(e, t + 'queue'), pe._removeData(e, n);
            })
          })
        );
      }
    }),
    pe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? pe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && pe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          pe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = pe.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          a--;

        )
          (n = pe._data(o[a], e + 'queueHooks')),
            n && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      }
    }),
    (function () {
      var e;
      fe.shrinkWrapBlocks = function () {
        if (null != e) return e;
        e = !1;
        var t, n, r;
        return (
          (n = re.getElementsByTagName('body')[0]),
          n && n.style
            ? ((t = re.createElement('div')),
              (r = re.createElement('div')),
              (r.style.cssText =
                'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
              n.appendChild(r).appendChild(t),
              'undefined' != typeof t.style.zoom &&
                ((t.style.cssText =
                  '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
                (t.appendChild(re.createElement('div')).style.width = '5px'),
                (e = 3 !== t.offsetWidth)),
              n.removeChild(r),
              e)
            : void 0
        );
      };
    })();
  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Me = new RegExp('^(?:([+-])=|)(' + Fe + ')([a-z%]*)$', 'i'),
    Oe = ['Top', 'Right', 'Bottom', 'Left'],
    Re = function (e, t) {
      return (
        (e = t || e),
        'none' === pe.css(e, 'display') || !pe.contains(e.ownerDocument, e)
      );
    },
    Pe = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === pe.type(n)) {
        i = !0;
        for (s in n) Pe(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        pe.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(pe(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    Be = /^(?:checkbox|radio)$/i,
    We = /<([\w:-]+)/,
    Ie = /^$|\/(?:java|ecma)script/i,
    $e = /^\s+/,
    ze =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video';
  !(function () {
    var e = re.createElement('div'),
      t = re.createDocumentFragment(),
      n = re.createElement('input');
    (e.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (fe.leadingWhitespace = 3 === e.firstChild.nodeType),
      (fe.tbody = !e.getElementsByTagName('tbody').length),
      (fe.htmlSerialize = !!e.getElementsByTagName('link').length),
      (fe.html5Clone =
        '<:nav></:nav>' !== re.createElement('nav').cloneNode(!0).outerHTML),
      (n.type = 'checkbox'),
      (n.checked = !0),
      t.appendChild(n),
      (fe.appendChecked = n.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      t.appendChild(e),
      (n = re.createElement('input')),
      n.setAttribute('type', 'radio'),
      n.setAttribute('checked', 'checked'),
      n.setAttribute('name', 't'),
      e.appendChild(n),
      (fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (fe.noCloneEvent = !!e.addEventListener),
      (e[pe.expando] = 1),
      (fe.attributes = !e.getAttribute(pe.expando));
  })();
  var Xe = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: fe.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
  };
  (Xe.optgroup = Xe.option),
    (Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead),
    (Xe.th = Xe.td);
  var Ue = /<|&#?\w+;/,
    Ve = /<tbody/i;
  !(function () {
    var t,
      n,
      r = re.createElement('div');
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = 'on' + t),
        (fe[t] = n in e) ||
          (r.setAttribute(n, 't'), (fe[t] = r.attributes[n].expando === !1));
    r = null;
  })();
  var Ye = /^(?:input|select|textarea)$/i,
    Je = /^key/,
    Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ke = /^(?:focusinfocus|focusoutblur)$/,
    Qe = /^([^.]*)(?:\.(.+)|)/;
  (pe.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = pe._data(e);
      if (m) {
        for (
          n.handler && ((u = n), (n = u.handler), (i = u.selector)),
            n.guid || (n.guid = pe.guid++),
            (a = m.events) || (a = m.events = {}),
            (c = m.handle) ||
              ((c = m.handle =
                function (e) {
                  return 'undefined' == typeof pe ||
                    (e && pe.event.triggered === e.type)
                    ? void 0
                    : pe.event.dispatch.apply(c.elem, arguments);
                }),
              (c.elem = e)),
            t = (t || '').match(De) || [''],
            s = t.length;
          s--;

        )
          (o = Qe.exec(t[s]) || []),
            (p = g = o[1]),
            (h = (o[2] || '').split('.').sort()),
            p &&
              ((l = pe.event.special[p] || {}),
              (p = (i ? l.delegateType : l.bindType) || p),
              (l = pe.event.special[p] || {}),
              (f = pe.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && pe.expr.match.needsContext.test(i),
                  namespace: h.join('.')
                },
                u
              )),
              (d = a[p]) ||
                ((d = a[p] = []),
                (d.delegateCount = 0),
                (l.setup && l.setup.call(e, r, h, c) !== !1) ||
                  (e.addEventListener
                    ? e.addEventListener(p, c, !1)
                    : e.attachEvent && e.attachEvent('on' + p, c))),
              l.add &&
                (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, f) : d.push(f),
              (pe.event.global[p] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        m = pe.hasData(e) && pe._data(e);
      if (m && (c = m.events)) {
        for (t = (t || '').match(De) || [''], l = t.length; l--; )
          if (
            ((s = Qe.exec(t[l]) || []),
            (p = g = s[1]),
            (h = (s[2] || '').split('.').sort()),
            p)
          ) {
            for (
              f = pe.event.special[p] || {},
                p = (r ? f.delegateType : f.bindType) || p,
                d = c[p] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                u = o = d.length;
              o--;

            )
              (a = d[o]),
                (!i && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ('**' !== r || !a.selector)) ||
                  (d.splice(o, 1),
                  a.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, a));
            u &&
              !d.length &&
              ((f.teardown && f.teardown.call(e, h, m.handle) !== !1) ||
                pe.removeEvent(e, p, m.handle),
              delete c[p]);
          } else for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
        pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, 'events'));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [r || re],
        p = ce.call(t, 'type') ? t.type : t,
        h = ce.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = c = r = r || re),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ke.test(p + pe.event.triggered) &&
          (p.indexOf('.') > -1 &&
            ((h = p.split('.')), (p = h.shift()), h.sort()),
          (a = p.indexOf(':') < 0 && 'on' + p),
          (t = t[pe.expando] ? t : new pe.Event(p, 'object' == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = h.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : pe.makeArray(n, [t])),
          (l = pe.event.special[p] || {}),
          i || !l.trigger || l.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !l.noBubble && !pe.isWindow(r)) {
          for (
            u = l.delegateType || p, Ke.test(u + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            d.push(s), (c = s);
          c === (r.ownerDocument || re) &&
            d.push(c.defaultView || c.parentWindow || e);
        }
        for (f = 0; (s = d[f++]) && !t.isPropagationStopped(); )
          (t.type = f > 1 ? u : l.bindType || p),
            (o =
              (pe._data(s, 'events') || {})[t.type] && pe._data(s, 'handle')),
            o && o.apply(s, n),
            (o = a && s[a]),
            o &&
              o.apply &&
              He(s) &&
              ((t.result = o.apply(s, n)),
              t.result === !1 && t.preventDefault());
        if (
          ((t.type = p),
          !i &&
            !t.isDefaultPrevented() &&
            (!l._default || l._default.apply(d.pop(), n) === !1) &&
            He(r) &&
            a &&
            r[p] &&
            !pe.isWindow(r))
        ) {
          (c = r[a]), c && (r[a] = null), (pe.event.triggered = p);
          try {
            r[p]();
          } catch (g) {}
          (pe.event.triggered = void 0), c && (r[a] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = pe.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = ie.call(arguments),
        u = (pe._data(this, 'events') || {})[e.type] || [],
        l = pe.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, e) !== !1)
      ) {
        for (
          a = pe.event.handlers.call(this, e, u), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              (r = (
                (pe.event.special[o.origType] || {}).handle || o.handler
              ).apply(i.elem, s)),
              void 0 !== r &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ('click' !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || 'click' !== e.type)) {
            for (r = [], n = 0; n < s; n++)
              (o = t[n]),
                (i = o.selector + ' '),
                void 0 === r[i] &&
                  (r[i] = o.needsContext
                    ? pe(i, this).index(u) > -1
                    : pe.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[pe.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new pe.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || re),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      }
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' '
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = e.target.ownerDocument || re),
            (i = r.documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== b() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === b() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (
            pe.nodeName(this, 'input') &&
            'checkbox' === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return pe.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n) {
      var r = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
      pe.event.trigger(r, null, t),
        r.isDefaultPrevented() && n.preventDefault();
    }
  }),
    (pe.removeEvent = re.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var r = 'on' + t;
          e.detachEvent &&
            ('undefined' == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
        }),
    (pe.Event = function (e, t) {
      return this instanceof pe.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? v
                  : x))
            : (this.type = e),
          t && pe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || pe.now()),
          void (this[pe.expando] = !0))
        : new pe.Event(e, t);
    }),
    (pe.Event.prototype = {
      constructor: pe.Event,
      isDefaultPrevented: x,
      isPropagationStopped: x,
      isImmediatePropagationStopped: x,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = v),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = v),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = v),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    pe.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function (e, t) {
        pe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || pe.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          }
        };
      }
    ),
    fe.submit ||
      (pe.event.special.submit = {
        setup: function () {
          return (
            !pe.nodeName(this, 'form') &&
            void pe.event.add(
              this,
              'click._submit keypress._submit',
              function (e) {
                var t = e.target,
                  n =
                    pe.nodeName(t, 'input') || pe.nodeName(t, 'button')
                      ? pe.prop(t, 'form')
                      : void 0;
                n &&
                  !pe._data(n, 'submit') &&
                  (pe.event.add(n, 'submit._submit', function (e) {
                    e._submitBubble = !0;
                  }),
                  pe._data(n, 'submit', !0));
              }
            )
          );
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              pe.event.simulate('submit', this.parentNode, e));
        },
        teardown: function () {
          return (
            !pe.nodeName(this, 'form') && void pe.event.remove(this, '._submit')
          );
        }
      }),
    fe.change ||
      (pe.event.special.change = {
        setup: function () {
          return Ye.test(this.nodeName)
            ? (('checkbox' !== this.type && 'radio' !== this.type) ||
                (pe.event.add(this, 'propertychange._change', function (e) {
                  'checked' === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                pe.event.add(this, 'click._change', function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    pe.event.simulate('change', this, e);
                })),
              !1)
            : void pe.event.add(this, 'beforeactivate._change', function (e) {
                var t = e.target;
                Ye.test(t.nodeName) &&
                  !pe._data(t, 'change') &&
                  (pe.event.add(t, 'change._change', function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      pe.event.simulate('change', this.parentNode, e);
                  }),
                  pe._data(t, 'change', !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ('radio' !== t.type && 'checkbox' !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return pe.event.remove(this, '._change'), !Ye.test(this.nodeName);
        }
      }),
    fe.focusin ||
      pe.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          pe.event.simulate(t, e.target, pe.event.fix(e));
        };
        pe.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = pe._data(r, t);
            i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = pe._data(r, t) - 1;
            i
              ? pe._data(r, t, i)
              : (r.removeEventListener(e, n, !0), pe._removeData(r, t));
          }
        };
      }),
    pe.fn.extend({
      on: function (e, t, n, r) {
        return w(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return w(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            pe(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t !== !1 && 'function' != typeof t) || ((n = t), (t = void 0)),
          n === !1 && (n = x),
          this.each(function () {
            pe.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          pe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return pe.event.trigger(e, t, n, !0);
      }
    });
  var Ze = / jQuery\d+="(?:null|\d+)"/g,
    et = new RegExp('<(?:' + ze + ')[\\s/>]', 'i'),
    tt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    nt = /<script|<style|<link/i,
    rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    it = /^true\/(.*)/,
    ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    at = p(re),
    st = at.appendChild(re.createElement('div'));
  pe.extend({
    htmlPrefilter: function (e) {
      return e.replace(tt, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = pe.contains(e.ownerDocument, e);
      if (
        (fe.html5Clone || pe.isXMLDoc(e) || !et.test('<' + e.nodeName + '>')
          ? (o = e.cloneNode(!0))
          : ((st.innerHTML = e.outerHTML), st.removeChild((o = st.firstChild))),
        !(
          (fe.noCloneEvent && fe.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          pe.isXMLDoc(e)
        ))
      )
        for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)
          r[a] && k(i, r[a]);
      if (t)
        if (n)
          for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)
            N(i, r[a]);
        else N(e, o);
      return (
        (r = h(o, 'script')),
        r.length > 0 && g(r, !u && h(e, 'script')),
        (r = s = i = null),
        o
      );
    },
    cleanData: function (e, t) {
      for (
        var n,
          r,
          i,
          o,
          a = 0,
          s = pe.expando,
          u = pe.cache,
          l = fe.attributes,
          c = pe.event.special;
        null != (n = e[a]);
        a++
      )
        if ((t || He(n)) && ((i = n[s]), (o = i && u[i]))) {
          if (o.events)
            for (r in o.events)
              c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
          u[i] &&
            (delete u[i],
            l || 'undefined' == typeof n.removeAttribute
              ? (n[s] = void 0)
              : n.removeAttribute(s),
            ne.push(i));
        }
    }
  }),
    pe.fn.extend({
      domManip: S,
      detach: function (e) {
        return A(this, e, !0);
      },
      remove: function (e) {
        return A(this, e);
      },
      text: function (e) {
        return Pe(
          this,
          function (e) {
            return void 0 === e
              ? pe.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || re).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return S(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = T(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return S(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = T(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return S(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return S(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && pe.nodeName(e, 'select') && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return pe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Pe(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(Ze, '') : void 0;
            if (
              'string' == typeof e &&
              !nt.test(e) &&
              (fe.htmlSerialize || !et.test(e)) &&
              (fe.leadingWhitespace || !$e.test(e)) &&
              !Xe[(We.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = pe.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (pe.cleanData(h(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return S(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            pe.inArray(this, e) < 0 &&
              (pe.cleanData(h(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    pe.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (e, t) {
        pe.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++)
            (n = r === a ? this : this.clone(!0)),
              pe(o[r])[t](n),
              ae.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var ut,
    lt = { HTML: 'block', BODY: 'block' },
    ct = /^margin/,
    ft = new RegExp('^(' + Fe + ')(?!px)[a-z%]+$', 'i'),
    dt = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    },
    pt = re.documentElement;
  !(function () {
    function t() {
      var t,
        c,
        f = re.documentElement;
      f.appendChild(u),
        (l.style.cssText =
          '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
        (n = i = s = !1),
        (r = a = !0),
        e.getComputedStyle &&
          ((c = e.getComputedStyle(l)),
          (n = '1%' !== (c || {}).top),
          (s = '2px' === (c || {}).marginLeft),
          (i = '4px' === (c || { width: '4px' }).width),
          (l.style.marginRight = '50%'),
          (r = '4px' === (c || { marginRight: '4px' }).marginRight),
          (t = l.appendChild(re.createElement('div'))),
          (t.style.cssText = l.style.cssText =
            '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
          (t.style.marginRight = t.style.width = '0'),
          (l.style.width = '1px'),
          (a = !parseFloat((e.getComputedStyle(t) || {}).marginRight)),
          l.removeChild(t)),
        (l.style.display = 'none'),
        (o = 0 === l.getClientRects().length),
        o &&
          ((l.style.display = ''),
          (l.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
          (l.childNodes[0].style.borderCollapse = 'separate'),
          (t = l.getElementsByTagName('td')),
          (t[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
          (o = 0 === t[0].offsetHeight),
          o &&
            ((t[0].style.display = ''),
            (t[1].style.display = 'none'),
            (o = 0 === t[0].offsetHeight))),
        f.removeChild(u);
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = re.createElement('div'),
      l = re.createElement('div');
    l.style &&
      ((l.style.cssText = 'float:left;opacity:.5'),
      (fe.opacity = '0.5' === l.style.opacity),
      (fe.cssFloat = !!l.style.cssFloat),
      (l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (fe.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      (u = re.createElement('div')),
      (u.style.cssText =
        'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      (l.innerHTML = ''),
      u.appendChild(l),
      (fe.boxSizing =
        '' === l.style.boxSizing ||
        '' === l.style.MozBoxSizing ||
        '' === l.style.WebkitBoxSizing),
      pe.extend(fe, {
        reliableHiddenOffsets: function () {
          return null == n && t(), o;
        },
        boxSizingReliable: function () {
          return null == n && t(), i;
        },
        pixelMarginRight: function () {
          return null == n && t(), r;
        },
        pixelPosition: function () {
          return null == n && t(), n;
        },
        reliableMarginRight: function () {
          return null == n && t(), a;
        },
        reliableMarginLeft: function () {
          return null == n && t(), s;
        }
      }));
  })();
  var ht,
    gt,
    mt = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((ht = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      }),
      (gt = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || ht(e)),
          (a = n ? n.getPropertyValue(t) || n[t] : void 0),
          ('' !== a && void 0 !== a) ||
            pe.contains(e.ownerDocument, e) ||
            (a = pe.style(e, t)),
          n &&
            !fe.pixelMarginRight() &&
            ft.test(a) &&
            ct.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o)),
          void 0 === a ? a : a + ''
        );
      }))
    : pt.currentStyle &&
      ((ht = function (e) {
        return e.currentStyle;
      }),
      (gt = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || ht(e)),
          (a = n ? n[t] : void 0),
          null == a && s && s[t] && (a = s[t]),
          ft.test(a) &&
            !mt.test(t) &&
            ((r = s.left),
            (i = e.runtimeStyle),
            (o = i && i.left),
            o && (i.left = e.currentStyle.left),
            (s.left = 'fontSize' === t ? '1em' : a),
            (a = s.pixelLeft + 'px'),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + '' || 'auto'
        );
      }));
  var yt = /alpha\([^)]*\)/i,
    vt = /opacity\s*=\s*([^)]*)/i,
    xt = /^(none|table(?!-c[ea]).+)/,
    bt = new RegExp('^(' + Fe + ')(.*)$', 'i'),
    wt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Tt = { letterSpacing: '0', fontWeight: '400' },
    Ct = ['Webkit', 'O', 'Moz', 'ms'],
    Et = re.createElement('div').style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = gt(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: fe.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = pe.camelCase(t),
          u = e.style;
        if (
          ((t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
          (a = pe.cssHooks[t] || pe.cssHooks[s]),
          void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (
          ((o = typeof n),
          'string' === o &&
            (i = Me.exec(n)) &&
            i[1] &&
            ((n = d(e, t, i)), (o = 'number')),
          null != n &&
            n === n &&
            ('number' === o &&
              (n += (i && i[3]) || (pe.cssNumber[s] ? '' : 'px')),
            fe.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (u[t] = 'inherit'),
            !(a && 'set' in a && void 0 === (n = a.set(e, n, r)))))
        )
          try {
            u[t] = n;
          } catch (l) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = pe.camelCase(t);
      return (
        (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
        (a = pe.cssHooks[t] || pe.cssHooks[s]),
        a && 'get' in a && (o = a.get(e, !0, n)),
        void 0 === o && (o = gt(e, t, r)),
        'normal' === o && t in Tt && (o = Tt[t]),
        '' === n || n
          ? ((i = parseFloat(o)), n === !0 || isFinite(i) ? i || 0 : o)
          : o
      );
    }
  }),
    pe.each(['height', 'width'], function (e, t) {
      pe.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return xt.test(pe.css(e, 'display')) && 0 === e.offsetWidth
              ? dt(e, wt, function () {
                  return M(e, t, r);
                })
              : M(e, t, r);
        },
        set: function (e, n, r) {
          var i = r && ht(e);
          return _(
            e,
            n,
            r
              ? F(
                  e,
                  t,
                  r,
                  fe.boxSizing &&
                    'border-box' === pe.css(e, 'boxSizing', !1, i),
                  i
                )
              : 0
          );
        }
      };
    }),
    fe.opacity ||
      (pe.cssHooks.opacity = {
        get: function (e, t) {
          return vt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ''
          )
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : t
            ? '1'
            : '';
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = pe.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
            o = (r && r.filter) || n.filter || '';
          (n.zoom = 1),
            ((t >= 1 || '' === t) &&
              '' === pe.trim(o.replace(yt, '')) &&
              n.removeAttribute &&
              (n.removeAttribute('filter'), '' === t || (r && !r.filter))) ||
              (n.filter = yt.test(o) ? o.replace(yt, i) : o + ' ' + i);
        }
      }),
    (pe.cssHooks.marginRight = L(fe.reliableMarginRight, function (e, t) {
      if (t) return dt(e, { display: 'inline-block' }, gt, [e, 'marginRight']);
    })),
    (pe.cssHooks.marginLeft = L(fe.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(gt(e, 'marginLeft')) ||
            (pe.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                dt(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + 'px'
        );
    })),
    pe.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (pe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n];
            r < 4;
            r++
          )
            i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        }
      }),
        ct.test(e) || (pe.cssHooks[e + t].set = _);
    }),
    pe.fn.extend({
      css: function (e, t) {
        return Pe(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (pe.isArray(t)) {
              for (r = ht(e), i = t.length; a < i; a++)
                o[t[a]] = pe.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return q(this, !0);
      },
      hide: function () {
        return q(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Re(this) ? pe(this).show() : pe(this).hide();
            });
      }
    }),
    (pe.Tween = O),
    (O.prototype = {
      constructor: O,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || pe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (pe.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = O.propHooks[this.prop];
        return e && e.get ? e.get(this) : O.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = O.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                pe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : O.propHooks._default.set(this),
          this
        );
      }
    }),
    (O.prototype.init.prototype = O.prototype),
    (O.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = pe.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
        },
        set: function (e) {
          pe.fx.step[e.prop]
            ? pe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[pe.cssProps[e.prop]] &&
                !pe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : pe.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }),
    (O.propHooks.scrollTop = O.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }),
    (pe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (pe.fx = O.prototype.init),
    (pe.fx.step = {});
  var Nt,
    kt,
    St = /^(?:toggle|show|hide)$/,
    At = /queueHooks$/;
  (pe.Animation = pe.extend($, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return d(n.elem, e, Me.exec(t), n), n;
        }
      ]
    },
    tweener: function (e, t) {
      pe.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.match(De));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          ($.tweeners[n] = $.tweeners[n] || []),
          $.tweeners[n].unshift(t);
    },
    prefilters: [W],
    prefilter: function (e, t) {
      t ? $.prefilters.unshift(e) : $.prefilters.push(e);
    }
  })),
    (pe.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? pe.extend({}, e)
          : {
              complete: n || (!n && t) || (pe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !pe.isFunction(t) && t)
            };
      return (
        (r.duration = pe.fx.off
          ? 0
          : 'number' == typeof r.duration
          ? r.duration
          : r.duration in pe.fx.speeds
          ? pe.fx.speeds[r.duration]
          : pe.fx.speeds._default),
        (null != r.queue && r.queue !== !0) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          pe.isFunction(r.old) && r.old.call(this),
            r.queue && pe.dequeue(this, r.queue);
        }),
        r
      );
    }),
    pe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Re)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = pe.isEmptyObject(e),
          o = pe.speed(t, n, r),
          a = function () {
            var t = $(this, pe.extend({}, e), o);
            (i || pe._data(this, 'finish')) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              i = null != e && e + 'queueHooks',
              o = pe.timers,
              a = pe._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && At.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || pe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = pe._data(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              o = pe.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                pe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    pe.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = pe.fn[t];
      pe.fn[t] = function (e, r, i) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(P(t, !0), e, r, i);
      };
    }),
    pe.each(
      {
        slideDown: P('show'),
        slideUp: P('hide'),
        slideToggle: P('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (e, t) {
        pe.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (pe.timers = []),
    (pe.fx.tick = function () {
      var e,
        t = pe.timers,
        n = 0;
      for (Nt = pe.now(); n < t.length; n++)
        (e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
      t.length || pe.fx.stop(), (Nt = void 0);
    }),
    (pe.fx.timer = function (e) {
      pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
    }),
    (pe.fx.interval = 13),
    (pe.fx.start = function () {
      kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval));
    }),
    (pe.fx.stop = function () {
      e.clearInterval(kt), (kt = null);
    }),
    (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pe.fn.delay = function (t, n) {
      return (
        (t = pe.fx ? pe.fx.speeds[t] || t : t),
        (n = n || 'fx'),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e,
        t = re.createElement('input'),
        n = re.createElement('div'),
        r = re.createElement('select'),
        i = r.appendChild(re.createElement('option'));
      (n = re.createElement('div')),
        n.setAttribute('className', 't'),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = n.getElementsByTagName('a')[0]),
        t.setAttribute('type', 'checkbox'),
        n.appendChild(t),
        (e = n.getElementsByTagName('a')[0]),
        (e.style.cssText = 'top:1px'),
        (fe.getSetAttribute = 't' !== n.className),
        (fe.style = /top/.test(e.getAttribute('style'))),
        (fe.hrefNormalized = '/a' === e.getAttribute('href')),
        (fe.checkOn = !!t.value),
        (fe.optSelected = i.selected),
        (fe.enctype = !!re.createElement('form').enctype),
        (r.disabled = !0),
        (fe.optDisabled = !i.disabled),
        (t = re.createElement('input')),
        t.setAttribute('value', ''),
        (fe.input = '' === t.getAttribute('value')),
        (t.value = 't'),
        t.setAttribute('type', 'radio'),
        (fe.radioValue = 't' === t.value);
    })();
  var Dt = /\r/g,
    jt = /[\x20\t\r\n\f]+/g;
  pe.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = pe.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, pe(this).val()) : e),
                null == i
                  ? (i = '')
                  : 'number' == typeof i
                  ? (i += '')
                  : pe.isArray(i) &&
                    (i = pe.map(i, function (e) {
                      return null == e ? '' : e + '';
                    })),
                (t =
                  pe.valHooks[this.type] ||
                  pe.valHooks[this.nodeName.toLowerCase()]),
                (t && 'set' in t && void 0 !== t.set(this, i, 'value')) ||
                  (this.value = i));
            })
          );
        if (i)
          return (
            (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]),
            t && 'get' in t && void 0 !== (n = t.get(i, 'value'))
              ? n
              : ((n = i.value),
                'string' == typeof n ? n.replace(Dt, '') : null == n ? '' : n)
          );
      }
    }
  }),
    pe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = pe.find.attr(e, 'value');
            return null != t ? t : pe.trim(pe.text(e)).replace(jt, ' ');
          }
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type || i < 0,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = i < 0 ? s : o ? i : 0;
              u < s;
              u++
            )
              if (
                ((n = r[u]),
                (n.selected || u === i) &&
                  (fe.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute('disabled')) &&
                  (!n.parentNode.disabled ||
                    !pe.nodeName(n.parentNode, 'optgroup')))
              ) {
                if (((t = pe(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = pe.makeArray(t), a = i.length;
              a--;

            )
              if (((r = i[a]), pe.inArray(pe.valHooks.option.get(r), o) > -1))
                try {
                  r.selected = n = !0;
                } catch (s) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          }
        }
      }
    }),
    pe.each(['radio', 'checkbox'], function () {
      (pe.valHooks[this] = {
        set: function (e, t) {
          if (pe.isArray(t))
            return (e.checked = pe.inArray(pe(e).val(), t) > -1);
        }
      }),
        fe.checkOn ||
          (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var Lt,
    Ht,
    qt = pe.expr.attrHandle,
    _t = /^(?:checked|selected)$/i,
    Ft = fe.getSetAttribute,
    Mt = fe.input;
  pe.fn.extend({
    attr: function (e, t) {
      return Pe(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    }
  }),
    pe.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? pe.prop(e, t, n)
            : ((1 === o && pe.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt))),
              void 0 !== n
                ? null === n
                  ? void pe.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : ((r = pe.find.attr(e, t)), null == r ? void 0 : r));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!fe.radioValue && 'radio' === t && pe.nodeName(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(De);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = pe.propFix[n] || n),
              pe.expr.match.bool.test(n)
                ? (Mt && Ft) || !_t.test(n)
                  ? (e[r] = !1)
                  : (e[pe.camelCase('default-' + n)] = e[r] = !1)
                : pe.attr(e, n, ''),
              e.removeAttribute(Ft ? n : r);
      }
    }),
    (Ht = {
      set: function (e, t, n) {
        return (
          t === !1
            ? pe.removeAttr(e, n)
            : (Mt && Ft) || !_t.test(n)
            ? e.setAttribute((!Ft && pe.propFix[n]) || n, n)
            : (e[pe.camelCase('default-' + n)] = e[n] = !0),
          n
        );
      }
    }),
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = qt[t] || pe.find.attr;
      (Mt && Ft) || !_t.test(t)
        ? (qt[t] = function (e, t, r) {
            var i, o;
            return (
              r ||
                ((o = qt[t]),
                (qt[t] = i),
                (i = null != n(e, t, r) ? t.toLowerCase() : null),
                (qt[t] = o)),
              i
            );
          })
        : (qt[t] = function (e, t, n) {
            if (!n)
              return e[pe.camelCase('default-' + t)] ? t.toLowerCase() : null;
          });
    }),
    (Mt && Ft) ||
      (pe.attrHooks.value = {
        set: function (e, t, n) {
          return pe.nodeName(e, 'input')
            ? void (e.defaultValue = t)
            : Lt && Lt.set(e, t, n);
        }
      }),
    Ft ||
      ((Lt = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          if (
            (r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ''),
            'value' === n || t === e.getAttribute(n))
          )
            return t;
        }
      }),
      (qt.id =
        qt.name =
        qt.coords =
          function (e, t, n) {
            var r;
            if (!n)
              return (r = e.getAttributeNode(t)) && '' !== r.value
                ? r.value
                : null;
          }),
      (pe.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: Lt.set
      }),
      (pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
          Lt.set(e, '' !== t && t, n);
        }
      }),
      pe.each(['width', 'height'], function (e, t) {
        pe.attrHooks[t] = {
          set: function (e, n) {
            if ('' === n) return e.setAttribute(t, 'auto'), n;
          }
        };
      })),
    fe.style ||
      (pe.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + '');
        }
      });
  var Ot = /^(?:input|select|textarea|button|object)$/i,
    Rt = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function (e, t) {
      return Pe(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = pe.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    }
  }),
    pe.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && pe.isXMLDoc(e)) ||
              ((t = pe.propFix[t] || t), (i = pe.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = pe.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : Ot.test(e.nodeName) || (Rt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    fe.hrefNormalized ||
      pe.each(['href', 'src'], function (e, t) {
        pe.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          }
        };
      }),
    fe.optSelected ||
      (pe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    pe.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        pe.propFix[this.toLowerCase()] = this;
      }
    ),
    fe.enctype || (pe.propFix.enctype = 'encoding');
  var Pt = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).addClass(e.call(this, t, z(this)));
        });
      if ('string' == typeof e && e)
        for (t = e.match(De) || []; (n = this[u++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (' ' + i + ' ').replace(Pt, ' ')))
          ) {
            for (a = 0; (o = t[a++]); )
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            (s = pe.trim(r)), i !== s && pe.attr(n, 'class', s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).removeClass(e.call(this, t, z(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e)
        for (t = e.match(De) || []; (n = this[u++]); )
          if (
            ((i = z(n)),
            (r = 1 === n.nodeType && (' ' + i + ' ').replace(Pt, ' ')))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(' ' + o + ' ') > -1; )
                r = r.replace(' ' + o + ' ', ' ');
            (s = pe.trim(r)), i !== s && pe.attr(n, 'class', s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : pe.isFunction(e)
        ? this.each(function (n) {
            pe(this).toggleClass(e.call(this, n, z(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ('string' === n)
              for (r = 0, i = pe(this), o = e.match(De) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && 'boolean' !== n) ||
                ((t = z(this)),
                t && pe._data(this, '__className__', t),
                pe.attr(
                  this,
                  'class',
                  t || e === !1 ? '' : pe._data(this, '__className__') || ''
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = ' ' + e + ' '; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (' ' + z(n) + ' ').replace(Pt, ' ').indexOf(t) > -1
        )
          return !0;
      return !1;
    }
  }),
    pe.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, t) {
        pe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    pe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    });
  var Bt = e.location,
    Wt = pe.now(),
    It = /\?/,
    $t =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (pe.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + '');
    var n,
      r = null,
      i = pe.trim(t + '');
    return i &&
      !pe.trim(
        i.replace($t, function (e, t, i, o) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), '')
          );
        })
      )
      ? Function('return ' + i)()
      : pe.error('Invalid JSON: ' + t);
  }),
    (pe.parseXML = function (t) {
      var n, r;
      if (!t || 'string' != typeof t) return null;
      try {
        e.DOMParser
          ? ((r = new e.DOMParser()), (n = r.parseFromString(t, 'text/xml')))
          : ((n = new e.ActiveXObject('Microsoft.XMLDOM')),
            (n.async = 'false'),
            n.loadXML(t));
      } catch (i) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName('parsererror').length) ||
          pe.error('Invalid XML: ' + t),
        n
      );
    });
  var zt = /#.*$/,
    Xt = /([?&])_=[^&]*/,
    Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Yt = /^(?:GET|HEAD)$/,
    Jt = /^\/\//,
    Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Kt = {},
    Qt = {},
    Zt = '*/'.concat('*'),
    en = Bt.href,
    tn = Gt.exec(en.toLowerCase()) || [];
  pe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: en,
      type: 'GET',
      isLocal: Vt.test(tn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Zt,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': pe.parseJSON,
        'text xml': pe.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function (e, t) {
      return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
    },
    ajaxPrefilter: X(Kt),
    ajaxTransport: X(Qt),
    ajax: function (t, n) {
      function r(t, n, r, i) {
        var o,
          f,
          v,
          x,
          w,
          C = n;
        2 !== b &&
          ((b = 2),
          u && e.clearTimeout(u),
          (c = void 0),
          (s = i || ''),
          (T.readyState = t > 0 ? 4 : 0),
          (o = (t >= 200 && t < 300) || 304 === t),
          r && (x = Y(d, T, r)),
          (x = J(d, x, T, o)),
          o
            ? (d.ifModified &&
                ((w = T.getResponseHeader('Last-Modified')),
                w && (pe.lastModified[a] = w),
                (w = T.getResponseHeader('etag')),
                w && (pe.etag[a] = w)),
              204 === t || 'HEAD' === d.type
                ? (C = 'nocontent')
                : 304 === t
                ? (C = 'notmodified')
                : ((C = x.state), (f = x.data), (v = x.error), (o = !v)))
            : ((v = C), (!t && C) || ((C = 'error'), t < 0 && (t = 0))),
          (T.status = t),
          (T.statusText = (n || C) + ''),
          o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]),
          T.statusCode(y),
          (y = void 0),
          l && h.trigger(o ? 'ajaxSuccess' : 'ajaxError', [T, d, o ? f : v]),
          m.fireWith(p, [T, C]),
          l &&
            (h.trigger('ajaxComplete', [T, d]),
            --pe.active || pe.event.trigger('ajaxStop')));
      }
      'object' == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = pe.ajaxSetup({}, n),
        p = d.context || d,
        h = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
        g = pe.Deferred(),
        m = pe.Callbacks('once memory'),
        y = d.statusCode || {},
        v = {},
        x = {},
        b = 0,
        w = 'canceled',
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!f)
                for (f = {}; (t = Ut.exec(s)); ) f[t[1].toLowerCase()] = t[2];
              t = f[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || ((e = x[n] = x[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return b || (d.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (b < 2) for (t in e) y[t] = [y[t], e[t]];
              else T.always(e[T.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return c && c.abort(t), r(0, t), this;
          }
        };
      if (
        ((g.promise(T).complete = m.add),
        (T.success = T.done),
        (T.error = T.fail),
        (d.url = ((t || d.url || en) + '')
          .replace(zt, '')
          .replace(Jt, tn[1] + '//')),
        (d.type = n.method || n.type || d.method || d.type),
        (d.dataTypes = pe
          .trim(d.dataType || '*')
          .toLowerCase()
          .match(De) || ['']),
        null == d.crossDomain &&
          ((i = Gt.exec(d.url.toLowerCase())),
          (d.crossDomain = !(
            !i ||
            (i[1] === tn[1] &&
              i[2] === tn[2] &&
              (i[3] || ('http:' === i[1] ? '80' : '443')) ===
                (tn[3] || ('http:' === tn[1] ? '80' : '443')))
          ))),
        d.data &&
          d.processData &&
          'string' != typeof d.data &&
          (d.data = pe.param(d.data, d.traditional)),
        U(Kt, d, n, T),
        2 === b)
      )
        return T;
      (l = pe.event && d.global),
        l && 0 === pe.active++ && pe.event.trigger('ajaxStart'),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !Yt.test(d.type)),
        (a = d.url),
        d.hasContent ||
          (d.data &&
            ((a = d.url += (It.test(a) ? '&' : '?') + d.data), delete d.data),
          d.cache === !1 &&
            (d.url = Xt.test(a)
              ? a.replace(Xt, '$1_=' + Wt++)
              : a + (It.test(a) ? '&' : '?') + '_=' + Wt++)),
        d.ifModified &&
          (pe.lastModified[a] &&
            T.setRequestHeader('If-Modified-Since', pe.lastModified[a]),
          pe.etag[a] && T.setRequestHeader('If-None-Match', pe.etag[a])),
        ((d.data && d.hasContent && d.contentType !== !1) || n.contentType) &&
          T.setRequestHeader('Content-Type', d.contentType),
        T.setRequestHeader(
          'Accept',
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ('*' !== d.dataTypes[0] ? ', ' + Zt + '; q=0.01' : '')
            : d.accepts['*']
        );
      for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
      if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b))
        return T.abort();
      w = 'abort';
      for (o in { success: 1, error: 1, complete: 1 }) T[o](d[o]);
      if ((c = U(Qt, d, n, T))) {
        if (((T.readyState = 1), l && h.trigger('ajaxSend', [T, d]), 2 === b))
          return T;
        d.async &&
          d.timeout > 0 &&
          (u = e.setTimeout(function () {
            T.abort('timeout');
          }, d.timeout));
        try {
          (b = 1), c.send(v, r);
        } catch (C) {
          if (!(b < 2)) throw C;
          r(-1, C);
        }
      } else r(-1, 'No Transport');
      return T;
    },
    getJSON: function (e, t, n) {
      return pe.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return pe.get(e, void 0, t, 'script');
    }
  }),
    pe.each(['get', 'post'], function (e, t) {
      pe[t] = function (e, n, r, i) {
        return (
          pe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          pe.ajax(
            pe.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              pe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (pe._evalUrl = function (e) {
      return pe.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    pe.fn.extend({
      wrapAll: function (e) {
        if (pe.isFunction(e))
          return this.each(function (t) {
            pe(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return pe.isFunction(e)
          ? this.each(function (t) {
              pe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = pe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = pe.isFunction(e);
        return this.each(function (n) {
          pe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            pe.nodeName(this, 'body') || pe(this).replaceWith(this.childNodes);
          })
          .end();
      }
    }),
    (pe.expr.filters.hidden = function (e) {
      return fe.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : K(e);
    }),
    (pe.expr.filters.visible = function (e) {
      return !pe.expr.filters.hidden(e);
    });
  var nn = /%20/g,
    rn = /\[\]$/,
    on = /\r?\n/g,
    an = /^(?:submit|button|image|reset|file)$/i,
    sn = /^(?:input|select|textarea|keygen)/i;
  (pe.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = pe.isFunction(t) ? t() : null == t ? '' : t),
          (r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
      pe.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
    )
      pe.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Q(n, e[n], t, i);
    return r.join('&').replace(nn, '+');
  }),
    pe.fn.extend({
      serialize: function () {
        return pe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = pe.prop(this, 'elements');
          return e ? pe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !pe(this).is(':disabled') &&
              sn.test(this.nodeName) &&
              !an.test(e) &&
              (this.checked || !Be.test(e))
            );
          })
          .map(function (e, t) {
            var n = pe(this).val();
            return null == n
              ? null
              : pe.isArray(n)
              ? pe.map(n, function (e) {
                  return { name: t.name, value: e.replace(on, '\r\n') };
                })
              : { name: t.name, value: n.replace(on, '\r\n') };
          })
          .get();
      }
    }),
    (pe.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return this.isLocal
              ? ee()
              : re.documentMode > 8
              ? Z()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Z()) ||
                ee();
          }
        : Z);
  var un = 0,
    ln = {},
    cn = pe.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent('onunload', function () {
      for (var e in ln) ln[e](void 0, !0);
    }),
    (fe.cors = !!cn && 'withCredentials' in cn),
    (cn = fe.ajax = !!cn),
    cn &&
      pe.ajaxTransport(function (t) {
        if (!t.crossDomain || fe.cors) {
          var n;
          return {
            send: function (r, i) {
              var o,
                a = t.xhr(),
                s = ++un;
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) a[o] = t.xhrFields[o];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r['X-Requested-With'] ||
                  (r['X-Requested-With'] = 'XMLHttpRequest');
              for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + '');
              a.send((t.hasContent && t.data) || null),
                (n = function (e, r) {
                  var o, u, l;
                  if (n && (r || 4 === a.readyState))
                    if (
                      (delete ln[s],
                      (n = void 0),
                      (a.onreadystatechange = pe.noop),
                      r)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (l = {}),
                        (o = a.status),
                        'string' == typeof a.responseText &&
                          (l.text = a.responseText);
                      try {
                        u = a.statusText;
                      } catch (c) {
                        u = '';
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = l.text ? 200 : 404);
                    }
                  l && i(o, u, l, a.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === a.readyState
                    ? e.setTimeout(n)
                    : (a.onreadystatechange = ln[s] = n)
                  : n();
            },
            abort: function () {
              n && n(void 0, !0);
            }
          };
        }
      }),
    pe.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return pe.globalEval(e), e;
        }
      }
    }),
    pe.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = 'GET'), (e.global = !1));
    }),
    pe.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var t,
          n = re.head || pe('head')[0] || re.documentElement;
        return {
          send: function (r, i) {
            (t = re.createElement('script')),
              (t.async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || i(200, 'success'));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          }
        };
      }
    });
  var fn = [],
    dn = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = fn.pop() || pe.expando + '_' + Wt++;
      return (this[e] = !0), e;
    }
  }),
    pe.ajaxPrefilter('json jsonp', function (t, n, r) {
      var i,
        o,
        a,
        s =
          t.jsonp !== !1 &&
          (dn.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              dn.test(t.data) &&
              'data');
      if (s || 'jsonp' === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            pe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(dn, '$1' + i))
            : t.jsonp !== !1 &&
              (t.url += (It.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
          (t.converters['script json'] = function () {
            return a || pe.error(i + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? pe(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), fn.push(i)),
              a && pe.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script'
        );
    }),
    (pe.parseHTML = function (e, t, n) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof t && ((n = t), (t = !1)), (t = t || re);
      var r = Te.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = y([e], t, i)),
          i && i.length && pe(i).remove(),
          pe.merge([], r.childNodes));
    });
  var pn = pe.fn.load;
  return (
    (pe.fn.load = function (e, t, n) {
      if ('string' != typeof e && pn) return pn.apply(this, arguments);
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        s > -1 && ((r = pe.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
        pe.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        a.length > 0 &&
          pe
            .ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? pe('<div>').append(pe.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    pe.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function (e, t) {
        pe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (pe.expr.filters.animated = function (e) {
      return pe.grep(pe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (pe.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = pe.css(e, 'position'),
          f = pe(e),
          d = {};
        'static' === c && (e.style.position = 'relative'),
          (s = f.offset()),
          (o = pe.css(e, 'top')),
          (u = pe.css(e, 'left')),
          (l =
            ('absolute' === c || 'fixed' === c) &&
            pe.inArray('auto', [o, u]) > -1),
          l
            ? ((r = f.position()), (a = r.top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, d) : f.css(d);
      }
    }),
    pe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                pe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          o = i && i.ownerDocument;
        if (o)
          return (
            (t = o.documentElement),
            pe.contains(t, i)
              ? ('undefined' != typeof i.getBoundingClientRect &&
                  (r = i.getBoundingClientRect()),
                (n = te(o)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0)
                })
              : r
          );
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            'fixed' === pe.css(r, 'position')
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                pe.nodeName(e[0], 'html') || (n = e.offset()),
                (n.top += pe.css(e[0], 'borderTopWidth', !0)),
                (n.left += pe.css(e[0], 'borderLeftWidth', !0))),
            {
              top: t.top - n.top - pe.css(r, 'marginTop', !0),
              left: t.left - n.left - pe.css(r, 'marginLeft', !0)
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !pe.nodeName(e, 'html') && 'static' === pe.css(e, 'position');

          )
            e = e.offsetParent;
          return e || pt;
        });
      }
    }),
    pe.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (r) {
          return Pe(
            this,
            function (e, r, i) {
              var o = te(e);
              return void 0 === i
                ? o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[r]
                  : e[r]
                : void (o
                    ? o.scrollTo(
                        n ? pe(o).scrollLeft() : i,
                        n ? i : pe(o).scrollTop()
                      )
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    pe.each(['top', 'left'], function (e, t) {
      pe.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
        if (n)
          return (n = gt(e, t)), ft.test(n) ? pe(e).position()[t] + 'px' : n;
      });
    }),
    pe.each({ Height: 'height', Width: 'width' }, function (e, t) {
      pe.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, r) {
          pe.fn[r] = function (r, i) {
            var o = arguments.length && (n || 'boolean' != typeof r),
              a = n || (r === !0 || i === !0 ? 'margin' : 'border');
            return Pe(
              this,
              function (t, n, r) {
                var i;
                return pe.isWindow(t)
                  ? t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      i['scroll' + e],
                      t.body['offset' + e],
                      i['offset' + e],
                      i['client' + e]
                    ))
                  : void 0 === r
                  ? pe.css(t, n, a)
                  : pe.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    pe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      }
    }),
    (pe.fn.size = function () {
      return this.length;
    }),
    (pe.fn.andSelf = pe.fn.addBack),
    layui.define(function (e) {
      (layui.$ = pe), e('jquery', pe);
    }),
    pe
  );
});
!(function (e, t) {
  'use strict';
  var i,
    n,
    a = e.layui && layui.define,
    o = {
      getPath: (function () {
        var t = document.currentScript
            ? document.currentScript.src
            : (function () {
                for (
                  var e, t = document.scripts, i = t.length - 1, n = i;
                  n > 0;
                  n--
                )
                  if ('interactive' === t[n].readyState) {
                    e = t[n].src;
                    break;
                  }
                return e || t[i].src;
              })(),
          i = e.LAYUI_GLOBAL || {};
        return i.layer_dir || t.substring(0, t.lastIndexOf('/') + 1);
      })(),
      config: {},
      end: {},
      minIndex: 0,
      minLeft: [],
      btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
      type: ['dialog', 'page', 'iframe', 'loading', 'tips'],
      getStyle: function (t, i) {
        var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
        return n[n.getPropertyValue ? 'getPropertyValue' : 'getAttribute'](i);
      },
      link: function (t, i, n) {
        if (r.path) {
          var a = document.getElementsByTagName('head')[0],
            s = document.createElement('link');
          'string' == typeof i && (n = i);
          var l = (n || t).replace(/\.|\//g, ''),
            f = 'layuicss-' + l,
            c = 'creating',
            u = 0;
          (s.rel = 'stylesheet'),
            (s.href = r.path + t),
            (s.id = f),
            document.getElementById(f) || a.appendChild(s),
            'function' == typeof i &&
              !(function d(t) {
                var n = 100,
                  a = document.getElementById(f);
                return ++u > 1e4 / n
                  ? e.console && console.error(l + '.css: Invalid')
                  : void (1989 === parseInt(o.getStyle(a, 'width'))
                      ? (t === c && a.removeAttribute('lay-status'),
                        a.getAttribute('lay-status') === c
                          ? setTimeout(d, n)
                          : i())
                      : (a.setAttribute('lay-status', c),
                        setTimeout(function () {
                          d(c);
                        }, n)));
              })();
        }
      }
    },
    r = {
      v: '3.5.1',
      ie: (function () {
        var t = navigator.userAgent.toLowerCase();
        return (
          !!(e.ActiveXObject || 'ActiveXObject' in e) &&
          ((t.match(/msie\s(\d+)/) || [])[1] || '11')
        );
      })(),
      index: e.layer && e.layer.v ? 1e5 : 0,
      path: o.getPath,
      config: function (e, t) {
        return (
          (e = e || {}),
          (r.cache = o.config = i.extend({}, o.config, e)),
          (r.path = o.config.path || r.path),
          'string' == typeof e.extend && (e.extend = [e.extend]),
          o.config.path && r.ready(),
          e.extend
            ? (a
                ? layui.addcss('modules/layer/' + e.extend)
                : o.link('theme/' + e.extend),
              this)
            : this
        );
      },
      ready: function (e) {
        var t = 'layer',
          i = '',
          n =
            (a ? 'modules/layer/' : 'theme/') +
            'default/layer.css?v=' +
            r.v +
            i;
        return a ? layui.addcss(n, e, t) : o.link(n, e, t), this;
      },
      alert: function (e, t, n) {
        var a = 'function' == typeof t;
        return (
          a && (n = t), r.open(i.extend({ content: e, yes: n }, a ? {} : t))
        );
      },
      confirm: function (e, t, n, a) {
        var s = 'function' == typeof t;
        return (
          s && ((a = n), (n = t)),
          r.open(
            i.extend({ content: e, btn: o.btn, yes: n, btn2: a }, s ? {} : t)
          )
        );
      },
      msg: function (e, n, a) {
        var s = 'function' == typeof n,
          f = o.config.skin,
          c = (f ? f + ' ' + f + '-msg' : '') || 'layui-layer-msg',
          u = l.anim.length - 1;
        return (
          s && (a = n),
          r.open(
            i.extend(
              {
                content: e,
                time: 3e3,
                shade: !1,
                skin: c,
                title: !1,
                closeBtn: !1,
                btn: !1,
                resize: !1,
                end: a
              },
              s && !o.config.skin
                ? { skin: c + ' layui-layer-hui', anim: u }
                : (function () {
                    return (
                      (n = n || {}),
                      (n.icon === -1 || (n.icon === t && !o.config.skin)) &&
                        (n.skin = c + ' ' + (n.skin || 'layui-layer-hui')),
                      n
                    );
                  })()
            )
          )
        );
      },
      load: function (e, t) {
        return r.open(
          i.extend({ type: 3, icon: e || 0, resize: !1, shade: 0.01 }, t)
        );
      },
      tips: function (e, t, n) {
        return r.open(
          i.extend(
            {
              type: 4,
              content: [e, t],
              closeBtn: !1,
              time: 3e3,
              shade: !1,
              resize: !1,
              fixed: !1,
              maxWidth: 260
            },
            n
          )
        );
      }
    },
    s = function (e) {
      var t = this,
        a = function () {
          t.creat();
        };
      (t.index = ++r.index),
        (t.config.maxWidth = i(n).width() - 30),
        (t.config = i.extend({}, t.config, o.config, e)),
        document.body
          ? a()
          : setTimeout(function () {
              a();
            }, 30);
    };
  s.pt = s.prototype;
  var l = [
    'layui-layer',
    '.layui-layer-title',
    '.layui-layer-main',
    '.layui-layer-dialog',
    'layui-layer-iframe',
    'layui-layer-content',
    'layui-layer-btn',
    'layui-layer-close'
  ];
  (l.anim = [
    'layer-anim-00',
    'layer-anim-01',
    'layer-anim-02',
    'layer-anim-03',
    'layer-anim-04',
    'layer-anim-05',
    'layer-anim-06'
  ]),
    (l.SHADE = 'layui-layer-shade'),
    (l.MOVE = 'layui-layer-move'),
    (s.pt.config = {
      type: 0,
      shade: 0.3,
      fixed: !0,
      move: l[1],
      title: '&#x4FE1;&#x606F;',
      offset: 'auto',
      area: 'auto',
      closeBtn: 1,
      time: 0,
      zIndex: 19891014,
      maxWidth: 360,
      anim: 0,
      isOutAnim: !0,
      minStack: !0,
      icon: -1,
      moveType: 1,
      resize: !0,
      scrollbar: !0,
      tips: 2
    }),
    (s.pt.vessel = function (e, t) {
      var n = this,
        a = n.index,
        r = n.config,
        s = r.zIndex + a,
        f = 'object' == typeof r.title,
        c = r.maxmin && (1 === r.type || 2 === r.type),
        u = r.title
          ? '<div class="layui-layer-title" style="' +
            (f ? r.title[1] : '') +
            '">' +
            (f ? r.title[0] : r.title) +
            '</div>'
          : '';
      return (
        (r.zIndex = s),
        t(
          [
            r.shade
              ? '<div class="' +
                l.SHADE +
                '" id="' +
                l.SHADE +
                a +
                '" times="' +
                a +
                '" style="' +
                ('z-index:' + (s - 1) + '; ') +
                '"></div>'
              : '',
            '<div class="' +
              l[0] +
              (' layui-layer-' + o.type[r.type]) +
              ((0 != r.type && 2 != r.type) || r.shade
                ? ''
                : ' layui-layer-border') +
              ' ' +
              (r.skin || '') +
              '" id="' +
              l[0] +
              a +
              '" type="' +
              o.type[r.type] +
              '" times="' +
              a +
              '" showtime="' +
              r.time +
              '" conType="' +
              (e ? 'object' : 'string') +
              '" style="z-index: ' +
              s +
              '; width:' +
              r.area[0] +
              ';height:' +
              r.area[1] +
              ';position:' +
              (r.fixed ? 'fixed;' : 'absolute;') +
              '">' +
              (e && 2 != r.type ? '' : u) +
              '<div id="' +
              (r.id || '') +
              '" class="layui-layer-content' +
              (0 == r.type && r.icon !== -1 ? ' layui-layer-padding' : '') +
              (3 == r.type ? ' layui-layer-loading' + r.icon : '') +
              '">' +
              (0 == r.type && r.icon !== -1
                ? '<i class="layui-layer-ico layui-layer-ico' +
                  r.icon +
                  '"></i>'
                : '') +
              (1 == r.type && e ? '' : r.content || '') +
              '</div><span class="layui-layer-setwin">' +
              (function () {
                var e = c
                  ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>'
                  : '';
                return (
                  r.closeBtn &&
                    (e +=
                      '<a class="layui-layer-ico ' +
                      l[7] +
                      ' ' +
                      l[7] +
                      (r.title ? r.closeBtn : 4 == r.type ? '1' : '2') +
                      '" href="javascript:;"></a>'),
                  e
                );
              })() +
              '</span>' +
              (r.btn
                ? (function () {
                    var e = '';
                    'string' == typeof r.btn && (r.btn = [r.btn]);
                    for (var t = 0, i = r.btn.length; t < i; t++)
                      e += '<a class="' + l[6] + t + '">' + r.btn[t] + '</a>';
                    return (
                      '<div class="' +
                      l[6] +
                      ' layui-layer-btn-' +
                      (r.btnAlign || '') +
                      '">' +
                      e +
                      '</div>'
                    );
                  })()
                : '') +
              (r.resize ? '<span class="layui-layer-resize"></span>' : '') +
              '</div>'
          ],
          u,
          i('<div class="' + l.MOVE + '" id="' + l.MOVE + '"></div>')
        ),
        n
      );
    }),
    (s.pt.creat = function () {
      var e = this,
        t = e.config,
        a = e.index,
        s = t.content,
        f = 'object' == typeof s,
        c = i('body');
      if (!t.id || !i('#' + t.id)[0]) {
        switch (
          ('string' == typeof t.area &&
            (t.area = 'auto' === t.area ? ['', ''] : [t.area, '']),
          t.shift && (t.anim = t.shift),
          6 == r.ie && (t.fixed = !1),
          t.type)
        ) {
          case 0:
            (t.btn = 'btn' in t ? t.btn : o.btn[0]), r.closeAll('dialog');
            break;
          case 2:
            var s = (t.content = f ? t.content : [t.content || '', 'auto']);
            t.content =
              '<iframe scrolling="' +
              (t.content[1] || 'auto') +
              '" allowtransparency="true" id="' +
              l[4] +
              a +
              '" name="' +
              l[4] +
              a +
              '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' +
              t.content[0] +
              '"></iframe>';
            break;
          case 3:
            delete t.title,
              delete t.closeBtn,
              t.icon === -1 && 0 === t.icon,
              r.closeAll('loading');
            break;
          case 4:
            f || (t.content = [t.content, 'body']),
              (t.follow = t.content[1]),
              (t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>'),
              delete t.title,
              (t.tips = 'object' == typeof t.tips ? t.tips : [t.tips, !0]),
              t.tipsMore || r.closeAll('tips');
        }
        if (
          (e
            .vessel(f, function (n, r, u) {
              c.append(n[0]),
                f
                  ? (function () {
                      2 == t.type || 4 == t.type
                        ? (function () {
                            i('body').append(n[1]);
                          })()
                        : (function () {
                            s.parents('.' + l[0])[0] ||
                              (s
                                .data('display', s.css('display'))
                                .show()
                                .addClass('layui-layer-wrap')
                                .wrap(n[1]),
                              i('#' + l[0] + a)
                                .find('.' + l[5])
                                .before(r));
                          })();
                    })()
                  : c.append(n[1]),
                i('#' + l.MOVE)[0] || c.append((o.moveElem = u)),
                (e.layero = i('#' + l[0] + a)),
                (e.shadeo = i('#' + l.SHADE + a)),
                t.scrollbar ||
                  l.html.css('overflow', 'hidden').attr('layer-full', a);
            })
            .auto(a),
          e.shadeo.css({
            'background-color': t.shade[1] || '#000',
            opacity: t.shade[0] || t.shade
          }),
          2 == t.type && 6 == r.ie && e.layero.find('iframe').attr('src', s[0]),
          4 == t.type
            ? e.tips()
            : (function () {
                e.offset(),
                  parseInt(
                    o.getStyle(document.getElementById(l.MOVE), 'z-index')
                  ) ||
                    (function () {
                      e.layero.css('visibility', 'hidden'),
                        r.ready(function () {
                          e.offset(), e.layero.css('visibility', 'visible');
                        });
                    })();
              })(),
          t.fixed &&
            n.on('resize', function () {
              e.offset(),
                (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) &&
                  e.auto(a),
                4 == t.type && e.tips();
            }),
          t.time <= 0 ||
            setTimeout(function () {
              r.close(e.index);
            }, t.time),
          e.move().callback(),
          l.anim[t.anim])
        ) {
          var u = 'layer-anim ' + l.anim[t.anim];
          e.layero
            .addClass(u)
            .one(
              'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              function () {
                i(this).removeClass(u);
              }
            );
        }
        t.isOutAnim && e.layero.data('isOutAnim', !0);
      }
    }),
    (s.pt.auto = function (e) {
      var t = this,
        a = t.config,
        o = i('#' + l[0] + e);
      '' === a.area[0] &&
        a.maxWidth > 0 &&
        (r.ie && r.ie < 8 && a.btn && o.width(o.innerWidth()),
        o.outerWidth() > a.maxWidth && o.width(a.maxWidth));
      var s = [o.innerWidth(), o.innerHeight()],
        f = o.find(l[1]).outerHeight() || 0,
        c = o.find('.' + l[6]).outerHeight() || 0,
        u = function (e) {
          (e = o.find(e)),
            e.height(s[1] - f - c - 2 * (0 | parseFloat(e.css('padding-top'))));
        };
      switch (a.type) {
        case 2:
          u('iframe');
          break;
        default:
          '' === a.area[1]
            ? a.maxHeight > 0 && o.outerHeight() > a.maxHeight
              ? ((s[1] = a.maxHeight), u('.' + l[5]))
              : a.fixed &&
                s[1] >= n.height() &&
                ((s[1] = n.height()), u('.' + l[5]))
            : u('.' + l[5]);
      }
      return t;
    }),
    (s.pt.offset = function () {
      var e = this,
        t = e.config,
        i = e.layero,
        a = [i.outerWidth(), i.outerHeight()],
        o = 'object' == typeof t.offset;
      (e.offsetTop = (n.height() - a[1]) / 2),
        (e.offsetLeft = (n.width() - a[0]) / 2),
        o
          ? ((e.offsetTop = t.offset[0]),
            (e.offsetLeft = t.offset[1] || e.offsetLeft))
          : 'auto' !== t.offset &&
            ('t' === t.offset
              ? (e.offsetTop = 0)
              : 'r' === t.offset
              ? (e.offsetLeft = n.width() - a[0])
              : 'b' === t.offset
              ? (e.offsetTop = n.height() - a[1])
              : 'l' === t.offset
              ? (e.offsetLeft = 0)
              : 'lt' === t.offset
              ? ((e.offsetTop = 0), (e.offsetLeft = 0))
              : 'lb' === t.offset
              ? ((e.offsetTop = n.height() - a[1]), (e.offsetLeft = 0))
              : 'rt' === t.offset
              ? ((e.offsetTop = 0), (e.offsetLeft = n.width() - a[0]))
              : 'rb' === t.offset
              ? ((e.offsetTop = n.height() - a[1]),
                (e.offsetLeft = n.width() - a[0]))
              : (e.offsetTop = t.offset)),
        t.fixed ||
          ((e.offsetTop = /%$/.test(e.offsetTop)
            ? (n.height() * parseFloat(e.offsetTop)) / 100
            : parseFloat(e.offsetTop)),
          (e.offsetLeft = /%$/.test(e.offsetLeft)
            ? (n.width() * parseFloat(e.offsetLeft)) / 100
            : parseFloat(e.offsetLeft)),
          (e.offsetTop += n.scrollTop()),
          (e.offsetLeft += n.scrollLeft())),
        i.attr('minLeft') &&
          ((e.offsetTop = n.height() - (i.find(l[1]).outerHeight() || 0)),
          (e.offsetLeft = i.css('left'))),
        i.css({ top: e.offsetTop, left: e.offsetLeft });
    }),
    (s.pt.tips = function () {
      var e = this,
        t = e.config,
        a = e.layero,
        o = [a.outerWidth(), a.outerHeight()],
        r = i(t.follow);
      r[0] || (r = i('body'));
      var s = {
          width: r.outerWidth(),
          height: r.outerHeight(),
          top: r.offset().top,
          left: r.offset().left
        },
        f = a.find('.layui-layer-TipsG'),
        c = t.tips[0];
      t.tips[1] || f.remove(),
        (s.autoLeft = function () {
          s.left + o[0] - n.width() > 0
            ? ((s.tipLeft = s.left + s.width - o[0]),
              f.css({ right: 12, left: 'auto' }))
            : (s.tipLeft = s.left);
        }),
        (s.where = [
          function () {
            s.autoLeft(),
              (s.tipTop = s.top - o[1] - 10),
              f
                .removeClass('layui-layer-TipsB')
                .addClass('layui-layer-TipsT')
                .css('border-right-color', t.tips[1]);
          },
          function () {
            (s.tipLeft = s.left + s.width + 10),
              (s.tipTop = s.top),
              f
                .removeClass('layui-layer-TipsL')
                .addClass('layui-layer-TipsR')
                .css('border-bottom-color', t.tips[1]);
          },
          function () {
            s.autoLeft(),
              (s.tipTop = s.top + s.height + 10),
              f
                .removeClass('layui-layer-TipsT')
                .addClass('layui-layer-TipsB')
                .css('border-right-color', t.tips[1]);
          },
          function () {
            (s.tipLeft = s.left - o[0] - 10),
              (s.tipTop = s.top),
              f
                .removeClass('layui-layer-TipsR')
                .addClass('layui-layer-TipsL')
                .css('border-bottom-color', t.tips[1]);
          }
        ]),
        s.where[c - 1](),
        1 === c
          ? s.top - (n.scrollTop() + o[1] + 16) < 0 && s.where[2]()
          : 2 === c
          ? n.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]()
          : 3 === c
          ? s.top - n.scrollTop() + s.height + o[1] + 16 - n.height() > 0 &&
            s.where[0]()
          : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](),
        a.find('.' + l[5]).css({
          'background-color': t.tips[1],
          'padding-right': t.closeBtn ? '30px' : ''
        }),
        a.css({
          left: s.tipLeft - (t.fixed ? n.scrollLeft() : 0),
          top: s.tipTop - (t.fixed ? n.scrollTop() : 0)
        });
    }),
    (s.pt.move = function () {
      var e = this,
        t = e.config,
        a = i(document),
        s = e.layero,
        l = s.find(t.move),
        f = s.find('.layui-layer-resize'),
        c = {};
      return (
        t.move && l.css('cursor', 'move'),
        l.on('mousedown', function (e) {
          e.preventDefault(),
            t.move &&
              ((c.moveStart = !0),
              (c.offset = [
                e.clientX - parseFloat(s.css('left')),
                e.clientY - parseFloat(s.css('top'))
              ]),
              o.moveElem.css('cursor', 'move').show());
        }),
        f.on('mousedown', function (e) {
          e.preventDefault(),
            (c.resizeStart = !0),
            (c.offset = [e.clientX, e.clientY]),
            (c.area = [s.outerWidth(), s.outerHeight()]),
            o.moveElem.css('cursor', 'se-resize').show();
        }),
        a
          .on('mousemove', function (i) {
            if (c.moveStart) {
              var a = i.clientX - c.offset[0],
                o = i.clientY - c.offset[1],
                l = 'fixed' === s.css('position');
              if (
                (i.preventDefault(),
                (c.stX = l ? 0 : n.scrollLeft()),
                (c.stY = l ? 0 : n.scrollTop()),
                !t.moveOut)
              ) {
                var f = n.width() - s.outerWidth() + c.stX,
                  u = n.height() - s.outerHeight() + c.stY;
                a < c.stX && (a = c.stX),
                  a > f && (a = f),
                  o < c.stY && (o = c.stY),
                  o > u && (o = u);
              }
              s.css({ left: a, top: o });
            }
            if (t.resize && c.resizeStart) {
              var a = i.clientX - c.offset[0],
                o = i.clientY - c.offset[1];
              i.preventDefault(),
                r.style(e.index, {
                  width: c.area[0] + a,
                  height: c.area[1] + o
                }),
                (c.isResize = !0),
                t.resizing && t.resizing(s);
            }
          })
          .on('mouseup', function (e) {
            c.moveStart &&
              (delete c.moveStart,
              o.moveElem.hide(),
              t.moveEnd && t.moveEnd(s)),
              c.resizeStart && (delete c.resizeStart, o.moveElem.hide());
          }),
        e
      );
    }),
    (s.pt.callback = function () {
      function e() {
        var e = a.cancel && a.cancel(t.index, n);
        e === !1 || r.close(t.index);
      }
      var t = this,
        n = t.layero,
        a = t.config;
      t.openLayer(),
        a.success &&
          (2 == a.type
            ? n.find('iframe').on('load', function () {
                a.success(n, t.index, t);
              })
            : a.success(n, t.index, t)),
        6 == r.ie && t.IE6(n),
        n
          .find('.' + l[6])
          .children('a')
          .on('click', function () {
            var e = i(this).index();
            if (0 === e)
              a.yes
                ? a.yes(t.index, n)
                : a.btn1
                ? a.btn1(t.index, n)
                : r.close(t.index);
            else {
              var o = a['btn' + (e + 1)] && a['btn' + (e + 1)](t.index, n);
              o === !1 || r.close(t.index);
            }
          }),
        n.find('.' + l[7]).on('click', e),
        a.shadeClose &&
          t.shadeo.on('click', function () {
            r.close(t.index);
          }),
        n.find('.layui-layer-min').on('click', function () {
          var e = a.min && a.min(n, t.index);
          e === !1 || r.min(t.index, a);
        }),
        n.find('.layui-layer-max').on('click', function () {
          i(this).hasClass('layui-layer-maxmin')
            ? (r.restore(t.index), a.restore && a.restore(n, t.index))
            : (r.full(t.index, a),
              setTimeout(function () {
                a.full && a.full(n, t.index);
              }, 100));
        }),
        a.end && (o.end[t.index] = a.end);
    }),
    (o.reselect = function () {
      i.each(i('select'), function (e, t) {
        var n = i(this);
        n.parents('.' + l[0])[0] ||
          (1 == n.attr('layer') &&
            i('.' + l[0]).length < 1 &&
            n.removeAttr('layer').show()),
          (n = null);
      });
    }),
    (s.pt.IE6 = function (e) {
      i('select').each(function (e, t) {
        var n = i(this);
        n.parents('.' + l[0])[0] ||
          'none' === n.css('display') ||
          n.attr({ layer: '1' }).hide(),
          (n = null);
      });
    }),
    (s.pt.openLayer = function () {
      var e = this;
      (r.zIndex = e.config.zIndex),
        (r.setTop = function (e) {
          var t = function () {
            r.zIndex++, e.css('z-index', r.zIndex + 1);
          };
          return (
            (r.zIndex = parseInt(e[0].style.zIndex)),
            e.on('mousedown', t),
            r.zIndex
          );
        });
    }),
    (o.record = function (e) {
      var t = [
        e.width(),
        e.height(),
        e.position().top,
        e.position().left + parseFloat(e.css('margin-left'))
      ];
      e.find('.layui-layer-max').addClass('layui-layer-maxmin'),
        e.attr({ area: t });
    }),
    (o.rescollbar = function (e) {
      l.html.attr('layer-full') == e &&
        (l.html[0].style.removeProperty
          ? l.html[0].style.removeProperty('overflow')
          : l.html[0].style.removeAttribute('overflow'),
        l.html.removeAttr('layer-full'));
    }),
    (e.layer = r),
    (r.getChildFrame = function (e, t) {
      return (
        (t = t || i('.' + l[4]).attr('times')),
        i('#' + l[0] + t)
          .find('iframe')
          .contents()
          .find(e)
      );
    }),
    (r.getFrameIndex = function (e) {
      return i('#' + e)
        .parents('.' + l[4])
        .attr('times');
    }),
    (r.iframeAuto = function (e) {
      if (e) {
        var t = r.getChildFrame('html', e).outerHeight(),
          n = i('#' + l[0] + e),
          a = n.find(l[1]).outerHeight() || 0,
          o = n.find('.' + l[6]).outerHeight() || 0;
        n.css({ height: t + a + o }), n.find('iframe').css({ height: t });
      }
    }),
    (r.iframeSrc = function (e, t) {
      i('#' + l[0] + e)
        .find('iframe')
        .attr('src', t);
    }),
    (r.style = function (e, t, n) {
      var a = i('#' + l[0] + e),
        r = a.find('.layui-layer-content'),
        s = a.attr('type'),
        f = a.find(l[1]).outerHeight() || 0,
        c = a.find('.' + l[6]).outerHeight() || 0;
      a.attr('minLeft');
      s !== o.type[3] &&
        s !== o.type[4] &&
        (n ||
          (parseFloat(t.width) <= 260 && (t.width = 260),
          parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)),
        a.css(t),
        (c = a.find('.' + l[6]).outerHeight()),
        s === o.type[2]
          ? a.find('iframe').css({ height: parseFloat(t.height) - f - c })
          : r.css({
              height:
                parseFloat(t.height) -
                f -
                c -
                parseFloat(r.css('padding-top')) -
                parseFloat(r.css('padding-bottom'))
            }));
    }),
    (r.min = function (e, t) {
      t = t || {};
      var a = i('#' + l[0] + e),
        s = i('#' + l.SHADE + e),
        f = a.find(l[1]).outerHeight() || 0,
        c = a.attr('minLeft') || 181 * o.minIndex + 'px',
        u = a.css('position'),
        d = { width: 180, height: f, position: 'fixed', overflow: 'hidden' };
      o.record(a),
        o.minLeft[0] && ((c = o.minLeft[0]), o.minLeft.shift()),
        t.minStack &&
          ((d.left = c),
          (d.top = n.height() - f),
          a.attr('minLeft') || o.minIndex++,
          a.attr('minLeft', c)),
        a.attr('position', u),
        r.style(e, d, !0),
        a.find('.layui-layer-min').hide(),
        'page' === a.attr('type') && a.find(l[4]).hide(),
        o.rescollbar(e),
        s.hide();
    }),
    (r.restore = function (e) {
      var t = i('#' + l[0] + e),
        n = i('#' + l.SHADE + e),
        a = t.attr('area').split(',');
      t.attr('type');
      r.style(
        e,
        {
          width: parseFloat(a[0]),
          height: parseFloat(a[1]),
          top: parseFloat(a[2]),
          left: parseFloat(a[3]),
          position: t.attr('position'),
          overflow: 'visible'
        },
        !0
      ),
        t.find('.layui-layer-max').removeClass('layui-layer-maxmin'),
        t.find('.layui-layer-min').show(),
        'page' === t.attr('type') && t.find(l[4]).show(),
        o.rescollbar(e),
        n.show();
    }),
    (r.full = function (e) {
      var t,
        a = i('#' + l[0] + e);
      o.record(a),
        l.html.attr('layer-full') ||
          l.html.css('overflow', 'hidden').attr('layer-full', e),
        clearTimeout(t),
        (t = setTimeout(function () {
          var t = 'fixed' === a.css('position');
          r.style(
            e,
            {
              top: t ? 0 : n.scrollTop(),
              left: t ? 0 : n.scrollLeft(),
              width: n.width(),
              height: n.height()
            },
            !0
          ),
            a.find('.layui-layer-min').hide();
        }, 100));
    }),
    (r.title = function (e, t) {
      var n = i('#' + l[0] + (t || r.index)).find(l[1]);
      n.html(e);
    }),
    (r.close = function (e, t) {
      var n = i('#' + l[0] + e),
        a = n.attr('type'),
        s = 'layer-anim-close';
      if (n[0]) {
        var f = 'layui-layer-wrap',
          c = function () {
            if (a === o.type[1] && 'object' === n.attr('conType')) {
              n.children(':not(.' + l[5] + ')').remove();
              for (var r = n.find('.' + f), s = 0; s < 2; s++) r.unwrap();
              r.css('display', r.data('display')).removeClass(f);
            } else {
              if (a === o.type[2])
                try {
                  var c = i('#' + l[4] + e)[0];
                  c.contentWindow.document.write(''),
                    c.contentWindow.close(),
                    n.find('.' + l[5])[0].removeChild(c);
                } catch (u) {}
              (n[0].innerHTML = ''), n.remove();
            }
            'function' == typeof o.end[e] && o.end[e](),
              delete o.end[e],
              'function' == typeof t && t();
          };
        n.data('isOutAnim') && n.addClass('layer-anim ' + s),
          i('#layui-layer-moves, #' + l.SHADE + e).remove(),
          6 == r.ie && o.reselect(),
          o.rescollbar(e),
          n.attr('minLeft') &&
            (o.minIndex--, o.minLeft.push(n.attr('minLeft'))),
          (r.ie && r.ie < 10) || !n.data('isOutAnim')
            ? c()
            : setTimeout(function () {
                c();
              }, 200);
      }
    }),
    (r.closeAll = function (e, t) {
      'function' == typeof e && ((t = e), (e = null));
      var n = i('.' + l[0]);
      i.each(n, function (a) {
        var o = i(this),
          s = e ? o.attr('type') === e : 1;
        s && r.close(o.attr('times'), a === n.length - 1 ? t : null),
          (s = null);
      }),
        0 === n.length && 'function' == typeof t && t();
    });
  var f = r.cache || {},
    c = function (e) {
      return f.skin ? ' ' + f.skin + ' ' + f.skin + '-' + e : '';
    };
  (r.prompt = function (e, t) {
    var a = '';
    if (((e = e || {}), 'function' == typeof e && (t = e), e.area)) {
      var o = e.area;
      (a = 'style="width: ' + o[0] + '; height: ' + o[1] + ';"'), delete e.area;
    }
    var s,
      l =
        2 == e.formType
          ? '<textarea class="layui-layer-input"' + a + '></textarea>'
          : (function () {
              return (
                '<input type="' +
                (1 == e.formType ? 'password' : 'text') +
                '" class="layui-layer-input">'
              );
            })(),
      f = e.success;
    return (
      delete e.success,
      r.open(
        i.extend(
          {
            type: 1,
            btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
            content: l,
            skin: 'layui-layer-prompt' + c('prompt'),
            maxWidth: n.width(),
            success: function (t) {
              (s = t.find('.layui-layer-input')),
                s.val(e.value || '').focus(),
                'function' == typeof f && f(t);
            },
            resize: !1,
            yes: function (i) {
              var n = s.val();
              '' === n
                ? s.focus()
                : n.length > (e.maxlength || 500)
                ? r.tips(
                    '&#x6700;&#x591A;&#x8F93;&#x5165;' +
                      (e.maxlength || 500) +
                      '&#x4E2A;&#x5B57;&#x6570;',
                    s,
                    { tips: 1 }
                  )
                : t && t(n, i, s);
            }
          },
          e
        )
      )
    );
  }),
    (r.tab = function (e) {
      e = e || {};
      var t = e.tab || {},
        n = 'layui-this',
        a = e.success;
      return (
        delete e.success,
        r.open(
          i.extend(
            {
              type: 1,
              skin: 'layui-layer-tab' + c('tab'),
              resize: !1,
              title: (function () {
                var e = t.length,
                  i = 1,
                  a = '';
                if (e > 0)
                  for (
                    a = '<span class="' + n + '">' + t[0].title + '</span>';
                    i < e;
                    i++
                  )
                    a += '<span>' + t[i].title + '</span>';
                return a;
              })(),
              content:
                '<ul class="layui-layer-tabmain">' +
                (function () {
                  var e = t.length,
                    i = 1,
                    a = '';
                  if (e > 0)
                    for (
                      a =
                        '<li class="layui-layer-tabli ' +
                        n +
                        '">' +
                        (t[0].content || 'no content') +
                        '</li>';
                      i < e;
                      i++
                    )
                      a +=
                        '<li class="layui-layer-tabli">' +
                        (t[i].content || 'no  content') +
                        '</li>';
                  return a;
                })() +
                '</ul>',
              success: function (t) {
                var o = t.find('.layui-layer-title').children(),
                  r = t.find('.layui-layer-tabmain').children();
                o.on('mousedown', function (t) {
                  t.stopPropagation
                    ? t.stopPropagation()
                    : (t.cancelBubble = !0);
                  var a = i(this),
                    o = a.index();
                  a.addClass(n).siblings().removeClass(n),
                    r.eq(o).show().siblings().hide(),
                    'function' == typeof e.change && e.change(o);
                }),
                  'function' == typeof a && a(t);
              }
            },
            e
          )
        )
      );
    }),
    (r.photos = function (t, n, a) {
      function o(e, t, i) {
        var n = new Image();
        return (
          (n.src = e),
          n.complete
            ? t(n)
            : ((n.onload = function () {
                (n.onload = null), t(n);
              }),
              void (n.onerror = function (e) {
                (n.onerror = null), i(e);
              }))
        );
      }
      var s = {};
      if (((t = t || {}), t.photos)) {
        var l = !('string' == typeof t.photos || t.photos instanceof i),
          f = l ? t.photos : {},
          u = f.data || [],
          d = f.start || 0;
        (s.imgIndex = (0 | d) + 1), (t.img = t.img || 'img');
        var y = t.success;
        if ((delete t.success, l)) {
          if (0 === u.length) return r.msg('&#x6CA1;&#x6709;&#x56FE;&#x7247;');
        } else {
          var p = i(t.photos),
            h = function () {
              (u = []),
                p.find(t.img).each(function (e) {
                  var t = i(this);
                  t.attr('layer-index', e),
                    u.push({
                      alt: t.attr('alt'),
                      pid: t.attr('layer-pid'),
                      src: t.attr('layer-src') || t.attr('src'),
                      thumb: t.attr('src')
                    });
                });
            };
          if ((h(), 0 === u.length)) return;
          if (
            (n ||
              p.on('click', t.img, function () {
                h();
                var e = i(this),
                  n = e.attr('layer-index');
                r.photos(
                  i.extend(t, {
                    photos: { start: n, data: u, tab: t.tab },
                    full: t.full
                  }),
                  !0
                );
              }),
            !n)
          )
            return;
        }
        (s.imgprev = function (e) {
          s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e);
        }),
          (s.imgnext = function (e, t) {
            s.imgIndex++,
              (s.imgIndex > u.length && ((s.imgIndex = 1), t)) || s.tabimg(e);
          }),
          (s.keyup = function (e) {
            if (!s.end) {
              var t = e.keyCode;
              e.preventDefault(),
                37 === t
                  ? s.imgprev(!0)
                  : 39 === t
                  ? s.imgnext(!0)
                  : 27 === t && r.close(s.index);
            }
          }),
          (s.tabimg = function (e) {
            if (!(u.length <= 1))
              return (
                (f.start = s.imgIndex - 1), r.close(s.index), r.photos(t, !0, e)
              );
          }),
          (s.event = function () {
            s.bigimg.find('.layui-layer-imgprev').on('click', function (e) {
              e.preventDefault(), s.imgprev(!0);
            }),
              s.bigimg.find('.layui-layer-imgnext').on('click', function (e) {
                e.preventDefault(), s.imgnext(!0);
              }),
              i(document).on('keyup', s.keyup);
          }),
          (s.loadi = r.load(1, {
            shade: !('shade' in t) && 0.9,
            scrollbar: !1
          })),
          o(
            u[d].src,
            function (n) {
              r.close(s.loadi),
                a && (t.anim = -1),
                (s.index = r.open(
                  i.extend(
                    {
                      type: 1,
                      id: 'layui-layer-photos',
                      area: (function () {
                        var a = [n.width, n.height],
                          o = [i(e).width() - 100, i(e).height() - 100];
                        if (!t.full && (a[0] > o[0] || a[1] > o[1])) {
                          var r = [a[0] / o[0], a[1] / o[1]];
                          r[0] > r[1]
                            ? ((a[0] = a[0] / r[0]), (a[1] = a[1] / r[0]))
                            : r[0] < r[1] &&
                              ((a[0] = a[0] / r[1]), (a[1] = a[1] / r[1]));
                        }
                        return [a[0] + 'px', a[1] + 'px'];
                      })(),
                      title: !1,
                      shade: 0.9,
                      shadeClose: !0,
                      closeBtn: !1,
                      move: '.layui-layer-phimg img',
                      moveType: 1,
                      scrollbar: !1,
                      moveOut: !0,
                      anim: 5,
                      isOutAnim: !1,
                      skin: 'layui-layer-photos' + c('photos'),
                      content:
                        '<div class="layui-layer-phimg"><img src="' +
                        u[d].src +
                        '" alt="' +
                        (u[d].alt || '') +
                        '" layer-pid="' +
                        u[d].pid +
                        '">' +
                        (function () {
                          return u.length > 1
                            ? '<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:' +
                                (a ? 'block' : '') +
                                '"><span class="layui-layer-imgtit"><a href="javascript:;">' +
                                (u[d].alt || '') +
                                '</a><em>' +
                                s.imgIndex +
                                ' / ' +
                                u.length +
                                '</em></span></div></div>'
                            : '';
                        })() +
                        '</div>',
                      success: function (e, i) {
                        (s.bigimg = e.find('.layui-layer-phimg')),
                          (s.imgsee = e.find('.layui-layer-imgbar')),
                          s.event(e),
                          t.tab && t.tab(u[d], e),
                          'function' == typeof y && y(e);
                      },
                      end: function () {
                        (s.end = !0), i(document).off('keyup', s.keyup);
                      }
                    },
                    t
                  )
                ));
            },
            function () {
              r.close(s.loadi),
                r.msg(
                  '&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;',
                  {
                    time: 3e4,
                    btn: [
                      '&#x4E0B;&#x4E00;&#x5F20;',
                      '&#x4E0D;&#x770B;&#x4E86;'
                    ],
                    yes: function () {
                      u.length > 1 && s.imgnext(!0, !0);
                    }
                  }
                );
            }
          );
      }
    }),
    (o.run = function (t) {
      (i = t),
        (n = i(e)),
        (l.html = i('html')),
        (r.open = function (e) {
          var t = new s(e);
          return t.index;
        });
    }),
    e.layui && layui.define
      ? (r.ready(),
        layui.define('jquery', function (t) {
          (r.path = layui.cache.dir),
            o.run(layui.$),
            (e.layer = r),
            t('layer', r);
        }))
      : 'function' == typeof define && define.amd
      ? define(['jquery'], function () {
          return o.run(e.jQuery), r;
        })
      : (function () {
          r.ready(), o.run(e.jQuery);
        })();
})(window);
layui.define('jquery', function (e) {
  'use strict';
  var t = layui.$,
    i = layui.hint(),
    n = {
      fixbar: function (e) {
        var i,
          n,
          r = 'layui-fixbar',
          a = 'layui-fixbar-top',
          o = t(document),
          l = t('body');
        (e = t.extend({ showHeight: 200 }, e)),
          (e.bar1 = e.bar1 === !0 ? '&#xe606;' : e.bar1),
          (e.bar2 = e.bar2 === !0 ? '&#xe607;' : e.bar2),
          (e.bgcolor = e.bgcolor ? 'background-color:' + e.bgcolor : '');
        var c = [e.bar1, e.bar2, '&#xe604;'],
          g = t(
            [
              '<ul class="' + r + '">',
              e.bar1
                ? '<li class="layui-icon" lay-type="bar1" style="' +
                  e.bgcolor +
                  '">' +
                  c[0] +
                  '</li>'
                : '',
              e.bar2
                ? '<li class="layui-icon" lay-type="bar2" style="' +
                  e.bgcolor +
                  '">' +
                  c[1] +
                  '</li>'
                : '',
              '<li class="layui-icon ' +
                a +
                '" lay-type="top" style="' +
                e.bgcolor +
                '">' +
                c[2] +
                '</li>',
              '</ul>'
            ].join('')
          ),
          u = g.find('.' + a),
          s = function () {
            var t = o.scrollTop();
            t >= e.showHeight
              ? i || (u.show(), (i = 1))
              : i && (u.hide(), (i = 0));
          };
        t('.' + r)[0] ||
          ('object' == typeof e.css && g.css(e.css),
          l.append(g),
          s(),
          g.find('li').on('click', function () {
            var i = t(this),
              n = i.attr('lay-type');
            'top' === n && t('html,body').animate({ scrollTop: 0 }, 200),
              e.click && e.click.call(this, n);
          }),
          o.on('scroll', function () {
            clearTimeout(n),
              (n = setTimeout(function () {
                s();
              }, 100));
          }));
      },
      countdown: function (e, t, i) {
        var n = this,
          r = 'function' == typeof t,
          a = new Date(e).getTime(),
          o = new Date(!t || r ? new Date().getTime() : t).getTime(),
          l = a - o,
          c = [
            Math.floor(l / 864e5),
            Math.floor(l / 36e5) % 24,
            Math.floor(l / 6e4) % 60,
            Math.floor(l / 1e3) % 60
          ];
        r && (i = t);
        var g = setTimeout(function () {
          n.countdown(e, o + 1e3, i);
        }, 1e3);
        return (
          i && i(l > 0 ? c : [0, 0, 0, 0], t, g), l <= 0 && clearTimeout(g), g
        );
      },
      timeAgo: function (e, t) {
        var i = this,
          n = [[], []],
          r = new Date().getTime() - new Date(e).getTime();
        return r > 26784e5
          ? ((r = new Date(e)),
            (n[0][0] = i.digit(r.getFullYear(), 4)),
            (n[0][1] = i.digit(r.getMonth() + 1)),
            (n[0][2] = i.digit(r.getDate())),
            t ||
              ((n[1][0] = i.digit(r.getHours())),
              (n[1][1] = i.digit(r.getMinutes())),
              (n[1][2] = i.digit(r.getSeconds()))),
            n[0].join('-') + ' ' + n[1].join(':'))
          : r >= 864e5
          ? ((r / 1e3 / 60 / 60 / 24) | 0) + '\u5929\u524d'
          : r >= 36e5
          ? ((r / 1e3 / 60 / 60) | 0) + '\u5c0f\u65f6\u524d'
          : r >= 18e4
          ? ((r / 1e3 / 60) | 0) + '\u5206\u949f\u524d'
          : r < 0
          ? '\u672a\u6765'
          : '\u521a\u521a';
      },
      digit: function (e, t) {
        var i = '';
        (e = String(e)), (t = t || 2);
        for (var n = e.length; n < t; n++) i += '0';
        return e < Math.pow(10, t) ? i + (0 | e) : e;
      },
      toDateString: function (e, t) {
        if (null === e || '' === e) return '';
        var n = this,
          r = new Date(
            (function () {
              if (e)
                return isNaN(e) ? e : 'string' == typeof e ? parseInt(e) : e;
            })() || new Date()
          ),
          a = [
            n.digit(r.getFullYear(), 4),
            n.digit(r.getMonth() + 1),
            n.digit(r.getDate())
          ],
          o = [
            n.digit(r.getHours()),
            n.digit(r.getMinutes()),
            n.digit(r.getSeconds())
          ];
        return r.getDate()
          ? ((t = t || 'yyyy-MM-dd HH:mm:ss'),
            t
              .replace(/yyyy/g, a[0])
              .replace(/MM/g, a[1])
              .replace(/dd/g, a[2])
              .replace(/HH/g, o[0])
              .replace(/mm/g, o[1])
              .replace(/ss/g, o[2]))
          : (i.error('Invalid Msec for "util.toDateString(Msec)"'), '');
      },
      escape: function (e) {
        return String(e || '')
          .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&#39;')
          .replace(/"/g, '&quot;');
      },
      unescape: function (e) {
        return String(e || '')
          .replace(/\&amp;/g, '&')
          .replace(/\&lt;/g, '<')
          .replace(/\&gt;/g, '>')
          .replace(/\&#39;/, "'")
          .replace(/\&quot;/, '"');
      },
      toVisibleArea: function (e) {
        if (
          ((e = t.extend({ margin: 160, duration: 200, type: 'y' }, e)),
          e.scrollElem[0] && e.thisElem[0])
        ) {
          var i = e.scrollElem,
            n = e.thisElem,
            r = 'y' === e.type,
            a = r ? 'scrollTop' : 'scrollLeft',
            o = r ? 'top' : 'left',
            l = i[a](),
            c = i[r ? 'height' : 'width'](),
            g = i.offset()[o],
            u = n.offset()[o] - g,
            s = {};
          (u > c - e.margin || u < e.margin) &&
            ((s[a] = u - c / 2 + l), i.animate(s, e.duration));
        }
      },
      event: function (e, i, r) {
        var a = t('body');
        return (
          (r = r || 'click'),
          (i = n.event[e] = t.extend(!0, n.event[e], i) || {}),
          (n.event.UTIL_EVENT_CALLBACK = n.event.UTIL_EVENT_CALLBACK || {}),
          a.off(r, '*[' + e + ']', n.event.UTIL_EVENT_CALLBACK[e]),
          (n.event.UTIL_EVENT_CALLBACK[e] = function () {
            var n = t(this),
              r = n.attr(e);
            'function' == typeof i[r] && i[r].call(this, n);
          }),
          a.on(r, '*[' + e + ']', n.event.UTIL_EVENT_CALLBACK[e]),
          i
        );
      }
    };
  e('util', n);
});
layui.define('jquery', function (t) {
  'use strict';
  var i = layui.$,
    a = (layui.hint(), layui.device()),
    e = 'element',
    l = 'layui-this',
    n = 'layui-show',
    s = function () {
      this.config = {};
    };
  (s.prototype.set = function (t) {
    var a = this;
    return i.extend(!0, a.config, t), a;
  }),
    (s.prototype.on = function (t, i) {
      return layui.onevent.call(this, e, t, i);
    }),
    (s.prototype.tabAdd = function (t, a) {
      var e = '.layui-tab-title',
        l = i('.layui-tab[lay-filter=' + t + ']'),
        n = l.children(e),
        s = n.children('.layui-tab-bar'),
        o = l.children('.layui-tab-content'),
        r =
          '<li' +
          (function () {
            var t = [];
            return (
              layui.each(a, function (i, a) {
                /^(title|content)$/.test(i) ||
                  t.push('lay-' + i + '="' + a + '"');
              }),
              t.length > 0 && t.unshift(''),
              t.join(' ')
            );
          })() +
          '>' +
          (a.title || 'unnaming') +
          '</li>';
      return (
        s[0] ? s.before(r) : n.append(r),
        o.append('<div class="layui-tab-item">' + (a.content || '') + '</div>'),
        b.hideTabMore(!0),
        b.tabAuto(),
        this
      );
    }),
    (s.prototype.tabDelete = function (t, a) {
      var e = '.layui-tab-title',
        l = i('.layui-tab[lay-filter=' + t + ']'),
        n = l.children(e),
        s = n.find('>li[lay-id="' + a + '"]');
      return b.tabDelete(null, s), this;
    }),
    (s.prototype.tabChange = function (t, a) {
      var e = '.layui-tab-title',
        l = i('.layui-tab[lay-filter=' + t + ']'),
        n = l.children(e),
        s = n.find('>li[lay-id="' + a + '"]');
      return b.tabClick.call(s[0], null, null, s), this;
    }),
    (s.prototype.tab = function (t) {
      (t = t || {}),
        m.on('click', t.headerElem, function (a) {
          var e = i(this).index();
          b.tabClick.call(this, a, e, null, t);
        });
    }),
    (s.prototype.progress = function (t, a) {
      var e = 'layui-progress',
        l = i('.' + e + '[lay-filter=' + t + ']'),
        n = l.find('.' + e + '-bar'),
        s = n.find('.' + e + '-text');
      return n.css('width', a).attr('lay-percent', a), s.text(a), this;
    });
  var o = '.layui-nav',
    r = 'layui-nav-item',
    c = 'layui-nav-bar',
    u = 'layui-nav-tree',
    y = 'layui-nav-child',
    d = 'layui-nav-child-c',
    f = 'layui-nav-more',
    h = 'layui-icon-down',
    p = 'layui-anim layui-anim-upbit',
    b = {
      tabClick: function (t, a, s, o) {
        o = o || {};
        var r = s || i(this),
          a = a || r.parent().children('li').index(r),
          c = o.headerElem ? r.parent() : r.parents('.layui-tab').eq(0),
          u = o.bodyElem
            ? i(o.bodyElem)
            : c.children('.layui-tab-content').children('.layui-tab-item'),
          y = r.find('a'),
          d =
            'javascript:;' !== y.attr('href') && '_blank' === y.attr('target'),
          f = 'string' == typeof r.attr('lay-unselect'),
        