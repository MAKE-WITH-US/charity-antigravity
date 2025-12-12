(self.webpackChunk = self.webpackChunk || []).push([
  ["310"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new k.Bare().init(e, t);
        }
        function a(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function n(e, t, a) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a;
          var n = a;
          return (
            $.test(e) || !q.test(e)
              ? (n = parseInt(e, 10))
              : q.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          );
        }
        function l(e) {
          Y.debug && window && window.console.warn(e);
        }
        var d,
          c,
          s,
          r = (function (e, t, a) {
            function n(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function l(d, c) {
              function s() {
                var e = new r();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function r() {}
              c === a && ((c = d), (d = Object)), (s.Bare = r);
              var f,
                u = (o[e] = d[e]),
                p = (r[e] = s[e] = new o());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return (r[e] = s[e] = l(s, t)[e]), s;
                }),
                (s.open = function (e) {
                  if (
                    ((f = {}),
                    i(e) ? (f = e.call(s, p, u, s, d)) : n(e) && (f = e),
                    n(f))
                  )
                    for (var a in f) t.call(f, a) && (p[a] = f[a]);
                  return i(p.init) || (p.init = d), s;
                }),
                s.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          f = {
            ease: [
              "ease",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return (
                  t +
                  a *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  o = i * e;
                return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, a, n) {
                return (a * e) / n + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, a, n) {
                return a * (e /= n) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e + t
                  : (-a / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, a, n) {
                return e === n
                  ? t + a
                  : a * (-Math.pow(2, (-10 * e) / n) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * (e /= n) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          u = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = "number",
          g = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          L = /(all|none) 0s ease 0s/,
          R = /^(width|height)$/,
          _ = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          h = function (e) {
            if (e in _.style) return { dom: e, css: e };
            var t,
              a,
              n = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((a = N[t] + n) in _.style) return { dom: a, css: S[t] + e };
          },
          A = (t.support = {
            bind: Function.prototype.bind,
            transform: h("transform"),
            transition: h("transition"),
            backface: h("backface-visibility"),
            timing: h("transition-timing-function"),
          });
        if (A.transition) {
          var C = A.timing.dom;
          if (((_.style[C] = f["ease-in-back"][0]), !_.style[C]))
            for (var V in u) f[V][0] = u[V];
        }
        var M = (t.frame =
            (d =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && A.bind
              ? d.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          U = (t.now =
            (s =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && A.bind
              ? s.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          w = r(function (t) {
            function a(e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t];
                    i && n.push(i);
                  }
                  return n;
                })(("" + e).split(" ")),
                n = a[0];
              t = t || {};
              var i = j[n];
              if (!i) return l("Unsupported property: " + n);
              if (!t.weak || !this.props[n]) {
                var o = i[0],
                  d = this.props[n];
                return (
                  d || (d = this.props[n] = new o.Bare()),
                  d.init(this.$el, a, i, t),
                  d
                );
              }
            }
            function n(e, t, n) {
              if (e) {
                var l = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == l && t)
                )
                  return (
                    (this.timer = new D({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == l && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      d.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      a.call(this, e, n && n[1]);
                  }
                  return i.call(this);
                }
                if ("function" == l) return void e.call(this, this);
                if ("object" == l) {
                  var u = 0;
                  f.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > u && (u = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (u = o(e.wait, 0));
                    }
                  ),
                    r.call(this),
                    u > 0 &&
                      ((this.timer = new D({ duration: u, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    E = !1,
                    I = {};
                  M(function () {
                    f.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(I);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                n.call(this, e.options, !0, e.args);
              }
            }
            function d(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                f.call(this, t, u),
                r.call(this);
            }
            function c() {
              d.call(this), (this.el.style.display = "none");
            }
            function s() {
              this.el.offsetHeight;
            }
            function r() {
              var e,
                t,
                a = [];
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string);
              (a = a.join(",")),
                this.style !== a &&
                  ((this.style = a), (this.el.style[A.transition.dom] = a));
            }
            function f(e, t, n) {
              var i,
                o,
                l,
                d,
                c = t !== u,
                s = {};
              for (i in e)
                (l = e[i]),
                  i in z
                    ? (s.transform || (s.transform = {}), (s.transform[i] = l))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in j ? (s[i] = l) : (d || (d = {}), (d[i] = l)));
              for (i in s) {
                if (((l = s[i]), !(o = this.props[i]))) {
                  if (!c) continue;
                  o = a.call(this, i);
                }
                t.call(this, o, l);
              }
              n && d && n.call(this, d);
            }
            function u(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function y(e, a) {
              t[e] = function () {
                return this.children
                  ? g.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this);
              };
            }
            function g(e, t) {
              var a,
                n = this.children.length;
              for (a = 0; n > a; a++) e.apply(this.children[a], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Y.keepInherited && !Y.fallback)
              ) {
                var a = H(this.el, "transition");
                a && !L.test(a) && (this.upstream = a);
              }
              A.backface &&
                Y.hideBackface &&
                W(this.el, A.backface.css, "hidden");
            }),
              y("add", a),
              y("start", n),
              y("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new D({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : l(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              y("next", i),
              y("stop", d),
              y("set", function (e) {
                d.call(this, e), f.call(this, e, p, I);
              }),
              y("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              y("hide", c),
              y("redraw", s),
              y("destroy", function () {
                d.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          k = r(w, function (t) {
            function a(t, a) {
              var n = e.data(t, E) || e.data(t, E, new w.Bare());
              return n.el || n.init(t), a ? n.start(a) : n;
            }
            t.init = function (t, n) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return a(i[0], n);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(a(t, n));
                }),
                (this.children = o),
                this
              );
            };
          }),
          G = r(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, a, n) {
              (this.$el = e), (this.el = e[0]);
              var i,
                l,
                d,
                c = t[0];
              a[2] && (c = a[2]),
                Q[c] && (c = Q[c]),
                (this.name = c),
                (this.type = a[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (l = this.ease),
                  (d = "ease"),
                  void 0 !== l && (d = l),
                  i in f ? i : d)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = R.test(this.name)),
                (this.unit = n.unit || this.unit || Y.defaultUnit),
                (this.angle = n.angle || this.angle || Y.defaultAngle),
                Y.fallback || n.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + f[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var a =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == a && (a = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new F({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return H(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var a,
                  i,
                  o = "number" == typeof e,
                  d = "string" == typeof e;
                switch (t) {
                  case y:
                    if (o) return e;
                    if (d && "" === e.replace(I, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case g:
                    if (d) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? n(a[1], a[2], a[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (d && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (d && m.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  l(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          x = r(G, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), g));
            };
          }),
          P = r(G, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          B = r(G, function (e, t) {
            function a(e, t) {
              var a, n, i, o, l;
              for (a in e)
                (i = (o = z[a])[0]),
                  (n = o[1] || a),
                  (l = this.convert(e[a], i)),
                  t.call(this, n, l, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  z.perspective &&
                    Y.perspective &&
                    ((this.current.perspective = Y.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var a,
                  n = {};
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                (this.active = !0), (this.nextStyle = this.style(n));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  a = "";
                for (t in e) a += t + "(" + e[t] + ") ";
                return a;
              }),
              (e.values = function (e) {
                var t,
                  n = {};
                return (
                  a.call(this, e, function (e, a, i) {
                    (n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  n
                );
              });
          }),
          F = r(function (t) {
            function o() {
              var e,
                t,
                a,
                n = c.length;
              if (n)
                for (M(o), t = U(), e = n; e--; ) (a = c[e]) && a.render(t);
            }
            var d = { ease: f.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || d.ease;
              f[t] && (t = f[t][1]),
                "function" != typeof t && (t = d.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var a = e.from,
                n = e.to;
              void 0 === a && (a = d.from),
                void 0 === n && (n = d.to),
                (this.unit = e.unit || ""),
                "number" == typeof a && "number" == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = U()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = U()),
                  (this.active = !0),
                  1 === c.push(this) && M(o));
              }),
              (t.stop = function () {
                var t, a;
                this.active &&
                  ((this.active = !1),
                  (a = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(a + 1)),
                    (c.length = a),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start;
                if (this.delay) {
                  if (a <= this.delay) return;
                  a -= this.delay;
                }
                if (a < this.duration) {
                  var i,
                    o,
                    l = this.ease(a, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        n(
                          i[0] + l * (o[0] - i[0]),
                          i[1] + l * (o[1] - i[1]),
                          i[2] + l * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + l * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var n = t.replace(I, "");
                  n !== e.replace(I, "") &&
                    l("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = n);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var c = [],
              s = 1e3;
          }),
          D = r(F, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = r(F, function (e, t) {
            (e.init = function (e) {
              var t, a;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new F({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1;
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Y = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !A.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!A.transition) return (Y.fallback = !0);
          Y.agentTests.push("(" + e + ")");
          var t = RegExp(Y.agentTests.join("|"), "i");
          Y.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new F(e);
          }),
          (t.delay = function (e, t, a) {
            return new D({ complete: t, duration: e, context: a });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var W = e.style,
          H = e.css,
          Q = { transform: A.transform && A.transform.css },
          j = {
            color: [x, g],
            background: [x, g, "background-color"],
            "outline-color": [x, g],
            "border-color": [x, g],
            "border-top-color": [x, g],
            "border-right-color": [x, g],
            "border-bottom-color": [x, g],
            "border-left-color": [x, g],
            "border-width": [G, b],
            "border-top-width": [G, b],
            "border-right-width": [G, b],
            "border-bottom-width": [G, b],
            "border-left-width": [G, b],
            "border-spacing": [G, b],
            "letter-spacing": [G, b],
            margin: [G, b],
            "margin-top": [G, b],
            "margin-right": [G, b],
            "margin-bottom": [G, b],
            "margin-left": [G, b],
            padding: [G, b],
            "padding-top": [G, b],
            "padding-right": [G, b],
            "padding-bottom": [G, b],
            "padding-left": [G, b],
            "outline-width": [G, b],
            opacity: [G, y],
            top: [G, m],
            right: [G, m],
            bottom: [G, m],
            left: [G, m],
            "font-size": [G, m],
            "text-indent": [G, m],
            "word-spacing": [G, m],
            width: [G, m],
            "min-width": [G, m],
            "max-width": [G, m],
            height: [G, m],
            "min-height": [G, m],
            "max-height": [G, m],
            "line-height": [G, v],
            "scroll-top": [P, y, "scrollTop"],
            "scroll-left": [P, y, "scrollLeft"],
          },
          z = {};
        A.transform &&
          ((j.transform = [B]),
          (z = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          A.transform &&
            A.backface &&
            ((z.z = [m, "translateZ"]),
            (z.rotateZ = [O]),
            (z.scaleZ = [y]),
            (z.perspective = [b]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, a) {
      "use strict";
      var n,
        i,
        o,
        l,
        d,
        c,
        s,
        r,
        f,
        u,
        p,
        E,
        I,
        T,
        y,
        g,
        b,
        m,
        O,
        v,
        L = window.$,
        R = a(5487) && L.tram;
      ((n = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (l = Object.prototype),
        (d = Function.prototype),
        o.push,
        (c = o.slice),
        o.concat,
        l.toString,
        (s = l.hasOwnProperty),
        (r = o.forEach),
        (f = o.map),
        o.reduce,
        o.reduceRight,
        (u = o.filter),
        o.every,
        (p = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (I = Object.keys),
        d.bind,
        (T =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e;
              if (r && e.forEach === r) e.forEach(t, a);
              else if (e.length === +e.length) {
                for (var o = 0, l = e.length; o < l; o++)
                  if (t.call(a, e[o], o, e) === i) return;
              } else
                for (var d = n.keys(e), o = 0, l = d.length; o < l; o++)
                  if (t.call(a, e[d[o]], d[o], e) === i) return;
              return e;
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : f && e.map === f
              ? e.map(t, a)
              : (T(e, function (e, i, o) {
                  n.push(t.call(a, e, i, o));
                }),
                n);
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n;
            return (
              y(e, function (e, i, o) {
                if (t.call(a, e, i, o)) return (n = e), !0;
              }),
              n
            );
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = [];
            return null == e
              ? n
              : u && e.filter === u
              ? e.filter(t, a)
              : (T(e, function (e, i, o) {
                  t.call(a, e, i, o) && n.push(e);
                }),
                n);
          }),
        (y =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, a)
                : (T(e, function (e, n, l) {
                    if (o || (o = t.call(a, e, n, l))) return i;
                  }),
                  !!o);
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (n.delay = function (e, t) {
          var a = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, a);
          }, t);
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(c.call(arguments, 1)));
        }),
        (n.throttle = function (e) {
          var t, a, n;
          return function () {
            t ||
              ((t = !0),
              (a = arguments),
              (n = this),
              R.frame(function () {
                (t = !1), e.apply(n, a);
              }));
          };
        }),
        (n.debounce = function (e, t, a) {
          var i,
            o,
            l,
            d,
            c,
            s = function () {
              var r = n.now() - d;
              r < t
                ? (i = setTimeout(s, t - r))
                : ((i = null), a || ((c = e.apply(l, o)), (l = o = null)));
            };
          return function () {
            (l = this), (o = arguments), (d = n.now());
            var r = a && !i;
            return (
              i || (i = setTimeout(s, t)),
              r && ((c = e.apply(l, o)), (l = o = null)),
              c
            );
          };
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e;
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var a in e) n.has(e, a) && t.push(a);
          return t;
        }),
        (n.has = function (e, t) {
          return s.call(e, t);
        }),
        (n.isObject = function (e) {
          return e === Object(e);
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (g = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a);
          var i,
            o = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || g)
                  .source,
                (t.interpolate || g).source,
                (t.evaluate || g).source,
              ].join("|") + "|$",
              "g"
            ),
            l = 0,
            d = "__p+='";
          e.replace(o, function (t, a, n, i, o) {
            return (
              (d += e.slice(l, o).replace(m, O)),
              (l = o + t.length),
              a
                ? (d += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (d += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (d += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (d += "';\n");
          var c = t.variable;
          if (c) {
            if (!v.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else (d = "with(obj||{}){\n" + d + "}\n"), (c = "obj");
          d =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            d +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", d);
          } catch (e) {
            throw ((e.source = d), e);
          }
          var s = function (e) {
            return i.call(this, e, n);
          };
          return (s.source = "function(" + c + "){\n" + d + "}"), s;
        }),
        (e.exports = n);
    },
    9461: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "brand",
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            o = e("html"),
            l = e("body"),
            d = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function r() {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", a ? "display: none !important;" : "");
          }
          function f() {
            var e = l.children(".w-webflow-badge"),
              a = e.length && e.get(0) === t,
              i = n.env("editor");
            if (a) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || l.append(t);
          }
          return (
            (a.ready = function () {
              var a,
                n,
                l,
                u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && d.hostname !== p && (u = !0),
                u &&
                  !c &&
                  ((t =
                    t ||
                    ((a = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      ""
                    )),
                    (n = e("<img>")
                      .attr(
                        "src",
                        ""
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (l = e("<img>")
                      .attr(
                        "src",
                        ""
                      )
                      .attr("alt", "")),
                    a.append(n, l),
                    a[0])),
                  f(),
                  setTimeout(f, 500),
                  e(i).off(s, r).on(s, r));
            }),
            a
          );
        })
      );
    },
    322: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "edit",
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env("test") || n.env("frame")) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            l = e(document.documentElement),
            d = document.location,
            c = "hashchange",
            s =
              a.load ||
              function () {
                var t, a, n;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(c, f),
                  (t = function (t) {
                    var a;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: l.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((a = t),
                        function (t) {
                          var n, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = a),
                            (i =
                              (n = t.scriptPath).indexOf("//") >= 0
                                ? n
                                : p("https://editor-api.webflow.com" + n)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, u);
                        }),
                    });
                  }),
                  ((a = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (a.style.display = "none"),
                  (a.sandbox = "allow-scripts allow-same-origin"),
                  (n = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(a, n), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(a, n), t(!0));
                  }),
                  (a.onerror = function () {
                    E(a, n), t(!1);
                  }),
                  window.addEventListener("message", n, !1),
                  window.document.body.appendChild(a);
              },
            r = !1;
          try {
            r =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function f() {
            !i && /\?edit/.test(d.hash) && s();
          }
          function u(e, t, a) {
            throw (console.error("Could not load editor script: " + t), a);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            r
              ? s()
              : d.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) ||
                  /\?edit$/.test(d.href)) &&
                s()
              : o.on(c, f).triggerHandler(c),
            {}
          );
        })
      );
    },
    2338: function (e, t, a) {
      "use strict";
      a(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function l(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s);
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    document.addEventListener(
                      "keydown",
                      function (a) {
                        a.metaKey ||
                          a.altKey ||
                          a.ctrlKey ||
                          (o(e.activeElement) && l(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", d, !0),
                      document.addEventListener("pointerdown", d, !0),
                      document.addEventListener("touchstart", d, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (a && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var a, n, d;
                            (t ||
                              ((n = (a = e.target).type),
                              ("INPUT" === (d = a.tagName) &&
                                i[n] &&
                                !a.readOnly) ||
                                ("TEXTAREA" === d && !a.readOnly) ||
                                a.isContentEditable ||
                                0)) &&
                              l(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function a(a) {
            t &&
              (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
          }
          function i(a) {
            var n, i;
            (i = (n = a.target).tagName),
              ((/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                n.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", a, !0),
                document.addEventListener("click", a, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        a = {},
        n = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            n.__wf_intro ||
              ((n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO));
          },
          outro: function (e, n) {
            n.__wf_intro &&
              ((n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO));
          },
        };
      (a.triggers = {}),
        (a.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var l = n[i];
            l[0](0, l[1]);
          }
          (n = []), t.extend(a.triggers, o);
        }),
        (a.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (a.triggers[e] = function (e, a) {
                n.push([t, a]);
              });
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      "use strict";
      var n = a(7199);
      function i(e, t) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var o = window.jQuery,
        l = {},
        d = ".w-ix";
      (l.triggers = {}),
        (l.types = { INTRO: "w-ix-intro" + d, OUTRO: "w-ix-outro" + d }),
        o.extend(l.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = l);
    },
    941: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, a) {
      "use strict";
      var n,
        i,
        o = {},
        l = {},
        d = [],
        c = window.Webflow || [],
        s = window.jQuery,
        r = s(window),
        f = s(document),
        u = s.isFunction,
        p = (o._ = a(5756)),
        E = (o.tram = a(5487) && s.tram),
        I = !1,
        T = !1;
      function y(e) {
        o.env() &&
          (u(e.design) && r.on("__wf_design", e.design),
          u(e.preview) && r.on("__wf_preview", e.preview)),
          u(e.destroy) && r.on("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            (function (e) {
              if (I) return e.ready();
              p.contains(d, e.ready) || d.push(e.ready);
            })(e);
      }
      function g(e) {
        var t;
        u(e.design) && r.off("__wf_design", e.design),
          u(e.preview) && r.off("__wf_preview", e.preview),
          u(e.destroy) && r.off("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            ((t = e),
            (d = p.filter(d, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, a) {
          l[e] && g(l[e]);
          var n = (l[e] = t(s, p, a) || {});
          return y(n), n;
        }),
        (o.require = function (e) {
          return l[e];
        }),
        (o.push = function (e) {
          if (I) {
            u(e) && e();
            return;
          }
          c.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t;
          return e
            ? "design" === e
              ? a && t
              : "preview" === e
              ? a && !t
              : "slug" === e
              ? a && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : a;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(b));
      (o.env.safari = /safari/.test(b) && !O && !v),
        m &&
          f.on("touchstart mousedown", function (e) {
            n = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === n || s.contains(e, n);
            }
          : function () {
              return !0;
            });
      var L = "resize.webflow orientationchange.webflow load.webflow",
        R = "scroll.webflow " + L;
      function _(e, t) {
        var a = [],
          n = {};
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            "function" == typeof e && (p.contains(a, e) || a.push(e));
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = [];
              return;
            }
            a = p.filter(a, function (t) {
              return t !== e;
            });
          }),
          n
        );
      }
      function N(e) {
        u(e) && e();
      }
      function S() {
        i && (i.reject(), r.off("load", i.resolve)),
          (i = new s.Deferred()),
          r.on("load", i.resolve);
      }
      (o.resize = _(r, L)),
        (o.scroll = _(r, R)),
        (o.redraw = _()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (I = !0),
            T ? ((T = !1), p.each(l, y)) : p.each(d, N),
            p.each(c, N),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (T = !0),
            r.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(l, g),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (d = []),
            (c = []),
            "pending" === i.state() && S();
        }),
        s(o.ready),
        S(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "links",
        (e.exports = function (e, t) {
          var a,
            i,
            o,
            l = {},
            d = e(window),
            c = n.env(),
            s = window.location,
            r = document.createElement("a"),
            f = "w--current",
            u = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = d.scrollTop(),
              a = d.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var n = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  l = i.outerHeight(),
                  d = 0.5 * a,
                  c = i.is(":visible") && o + l - d >= e && o + d <= e + a;
                t.active !== c && ((t.active = c), I(n, f, c));
              }
            });
          }
          function I(e, t, a) {
            var n = e.hasClass(t);
            (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (l.ready =
              l.design =
              l.preview =
                function () {
                  (a = c && n.env("design")),
                    (o = n.env("slug") || s.pathname || ""),
                    n.scroll.off(E),
                    (i = []);
                  for (var t = document.links, l = 0; l < t.length; ++l)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var n =
                          (a && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((r.href = n), !(n.indexOf(":") >= 0))) {
                          var l = e(t);
                          if (
                            r.hash.length > 1 &&
                            r.host + r.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(r.hash)) return;
                            var d = e(r.hash);
                            d.length && i.push({ link: l, sec: d, active: !1 });
                            return;
                          }
                          "#" !== n &&
                            "" !== n &&
                            I(
                              l,
                              f,
                              r.href === s.href ||
                                n === o ||
                                (u.test(n) && p.test(o))
                            );
                        }
                      }
                    })(t[l]);
                  i.length && (n.scroll.on(E), E());
                }),
            l
          );
        })
      );
    },
    286: function (e, t, a) {
      "use strict";
      var n = a(3949);
      n.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            a = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            l = e(document),
            d = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = n.env("editor") ? ".w-editor-body" : "body",
            r =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            f = 'a[href="#"]',
            u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function T(e, t) {
            var a;
            switch (t) {
              case "add":
                (a = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", a)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (a = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", a),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var l = t.currentTarget;
            if (
              !(
                n.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(l.className))
              )
            ) {
              var s =
                E.test(l.hash) && l.host + l.pathname === a.host + a.pathname
                  ? l.hash
                  : "";
              if ("" !== s) {
                var f,
                  u = e(s);
                u.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (f = s),
                  a.hash !== f &&
                    i &&
                    i.pushState &&
                    !(n.env.chrome && "file:" === a.protocol) &&
                    (i.state && i.state.hash) !== f &&
                    i.pushState({ hash: f }, "", f),
                  window.setTimeout(function () {
                    !(function (t, a) {
                      var n = o.scrollTop(),
                        i = (function (t) {
                          var a = e(r),
                            n =
                              "fixed" === a.css("position")
                                ? a.outerHeight()
                                : 0,
                            i = t.offset().top - n;
                          if ("mid" === t.data("scroll")) {
                            var l = o.height() - n,
                              d = t.outerHeight();
                            d < l && (i -= Math.round((l - d) / 2));
                          }
                          return i;
                        })(t);
                      if (n !== i) {
                        var l = (function (e, t, a) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              I.matches
                            )
                              return 0;
                            var n = 1;
                            return (
                              d.add(e).each(function (e, t) {
                                var a = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(a) && a >= 0 && (n = a);
                              }),
                              (472.143 * Math.log(Math.abs(t - a) + 125) -
                                2e3) *
                                n
                            );
                          })(t, n, i),
                          s = Date.now(),
                          f = function () {
                            var e,
                              t,
                              o,
                              d,
                              r,
                              u = Date.now() - s;
                            window.scroll(
                              0,
                              ((e = n),
                              (t = i),
                              (o = u) > (d = l)
                                ? t
                                : e +
                                  (t - e) *
                                    ((r = o / d) < 0.5
                                      ? 4 * r * r * r
                                      : (r - 1) * (2 * r - 2) * (2 * r - 2) +
                                        1))
                            ),
                              u <= l ? c(f) : "function" == typeof a && a();
                          };
                        c(f);
                      }
                    })(u, function () {
                      T(u, "add"),
                        u.get(0).focus({ preventScroll: !0 }),
                        T(u, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t;
              l.on(a, u, y),
                l.on(e, f, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, a) {
      "use strict";
      a(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection;
          function n(t) {
            var n,
              i,
              o = !1,
              l = !1,
              d = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((l = !0), (n = t[0].clientX)) : (n = e.clientX),
                (i = n));
            }
            function s(t) {
              if (o) {
                if (l && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var n,
                  c,
                  s,
                  r,
                  u = t.touches,
                  p = u ? u[0].clientX : t.clientX,
                  E = p - i;
                (i = p),
                  Math.abs(E) > d &&
                    a &&
                    "" === String(a()) &&
                    ((n = "swipe"),
                    (c = t),
                    (s = { direction: E > 0 ? "right" : "left" }),
                    (r = e.Event(n, { originalEvent: c })),
                    e(c.target).trigger(r, s),
                    f());
              }
            }
            function r(e) {
              if (o && ((o = !1), l && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (l = !1);
                return;
              }
            }
            function f() {
              o = !1;
            }
            t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", r, !1),
              t.addEventListener("touchcancel", f, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", r, !1),
              t.addEventListener("mouseout", f, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", r, !1),
                  t.removeEventListener("touchcancel", f, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", r, !1),
                  t.removeEventListener("mouseout", f, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new n(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    9858: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(5134);
      let o = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35,
        },
        l = /^#[a-zA-Z0-9\-_]+$/;
      n.define(
        "dropdown",
        (e.exports = function (e, t) {
          var a,
            d,
            c = t.debounce,
            s = {},
            r = n.env(),
            f = !1,
            u = n.env.touch,
            p = ".w-dropdown",
            E = "w--open",
            I = i.triggers,
            T = "focusout" + p,
            y = "keydown" + p,
            g = "mouseenter" + p,
            b = "mousemove" + p,
            m = "mouseleave" + p,
            O = (u ? "click" : "mouseup") + p,
            v = "w-close" + p,
            L = "setting" + p,
            R = e(document);
          function _() {
            (a = r && n.env("design")), (d = R.find(p)).each(N);
          }
          function N(t, i) {
            var d,
              s,
              f,
              u,
              I,
              b,
              m,
              _,
              N,
              M,
              U = e(i),
              w = e.data(i, p);
            w ||
              (w = e.data(i, p, {
                open: !1,
                el: U,
                config: {},
                selectedIdx: -1,
              })),
              (w.toggle = w.el.children(".w-dropdown-toggle")),
              (w.list = w.el.children(".w-dropdown-list")),
              (w.links = w.list.find("a:not(.w-dropdown .w-dropdown a)")),
              (w.complete =
                ((d = w),
                function () {
                  d.list.removeClass(E),
                    d.toggle.removeClass(E),
                    d.manageZ && d.el.css("z-index", "");
                })),
              (w.mouseLeave =
                ((s = w),
                function () {
                  (s.hovering = !1), s.links.is(":focus") || C(s);
                })),
              (w.mouseUpOutside =
                ((f = w).mouseUpOutside && R.off(O, f.mouseUpOutside),
                c(function (t) {
                  if (f.open) {
                    var a = e(t.target);
                    if (!a.closest(".w-dropdown-toggle").length) {
                      var i = -1 === e.inArray(f.el[0], a.parents(p)),
                        o = n.env("editor");
                      if (i) {
                        if (o) {
                          var l =
                              1 === a.parents().length &&
                              1 === a.parents("svg").length,
                            d = a.parents(
                              ".w-editor-bem-EditorHoverControls"
                            ).length;
                          if (l || d) return;
                        }
                        C(f);
                      }
                    }
                  }
                }))),
              (w.mouseMoveOutside =
                ((u = w),
                c(function (t) {
                  if (u.open) {
                    var a = e(t.target);
                    if (-1 === e.inArray(u.el[0], a.parents(p))) {
                      var n = a.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length,
                        i = a.parents(".w-editor-bem-RTToolbar").length,
                        o = e(".w-editor-bem-EditorOverlay"),
                        l =
                          o.find(".w-editor-edit-outline").length ||
                          o.find(".w-editor-bem-RTToolbar").length;
                      if (n || i || l) return;
                      (u.hovering = !1), C(u);
                    }
                  }
                }))),
              S(w);
            var k = w.toggle.attr("id"),
              G = w.list.attr("id");
            k || (k = "w-dropdown-toggle-" + t),
              G || (G = "w-dropdown-list-" + t),
              w.toggle.attr("id", k),
              w.toggle.attr("aria-controls", G),
              w.toggle.attr("aria-haspopup", "menu"),
              w.toggle.attr("aria-expanded", "false"),
              w.toggle
                .find(".w-icon-dropdown-toggle")
                .attr("aria-hidden", "true"),
              "BUTTON" !== w.toggle.prop("tagName") &&
                (w.toggle.attr("role", "button"),
                w.toggle.attr("tabindex") || w.toggle.attr("tabindex", "0")),
              w.list.attr("id", G),
              w.list.attr("aria-labelledby", k),
              w.links.each(function (e, t) {
                t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"),
                  l.test(t.hash) &&
                    t.addEventListener("click", C.bind(null, w));
              }),
              w.el.off(p),
              w.toggle.off(p),
              w.nav && w.nav.off(p);
            var x = h(w, !0);
            a &&
              w.el.on(
                L,
                ((I = w),
                function (e, t) {
                  (t = t || {}),
                    S(I),
                    !0 === t.open && A(I),
                    !1 === t.open && C(I, { immediate: !0 });
                })
              ),
              a ||
                (r && ((w.hovering = !1), C(w)),
                w.config.hover &&
                  w.toggle.on(
                    g,
                    ((b = w),
                    function () {
                      (b.hovering = !0), A(b);
                    })
                  ),
                w.el.on(v, x),
                w.el.on(
                  y,
                  ((m = w),
                  function (e) {
                    if (!a && m.open)
                      switch (
                        ((m.selectedIdx = m.links.index(
                          document.activeElement
                        )),
                        e.keyCode)
                      ) {
                        case o.HOME:
                          if (!m.open) return;
                          return (m.selectedIdx = 0), V(m), e.preventDefault();
                        case o.END:
                          if (!m.open) return;
                          return (
                            (m.selectedIdx = m.links.length - 1),
                            V(m),
                            e.preventDefault()
                          );
                        case o.ESCAPE:
                          return C(m), m.toggle.focus(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                          return (
                            (m.selectedIdx = Math.min(
                              m.links.length - 1,
                              m.selectedIdx + 1
                            )),
                            V(m),
                            e.preventDefault()
                          );
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                          return (
                            (m.selectedIdx = Math.max(-1, m.selectedIdx - 1)),
                            V(m),
                            e.preventDefault()
                          );
                      }
                  })
                ),
                w.el.on(
                  T,
                  ((_ = w),
                  c(function (e) {
                    var { relatedTarget: t, target: a } = e,
                      n = _.el[0];
                    return (
                      n.contains(t) || n.contains(a) || C(_),
                      e.stopPropagation()
                    );
                  }))
                ),
                w.toggle.on(O, x),
                w.toggle.on(
                  y,
                  ((M = h((N = w), !0)),
                  function (e) {
                    if (!a) {
                      if (!N.open)
                        switch (e.keyCode) {
                          case o.ARROW_UP:
                          case o.ARROW_DOWN:
                            return e.stopPropagation();
                        }
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return M(), e.stopPropagation(), e.preventDefault();
                      }
                    }
                  })
                ),
                (w.nav = w.el.closest(".w-nav")),
                w.nav.on(v, x));
          }
          function S(e) {
            var t = Number(e.el.css("z-index"));
            (e.manageZ = 900 === t || 901 === t),
              (e.config = {
                hover: "true" === e.el.attr("data-hover") && !u,
                delay: e.el.attr("data-delay"),
              });
          }
          function h(e, t) {
            return c(function (a) {
              if (e.open || (a && "w-close" === a.type))
                return C(e, { forceClose: t });
              A(e);
            });
          }
          function A(t) {
            if (!t.open) {
              (i = t.el[0]),
                d.each(function (t, a) {
                  var n = e(a);
                  n.is(i) || n.has(i).length || n.triggerHandler(v);
                }),
                (t.open = !0),
                t.list.addClass(E),
                t.toggle.addClass(E),
                t.toggle.attr("aria-expanded", "true"),
                I.intro(0, t.el[0]),
                n.redraw.up(),
                t.manageZ && t.el.css("z-index", 901);
              var i,
                o = n.env("editor");
              a || R.on(O, t.mouseUpOutside),
                t.hovering && !o && t.el.on(m, t.mouseLeave),
                t.hovering && o && R.on(b, t.mouseMoveOutside),
                window.clearTimeout(t.delayId);
            }
          }
          function C(e, { immediate: t, forceClose: a } = {}) {
            if (e.open && (!e.config.hover || !e.hovering || a)) {
              e.toggle.attr("aria-expanded", "false"), (e.open = !1);
              var n = e.config;
              if (
                (I.outro(0, e.el[0]),
                R.off(O, e.mouseUpOutside),
                R.off(b, e.mouseMoveOutside),
                e.el.off(m, e.mouseLeave),
                window.clearTimeout(e.delayId),
                !n.delay || t)
              )
                return e.complete();
              e.delayId = window.setTimeout(e.complete, n.delay);
            }
          }
          function V(e) {
            e.links[e.selectedIdx] && e.links[e.selectedIdx].focus();
          }
          return (
            (s.ready = _),
            (s.design = function () {
              f &&
                R.find(p).each(function (t, a) {
                  e(a).triggerHandler(v);
                }),
                (f = !1),
                _();
            }),
            (s.preview = function () {
              (f = !0), _();
            }),
            s
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function a(e, t, a, n, i, o, l, d, c, s, r, f, u) {
        return function (p) {
          e(p);
          var E = p.form,
            I = {
              name: E.attr("data-name") || E.attr("name") || "Untitled Form",
              pageId: E.attr("data-wf-page-id") || "",
              elementId: E.attr("data-wf-element-id") || "",
              domain: f("html").attr("data-wf-domain") || null,
              source: t.href,
              test: a.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                E.html()
              ),
              trackingCookies: n(),
            };
          let T = E.attr("data-wf-flow");
          T && (I.wfFlow = T);
          let y = E.attr("data-wf-locale-id");
          y && (I.localeId = y), i(p);
          var g = o(E, I.fields);
          return g
            ? l(g)
            : ((I.fileUploads = d(E)), c(p), s)
            ? void f
                .ajax({
                  url: u,
                  type: "POST",
                  data: I,
                  dataType: "json",
                  crossDomain: !0,
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), r(p);
                })
                .fail(function () {
                  r(p);
                })
            : void r(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    },
    7527: function (e, t, a) {
      "use strict";
      var n = a(3949);
      let i = (e, t, a, n) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              a(e);
            },
            "error-callback": function () {
              n();
            },
          });
      };
      n.define(
        "forms",
        (e.exports = function (e, t) {
          let o,
            l = "TURNSTILE_LOADED";
          var d,
            c,
            s,
            r,
            f,
            u = {},
            p = e(document),
            E = window.location,
            I = window.XDomainRequest && !window.atob,
            T = ".w-form",
            y = /e(-)?mail/i,
            g = /^\S+@\S+$/,
            b = window.alert,
            m = n.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            L = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          function R(t, o) {
            var d = e(o),
              s = e.data(o, T);
            s || (s = e.data(o, T, { form: d })), _(s);
            var u = d.closest("div.w-form");
            (s.done = u.find("> .w-form-done")),
              (s.fail = u.find("> .w-form-fail")),
              (s.fileUploads = u.find(".w-file-upload")),
              s.fileUploads.each(function (t) {
                !(function (t, a) {
                  if (a.fileUploads && a.fileUploads[t]) {
                    var n,
                      i = e(a.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      l = i.find("> .w-file-upload-uploading"),
                      d = i.find("> .w-file-upload-success"),
                      c = i.find("> .w-file-upload-error"),
                      s = o.find(".w-file-upload-input"),
                      r = o.find(".w-file-upload-label"),
                      u = r.children(),
                      p = c.find(".w-file-upload-error-msg"),
                      E = d.find(".w-file-upload-file"),
                      I = d.find(".w-file-remove-link"),
                      T = E.find(".w-file-upload-file-name"),
                      y = p.attr("data-w-size-error"),
                      g = p.attr("data-w-type-error"),
                      b = p.attr("data-w-generic-error");
                    if (
                      (m ||
                        r.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), s.click());
                        }),
                      r
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      I.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      m)
                    )
                      s.on("click", function (e) {
                        e.preventDefault();
                      }),
                        r.on("click", function (e) {
                          e.preventDefault();
                        }),
                        u.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      I.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        s.removeAttr("data-value"),
                          s.val(""),
                          T.html(""),
                          o.toggle(!0),
                          d.toggle(!1),
                          r.focus();
                      }),
                        s.on("change", function (i) {
                          var d, s, r;
                          (n =
                            i.target && i.target.files && i.target.files[0]) &&
                            (o.toggle(!1),
                            c.toggle(!1),
                            l.toggle(!0),
                            l.focus(),
                            T.text(n.name),
                            S() || N(a),
                            (a.fileUploads[t].uploading = !0),
                            (d = n),
                            (s = L),
                            (r = new URLSearchParams({
                              name: d.name,
                              size: d.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${f}?${r}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                s(null, e);
                              })
                              .fail(function (e) {
                                s(e);
                              }));
                        });
                      var O = r.outerHeight();
                      s.height(O), s.width(1);
                    }
                  }
                  function v(e) {
                    var n = e.responseJSON && e.responseJSON.msg,
                      i = b;
                    "string" == typeof n &&
                    0 === n.indexOf("InvalidFileTypeError")
                      ? (i = g)
                      : "string" == typeof n &&
                        0 === n.indexOf("MaxFileSizeError") &&
                        (i = y),
                      p.text(i),
                      s.removeAttr("data-value"),
                      s.val(""),
                      l.toggle(!1),
                      o.toggle(!0),
                      c.toggle(!0),
                      c.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || _(a);
                  }
                  function L(t, a) {
                    if (t) return v(t);
                    var i = a.fileName,
                      o = a.postData,
                      l = a.fileId,
                      d = a.s3Url;
                    s.attr("data-value", l),
                      (function (t, a, n, i, o) {
                        var l = new FormData();
                        for (var d in a) l.append(d, a[d]);
                        l.append("file", n, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: l,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            });
                      })(d, o, n, i, R);
                  }
                  function R(e) {
                    if (e) return v(e);
                    l.toggle(!1),
                      d.css("display", "inline-block"),
                      d.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || _(a);
                  }
                  function S() {
                    return (
                      (a.fileUploads && a.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, s);
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading");
                })(s),
                S(d, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : l,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        (s.turnstileToken = e), _(s), S(d, !1);
                      },
                      () => {
                        _(s), s.btn && s.btn.prop("disabled", !0), S(d, !1);
                      }
                    );
                  }
                ));
            var I =
              s.form.attr("aria-label") || s.form.attr("data-name") || "Form";
            s.done.attr("aria-label") || s.form.attr("aria-label", I),
              s.done.attr("tabindex", "-1"),
              s.done.attr("role", "region"),
              s.done.attr("aria-label") ||
                s.done.attr("aria-label", I + " success"),
              s.fail.attr("tabindex", "-1"),
              s.fail.attr("role", "region"),
              s.fail.attr("aria-label") ||
                s.fail.attr("aria-label", I + " failure");
            var y = (s.action = d.attr("action"));
            if (
              ((s.handler = null),
              (s.redirect = d.attr("data-redirect")),
              v.test(y))
            ) {
              s.handler = M;
              return;
            }
            if (!y) {
              if (c) {
                s.handler = (0, a(6524).default)(
                  _,
                  E,
                  n,
                  V,
                  w,
                  h,
                  b,
                  A,
                  N,
                  c,
                  U,
                  e,
                  r
                );
                return;
              }
              L();
            }
          }
          function _(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null), (e.success = !1);
            let a = !!(O && !e.turnstileToken);
            t.prop("disabled", a),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label);
          }
          function N(e) {
            var t = e.btn,
              a = e.wait;
            t.prop("disabled", !0), a && ((e.label = t.val()), t.val(a));
          }
          function S(e, t) {
            let a = e.closest(".w-form");
            t ? a.addClass("w-form-loading") : a.removeClass("w-form-loading");
          }
          function h(t, a) {
            var n = null;
            return (
              (a = a || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, o) {
                  var l,
                    d,
                    c,
                    s,
                    r,
                    f = e(o),
                    u = f.attr("type"),
                    p =
                      f.attr("data-name") ||
                      f.attr("name") ||
                      "Field " + (i + 1);
                  p = encodeURIComponent(p);
                  var E = f.val();
                  if ("checkbox" === u) E = f.is(":checked");
                  else if ("radio" === u) {
                    if (null === a[p] || "string" == typeof a[p]) return;
                    E =
                      t
                        .find('input[name="' + f.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof E && (E = e.trim(E)),
                    (a[p] = E),
                    (n =
                      n ||
                      ((l = f),
                      (d = u),
                      (c = p),
                      (s = E),
                      (r = null),
                      "password" === d
                        ? (r = "Passwords cannot be submitted.")
                        : l.attr("required")
                        ? s
                          ? y.test(l.attr("type")) &&
                            !g.test(s) &&
                            (r = "Please enter a valid email address for: " + c)
                          : (r = "Please fill out the required field: " + c)
                        : "g-recaptcha-response" !== c ||
                          s ||
                          (r = "Please confirm you're not a robot."),
                      r));
                }),
              n
            );
          }
          function A(t) {
            var a = {};
            return (
              t.find(':input[type="file"]').each(function (t, n) {
                var i = e(n),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  l = i.attr("data-value");
                "string" == typeof l && (l = e.trim(l)), (a[o] = l);
              }),
              a
            );
          }
          u.ready =
            u.design =
            u.preview =
              function () {
                O &&
                  (((o = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(o),
                  (o.onload = () => {
                    p.trigger(l);
                  })),
                  (r =
                    "https://webflow.com/api/v1/form/" +
                    (c = e("html").attr("data-wf-site"))),
                  I &&
                    r.indexOf("https://webflow.com") >= 0 &&
                    (r = r.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com"
                    )),
                  (f = `${r}/signFile`),
                  (d = e(T + " form")).length && d.each(R),
                  (!m || n.env("preview")) &&
                    !s &&
                    (function () {
                      (s = !0),
                        p.on("submit", T + " form", function (t) {
                          var a = e.data(this, T);
                          a.handler && ((a.evt = t), a.handler(a));
                        });
                      let t = ".w-checkbox-input",
                        a = ".w-radio-input",
                        n = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        l = [
                          ["checkbox", t],
                          ["radio", a],
                        ];
                      p.on(
                        "change",
                        T + ' form input[type="checkbox"]:not(' + t + ")",
                        (a) => {
                          e(a.target).siblings(t).toggleClass(n);
                        }
                      ),
                        p.on("change", T + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(a).removeClass(n)
                          );
                          let o = e(i.target);
                          o.hasClass("w-radio-input") ||
                            o.siblings(a).addClass(n);
                        }),
                        l.forEach(([t, a]) => {
                          p.on(
                            "focus",
                            T + ` form input[type="${t}"]:not(` + a + ")",
                            (t) => {
                              e(t.target).siblings(a).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(a)
                                  .addClass(o);
                            }
                          ),
                            p.on(
                              "blur",
                              T + ` form input[type="${t}"]:not(` + a + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(a)
                                  .removeClass(`${i} ${o}`);
                              }
                            );
                        });
                    })();
              };
          let C = { _mkto_trk: "marketo" };
          function V() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let a = t.split("="),
                n = a[0];
              if (n in C) {
                let t = C[n],
                  i = a.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function M(a) {
            _(a);
            var n,
              i = a.form,
              o = {};
            if (/^https/.test(E.href) && !/^https/.test(a.action))
              return void i.attr("method", "post");
            w(a);
            var l = h(i, o);
            if (l) return b(l);
            N(a),
              t.each(o, function (e, t) {
                y.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (n = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e);
              }),
              n &&
                !o.FNAME &&
                ((o.FNAME = (n = n.split(" "))[0]),
                (o.LNAME = o.LNAME || n[1]));
            var d = a.action.replace("/post?", "/post-json?") + "&c=?",
              c = d.indexOf("u=") + 2;
            c = d.substring(c, d.indexOf("&", c));
            var s = d.indexOf("id=") + 3;
            (o["b_" + c + "_" + (s = d.substring(s, d.indexOf("&", s)))] = ""),
              e
                .ajax({ url: d, data: o, dataType: "jsonp" })
                .done(function (e) {
                  (a.success = "success" === e.result || /already/.test(e.msg)),
                    a.success || console.info("MailChimp error: " + e.msg),
                    U(a);
                })
                .fail(function () {
                  U(a);
                });
          }
          function U(e) {
            var t = e.form,
              a = e.redirect,
              i = e.success;
            if (i && a) return void n.location(a);
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              _(e);
          }
          function w(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return u;
        })
      );
    },
    1655: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      n.define(
        "navbar",
        (e.exports = function (e, t) {
          var a,
            l,
            d,
            c,
            s = {},
            r = e.tram,
            f = e(window),
            u = e(document),
            p = t.debounce,
            E = n.env(),
            I = ".w-nav",
            T = "w--open",
            y = "w--nav-dropdown-open",
            g = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function L() {
            n.resize.off(R);
          }
          function R() {
            l.each(w);
          }
          function _(a, n) {
            var i,
              l,
              s,
              r,
              p,
              E = e(n),
              T = e.data(n, I);
            T ||
              (T = e.data(n, I, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (T.menu = E.find(".w-nav-menu")),
              (T.links = T.menu.find(".w-nav-link")),
              (T.dropdowns = T.menu.find(".w-dropdown")),
              (T.dropdownToggle = T.menu.find(".w-dropdown-toggle")),
              (T.dropdownList = T.menu.find(".w-dropdown-list")),
              (T.button = E.find(".w-nav-button")),
              (T.container = E.find(".w-container")),
              (T.overlayContainerId = "w-nav-overlay-" + a),
              (T.outside =
                ((i = T).outside && u.off("click" + I, i.outside),
                function (t) {
                  var a = e(t.target);
                  (c && a.closest(".w-editor-bem-EditorOverlay").length) ||
                    U(i, a);
                }));
            var y = E.find(".w-nav-brand");
            y &&
              "/" === y.attr("href") &&
              null == y.attr("aria-label") &&
              y.attr("aria-label", "home"),
              T.button.attr("style", "-webkit-user-select: text;"),
              null == T.button.attr("aria-label") &&
                T.button.attr("aria-label", "menu"),
              T.button.attr("role", "button"),
              T.button.attr("tabindex", "0"),
              T.button.attr("aria-controls", T.overlayContainerId),
              T.button.attr("aria-haspopup", "menu"),
              T.button.attr("aria-expanded", "false"),
              T.el.off(I),
              T.button.off(I),
              T.menu.off(I),
              h(T),
              d
                ? (S(T),
                  T.el.on(
                    "setting" + I,
                    ((l = T),
                    function (e, a) {
                      a = a || {};
                      var n = f.width();
                      h(l),
                        !0 === a.open && P(l, !0),
                        !1 === a.open && F(l, !0),
                        l.open &&
                          t.defer(function () {
                            n !== f.width() && C(l);
                          });
                    })
                  ))
                : ((s = T).overlay ||
                    ((s.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(s.el)),
                    s.overlay.attr("id", s.overlayContainerId),
                    (s.parent = s.menu.parent()),
                    F(s, !0)),
                  T.button.on("click" + I, V(T)),
                  T.menu.on("click" + I, "a", M(T)),
                  T.button.on(
                    "keydown" + I,
                    ((r = T),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            V(r)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return F(r), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!r.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (r.selectedIdx = r.links.length - 1)
                              : (r.selectedIdx = 0),
                            A(r),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  T.el.on(
                    "keydown" + I,
                    ((p = T),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              F(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              w(a, n);
          }
          function N(t, a) {
            var n = e.data(a, I);
            n && (S(n), e.removeData(a, I));
          }
          function S(e) {
            e.overlay && (F(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function h(e) {
            var a = {},
              n = e.config || {},
              i = (a.animation = e.el.attr("data-animation") || "default");
            (a.animOver = /^over/.test(i)),
              (a.animDirect = /left$/.test(i) ? -1 : 1),
              n.animation !== i && e.open && t.defer(C, e),
              (a.easing = e.el.attr("data-easing") || "ease"),
              (a.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (a.duration = null != o ? Number(o) : 400),
              (a.docHeight = e.el.attr("data-doc-height")),
              (e.config = a);
          }
          function A(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), M(t);
            }
          }
          function C(e) {
            e.open && (F(e, !0), P(e, !0));
          }
          function V(e) {
            return p(function () {
              e.open ? F(e) : P(e);
            });
          }
          function M(t) {
            return function (a) {
              var i = e(this).attr("href");
              if (!n.validClick(a.currentTarget))
                return void a.preventDefault();
              i && 0 === i.indexOf("#") && t.open && F(t);
            };
          }
          (s.ready =
            s.design =
            s.preview =
              function () {
                (d = E && n.env("design")),
                  (c = n.env("editor")),
                  (a = e(document.body)),
                  (l = u.find(I)).length && (l.each(_), L(), n.resize.on(R));
              }),
            (s.destroy = function () {
              (v = e()), L(), l && l.length && l.each(N);
            });
          var U = p(function (e, t) {
            if (e.open) {
              var a = t.closest(".w-nav-menu");
              e.menu.is(a) || F(e);
            }
          });
          function w(t, a) {
            var n = e.data(a, I),
              i = (n.collapsed = "none" !== n.button.css("display"));
            if ((!n.open || i || d || F(n, !0), n.container.length)) {
              var o,
                l =
                  ("none" === (o = n.container.css(k)) && (o = ""),
                  function (t, a) {
                    (a = e(a)).css(k, ""), "none" === a.css(k) && a.css(k, o);
                  });
              n.links.each(l), n.dropdowns.each(l);
            }
            n.open && B(n);
          }
          var k = "max-width";
          function G(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function x(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function P(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(G),
                e.links.addClass(m),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(g),
                e.dropdownList.addClass(b),
                e.button.addClass(T);
              var a = e.config;
              ("none" === a.animation ||
                !r.support.transform ||
                a.duration <= 0) &&
                (t = !0);
              var i = B(e),
                o = e.menu.outerHeight(!0),
                l = e.menu.outerWidth(!0),
                c = e.el.height(),
                s = e.el[0];
              if (
                (w(0, s),
                O.intro(0, s),
                n.redraw.up(),
                d || u.on("click" + I, e.outside),
                t)
              )
                return void p();
              var f = "transform " + a.duration + "ms " + a.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                a.animOver)
              ) {
                r(e.menu)
                  .add(f)
                  .set({ x: a.animDirect * l, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(l);
                return;
              }
              r(e.menu)
                .add(f)
                .set({ y: -(c + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function B(e) {
            var t = e.config,
              n = t.docHeight ? u.height() : a.height();
            return (
              t.animOver
                ? e.menu.height(n)
                : "fixed" !== e.el.css("position") &&
                  (n -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(n),
              n
            );
          }
          function F(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(T);
              var a = e.config;
              if (
                (("none" === a.animation ||
                  !r.support.transform ||
                  a.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                u.off("click" + I, e.outside),
                t)
              ) {
                r(e.menu).stop(), d();
                return;
              }
              var n = "transform " + a.duration + "ms " + a.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                l = e.el.height();
              if (a.animOver)
                return void r(e.menu)
                  .add(n)
                  .start({ x: o * a.animDirect })
                  .then(d);
              r(e.menu)
                .add(n)
                .start({ y: -(l + i) })
                .then(d);
            }
            function d() {
              e.menu.height(""),
                r(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(x),
                e.links.removeClass(m),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(g),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return s;
        })
      );
    },
    3946: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        actionListPlaybackChanged: function () {
          return H;
        },
        animationFrameChanged: function () {
          return B;
        },
        clearRequested: function () {
          return k;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return G;
        },
        eventStateChanged: function () {
          return P;
        },
        instanceAdded: function () {
          return D;
        },
        instanceRemoved: function () {
          return Y;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return j;
        },
        parameterChanged: function () {
          return F;
        },
        playbackRequested: function () {
          return U;
        },
        previewRequested: function () {
          return M;
        },
        rawDataImported: function () {
          return h;
        },
        sessionInitialized: function () {
          return A;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return V;
        },
        stopRequested: function () {
          return w;
        },
        testFrameRendered: function () {
          return x;
        },
        viewportWidthChanged: function () {
          return Q;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = a(7087),
        l = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: r,
          IX2_PREVIEW_REQUESTED: f,
          IX2_PLAYBACK_REQUESTED: u,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: g,
          IX2_PARAMETER_CHANGED: b,
          IX2_INSTANCE_ADDED: m,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
          IX2_VIEWPORT_WIDTH_CHANGED: _,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = o.IX2EngineActionTypes,
        { reifyState: S } = l.IX2VanillaUtils,
        h = (e) => ({ type: d, payload: { ...S(e) } }),
        A = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: s }),
        V = () => ({ type: r }),
        M = ({ rawData: e, defer: t }) => ({
          type: f,
          payload: { defer: t, rawData: e },
        }),
        U = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: n,
          allowEvents: i,
          immediate: l,
          testManual: d,
          verbose: c,
          rawData: s,
        }) => ({
          type: u,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: d,
            eventId: n,
            allowEvents: i,
            immediate: l,
            verbose: c,
            rawData: s,
          },
        }),
        w = (e) => ({ type: p, payload: { actionListId: e } }),
        k = () => ({ type: E }),
        G = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        x = (e = 1) => ({ type: T, payload: { step: e } }),
        P = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        B = (e, t) => ({ type: g, payload: { now: e, parameters: t } }),
        F = (e, t) => ({ type: b, payload: { key: e, value: t } }),
        D = (e) => ({ type: m, payload: { ...e } }),
        X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        Y = (e) => ({ type: v, payload: { instanceId: e } }),
        W = (e, t, a, n) => ({
          type: L,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n },
        }),
        H = ({ actionListId: e, isPlaying: t }) => ({
          type: R,
          payload: { actionListId: e, isPlaying: t },
        }),
        Q = ({ width: e, mediaQueries: t }) => ({
          type: _,
          payload: { width: e, mediaQueries: t },
        }),
        j = () => ({ type: N });
    },
    6011: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return u;
          },
          store: function () {
            return f;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = a(9516),
        d = (n = a(7243)) && n.__esModule ? n : { default: n },
        c = a(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = r(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      let f = (0, l.createStore)(d.default);
      function u(e) {
        e() && (0, c.observeRequests)(f);
      }
      function p(e) {
        E(), (0, c.startEngine)({ store: f, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, c.stopEngine)(f);
      }
    },
    5012: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        elementContains: function () {
          return b;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return L;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return R;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return m;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return g;
        },
        setStyle: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = a(9468),
        l = a(7087),
        { ELEMENT_MATCHES: d } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: r,
          WF_PAGE: f,
        } = l.IX2EngineConstants;
      function u(e, t, a) {
        e.style[t] = a;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[d](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let a = e.split(c),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(f)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(f)
          ? document
          : null;
      }
      function g(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function b(e, t) {
        return e.contains(t);
      }
      function m(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue;
          a.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let L = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[d] && a[d](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };
      function R(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : r
          : null;
      }
    },
    1970: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        observeRequests: function () {
          return Z;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return en;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return eu;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = g(a(9777)),
        l = g(a(4738)),
        d = g(a(4659)),
        c = g(a(3452)),
        s = g(a(6633)),
        r = g(a(3729)),
        f = g(a(2397)),
        u = g(a(5082)),
        p = a(7087),
        E = a(9468),
        I = a(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = b(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        y = g(a(8955));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (b = function (e) {
          return e ? a : t;
        })(e);
      }
      let m = Object.keys(p.QuickEffectIds),
        O = (e) => m.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: L,
          HTML_ELEMENT: R,
          RENDER_GENERAL: _,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: h,
          getDestinationValues: A,
          observeStore: C,
          getInstanceId: V,
          renderHTMLElement: M,
          clearAllStyles: U,
          getMaxDurationItemIndex: w,
          getComputedStyle: k,
          getInstanceOrigin: G,
          reduceListToGroup: x,
          shouldNamespaceEventParameter: P,
          getNamespacedParameterId: B,
          shouldAllowMediaQuery: F,
          cleanupHTMLElement: D,
          clearObjectCache: X,
          stringifyTarget: Y,
          mediaQueriesEqual: W,
          shallowEqual: H,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Q,
          createPluginInstance: j,
          getPluginDuration: z,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function Z(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: K }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ea });
      }
      function K({ rawData: e, defer: t }, a) {
        let n = () => {
          en({ store: a, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(n, 0) : n();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: l,
            immediate: d,
            testManual: c,
            verbose: s = !0,
          } = e,
          { rawData: r } = e;
        if (n && i && r && d) {
          let e = r.actionLists[n];
          e && (r = x({ actionList: e, actionItemId: i, rawData: r }));
        }
        if (
          (en({ store: t, rawData: r, allowEvents: l, testManual: c }),
          (n && a === p.ActionTypeConsts.GENERAL_START_ACTION) || O(a))
        ) {
          ep({ store: t, actionListId: n }),
            ef({ store: t, actionListId: n, eventId: o });
          let e = eE({
            store: t,
            eventId: o,
            actionListId: n,
            immediate: d,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !d,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : eu({ store: t }), ei(t);
      }
      function ea(e, t) {
        ei(t), U({ store: t, elementApi: T });
      }
      function en({ store: e, rawData: t, allowEvents: a, testManual: n }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(L),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          a) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: a } = t;
              ed(e),
                (0, f.default)(a, (t, a) => {
                  let n = y.default[a];
                  if (!n)
                    return void console.warn(
                      `IX2 event type not configured: ${a}`
                    );
                  !(function ({ logic: e, store: t, events: a }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        a = "";
                      for (let n in e) {
                        let { eventTypeId: i, target: o } = e[n],
                          l = T.getQuerySelector(o);
                        t[l] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[l] = !0),
                            (a +=
                              l +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (a) {
                        let e = document.createElement("style");
                        (e.textContent = a), document.body.appendChild(e);
                      }
                    })(a);
                    let { types: n, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: s } = c,
                      r = ec(a, er);
                    if (!(0, d.default)(r)) return;
                    (0, f.default)(r, (e, n) => {
                      let i = a[n],
                        {
                          action: d,
                          id: r,
                          mediaQueries: f = c.mediaQueryKeys,
                        } = i,
                        { actionListId: u } = d.config;
                      W(f, c.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((a) => {
                            let { continuousParameterGroupId: n } = a,
                              i = (0, l.default)(
                                s,
                                `${u}.continuousParameterGroups`,
                                []
                              ),
                              d = (0, o.default)(i, ({ id: e }) => e === n),
                              c = (a.smoothing || 0) / 100,
                              f = (a.restingState || 0) / 100;
                            d &&
                              e.forEach((e, n) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: a,
                                  eventId: n,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: d,
                                  smoothing: c,
                                  restingValue: s,
                                }) {
                                  let { ixData: r, ixSession: f } =
                                      e.getState(),
                                    { events: u } = r,
                                    E = u[n],
                                    { eventTypeId: I } = E,
                                    y = {},
                                    g = {},
                                    b = [],
                                    { continuousActionGroups: m } = d,
                                    { id: O } = d;
                                  P(I, i) && (O = B(t, O));
                                  let R =
                                    f.hasBoundaryNodes && a
                                      ? T.getClosestElement(a, L)
                                      : null;
                                  m.forEach((e) => {
                                    let { keyframe: t, actionItems: n } = e;
                                    n.forEach((e) => {
                                      let { actionTypeId: n } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? R : null,
                                        l = Y(i) + v + n;
                                      if (
                                        ((g[l] = (function (e = [], t, a) {
                                          let n,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, a) =>
                                                e.keyframe === t &&
                                                ((n = a), !0)
                                            ),
                                            null == n &&
                                              ((n = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[n].actionItems.push(a),
                                            i
                                          );
                                        })(g[l], t, e)),
                                        !y[l])
                                      ) {
                                        y[l] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: E,
                                          eventTarget: a,
                                          elementRoot: o,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          b.push({ element: e, key: l });
                                        });
                                      }
                                    });
                                  }),
                                    b.forEach(({ element: t, key: a }) => {
                                      let i = g[a],
                                        d = (0, l.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: r } = d,
                                        f = (
                                          r === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                d.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Q(r)
                                        )
                                          ? j(r)?.(t, d)
                                          : null,
                                        u = A(
                                          {
                                            element: t,
                                            actionItem: d,
                                            elementApi: T,
                                          },
                                          f
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: n,
                                        actionListId: o,
                                        actionItem: d,
                                        destination: u,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: s,
                                        pluginInstance: f,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: r + v + n,
                                  eventTarget: e,
                                  eventId: r,
                                  eventConfig: a,
                                  actionListId: u,
                                  parameterGroup: d,
                                  smoothing: c,
                                  restingValue: f,
                                });
                              });
                          }),
                        (d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(d.actionTypeId)) &&
                          ef({ store: t, actionListId: u, eventId: r });
                    });
                    let E = (e) => {
                        let { ixSession: n } = t.getState();
                        es(r, (o, l, d) => {
                          let s = a[l],
                            r = n.eventState[d],
                            { action: f, mediaQueries: u = c.mediaQueryKeys } =
                              s;
                          if (!F(u, n.mediaQueryKey)) return;
                          let E = (a = {}) => {
                            let n = i(
                              {
                                store: t,
                                element: o,
                                event: s,
                                eventConfig: a,
                                nativeEvent: e,
                                eventStateKey: d,
                              },
                              r
                            );
                            H(n, r) ||
                              t.dispatch((0, I.eventStateChanged)(d, n));
                          };
                          f.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      y = (0, u.default)(E, 12),
                      g = ({ target: e = document, types: a, throttle: n }) => {
                        a.split(" ")
                          .filter(Boolean)
                          .forEach((a) => {
                            let i = n ? y : E;
                            e.addEventListener(a, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [a, i]));
                          });
                      };
                    Array.isArray(n)
                      ? n.forEach(g)
                      : "string" == typeof n && g(e);
                  })({ logic: n, store: e, events: t });
                });
              let { ixSession: n } = e.getState();
              n.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ed(e);
                  };
                  el.forEach((a) => {
                    window.addEventListener(a, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [a, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    U({ store: e, elementApi: T }),
                    en({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(n, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        a(e), t();
                      },
                    });
                  } else requestAnimationFrame(a);
              };
              a(window.performance.now());
            })(e, n);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(eo), X(), e.dispatch((0, I.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let el = ["resize", "orientationchange"];
      function ed(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: n, mediaQueries: t })
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, r.default)(e, t), s.default),
        es = (e, t) => {
          (0, f.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + v + n);
            });
          });
        },
        er = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: T,
          });
      function ef({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: i } = e.getState(),
          { actionLists: o, events: d } = n,
          c = d[a],
          s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
          let o = (0, l.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !F(
              (0, l.default)(c, "mediaQueries", n.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((n) => {
            let { config: i, actionTypeId: o } = n,
              l = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: T,
              }),
              d = Q(o);
            l.forEach((i) => {
              let l = d ? j(o)?.(i, n) : null;
              eI({
                destination: A({ element: i, actionItem: n, elementApi: T }, l),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: l,
              });
            });
          });
        }
      }
      function eu({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, f.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eT(t, e),
              n &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: d } = e.getState(),
          c = d.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
        (0, f.default)(o, (a) => {
          let o = (0, l.default)(a, "actionItem.config.target.boundaryMode"),
            d = !n || a.eventStateKey === n;
          if (a.actionListId === i && a.eventId === t && d) {
            if (c && o && !T.elementContains(c, a.element)) return;
            eT(a, e),
              a.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: d,
        verbose: c,
      }) {
        let { ixData: s, ixSession: r } = e.getState(),
          { events: f } = s,
          u = f[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = u,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          l.default)(s, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, l.default)(u, "config.loop") && (o = 0),
          0 === o && I && o++;
        let y =
            (0 === o || (1 === o && I)) && O(u.action?.actionTypeId)
              ? u.config.delay
              : void 0,
          g = (0, l.default)(E, [o, "actionItems"], []);
        if (!g.length || !F(p, r.mediaQueryKey)) return !1;
        let b = r.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null,
          m = w(g),
          v = !1;
        return (
          g.forEach((l, s) => {
            let { config: r, actionTypeId: f } = l,
              p = Q(f),
              { target: E } = r;
            E &&
              S({
                config: r,
                event: u,
                eventTarget: a,
                elementRoot: E.boundaryMode ? b : null,
                elementApi: T,
              }).forEach((r, u) => {
                let E = p ? j(f)?.(r, l) : null,
                  I = p ? z(f)(r, l) : null;
                v = !0;
                let g = k({ element: r, actionItem: l }),
                  b = A({ element: r, actionItem: l, elementApi: T }, E);
                eI({
                  store: e,
                  element: r,
                  actionItem: l,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: m === s && 0 === u,
                  computedStyle: g,
                  destination: b,
                  immediate: d,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function eI(e) {
        let t,
          { store: a, computedStyle: n, ...i } = e,
          {
            element: o,
            actionItem: l,
            immediate: d,
            pluginInstance: c,
            continuous: s,
            restingValue: r,
            eventId: f,
          } = i,
          u = V(),
          { ixElements: E, ixSession: y, ixData: g } = a.getState(),
          b = h(E, o),
          { refState: m } = E[b] || {},
          O = T.getRefType(o),
          v = y.reducedMotion && p.ReducedMotionTypes[l.actionTypeId];
        if (v && s)
          switch (g.events[f]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = r;
              break;
            default:
              t = 0.5;
          }
        let L = G(o, m, n, l, T, c);
        if (
          (a.dispatch(
            (0, I.instanceAdded)({
              instanceId: u,
              elementId: b,
              origin: L,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          ey(document.body, "ix2-animation-started", u),
          d)
        )
          return void (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            eg(n[t], e);
          })(a, u);
        C({ store: a, select: ({ ixInstances: e }) => e[u], onChange: eg }),
          s || a.dispatch((0, I.instanceStarted)(u, y.tick));
      }
      function eT(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: l } = i[a] || {};
        l === R && D(o, n, T), t.dispatch((0, I.instanceRemoved)(e.id));
      }
      function ey(e, t, a) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }
      function eg(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: l,
            actionTypeId: d,
            renderType: c,
            current: s,
            groupIndex: r,
            eventId: f,
            eventTarget: u,
            eventStateKey: p,
            actionListId: E,
            isCarrier: y,
            styleProp: g,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: L } = O,
          { mediaQueries: N = O.mediaQueryKeys } = L && L[f] ? L[f] : {};
        if (F(N, v.mediaQueryKey) && (n || a || i)) {
          if (s || (c === _ && i)) {
            t.dispatch((0, I.elementStateChanged)(o, d, s, l));
            let { ixElements: e } = t.getState(),
              { ref: a, refType: n, refState: i } = e[o] || {},
              r = i && i[d];
            (n === R || Q(d)) && M(a, i, r, f, l, g, T, c, m);
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: f,
                eventTarget: u,
                eventStateKey: p,
                actionListId: E,
                groupIndex: r + 1,
                verbose: b,
              });
              b &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, a) {
      "use strict";
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = f(a(5801)),
        o = f(a(4738)),
        l = f(a(3789)),
        d = a(7087),
        c = a(1970),
        s = a(3946),
        r = a(9468);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: u,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: T,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: g,
          DROPDOWN_OPEN: b,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: L,
          NAVBAR_CLOSE: R,
          NAVBAR_OPEN: _,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: h,
          SCROLL_OUT_OF_VIEW: A,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: V,
          PAGE_FINISH: M,
          ECOMMERCE_CART_CLOSE: U,
          ECOMMERCE_CART_OPEN: w,
          PAGE_START: k,
          PAGE_SCROLL: G,
        } = d.EventTypeConsts,
        x = "COMPONENT_ACTIVE",
        P = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: B } = d.IX2EngineConstants,
        { getNamespacedParameterId: F } = r.IX2VanillaUtils,
        D = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = D(({ element: e, nativeEvent: t }) => e === t.target),
        Y = D(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, i.default)([X, Y]),
        H = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Q = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!H(e, n);
        },
        j = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: l, id: d } = t,
            { actionListId: s, autoStopEventId: r } = l.config,
            f = H(e, r);
          return (
            f &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: r,
                eventTarget: a,
                eventStateKey: r + B + n.split(B)[1],
                actionListId: (0, o.default)(f, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: s,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: d,
              eventTarget: a,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        },
        z = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        $ = { handler: z(W, j) },
        q = { ...$, types: [x, P].join(" ") },
        Z = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        K = "mouseover mouseout",
        J = { types: Z },
        ee = { PAGE_START: k, PAGE_FINISH: M },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, l.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ea = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        en = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if ("mouseover" === a && o) return !0;
          let l = e.contains(i);
          return "mouseout" === a && !!o && !!l;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = et(),
            o = a.scrollOffsetValue,
            l = "PX" === a.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return ea(t.getBoundingClientRect(), {
            left: 0,
            top: l,
            right: n,
            bottom: i - l,
          });
        },
        eo = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [x, P].indexOf(n) ? n === x : a.isActive,
            o = { ...a, isActive: i };
          return ((!a || o.isActive !== a.isActive) && e(t, o)) || o;
        },
        el = (e) => (t, a) => {
          let n = { elementHovered: en(t) };
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        },
        ed =
          (e) =>
          (t, a = {}) => {
            let n,
              i,
              { stiffScrollTop: o, scrollHeight: l, innerHeight: d } = et(),
              {
                event: { config: c, eventTypeId: s },
              } = t,
              { scrollOffsetValue: r, scrollOffsetUnit: f } = c,
              u = l - d,
              p = Number((o / u).toFixed(2));
            if (a && a.percentTop === p) return a;
            let E = ("PX" === f ? r : (d * (r || 0)) / 100) / u,
              I = 0;
            a &&
              ((n = p > a.percentTop),
              (I = (i = a.scrollingDown !== n) ? p : a.anchorTop));
            let T = s === S ? p >= I + E : p <= I - E,
              y = {
                ...a,
                percentTop: p,
                inBounds: T,
                anchorTop: I,
                scrollingDown: n,
              };
            return (a && T && (i || y.inBounds !== a.inBounds) && e(t, y)) || y;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        er = (e = !0) => ({
          ...q,
          handler: z(
            e ? W : X,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        ef = (e = !0) => ({
          ...q,
          handler: z(
            e ? W : X,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        eu = {
          ...J,
          handler:
            ((n = (e, t) => {
              let { elementVisible: a } = t,
                { event: n, store: i } = e,
                { ixData: o } = i.getState(),
                { events: l } = o;
              return !l[n.action.config.autoStopEventId] && t.triggered
                ? t
                : (n.eventTypeId === h) === a
                ? (j(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let a = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? a.elementVisible !== t.elementVisible
                  : a.elementVisible) &&
                  n(e, a)) ||
                a
              );
            }),
        },
        ep = {
          [m]: er(),
          [O]: ef(),
          [b]: er(),
          [g]: ef(),
          [_]: er(!1),
          [R]: ef(!1),
          [v]: er(),
          [L]: ef(),
          [w]: { types: "ecommerce-cart-open", handler: z(W, j) },
          [U]: { types: "ecommerce-cart-close", handler: z(W, j) },
          [u]: {
            types: "click",
            handler: z(
              W,
              es((e, { clickCount: t }) => {
                Q(e) ? 1 === t && j(e) : j(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: z(
              W,
              es((e, { clickCount: t }) => {
                2 === t && j(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [I]: { ...$, types: "mouseup" },
          [T]: {
            types: K,
            handler: z(
              W,
              el((e, t) => {
                t.elementHovered && j(e);
              })
            ),
          },
          [y]: {
            types: K,
            handler: z(
              W,
              el((e, t) => {
                t.elementHovered || j(e);
              })
            ),
          },
          [N]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: a,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: l,
                  selectedAxis: c,
                  continuousParameterGroupId: r,
                  reverse: f,
                  restingState: u = 0,
                } = a,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: I = o.pageX,
                  pageY: T = o.pageY,
                } = n,
                y = "X_AXIS" === c,
                g = "mouseout" === n.type,
                b = u / 100,
                m = r,
                O = !1;
              switch (l) {
                case d.EventBasedOn.VIEWPORT:
                  b = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case d.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: a,
                    scrollHeight: n,
                  } = et();
                  b = y ? Math.min(e + I, a) / a : Math.min(t + T, n) / n;
                  break;
                }
                case d.EventBasedOn.ELEMENT:
                default: {
                  m = F(i, r);
                  let e = 0 === n.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: n })) break;
                  let a = t.getBoundingClientRect(),
                    { left: o, top: l, width: d, height: c } = a;
                  if (!e && !ec({ left: p, top: E }, a)) break;
                  (O = !0), (b = y ? (p - o) / d : (E - l) / c);
                }
              }
              return (
                g && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
                (l !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((b = f ? 1 - b : b),
                  e.dispatch((0, s.parameterChanged)(m, b))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: T,
                }
              );
            },
          },
          [G]: {
            types: Z,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: a, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: l } = et(),
                d = i / (o - l);
              (d = n ? 1 - d : d), e.dispatch((0, s.parameterChanged)(a, d));
            },
          },
          [V]: {
            types: Z,
            handler: (
              { element: e, store: t, eventConfig: a, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: l,
                  scrollWidth: c,
                  scrollHeight: r,
                  clientHeight: f,
                } = et(),
                {
                  basedOn: u,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: g,
                  addOffsetValue: b = 0,
                  endOffsetValue: m = 0,
                } = a;
              if (u === d.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / c : l / r;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let a = F(n, E),
                  o = e.getBoundingClientRect(),
                  l = (g ? b : 0) / 100,
                  d = (y ? m : 0) / 100;
                (l = I ? l : 1 - l), (d = T ? d : 1 - d);
                let c = o.top + Math.min(o.height * l, f),
                  u = Math.min(f + (o.top + o.height * d - c), r),
                  p = Math.min(Math.max(0, f - c), u) / u;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(a, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [h]: eu,
          [A]: eu,
          [S]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown && j(e);
            }),
          },
          [C]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown || j(e);
            }),
          },
          [M]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: z(X, (e, t) => {
              let a = { finished: "complete" === document.readyState };
              return a.finished && !(t && t.finshed) && j(e), a;
            }),
          },
          [k]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: z(X, (e, t) => (t || j(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === n ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let n = a(7087),
        i = a(9468),
        o = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: r,
          IX2_ANIMATION_FRAME_CHANGED: f,
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: u,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = n.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: y,
          getStyleProp: g,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let a,
            n,
            i,
            l,
            {
              position: d,
              parameterId: c,
              actionGroups: s,
              destinationKeys: r,
              smoothing: f,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: g,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - f, 0.01),
            v = m[c];
          null == v && ((O = 1), (v = E));
          let L = u((Math.max(v, 0) || 0) - d),
            R = g ? b : u(d + L * O),
            _ = 100 * R;
          if (R === d && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: o } = s[e];
            if ((0 === e && (a = o[0]), _ >= t)) {
              a = o[0];
              let d = s[e + 1],
                c = d && _ !== t;
              (n = c ? d.actionItems[0] : null),
                c && ((i = t / 100), (l = (d.keyframe - t) / 100));
            }
          }
          let N = {};
          if (a && !n)
            for (let e = 0, { length: t } = r; e < t; e++) {
              let t = r[e];
              N[t] = T(I, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== l) {
            let e = (R - i) / l,
              t = p(a.config.easing, e, y);
            for (let e = 0, { length: i } = r; e < i; e++) {
              let i = r[e],
                o = T(I, i, a.config),
                l = (T(I, i, n.config) - o) * t + o;
              N[i] = l;
            }
          }
          return (0, o.merge)(e, { position: R, current: N });
        },
        m = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: l,
              renderType: d,
              verbose: c,
              actionItem: s,
              destination: r,
              destinationKeys: f,
              pluginDuration: E,
              instanceDelay: T,
              customEasingFn: y,
              skipMotion: g,
            } = e,
            b = s.config.easing,
            { duration: m, delay: O } = s.config;
          null != E && (m = E),
            (O = null != T ? T : O),
            d === I ? (m = 0) : (l || g) && (m = O = 0);
          let { now: v } = t.payload;
          if (a && n) {
            let t = v - (i + O);
            if (c) {
              let t = m + O,
                a = u(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * a);
            }
            if (t < 0) return e;
            let a = u(Math.min(Math.max(0, t / m), 1)),
              l = p(b, a, y),
              d = {},
              s = null;
            return (
              f.length &&
                (s = f.reduce((e, t) => {
                  let a = r[t],
                    i = parseFloat(n[t]) || 0,
                    o = parseFloat(a) - i;
                  return (e[t] = o * l + i), e;
                }, {})),
              (d.current = s),
              (d.position = a),
              1 === a && ((d.active = !1), (d.complete = !0)),
              (0, o.merge)(e, d)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case l:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: l,
                  eventTarget: d,
                  eventStateKey: c,
                  actionListId: s,
                  groupIndex: r,
                  isCarrier: f,
                  origin: u,
                  destination: p,
                  immediate: I,
                  verbose: T,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: L,
                  pluginInstance: R,
                  pluginDuration: _,
                  instanceDelay: N,
                  skipMotion: S,
                  skipToValue: h,
                } = t.payload,
                { actionTypeId: A } = i,
                C = y(A),
                V = g(C, A),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: U } = i.config;
              return (0, o.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: u,
                destination: p,
                destinationKeys: M,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: A,
                eventId: l,
                eventTarget: d,
                eventStateKey: c,
                actionListId: s,
                groupIndex: r,
                renderType: C,
                isCarrier: f,
                styleProp: V,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: L,
                pluginInstance: R,
                pluginDuration: _,
                instanceDelay: N,
                skipMotion: S,
                skipToValue: h,
                customEasingFn:
                  Array.isArray(U) && 4 === U.length ? E(U) : void 0,
              });
            }
            case s: {
              let { instanceId: a, time: n } = t.payload;
              return (0, o.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case r: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== a && (n[o] = e[o]);
              }
              return n;
            }
            case f: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let l = 0; l < i; l++) {
                let i = n[l],
                  d = e[i],
                  c = d.continuous ? b : m;
                a = (0, o.set)(a, i, c(d, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = a(7087).IX2EngineActionTypes,
        l = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(9516),
        i = a(4609),
        o = a(628),
        l = a(5862),
        d = a(9468),
        c = a(7718),
        s = a(1540),
        { ixElements: r } = d.IX2ElementsReducer,
        f = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: l.ixSession,
          ixElements: r,
          ixInstances: c.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return f;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: l,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: c,
        } = n.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        r = Object.create(null, {
          [o]: { value: "preview" },
          [l]: { value: "playback" },
          [d]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        f = (e = s, t) => {
          if (t.type in r) {
            let a = [r[t.type]];
            return (0, i.setIn)(e, [a], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: l,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: r,
          IX2_ANIMATION_FRAME_CHANGED: f,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = n.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = I, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n });
            }
            case l:
              return (0, i.set)(e, "active", !0);
            case d: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + a);
            }
            case c:
              return I;
            case f: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, "tick", a);
            }
            case s: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", a);
            }
            case r: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ["eventState", a], n);
            }
            case u: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ["playbackState", a], n);
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                o = n.length,
                l = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = n[e];
                if (a >= i && a <= o) {
                  l = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: l });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return r;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute("data-duration"));
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        l = (e) => e || { value: 0 },
        d = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        s = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        r = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        l = (e) => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        s = () => null,
        r = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        f = (e) => e.value.inputs ?? {},
        u = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? l(a) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, a) => {
          let n = d();
          if (!n) return;
          let l = n.getInstance(e),
            c = n.rive.StateMachineInputType,
            { name: s, inputs: r = {} } = a.config.value || {};
          function f(e) {
            if (e.loaded) a();
            else {
              let t = () => {
                a(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function a() {
              let a = e.stateMachineInputs(s);
              if (null != a) {
                if ((e.isPlaying || e.play(s, !1), i in r || o in r)) {
                  let t = e.layout,
                    a = r[i] ?? t.fit,
                    n = r[o] ?? t.alignment;
                  (a !== t.fit || n !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: a, alignment: n }));
                }
                for (let e in r) {
                  if (e === i || e === o) continue;
                  let n = a.find((t) => t.name === e);
                  if (null != n)
                    switch (n.type) {
                      case c.Boolean:
                        null != r[e] && (n.value = !!r[e]);
                        break;
                      case c.Number: {
                        let a = t[e];
                        null != a && (n.value = a);
                        break;
                      }
                      case c.Trigger:
                        r[e] && n.fire();
                    }
                }
              }
            }
          }
          l?.rive ? f(l.rive) : n.setLoadHandler(e, f);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        l = (e, t) => e.filter((e) => !t.includes(e)),
        d = (e, t) => e.value[t],
        c = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        r = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = l(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        f = (e) => e.value,
        u = (e, t) => {
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        p = (e, t, a) => {
          let n = o();
          if (!n) return;
          let i = n.getInstance(e),
            l = a.config.target.objectId,
            d = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let a = l && e.findObjectById(l);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          i ? d(i.spline) : n.setLoadHandler(e, d);
        },
        E = () => null;
    },
    1407: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return r;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = a(380),
        l = (e, t) => e.value[t],
        d = () => null,
        c = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            n = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(n);
          return null != a.size
            ? { size: parseInt(i, 10) }
            : "%" === a.unit || "-" === a.unit
            ? { size: parseFloat(i) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        s = (e) => e.value,
        r = () => null,
        f = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        u = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            o = t.PLUGIN_VARIABLE,
            l = Object.values(f).find((e) => e.match(o, i));
          l && document.documentElement.style.setProperty(n, l.getValue(o, i));
        },
        p = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = a(7087),
        i = s(a(7377)),
        o = s(a(2866)),
        l = s(a(2570)),
        d = s(a(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = c(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let r = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...l }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return m;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return f;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return b;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return u;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return g;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return l;
        },
        IX2_SESSION_STOPPED: function () {
          return d;
        },
        IX2_STOP_REQUESTED: function () {
          return r;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return L;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        l = "IX2_SESSION_STARTED",
        d = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        r = "IX2_STOP_REQUESTED",
        f = "IX2_CLEAR_REQUESTED",
        u = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        g = "IX2_INSTANCE_REMOVED",
        b = "IX2_ELEMENT_STATE_CHANGED",
        m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        L = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return P;
        },
        BACKGROUND_COLOR: function () {
          return x;
        },
        BAR_DELIMITER: function () {
          return j;
        },
        BORDER_COLOR: function () {
          return B;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return z;
        },
        COLON_DELIMITER: function () {
          return Q;
        },
        COLOR: function () {
          return F;
        },
        COMMA_DELIMITER: function () {
          return H;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return u;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return r;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return f;
        },
        DISPLAY: function () {
          return D;
        },
        FILTER: function () {
          return U;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return w;
        },
        HEIGHT: function () {
          return G;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return M;
        },
        PARENT: function () {
          return Z;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return K;
        },
        RENDER_GENERAL: function () {
          return en;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return ea;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return h;
        },
        SCALE_3D: function () {
          return _;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return L;
        },
        SCALE_Z: function () {
          return R;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return A;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return V;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return g;
        },
        TRANSLATE_Y: function () {
          return b;
        },
        TRANSLATE_Z: function () {
          return m;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return k;
        },
        WILL_CHANGE: function () {
          return Y;
        },
        W_MOD_IX: function () {
          return d;
        },
        W_MOD_JS: function () {
          return l;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = "|",
        o = "data-wf-page",
        l = "w-mod-js",
        d = "w-mod-ix",
        c = ".w-dyn-item",
        s = "xValue",
        r = "yValue",
        f = "zValue",
        u = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        T = "unit",
        y = "transform",
        g = "translateX",
        b = "translateY",
        m = "translateZ",
        O = "translate3d",
        v = "scaleX",
        L = "scaleY",
        R = "scaleZ",
        _ = "scale3d",
        N = "rotateX",
        S = "rotateY",
        h = "rotateZ",
        A = "skew",
        C = "skewX",
        V = "skewY",
        M = "opacity",
        U = "filter",
        w = "font-variation-settings",
        k = "width",
        G = "height",
        x = "backgroundColor",
        P = "background",
        B = "borderColor",
        F = "color",
        D = "display",
        X = "flex",
        Y = "willChange",
        W = "AUTO",
        H = ",",
        Q = ":",
        j = "|",
        z = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        Z = "PARENT",
        K = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        ea = "RENDER_TRANSFORM",
        en = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionTypeConsts: function () {
          return l.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return d;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = s(a(1833), t),
        l = s(a(262), t);
      s(a(8704), t), s(a(3213), t);
      let d = f(a(8023)),
        c = f(a(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            "default" === a ||
              Object.prototype.hasOwnProperty.call(t, a) ||
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = r(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: l,
          STYLE_SIZE: d,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: s,
        } = a(262).ActionTypeConsts,
        r = { [n]: !0, [i]: !0, [o]: !0, [l]: !0, [d]: !0, [c]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return l;
        },
        EventContinuousMouseAxes: function () {
          return d;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return r;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        l = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        d = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        r = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function n(e) {
        let t,
          n,
          i,
          o = 1,
          l = e.replace(/\s/g, "").toLowerCase(),
          d = ("string" == typeof a[l] ? a[l].toLowerCase() : null) || l;
        if (d.startsWith("#")) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (d.startsWith("rgba")) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (d.startsWith("rgb")) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (d.startsWith("hsla")) {
          let e,
            a,
            l,
            c = d.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(c[0]),
            r = parseFloat(c[1].replace("%", "")) / 100,
            f = parseFloat(c[2].replace("%", "")) / 100;
          o = parseFloat(c[3]);
          let u = (1 - Math.abs(2 * f - 1)) * r,
            p = u * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = f - u / 2;
          s >= 0 && s < 60
            ? ((e = u), (a = p), (l = 0))
            : s >= 60 && s < 120
            ? ((e = p), (a = u), (l = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (a = u), (l = p))
            : s >= 180 && s < 240
            ? ((e = 0), (a = p), (l = u))
            : s >= 240 && s < 300
            ? ((e = p), (a = 0), (l = u))
            : ((e = u), (a = 0), (l = p)),
            (t = Math.round((e + E) * 255)),
            (n = Math.round((a + E) * 255)),
            (i = Math.round((l + E) * 255));
        } else if (d.startsWith("hsl")) {
          let e,
            a,
            o,
            l = d.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(l[0]),
            s = parseFloat(l[1].replace("%", "")) / 100,
            r = parseFloat(l[2].replace("%", "")) / 100,
            f = (1 - Math.abs(2 * r - 1)) * s,
            u = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = r - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (a = u), (o = 0))
            : c >= 60 && c < 120
            ? ((e = u), (a = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (a = f), (o = u))
            : c >= 180 && c < 240
            ? ((e = 0), (a = u), (o = f))
            : c >= 240 && c < 300
            ? ((e = u), (a = 0), (o = f))
            : ((e = f), (a = 0), (o = u)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: n, blue: i, alpha: o };
      }
    },
    9468: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return d;
        },
        IX2Easings: function () {
          return l;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return r;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = u(a(2662)),
        l = u(a(8686)),
        d = u(a(3767)),
        c = u(a(5861)),
        s = u(a(1799)),
        r = u(a(4124));
      function f(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (f = function (e) {
          return e ? a : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var a = f(t);
        if (a && a.has(e)) return a.get(e);
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(n, o, l)
              : (n[o] = e[o]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return r;
          },
          IS_BROWSER_ENV: function () {
            return d;
          },
          TRANSFORM_PREFIXED: function () {
            return f;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (n = a(9777)) && n.__esModule ? n : { default: n },
        d = "undefined" != typeof window,
        c = (e, t) => (d ? e() : t),
        s = c(() =>
          (0, l.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        r = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        f = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + "Transform";
              if (void 0 !== e.style[a]) return a;
            }
          }
          return "transform";
        }, "transform"),
        u = f.split("transform")[0],
        p = u ? u + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          applyEasing: function () {
            return f;
          },
          createBezierEasing: function () {
            return r;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var a = c(t);
          if (a && a.has(e)) return a.get(e);
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(n, o, l)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        d = (n = a(1361)) && n.__esModule ? n : { default: n };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      function s(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function r(e) {
        return (0, d.default)(...e);
      }
      function f(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? s(t > 0 ? a(t) : t)
          : s(t > 0 && e && l[e] ? l[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return Y;
          },
          ease: function () {
            return d;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return r;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return U;
          },
          inCirc: function () {
            return A;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return G;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return k;
          },
          inOutCirc: function () {
            return V;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return P;
          },
          inOutExpo: function () {
            return h;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return b;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return _;
          },
          inQuad: function () {
            return f;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return m;
          },
          inSine: function () {
            return L;
          },
          outBack: function () {
            return w;
          },
          outBounce: function () {
            return M;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return x;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return u;
          },
          outQuart: function () {
            return g;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return R;
          },
          swingFrom: function () {
            return F;
          },
          swingFromTo: function () {
            return B;
          },
          swingTo: function () {
            return D;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (n = a(1361)) && n.__esModule ? n : { default: n },
        d = (0, l.default)(0.25, 0.1, 0.25, 1),
        c = (0, l.default)(0.42, 0, 1, 1),
        s = (0, l.default)(0, 0, 0.58, 1),
        r = (0, l.default)(0.42, 0, 0.58, 1);
      function f(e) {
        return Math.pow(e, 2);
      }
      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function g(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function m(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function L(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function R(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function _(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function h(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function A(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function V(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function M(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function w(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function k(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function G(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ));
      }
      function x(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1);
      }
      function P(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (a || (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1;
      }
      function B(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function D(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Y(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return f;
        },
        getPluginOrigin: function () {
          return r;
        },
        isPluginType: function () {
          return d;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = a(2662),
        l = a(3690);
      function d(e) {
        return l.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let a = l.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let n = a[e];
          if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
          return n;
        },
        s = c("getPluginConfig"),
        r = c("getPluginOrigin"),
        f = c("getPluginDuration"),
        u = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        I = c("clearPlugin");
    },
    4124: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        cleanupHTMLElement: function () {
          return eH;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return em;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eA;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return e_;
        },
        getItemConfigByKey: function () {
          return eh;
        },
        getMaxDurationItemIndex: function () {
          return ez;
        },
        getNamespacedParameterId: function () {
          return eK;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eV;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eg;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return eM;
        },
        shallowEqual: function () {
          return r.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eZ;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = I(a(4075)),
        l = I(a(1455)),
        d = I(a(5720)),
        c = a(1185),
        s = a(7087),
        r = I(a(7164)),
        f = a(3767),
        u = a(380),
        p = a(1799),
        E = a(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: y,
          TRANSLATE_3D: g,
          SCALE_3D: b,
          ROTATE_X: m,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: L,
          PRESERVE_3D: R,
          FLEX: _,
          OPACITY: N,
          FILTER: S,
          FONT_VARIATION_SETTINGS: h,
          WIDTH: A,
          HEIGHT: C,
          BACKGROUND_COLOR: V,
          BORDER_COLOR: M,
          COLOR: U,
          CHILDREN: w,
          IMMEDIATE_CHILDREN: k,
          SIBLINGS: G,
          PARENT: x,
          DISPLAY: P,
          WILL_CHANGE: B,
          AUTO: F,
          COMMA_DELIMITER: D,
          COLON_DELIMITER: X,
          BAR_DELIMITER: Y,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: H,
          RENDER_STYLE: Q,
          RENDER_PLUGIN: j,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: z,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: Z,
          STYLE_OPACITY: K,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: ea,
          STYLE_BORDER: en,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: el,
        } = s.ActionTypeConsts,
        ed = (e) => e.trim(),
        ec = Object.freeze({ [ea]: V, [en]: M, [ei]: U }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: y,
          [V]: T,
          [N]: N,
          [S]: S,
          [A]: A,
          [C]: C,
          [h]: h,
        }),
        er = new Map();
      function ef() {
        er.clear();
      }
      let eu = 1;
      function ep() {
        return "i" + eu++;
      }
      let eE = 1;
      function eI(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return "e" + eE++;
      }
      function eT({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, l.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return e[a] || (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          i = a && a.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function eg({ store: e, select: t, onChange: a, comparator: n = ey }) {
        let { getState: i, subscribe: o } = e,
          l = o(function () {
            let o = t(i());
            if (null == o) return void l();
            n(o, d) || a((d = o), e);
          }),
          d = t(i());
        return l;
      }
      function eb(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          };
        }
        return {};
      }
      function em({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i,
      }) {
        let o, l, d;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, o) =>
              e.concat(
                em({
                  config: { target: o },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: r,
            getQuerySelector: f,
            queryDocument: u,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: y,
            isSiblingNode: g,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: L,
          appliesTo: R,
          useEventTarget: _,
        } = eb(b);
        if (O) return [er.has(O) ? er.get(O) : er.set(O, {}).get(O)];
        if (R === s.EventAppliesTo.PAGE) {
          let e = r(m);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          S = !!(N.id || N.selector),
          h = t && f(eb(t.target));
        if (
          (S
            ? ((o = N.limitAffectedElements), (l = h), (d = f(N)))
            : (l = d = f({ id: m, selector: v, selectorGuids: L })),
          t && _)
        ) {
          let e = a && (d || !0 === _) ? [a] : u(h);
          if (d) {
            if (_ === x) return u(d).filter((t) => e.some((e) => y(t, e)));
            if (_ === w) return u(d).filter((t) => e.some((e) => y(e, t)));
            if (_ === G) return u(d).filter((t) => e.some((e) => g(e, t)));
          }
          return e;
        }
        return null == l || null == d
          ? []
          : E.IS_BROWSER_ENV && n
          ? u(d).filter((e) => n.contains(e))
          : o === w
          ? u(l, d)
          : o === k
          ? p(u(l)).filter(T(d))
          : o === G
          ? I(u(l)).filter(T(d))
          : u(d);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case et:
          case ea:
          case en:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eL = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = ew[t.type]), e),
            e || {}
          ),
        eR = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ek[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function e_(e, t = {}, a = {}, n, i) {
        let { getStyle: l } = i,
          { actionTypeId: d } = n;
        if ((0, p.isPluginType)(d)) return (0, p.getPluginOrigin)(d)(t[d], n);
        switch (n.actionTypeId) {
          case z:
          case $:
          case q:
          case Z:
            return t[n.actionTypeId] || eU[n.actionTypeId];
          case J:
            return eL(t[n.actionTypeId], n.config.filters);
          case ee:
            return eR(t[n.actionTypeId], n.config.fontVariations);
          case K:
            return { value: (0, o.default)(parseFloat(l(e, N)), 1) };
          case et: {
            let t,
              i = l(e, A),
              d = l(e, C);
            return {
              widthValue:
                n.config.widthUnit === F
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(a.width)
                  : (0, o.default)(parseFloat(i), parseFloat(a.width)),
              heightValue:
                n.config.heightUnit === F
                  ? ev.test(d)
                    ? parseFloat(d)
                    : parseFloat(a.height)
                  : (0, o.default)(parseFloat(d), parseFloat(a.height)),
            };
          }
          case ea:
          case en:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: n,
            }) {
              let i = ec[t],
                l = n(e, i),
                d = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : "";
                })(eB, eP.test(l) ? l : a[i]).split(D);
              return {
                rValue: (0, o.default)(parseInt(d[0], 10), 255),
                gValue: (0, o.default)(parseInt(d[1], 10), 255),
                bValue: (0, o.default)(parseInt(d[2], 10), 255),
                aValue: (0, o.default)(parseFloat(d[3]), 1),
              };
            })({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: a,
              getStyle: l,
            });
          case eo:
            return { value: (0, o.default)(l(e, P), a.display) };
          case el:
            return t[n.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t, a) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t);
          switch (e) {
            case J: {
              let e = (0, d.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, d.default)(
                a.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };
      function eA({ element: e, actionItem: t, elementApi: a }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case z:
          case $:
          case q:
          case Z: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return { xValue: e, yValue: a, zValue: n };
          }
          case et: {
            let { getStyle: n, setStyle: i, getProperty: o } = a,
              { widthUnit: l, heightUnit: d } = t.config,
              { widthValue: c, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: c, heightValue: s };
            if (l === F) {
              let t = n(e, A);
              i(e, A, ""), (c = o(e, "offsetWidth")), i(e, A, t);
            }
            if (d === F) {
              let t = n(e, C);
              i(e, C, ""), (s = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: c, heightValue: s };
          }
          case ea:
          case en:
          case ei: {
            let {
              rValue: n,
              gValue: i,
              bValue: o,
              aValue: l,
              globalSwatchId: d,
            } = t.config;
            if (d && d.startsWith("--")) {
              let { getStyle: t } = a,
                n = t(e, d),
                i = (0, u.normalizeColor)(n);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: n, gValue: i, bValue: o, aValue: l };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? Q
          : /^GENERAL_/.test(e)
          ? H
          : /^PLUGIN_/.test(e)
          ? j
          : void 0;
      }
      function eV(e, t) {
        return e === Q ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eM(e, t, a, n, i, o, d, c, s) {
        switch (c) {
          case W:
            var r = e,
              f = t,
              u = a,
              I = i,
              T = d;
            let y = ex
                .map((e) => {
                  let t = eU[e],
                    {
                      xValue: a = t.xValue,
                      yValue: n = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: l = "",
                      zUnit: d = "",
                    } = f[e] || {};
                  switch (e) {
                    case z:
                      return `${g}(${a}${o}, ${n}${l}, ${i}${d})`;
                    case $:
                      return `${b}(${a}${o}, ${n}${l}, ${i}${d})`;
                    case q:
                      return `${m}(${a}${o}) ${O}(${n}${l}) ${v}(${i}${d})`;
                    case Z:
                      return `${L}(${a}${o}, ${n}${l})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: N } = T;
            eF(r, E.TRANSFORM_PREFIXED, T),
              N(r, E.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: a, zValue: n }
              ) {
                return (
                  (e === z && void 0 !== n) ||
                  (e === $ && void 0 !== n) ||
                  (e === q && (void 0 !== t || void 0 !== a))
                );
              })(I, u) && N(r, E.TRANSFORM_STYLE_PREFIXED, R);
            return;
          case Q:
            return (function (e, t, a, n, i, o) {
              let { setStyle: d } = o;
              switch (n.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = n.config,
                    { widthValue: l, heightValue: c } = a;
                  void 0 !== l &&
                    (t === F && (t = "px"), eF(e, A, o), d(e, A, l + t)),
                    void 0 !== c &&
                      (i === F && (i = "px"), eF(e, C, o), d(e, C, c + i));
                  break;
                }
                case J:
                  var c = n.config;
                  let s = (0, l.default)(
                      a,
                      (e, t, a) => `${e} ${a}(${t}${eG(a, c)})`,
                      ""
                    ),
                    { setStyle: r } = o;
                  eF(e, S, o), r(e, S, s);
                  break;
                case ee:
                  n.config;
                  let f = (0, l.default)(
                      a,
                      (e, t, a) => (e.push(`"${a}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: u } = o;
                  eF(e, h, o), u(e, h, f);
                  break;
                case ea:
                case en:
                case ei: {
                  let t = ec[n.actionTypeId],
                    i = Math.round(a.rValue),
                    l = Math.round(a.gValue),
                    c = Math.round(a.bValue),
                    s = a.aValue;
                  eF(e, t, o),
                    d(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${i},${l},${c})`
                        : `rgba(${i},${l},${c},${s})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = n.config;
                  eF(e, i, o), d(e, i, a.value + t);
                }
              }
            })(e, 0, a, i, o, d);
          case H:
            var V = e,
              M = i,
              U = d;
            let { setStyle: w } = U;
            if (M.actionTypeId === eo) {
              let { value: e } = M.config;
              w(V, P, e === _ && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case j: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, i);
          }
        }
      }
      let eU = {
          [z]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Z]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        ew = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ek = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eG = (e, t) => {
          let a = (0, d.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        ex = Object.keys(eU),
        eP = /^rgb/,
        eB = RegExp("rgba?\\(([^)]+)\\)");
      function eF(e, t, a) {
        if (!E.IS_BROWSER_ENV) return;
        let n = es[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          l = i(e, B);
        if (!l) return void o(e, B, n);
        let d = l.split(D).map(ed);
        -1 === d.indexOf(n) && o(e, B, d.concat(n).join(D));
      }
      function eD(e, t, a) {
        if (!E.IS_BROWSER_ENV) return;
        let n = es[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = a,
          l = i(e, B);
        l &&
          -1 !== l.indexOf(n) &&
          o(
            e,
            B,
            l
              .split(D)
              .map(ed)
              .filter((e) => e !== n)
              .join(D)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: o } = a.action,
            { actionListId: l } = o,
            d = i[l];
          d && eY({ actionList: d, event: a, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eY({ actionList: i[e], elementApi: t });
          });
      }
      function eY({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: a });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: a });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n,
            { actionTypeId: i, config: o } = e;
          (n = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eQ({ effect: ej, actionTypeId: i, elementApi: a })),
            em({ config: o, event: t, elementApi: a }).forEach(n);
        });
      }
      function eH(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: a } = t;
          a.widthUnit === F && n(e, A, ""), a.heightUnit === F && n(e, C, "");
        }
        i(e, B) && eQ({ effect: eD, actionTypeId: o, elementApi: a })(e);
      }
      let eQ =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case z:
            case $:
            case q:
            case Z:
              e(n, E.TRANSFORM_PREFIXED, a);
              break;
            case J:
              e(n, S, a);
              break;
            case ee:
              e(n, h, a);
              break;
            case K:
              e(n, N, a);
              break;
            case et:
              e(n, A, a), e(n, C, a);
              break;
            case ea:
            case en:
            case ei:
              e(n, ec[t], a);
              break;
            case eo:
              e(n, P, a);
          }
        };
      function ej(e, t, a) {
        let { setStyle: n } = a;
        eD(e, t, a),
          n(e, t, ""),
          t === E.TRANSFORM_PREFIXED && n(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function ez(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (a = n));
          }),
          a
        );
      }
      function e$(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          l = 0,
          d = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              c = a[ez(a)],
              { config: s, actionTypeId: r } = c;
            i.id === c.id && (d = l + o);
            let f = eC(r) === H ? 0 : s.duration;
            l += s.delay + f;
          }),
          l > 0 ? (0, f.optimizeFloat)(d / l) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          o = [],
          l = (e) => (
            o.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          n && n.some(({ actionItems: e }) => e.some(l)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(l));
            }),
          (0, c.setIn)(a, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eZ(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eK(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, r.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Y + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: a = "", useEventTarget: n = "" } = e;
        return t + Y + a + Y + n;
      }
    },
    7164: function (e, t) {
      "use strict";
      function a(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        createElementState: function () {
          return L;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return R;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let o = a(1185),
        l = a(7087),
        {
          HTML_ELEMENT: d,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: r,
          CONFIG_Y_VALUE: f,
          CONFIG_Z_VALUE: u,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y,
        } = l.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: g,
          IX2_INSTANCE_ADDED: b,
          IX2_ELEMENT_STATE_CHANGED: m,
        } = l.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case g:
              return O;
            case b: {
              let {
                  elementId: a,
                  element: n,
                  origin: i,
                  actionItem: l,
                  refType: d,
                } = t.payload,
                { actionTypeId: c } = l,
                s = e;
              return (
                (0, o.getIn)(s, [a, n]) !== n && (s = L(s, n, d, a, l)),
                R(s, a, c, i, l)
              );
            }
            case m: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return R(e, a, n, i, o);
            }
            default:
              return e;
          }
        };
      function L(e, t, a, n, i) {
        let l =
          a === c ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [n], { id: n, ref: t, refId: l, refType: a });
      }
      function R(e, t, a, n, i) {
        let l = (function (e) {
          let { config: t } = e;
          return _.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              o = t[n],
              l = t[i];
            return null != o && null != l && (e[i] = l), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", a], n, l);
      }
      let _ = [
        [r, E],
        [f, I],
        [u, T],
        [p, y],
      ];
    },
    6131: function () {
      Webflow.require("ix2").init({
        events: {
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be70",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be70",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be74",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be74",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-374",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be7c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-361",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be7c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be90",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be90",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be88",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be88",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723bea0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723bea0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-373",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be70",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be70",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-362",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-368",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be94",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be94",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be84",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be84",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be88",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be88",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be84",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be84",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-23",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be94",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be94",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723bea0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723bea0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-359",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be74",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be74",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-363",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be90",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be90",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198dfcc04b9,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|6386ee79-6b7e-2bd7-22e1-c975d1c9fea3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|6386ee79-6b7e-2bd7-22e1-c975d1c9fea3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19831365b0e,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|688fa1d0-956b-141b-0d9f-1f99384d26e6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|688fa1d0-956b-141b-0d9f-1f99384d26e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e589a9f0,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|5932ed8c-d169-81ec-e3fa-df959b89883b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|5932ed8c-d169-81ec-e3fa-df959b89883b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198e58d86bb,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68abe6353889f23ffa0aeb78|bacb9ba3-bbbd-9f28-62b3-7a0e2c558a4f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|bacb9ba3-bbbd-9f28-62b3-7a0e2c558a4f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198ea0ba208,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "ad7fcdf9-fba7-1e5e-ce93-0b2e4107e6a8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ad7fcdf9-fba7-1e5e-ce93-0b2e4107e6a8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 95,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198ea19beea,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-wrapper",
              originalId: "1459d058-62e4-c9c9-eb92-2a83a35aa1bc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-wrapper",
                originalId: "1459d058-62e4-c9c9-eb92-2a83a35aa1bc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198eb2602d3,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-13",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".marquee-star-icon",
              originalId: "1459d058-62e4-c9c9-eb92-2a83a35aa1c3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".marquee-star-icon",
                originalId: "1459d058-62e4-c9c9-eb92-2a83a35aa1c3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198eb29386b,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-52",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|c09a0794-8007-2503-44ad-58828aa30ce5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|c09a0794-8007-2503-44ad-58828aa30ce5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ef385bc7,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|eb1cd7f3-4a37-48f1-4a2e-33d8159a9ad0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|eb1cd7f3-4a37-48f1-4a2e-33d8159a9ad0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198ef3aeeeb,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-14",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e2d9a534-ad0b-a7d4-f34a-0d604a79873f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e2d9a534-ad0b-a7d4-f34a-0d604a79873f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198f0170685,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e2d9a534-ad0b-a7d4-f34a-0d604a79873f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e2d9a534-ad0b-a7d4-f34a-0d604a79873f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198f0170685,
          },
          "e-57": {
            id: "e-57",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-58",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "fd1b4e10-a31d-b9c9-e870-45326c9acb83",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fd1b4e10-a31d-b9c9-e870-45326c9acb83",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fe30f1e2,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "fd1b4e10-a31d-b9c9-e870-45326c9acb83",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fd1b4e10-a31d-b9c9-e870-45326c9acb83",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fe30f1e2,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-878",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d10db7e3,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-819",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195d10db7e3,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadadd,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-61",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadadd,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadd3c,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadd3c,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadf89,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecadf89,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecaed7e,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-67",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198fecaed7e,
          },
          "e-72": {
            id: "e-72",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-73",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-72",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-75": {
            id: "e-75",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-74",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-76": {
            id: "e-76",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-77": {
            id: "e-77",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-76",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-79": {
            id: "e-79",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-78",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-81": {
            id: "e-81",
            name: "",
            animationType: "preset",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-80",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904d707ac,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-59",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".star-icon",
              originalId:
                "68abe6353889f23ffa0aeb78|7977c5af-5e45-43b9-d13b-5f7cfbf0b839",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".star-icon",
                originalId:
                  "68abe6353889f23ffa0aeb78|7977c5af-5e45-43b9-d13b-5f7cfbf0b839",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19904ebba52,
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d688d51d8c79b4f65a92|35c04a2c-0de7-bf9b-7d22-e252831d6e5d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d688d51d8c79b4f65a92|35c04a2c-0de7-bf9b-7d22-e252831d6e5d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ec6e83f,
          },
          "e-87": {
            id: "e-87",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-88",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c871ae82ac604cd70d3a|3fce2883-ec74-b1d8-f21c-03165040d0cf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c871ae82ac604cd70d3a|3fce2883-ec74-b1d8-f21c-03165040d0cf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1990edfe513,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-92",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4fae862c-a671-da79-8577-01ab856e31ec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4fae862c-a671-da79-8577-01ab856e31ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1991309ca9c,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4fae862c-a671-da79-8577-01ab856e31ec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4fae862c-a671-da79-8577-01ab856e31ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1991309ca9c,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".image-overlay",
              originalId:
                "68abe6353889f23ffa0aeb78|5ed036bb-c7e4-a188-7f69-316a7028b6d6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".image-overlay",
                originalId:
                  "68abe6353889f23ffa0aeb78|5ed036bb-c7e4-a188-7f69-316a7028b6d6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19913e4e2cb,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-image",
              originalId:
                "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-image",
                originalId:
                  "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19913e7106d,
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|4b3245dd-b3d4-6e75-a404-c31f5b838278",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|4b3245dd-b3d4-6e75-a404-c31f5b838278",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199140a4805,
          },
          "e-103": {
            id: "e-103",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|b9f46c94-bb0c-d71a-ce64-8b0707672ba6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|b9f46c94-bb0c-d71a-ce64-8b0707672ba6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199140b6b21,
          },
          "e-105": {
            id: "e-105",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-106",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|684735a6-ed17-b58b-d3ad-107065e5495e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|684735a6-ed17-b58b-d3ad-107065e5495e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199140c1251,
          },
          "e-107": {
            id: "e-107",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".subtitle-liner.right",
              originalId:
                "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".subtitle-liner.right",
                originalId:
                  "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19914190386,
          },
          "e-109": {
            id: "e-109",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-110",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".section-subtitle",
              originalId:
                "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079382",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".section-subtitle",
                originalId:
                  "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079382",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199223ce610,
          },
          "e-111": {
            id: "e-111",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".section-title",
              originalId:
                "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079386",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".section-title",
                originalId:
                  "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079386",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199223d2d4c,
          },
          "e-113": {
            id: "e-113",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".section-summary",
              originalId:
                "68abe6353889f23ffa0aeb78|fb6615d0-3ad5-aa23-7bbe-50c94556d766",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".section-summary",
                originalId:
                  "68abe6353889f23ffa0aeb78|fb6615d0-3ad5-aa23-7bbe-50c94556d766",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199223d5ed5,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-116",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".who-we-are-list-item",
              originalId:
                "68abe6353889f23ffa0aeb78|77efa3a9-9ceb-7cd9-1641-e2c3631a62f0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".who-we-are-list-item",
                originalId:
                  "68abe6353889f23ffa0aeb78|77efa3a9-9ceb-7cd9-1641-e2c3631a62f0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199223dc5e5,
          },
          "e-117": {
            id: "e-117",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-118",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".who-we-are-button-block",
              originalId:
                "68abe6353889f23ffa0aeb78|485b0bd9-18f4-b3c8-d96a-35d1ded916e1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".who-we-are-button-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|485b0bd9-18f4-b3c8-d96a-35d1ded916e1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199223f2f3c,
          },
          "e-119": {
            id: "e-119",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-120",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|43b91ecf-601f-a70f-bbef-370b9f0e296e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|43b91ecf-601f-a70f-bbef-370b9f0e296e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19922408fb8,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-122",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|c9e9f6ce-0932-ef1b-ebb3-c006601bef84",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|c9e9f6ce-0932-ef1b-ebb3-c006601bef84",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992240bd9b,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-124",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|7a12ae59-4d0a-7959-ac87-36bbb254a919",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|7a12ae59-4d0a-7959-ac87-36bbb254a919",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19922463e77,
          },
          "e-125": {
            id: "e-125",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|42557379-e9ba-9b6a-719f-97256767936d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|42557379-e9ba-9b6a-719f-97256767936d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992249bd7d,
          },
          "e-127": {
            id: "e-127",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-128",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|f8e63da4-bd67-1ff7-9945-0a8516f1c9bb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|f8e63da4-bd67-1ff7-9945-0a8516f1c9bb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199224de75c,
          },
          "e-129": {
            id: "e-129",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-130",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|34e3a345-9a77-9157-5dfa-ec24b4306d0b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|34e3a345-9a77-9157-5dfa-ec24b4306d0b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19922524fc8,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-132",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|b7399bf1-6446-bd49-ac80-8ac800857768",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|b7399bf1-6446-bd49-ac80-8ac800857768",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992253543f,
          },
          "e-133": {
            id: "e-133",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-134",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".subtitle-liner.left",
              originalId:
                "68abe6353889f23ffa0aeb78|9c4fe048-9bb2-91e0-2bb8-f5f10cfe31e7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".subtitle-liner.left",
                originalId:
                  "68abe6353889f23ffa0aeb78|9c4fe048-9bb2-91e0-2bb8-f5f10cfe31e7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199226b072f,
          },
          "e-135": {
            id: "e-135",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-136",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|ac1e4d22-1679-0deb-9e4b-e517d7739d6a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|ac1e4d22-1679-0deb-9e4b-e517d7739d6a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199227c4a40,
          },
          "e-137": {
            id: "e-137",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-138",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|de5d5526-1029-0d9a-daa5-f084fe09e737",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|de5d5526-1029-0d9a-daa5-f084fe09e737",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199227d2f78,
          },
          "e-139": {
            id: "e-139",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-140",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|b8c1e197-51ea-1d45-b884-1a2742c3a162",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|b8c1e197-51ea-1d45-b884-1a2742c3a162",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199227d95a6,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|9abde6a9-7951-b227-c2b3-297c1971d9cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|9abde6a9-7951-b227-c2b3-297c1971d9cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992284b1cd,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|f342210e-7162-3abe-f470-1f9203583227",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|f342210e-7162-3abe-f470-1f9203583227",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19922897310,
          },
          "e-147": {
            id: "e-147",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|2509d730-31a8-607b-99e2-88467d2fa775",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|2509d730-31a8-607b-99e2-88467d2fa775",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199228ed538,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-arrow-block",
              originalId:
                "68abe6353889f23ffa0aeb78|eee5db44-b406-d9ac-a6dd-3d9da1d67804",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-arrow-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|eee5db44-b406-d9ac-a6dd-3d9da1d67804",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199228fc5a1,
          },
          "e-153": {
            id: "e-153",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-154",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be65",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be65",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199229f0941,
          },
          "e-154": {
            id: "e-154",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be65",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be65",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199229f0942,
          },
          "e-171": {
            id: "e-171",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-172",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".causes-item-fund-liner",
              originalId:
                "68abe6353889f23ffa0aeb78|8f664497-d988-609c-22ec-07ec97618ee7",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".causes-item-fund-liner",
                originalId:
                  "68abe6353889f23ffa0aeb78|8f664497-d988-609c-22ec-07ec97618ee7",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19922d9a04a,
          },
          "e-177": {
            id: "e-177",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-178",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|082255c0-4d74-1d13-bd29-2bbd307d623a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|082255c0-4d74-1d13-bd29-2bbd307d623a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992346f950,
          },
          "e-179": {
            id: "e-179",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-180",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|7be0a25e-f505-c4d4-e4c2-5d1681f7d997",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|7be0a25e-f505-c4d4-e4c2-5d1681f7d997",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923472838,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-182",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4799bf56-d389-96ce-f32a-e6765b7565a0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4799bf56-d389-96ce-f32a-e6765b7565a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992347d837,
          },
          "e-183": {
            id: "e-183",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-184",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|f91aee6f-ec7c-d4d8-e708-5b237879f604",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|f91aee6f-ec7c-d4d8-e708-5b237879f604",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199234808fd,
          },
          "e-185": {
            id: "e-185",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-186",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|eb1cd7f3-4a37-48f1-4a2e-33d8159a9acf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|eb1cd7f3-4a37-48f1-4a2e-33d8159a9acf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923482635,
          },
          "e-187": {
            id: "e-187",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-188",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|2464b9ab-65d7-5447-5f05-a9b7ba371d3d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|2464b9ab-65d7-5447-5f05-a9b7ba371d3d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992348f900,
          },
          "e-203": {
            id: "e-203",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-204",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".purpose-image",
              originalId:
                "68afdf002014703e8ad32d0b|96268b77-3b06-f7fe-8a2d-2f2fc0d51426",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".purpose-image",
                originalId:
                  "68afdf002014703e8ad32d0b|96268b77-3b06-f7fe-8a2d-2f2fc0d51426",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992353c891,
          },
          "e-205": {
            id: "e-205",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-206",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|0f8fd8ae-46a5-c4b0-042d-02c3b72371df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|0f8fd8ae-46a5-c4b0-042d-02c3b72371df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992354b489,
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-208",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|ba27e44c-c744-4b86-058e-d845dff35ac5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|ba27e44c-c744-4b86-058e-d845dff35ac5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992354e578,
          },
          "e-209": {
            id: "e-209",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-210",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8dba6a48-3e66-f0bf-f3fa-0cfaa183a2c7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8dba6a48-3e66-f0bf-f3fa-0cfaa183a2c7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992355f5d1,
          },
          "e-227": {
            id: "e-227",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-364",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|bbdca59f-6f49-bcb9-589d-dae1cc1d5e37",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|bbdca59f-6f49-bcb9-589d-dae1cc1d5e37",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923587716,
          },
          "e-231": {
            id: "e-231",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-232",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4965e19e-0cf5-6d46-2b8b-77657c397929",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199235932ae,
          },
          "e-233": {
            id: "e-233",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-234",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|fdbcbc92-c2ee-3843-16c0-8a86866b41e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1992359c341,
          },
          "e-235": {
            id: "e-235",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-236",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|19ff1d47-7037-e361-1e95-7c9ee308b99f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1992359fe71,
          },
          "e-237": {
            id: "e-237",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-238",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e62d7932-95dc-ecda-4b73-88f9ace42975",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199235a5698,
          },
          "e-239": {
            id: "e-239",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-240",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|f7613e13-e898-b71d-0edc-ee1152b40ab3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|f7613e13-e898-b71d-0edc-ee1152b40ab3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923621271,
          },
          "e-241": {
            id: "e-241",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-41",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68afdf002014703e8ad32d0b|f9b82e81-fa95-898b-1195-29c56b182dc4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|f9b82e81-fa95-898b-1195-29c56b182dc4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-41-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19923686841,
          },
          "e-244": {
            id: "e-244",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-245",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|571e2d4f-4573-6d26-90d6-0650cc18f84c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|571e2d4f-4573-6d26-90d6-0650cc18f84c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923987bc9,
          },
          "e-246": {
            id: "e-246",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-247",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e3f7fbd8-e6cb-e588-11b2-42a313015e8f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e3f7fbd8-e6cb-e588-11b2-42a313015e8f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199239ca0e0,
          },
          "e-248": {
            id: "e-248",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-249",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|a39b13fd-9fa5-eeb8-730b-69c8d04147dd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|a39b13fd-9fa5-eeb8-730b-69c8d04147dd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923aad20a,
          },
          "e-256": {
            id: "e-256",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-257",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|6d44e6e4-01e1-cb79-2d17-d99eec2865e8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|6d44e6e4-01e1-cb79-2d17-d99eec2865e8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923b480b9,
          },
          "e-260": {
            id: "e-260",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-261",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|a055fa58-aa30-a29a-7861-e0a554ea1fa5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|a055fa58-aa30-a29a-7861-e0a554ea1fa5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923bb3d33,
          },
          "e-262": {
            id: "e-262",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-263",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|b3513f3a-3290-70b0-4ef5-d716182f51e7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|b3513f3a-3290-70b0-4ef5-d716182f51e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923cc2b55,
          },
          "e-264": {
            id: "e-264",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-265",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|5932ed8c-d169-81ec-e3fa-df959b89883a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|5932ed8c-d169-81ec-e3fa-df959b89883a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19923cc573f,
          },
          "e-270": {
            id: "e-270",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-271",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|26c0d27e-9406-3e48-f86a-18bc31d6aac0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|26c0d27e-9406-3e48-f86a-18bc31d6aac0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199274c4ba8,
          },
          "e-276": {
            id: "e-276",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-277",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d63581",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d63581",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199274fa5aa,
          },
          "e-278": {
            id: "e-278",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-279",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d63591",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d63591",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199274fc697,
          },
          "e-280": {
            id: "e-280",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-281",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d635a1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d635a1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199274ffd73,
          },
          "e-282": {
            id: "e-282",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-283",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d635b1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|d689ff73-fe8f-b546-8858-3f5968d635b1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927501e07,
          },
          "e-284": {
            id: "e-284",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-285",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|458f32a1-a5dd-642d-6a58-035fe9d52f87",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|458f32a1-a5dd-642d-6a58-035fe9d52f87",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992750687d,
          },
          "e-286": {
            id: "e-286",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-287",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|1208f751-8b6b-3611-dbf9-775dfe5c4d14",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|1208f751-8b6b-3611-dbf9-775dfe5c4d14",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927508a4b,
          },
          "e-288": {
            id: "e-288",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-289",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|29860e30-174d-5c1d-f2d5-2abc2c863fb7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|29860e30-174d-5c1d-f2d5-2abc2c863fb7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992750dbb2,
          },
          "e-290": {
            id: "e-290",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-291",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|93ea748b-91d6-6797-fbc6-b46c1b4e8a99",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|93ea748b-91d6-6797-fbc6-b46c1b4e8a99",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992750fa12,
          },
          "e-292": {
            id: "e-292",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-293",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|b5d41b06-fe76-8aae-91b3-b750eef65f03",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|b5d41b06-fe76-8aae-91b3-b750eef65f03",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927516dd0,
          },
          "e-294": {
            id: "e-294",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-295",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7d52cbb0d570094f731|b74e162c-d385-2d55-aad2-7a8b5b97861e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7d52cbb0d570094f731|b74e162c-d385-2d55-aad2-7a8b5b97861e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992751f856,
          },
          "e-298": {
            id: "e-298",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-299",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7e7a8ef92db17f111ec|19753283-abaf-d035-2089-3f2b1fce3880",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7e7a8ef92db17f111ec|19753283-abaf-d035-2089-3f2b1fce3880",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927531647,
          },
          "e-304": {
            id: "e-304",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-305",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7e7a8ef92db17f111ec|0cd9bfd5-ffb1-a35d-796f-e6cf17735b82",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7e7a8ef92db17f111ec|0cd9bfd5-ffb1-a35d-796f-e6cf17735b82",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992755842b,
          },
          "e-306": {
            id: "e-306",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-307",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7e7a8ef92db17f111ec|0cd9bfd5-ffb1-a35d-796f-e6cf17735b83",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7e7a8ef92db17f111ec|0cd9bfd5-ffb1-a35d-796f-e6cf17735b83",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199275613f0,
          },
          "e-326": {
            id: "e-326",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-327",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|490ae0af-9291-b02d-3e51-b2919a541abb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|490ae0af-9291-b02d-3e51-b2919a541abb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199279592cd,
          },
          "e-328": {
            id: "e-328",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-329",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|490ae0af-9291-b02d-3e51-b2919a541aba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|490ae0af-9291-b02d-3e51-b2919a541aba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992796379d,
          },
          "e-330": {
            id: "e-330",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-331",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|2776140d-fd7a-06ab-79a7-5933d20a5552",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|2776140d-fd7a-06ab-79a7-5933d20a5552",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992796ee32,
          },
          "e-332": {
            id: "e-332",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-333",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|bef75ccf-d112-c648-a130-11f7320d67ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|bef75ccf-d112-c648-a130-11f7320d67ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927971b31,
          },
          "e-334": {
            id: "e-334",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-335",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|ab2b4ef8-07df-c698-7698-174858e075f3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|ab2b4ef8-07df-c698-7698-174858e075f3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927974fb1,
          },
          "e-336": {
            id: "e-336",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-337",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d891f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1992798d0cd,
          },
          "e-338": {
            id: "e-338",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-339",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d892a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19927990b3e,
          },
          "e-340": {
            id: "e-340",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-341",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8935",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199279979e5,
          },
          "e-342": {
            id: "e-342",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-343",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d8940",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1992799ea8b,
          },
          "e-344": {
            id: "e-344",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-345",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c861c06a7b55c4a6e3c1|d1a97f7d-eb12-e7d9-65aa-be356f3d894b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x199279a698f,
          },
          "e-348": {
            id: "e-348",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-349",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".about-donation-list-item",
              originalId:
                "68b3c871ae82ac604cd70d3a|73166fd3-8da1-45d0-307f-fb521a3ea35a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".about-donation-list-item",
                originalId:
                  "68b3c871ae82ac604cd70d3a|73166fd3-8da1-45d0-307f-fb521a3ea35a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199279b81da,
          },
          "e-350": {
            id: "e-350",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-351",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c871ae82ac604cd70d3a|3fce2883-ec74-b1d8-f21c-03165040d0ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c871ae82ac604cd70d3a|3fce2883-ec74-b1d8-f21c-03165040d0ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199279c0382,
          },
          "e-352": {
            id: "e-352",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-353",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c871ae82ac604cd70d3a|73166fd3-8da1-45d0-307f-fb521a3ea361",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c871ae82ac604cd70d3a|73166fd3-8da1-45d0-307f-fb521a3ea361",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199279c7f0d,
          },
          "e-354": {
            id: "e-354",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-355",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c871ae82ac604cd70d3a|f9a4d7a6-13e5-a5b3-47ea-2d8762db0b51",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c871ae82ac604cd70d3a|f9a4d7a6-13e5-a5b3-47ea-2d8762db0b51",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199279d1dd5,
          },
          "e-356": {
            id: "e-356",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-357",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d688d51d8c79b4f65a92|c00a101c-561c-2747-ab41-db026193a830",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d688d51d8c79b4f65a92|c00a101c-561c-2747-ab41-db026193a830",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927a647d2,
          },
          "e-358": {
            id: "e-358",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-369",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf7680b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf7680b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ec863f8,
          },
          "e-359": {
            id: "e-359",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-125",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76807",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76807",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192278acc44,
          },
          "e-362": {
            id: "e-362",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-975",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76811",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76811",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192278cae6e,
          },
          "e-371": {
            id: "e-371",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-375",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ec7fae1,
          },
          "e-373": {
            id: "e-373",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1002",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76807",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76807",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192278acc3e,
          },
          "e-374": {
            id: "e-374",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1040",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76811",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76811",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192278cae76,
          },
          "e-376": {
            id: "e-376",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-377",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|70327ced-69ac-e34d-4215-11b3ce4e0563",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|70327ced-69ac-e34d-4215-11b3ce4e0563",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927aca271,
          },
          "e-380": {
            id: "e-380",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-381",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68aed72b122a2b58749d8061|566e5956-a85b-1764-8963-3a1b414c385a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68aed72b122a2b58749d8061|566e5956-a85b-1764-8963-3a1b414c385a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927af58a9,
          },
          "e-382": {
            id: "e-382",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-383",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68aed72b122a2b58749d8061|67ae1745-2fe2-a36d-0ef7-7db52767a9cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68aed72b122a2b58749d8061|67ae1745-2fe2-a36d-0ef7-7db52767a9cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927af7b1c,
          },
          "e-384": {
            id: "e-384",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-385",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68aed72b122a2b58749d8061|5cd176dd-3fdd-7d63-9d1a-d403e4ee54c0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68aed72b122a2b58749d8061|5cd176dd-3fdd-7d63-9d1a-d403e4ee54c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927af9cf1,
          },
          "e-390": {
            id: "e-390",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-391",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad862eaae8522088757d05|4369bfc3-66c6-2474-c094-087e2b4bccc0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad862eaae8522088757d05|4369bfc3-66c6-2474-c094-087e2b4bccc0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927b213f7,
          },
          "e-392": {
            id: "e-392",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-393",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad862eaae8522088757d05|f2dd3115-56c9-e81d-ce36-5d59f8f2f68b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad862eaae8522088757d05|f2dd3115-56c9-e81d-ce36-5d59f8f2f68b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927b24383,
          },
          "e-396": {
            id: "e-396",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-397",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|57653e79-03dc-23c1-70b5-b31312b3004f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|57653e79-03dc-23c1-70b5-b31312b3004f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927b4fb4b,
          },
          "e-398": {
            id: "e-398",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-399",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|d84bd464-ff9a-5b05-13da-849f5e79c7e5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|d84bd464-ff9a-5b05-13da-849f5e79c7e5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927b539db,
          },
          "e-402": {
            id: "e-402",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-403",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|6723bd98-bf02-8a7c-a809-96f0fb640565",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|6723bd98-bf02-8a7c-a809-96f0fb640565",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927b59020,
          },
          "e-406": {
            id: "e-406",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-407",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927c43738,
          },
          "e-407": {
            id: "e-407",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-406",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf767f5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927c4373b,
          },
          "e-408": {
            id: "e-408",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-409",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76802",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b7d6971ba43f03a8857e5d|efb6c037-8b5c-69ea-524a-e927cbf76802",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19927c542f6,
          },
          "e-410": {
            id: "e-410",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-411",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|cf077b26-ed34-9562-7fe3-066c4cd51807",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19927d72ad0,
          },
          "e-412": {
            id: "e-412",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-413",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              selector: ".work-process-step-card",
              originalId:
                "68abe6353889f23ffa0aeb78|f342210e-7162-3abe-f470-1f9203583229",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".work-process-step-card",
                originalId:
                  "68abe6353889f23ffa0aeb78|f342210e-7162-3abe-f470-1f9203583229",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992c989b66,
          },
          "e-414": {
            id: "e-414",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-415",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ad7fcdf9-fba7-1e5e-ce93-0b2e4107e6b7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ad7fcdf9-fba7-1e5e-ce93-0b2e4107e6b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992c9b3f5a,
          },
          "e-428": {
            id: "e-428",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-429",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|97595080-966b-d2c3-505f-82581608125f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|97595080-966b-d2c3-505f-82581608125f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d06ae39,
          },
          "e-430": {
            id: "e-430",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-431",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|b9abc8e1-7a48-2308-a76f-7f31f9d54275",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|b9abc8e1-7a48-2308-a76f-7f31f9d54275",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d06c92b,
          },
          "e-432": {
            id: "e-432",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-433",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|e76d2686-295d-ff40-9433-bbb718d33b24",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|e76d2686-295d-ff40-9433-bbb718d33b24",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d06e89b,
          },
          "e-442": {
            id: "e-442",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-443",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|d3be698a-a16f-1465-331b-90e71666a05b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|d3be698a-a16f-1465-331b-90e71666a05b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d10473d,
          },
          "e-444": {
            id: "e-444",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-445",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|7ff367ce-cea0-86cc-0ec1-12316f55276f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|7ff367ce-cea0-86cc-0ec1-12316f55276f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d10b86a,
          },
          "e-446": {
            id: "e-446",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-447",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|1ec3d4eb-3b89-aae1-41ae-e48c89767ae9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|1ec3d4eb-3b89-aae1-41ae-e48c89767ae9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992d10ee1a,
          },
          "e-452": {
            id: "e-452",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-50",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-453",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId:
                "68abe6353889f23ffa0aeb78|f8d243f9-2402-c427-7024-797e2611a36c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId:
                  "68abe6353889f23ffa0aeb78|f8d243f9-2402-c427-7024-797e2611a36c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199320510c2,
          },
          "e-453": {
            id: "e-453",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-51",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-452",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".testimonial-slide",
              originalId:
                "68abe6353889f23ffa0aeb78|f8d243f9-2402-c427-7024-797e2611a36c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".testimonial-slide",
                originalId:
                  "68abe6353889f23ffa0aeb78|f8d243f9-2402-c427-7024-797e2611a36c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199320510c2,
          },
          "e-454": {
            id: "e-454",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-455",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|eee5db44-b406-d9ac-a6dd-3d9da1d677ff",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|eee5db44-b406-d9ac-a6dd-3d9da1d677ff",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199323a1624,
          },
          "e-475": {
            id: "e-475",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-476",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".causes-link-button",
              originalId:
                "68abe6353889f23ffa0aeb78|c33ac87a-4b79-cd9b-8822-ec4c70686424",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".causes-link-button",
                originalId:
                  "68abe6353889f23ffa0aeb78|c33ac87a-4b79-cd9b-8822-ec4c70686424",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993752e505,
          },
          "e-476": {
            id: "e-476",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-37",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-475",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".causes-link-button",
              originalId:
                "68abe6353889f23ffa0aeb78|c33ac87a-4b79-cd9b-8822-ec4c70686424",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".causes-link-button",
                originalId:
                  "68abe6353889f23ffa0aeb78|c33ac87a-4b79-cd9b-8822-ec4c70686424",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1993752e508,
          },
          "e-480": {
            id: "e-480",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-56",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68afdf002014703e8ad32d0b|063dd6c2-bc97-7f1f-4837-83fc830f587a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|063dd6c2-bc97-7f1f-4837-83fc830f587a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-56-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 96,
              },
              {
                continuousParameterGroupId: "a-56-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 96,
              },
            ],
            createdOn: 0x19937f7ae98,
          },
          "e-481": {
            id: "e-481",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-482",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f19da01b-5235-c1d8-14b1-258b9eb0a740",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f19da01b-5235-c1d8-14b1-258b9eb0a740",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199465574dc,
          },
          "e-482": {
            id: "e-482",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-54",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-481",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f19da01b-5235-c1d8-14b1-258b9eb0a740",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f19da01b-5235-c1d8-14b1-258b9eb0a740",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199465574e0,
          },
          "e-483": {
            id: "e-483",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-484",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|f9afa73c-c082-9477-f6d8-16839b995a79",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|f9afa73c-c082-9477-f6d8-16839b995a79",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199466b2e0e,
          },
          "e-484": {
            id: "e-484",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-483",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|f9afa73c-c082-9477-f6d8-16839b995a79",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|f9afa73c-c082-9477-f6d8-16839b995a79",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199466b2e0e,
          },
          "e-485": {
            id: "e-485",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-486",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59a9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59a9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946cbb432,
          },
          "e-487": {
            id: "e-487",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-488",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59b9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59b9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946cbb432,
          },
          "e-489": {
            id: "e-489",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-490",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59c9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59c9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946cbb432,
          },
          "e-491": {
            id: "e-491",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-492",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|97651486-24ab-856a-0846-909b453e59d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19946cbb432,
          },
          "e-493": {
            id: "e-493",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-494",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be66",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be66",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1994744fa39,
          },
          "e-494": {
            id: "e-494",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-493",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "216321ad-c76d-ce85-c124-cbfb5723be66",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "216321ad-c76d-ce85-c124-cbfb5723be66",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1994744fa3d,
          },
          "e-495": {
            id: "e-495",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-496",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4b2d4558-74e4-d0d8-e28c-6160f4a8526e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4b2d4558-74e4-d0d8-e28c-6160f4a8526e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199475c25a8,
          },
          "e-497": {
            id: "e-497",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-498",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe709adc877b0da5278b4|b49aa98d-ed0f-2b04-20cb-f3ce661cea7c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe709adc877b0da5278b4|b49aa98d-ed0f-2b04-20cb-f3ce661cea7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19947a0a447,
          },
          "e-510": {
            id: "e-510",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-511",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".service-item-block",
              originalId:
                "68abe6353889f23ffa0aeb78|50d46dd1-1243-7ba6-bcba-40ef3b5edf7c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|50d46dd1-1243-7ba6-bcba-40ef3b5edf7c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993b90082,
          },
          "e-511": {
            id: "e-511",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-510",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".service-item-block",
              originalId:
                "68abe6353889f23ffa0aeb78|50d46dd1-1243-7ba6-bcba-40ef3b5edf7c",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".service-item-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|50d46dd1-1243-7ba6-bcba-40ef3b5edf7c",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993b90085,
          },
          "e-512": {
            id: "e-512",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-513",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c7c4ba111a43f9345802|c6df1b61-3484-4c09-ee0c-1e9db8a9eac0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c7c4ba111a43f9345802|c6df1b61-3484-4c09-ee0c-1e9db8a9eac0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993d795e1,
          },
          "e-516": {
            id: "e-516",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-517",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|bc011ec8-fbb5-f300-9d8d-a04b692ddde6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|bc011ec8-fbb5-f300-9d8d-a04b692ddde6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993f7434f,
          },
          "e-518": {
            id: "e-518",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-519",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|f0a75619-75fd-1578-f399-8d688ee8b233",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|f0a75619-75fd-1578-f399-8d688ee8b233",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993faad32,
          },
          "e-520": {
            id: "e-520",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-521",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|4476bb17-845a-faf7-9451-26f22df7329d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|4476bb17-845a-faf7-9451-26f22df7329d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19993fb5e21,
          },
          "e-524": {
            id: "e-524",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-525",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|9091b12a-4088-be3f-aee9-6ec473be7fee",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|9091b12a-4088-be3f-aee9-6ec473be7fee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199947e55a9,
          },
          "e-530": {
            id: "e-530",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-531",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c90f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c90f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994a0747b,
          },
          "e-534": {
            id: "e-534",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-535",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c924",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c924",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994a0747b,
          },
          "e-538": {
            id: "e-538",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-539",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c935",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c935",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994a0747b,
          },
          "e-540": {
            id: "e-540",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-541",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|47a4c8fb-ca4a-110f-b837-c55e2c262fe2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|47a4c8fb-ca4a-110f-b837-c55e2c262fe2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994a1ec09,
          },
          "e-542": {
            id: "e-542",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-543",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994af4b7c,
          },
          "e-543": {
            id: "e-543",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-542",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994af4b7c,
          },
          "e-544": {
            id: "e-544",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-545",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da0c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994af4b7c,
          },
          "e-546": {
            id: "e-546",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-547",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8b1ff042e50f434c2b97|f835b715-b046-d003-9558-443df283a9f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8b1ff042e50f434c2b97|f835b715-b046-d003-9558-443df283a9f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19994b0c4a6,
          },
          "e-548": {
            id: "e-548",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-549",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|48848d5f-7f87-2c36-4869-b5a77f909dfa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|48848d5f-7f87-2c36-4869-b5a77f909dfa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998a4649e,
          },
          "e-550": {
            id: "e-550",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-551",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8e7c8ff1-7780-a0d5-873f-65931fc9ee96",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8e7c8ff1-7780-a0d5-873f-65931fc9ee96",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998affcc2,
          },
          "e-552": {
            id: "e-552",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-65",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-553",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|247266e1-1057-0971-46c6-8d261d8469cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|247266e1-1057-0971-46c6-8d261d8469cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998b1ef91,
          },
          "e-554": {
            id: "e-554",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-555",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|254a1613-b527-50e1-01f3-a6cf8fa85254",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|254a1613-b527-50e1-01f3-a6cf8fa85254",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998b346f1,
          },
          "e-556": {
            id: "e-556",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-557",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8c8bd8b8-45cb-2de0-3818-eacee8af8e19",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8c8bd8b8-45cb-2de0-3818-eacee8af8e19",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998b65a50,
          },
          "e-558": {
            id: "e-558",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-68",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-559",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|0e2ba757-0187-aa34-7bf4-be61ff347ec9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|0e2ba757-0187-aa34-7bf4-be61ff347ec9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998b76ec0,
          },
          "e-560": {
            id: "e-560",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-69",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-561",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e241ff2d-6fe9-9bf0-af9f-1d1d001fea78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e241ff2d-6fe9-9bf0-af9f-1d1d001fea78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998d3e51d,
          },
          "e-562": {
            id: "e-562",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-563",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8a4c928f-7b6a-a9b4-10ea-5cddb4c15f10",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8a4c928f-7b6a-a9b4-10ea-5cddb4c15f10",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998ddeecb,
          },
          "e-564": {
            id: "e-564",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-565",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|48848d5f-7f87-2c36-4869-b5a77f909dfa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|48848d5f-7f87-2c36-4869-b5a77f909dfa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998de687a,
          },
          "e-566": {
            id: "e-566",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-567",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8e7c8ff1-7780-a0d5-873f-65931fc9ee96",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8e7c8ff1-7780-a0d5-873f-65931fc9ee96",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998dede2b,
          },
          "e-568": {
            id: "e-568",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-569",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|247266e1-1057-0971-46c6-8d261d8469cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|247266e1-1057-0971-46c6-8d261d8469cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998df0952,
          },
          "e-570": {
            id: "e-570",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-571",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|254a1613-b527-50e1-01f3-a6cf8fa85254",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|254a1613-b527-50e1-01f3-a6cf8fa85254",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998df2690,
          },
          "e-572": {
            id: "e-572",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-573",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8c8bd8b8-45cb-2de0-3818-eacee8af8e19",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8c8bd8b8-45cb-2de0-3818-eacee8af8e19",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998df46a2,
          },
          "e-574": {
            id: "e-574",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-575",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|0e2ba757-0187-aa34-7bf4-be61ff347ec9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|0e2ba757-0187-aa34-7bf4-be61ff347ec9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998df713a,
          },
          "e-576": {
            id: "e-576",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-577",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|9677afe0-a80b-929c-e986-194187468997",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|9677afe0-a80b-929c-e986-194187468997",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998e0384b,
          },
          "e-578": {
            id: "e-578",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-579",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|dea0dd0b-c9fc-5e70-d472-cb7f14f31784",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|dea0dd0b-c9fc-5e70-d472-cb7f14f31784",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998e0ca29,
          },
          "e-580": {
            id: "e-580",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-581",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|ed95dd01-b540-7846-96ad-46b9166257b7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|ed95dd01-b540-7846-96ad-46b9166257b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19998e0edb2,
          },
          "e-584": {
            id: "e-584",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-585",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|e9c86d70-952e-5996-e1b6-26fd9849061e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|e9c86d70-952e-5996-e1b6-26fd9849061e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 5,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999109bc3,
          },
          "e-586": {
            id: "e-586",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-587",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|bc1a194a-3a2f-03a4-992c-42976f0cc7f5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|bc1a194a-3a2f-03a4-992c-42976f0cc7f5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999265e82,
          },
          "e-588": {
            id: "e-588",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-589",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|bc011ec8-fbb5-f300-9d8d-a04b692ddde1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|bc011ec8-fbb5-f300-9d8d-a04b692ddde1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999926a9ca,
          },
          "e-590": {
            id: "e-590",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-591",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|9091b12a-4088-be3f-aee9-6ec473be7fe9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|9091b12a-4088-be3f-aee9-6ec473be7fe9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999926d698,
          },
          "e-592": {
            id: "e-592",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-593",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-item-block",
              originalId:
                "68abe6353889f23ffa0aeb78|0e12f258-ae06-f56c-f9dd-00c4d6f6c31a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|0e12f258-ae06-f56c-f9dd-00c4d6f6c31a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199992a3a92,
          },
          "e-593": {
            id: "e-593",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-592",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".blog-item-block",
              originalId:
                "68abe6353889f23ffa0aeb78|0e12f258-ae06-f56c-f9dd-00c4d6f6c31a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".blog-item-block",
                originalId:
                  "68abe6353889f23ffa0aeb78|0e12f258-ae06-f56c-f9dd-00c4d6f6c31a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199992a3a94,
          },
          "e-594": {
            id: "e-594",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-595",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c90a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c90a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199992d6ab9,
          },
          "e-596": {
            id: "e-596",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-597",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c91f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c91f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199992d8fdf,
          },
          "e-598": {
            id: "e-598",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-599",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c930",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b3c853e9bb9c30e4037bf0|7192e176-049f-7cc6-1275-faf43d88c930",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199992dae4d,
          },
          "e-600": {
            id: "e-600",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-70",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-601",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|8ca4ea19-2aac-520e-f268-45ee3e56cdcc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|8ca4ea19-2aac-520e-f268-45ee3e56cdcc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999391130,
          },
          "e-602": {
            id: "e-602",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-603",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|4bd52a7e-66c5-7f85-c984-153e7736917a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|4bd52a7e-66c5-7f85-c984-153e7736917a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199993ae887,
          },
          "e-604": {
            id: "e-604",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-605",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68afdf002014703e8ad32d0b|0b5f7ffe-5155-ecbe-3b55-d852c2fee98d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68afdf002014703e8ad32d0b|0b5f7ffe-5155-ecbe-3b55-d852c2fee98d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199993b7bfd,
          },
          "e-606": {
            id: "e-606",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-607",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68abe6353889f23ffa0aeb78|adab0277-3fea-1e8b-e3ac-b44a4f364c2d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68abe6353889f23ffa0aeb78|adab0277-3fea-1e8b-e3ac-b44a4f364c2d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1999943cb1c,
          },
          "e-608": {
            id: "e-608",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-609",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da07",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8b1ff042e50f434c2b97|8a21372e-aaff-900a-3d00-764c2792da07",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19999a64a39,
          },
        },
        actionLists: {
          "a-7": {
            id: "a-7",
            title: "Dropdown Link Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.desktop",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "fec86b21-0aa9-e037-51be-ff5fd26d324a",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.desktop",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "fec86b21-0aa9-e037-51be-ff5fd26d324a",
                        ],
                      },
                      zValue: -180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      zValue: -180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19569cb4e2d,
          },
          "a-8": {
            id: "a-8",
            title: "Dropdown Link Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.desktop",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "fec86b21-0aa9-e037-51be-ff5fd26d324a",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-icon.mobile",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74b6",
                          "ce1ce172-3120-ad4b-0700-b005310a89c1",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19569cb4e2d,
          },
          "a-9": {
            id: "a-9",
            title: "Impact Number Counter Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".funfact-number-wrap.upper-movement",
                        selectorGuids: [
                          "31697d7e-98be-3c29-ed52-be5be3fec70b",
                          "31697d7e-98be-3c29-ed52-be5be3fec70f",
                        ],
                      },
                      yValue: 400,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".funfact-number-wrap.lower-movement",
                        selectorGuids: [
                          "31697d7e-98be-3c29-ed52-be5be3fec70b",
                          "31697d7e-98be-3c29-ed52-be5be3fec70e",
                        ],
                      },
                      yValue: -400,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 2500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".funfact-number-wrap.upper-movement",
                        selectorGuids: [
                          "31697d7e-98be-3c29-ed52-be5be3fec70b",
                          "31697d7e-98be-3c29-ed52-be5be3fec70f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 2500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".funfact-number-wrap.lower-movement",
                        selectorGuids: [
                          "31697d7e-98be-3c29-ed52-be5be3fec70b",
                          "31697d7e-98be-3c29-ed52-be5be3fec70e",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18d87545b1a,
          },
          "a-10": {
            id: "a-10",
            title: "Work Process Scroll Animation",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 15,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-step-block",
                            selectorGuids: [
                              "1f9dfe6d-6a4d-ffaf-2a40-ab86b965e018",
                            ],
                          },
                          xValue: 0,
                          yValue: null,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".work-process-step-block",
                            selectorGuids: [
                              "1f9dfe6d-6a4d-ffaf-2a40-ab86b965e018",
                            ],
                          },
                          xValue: -78,
                          yValue: null,
                          xUnit: "%",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198ea0bbdd9,
          },
          "a-11": {
            id: "a-11",
            title: "CTA Scroll Animation",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 33,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-1",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "602db4a1-0f67-5285-8f33-89179ea31a0a",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-2",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "98f58461-c4e9-d3b4-aa57-05427f547106",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-3",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "c272aa4a-fe45-cd16-5c1b-6a55379fe9a4",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-4",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "791397b6-6f72-2a79-c96e-0b0ab66f063a",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-5",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "dba11686-deba-6b93-1a7a-aa7c88a8fa5b",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-11-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".section-heading-block.middle.bottom-60px-gap.full-width",
                            selectorGuids: [
                              "b500d767-9ba0-779b-b2fd-624fa36b359a",
                              "e18cb98a-1897-29b4-c35f-1fbc35a1d30a",
                              "64c3ccb6-0a72-8660-8621-deabf237e2e4",
                              "4be890e2-d083-2064-c940-c0ede22dff55",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-14",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".section-heading-block.middle.bottom-60px-gap.full-width",
                            selectorGuids: [
                              "b500d767-9ba0-779b-b2fd-624fa36b359a",
                              "e18cb98a-1897-29b4-c35f-1fbc35a1d30a",
                              "64c3ccb6-0a72-8660-8621-deabf237e2e4",
                              "4be890e2-d083-2064-c940-c0ede22dff55",
                            ],
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 59,
                    actionItems: [
                      {
                        id: "a-11-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-11-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".section-heading-block.middle.bottom-60px-gap.full-width",
                            selectorGuids: [
                              "b500d767-9ba0-779b-b2fd-624fa36b359a",
                              "e18cb98a-1897-29b4-c35f-1fbc35a1d30a",
                              "64c3ccb6-0a72-8660-8621-deabf237e2e4",
                              "4be890e2-d083-2064-c940-c0ede22dff55",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-13",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector:
                              ".section-heading-block.middle.bottom-60px-gap.full-width",
                            selectorGuids: [
                              "b500d767-9ba0-779b-b2fd-624fa36b359a",
                              "e18cb98a-1897-29b4-c35f-1fbc35a1d30a",
                              "64c3ccb6-0a72-8660-8621-deabf237e2e4",
                              "4be890e2-d083-2064-c940-c0ede22dff55",
                            ],
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                      {
                        id: "a-11-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 110,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-11-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-1",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "602db4a1-0f67-5285-8f33-89179ea31a0a",
                            ],
                          },
                          xValue: -200,
                          yValue: 50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-2",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "98f58461-c4e9-d3b4-aa57-05427f547106",
                            ],
                          },
                          xValue: -300,
                          yValue: -120,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-3",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "c272aa4a-fe45-cd16-5c1b-6a55379fe9a4",
                            ],
                          },
                          xValue: 200,
                          yValue: 75,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-4",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "791397b6-6f72-2a79-c96e-0b0ab66f063a",
                            ],
                          },
                          xValue: 200,
                          yValue: -50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-image.is-5",
                            selectorGuids: [
                              "d75401bc-2534-8258-8d07-8e8607e181ac",
                              "dba11686-deba-6b93-1a7a-aa7c88a8fa5b",
                            ],
                          },
                          xValue: 0,
                          yValue: 140,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198ea19e2c0,
          },
          "a-12": {
            id: "a-12",
            title: "Marquee Loop Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".marquee-block",
                        selectorGuids: ["2964f43b-3842-a7cd-ffae-32179aba12b2"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-12-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".marquee-block",
                        selectorGuids: ["2964f43b-3842-a7cd-ffae-32179aba12b2"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198eb260f5c,
          },
          "a-13": {
            id: "a-13",
            title: "Star Loop Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-13-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".marquee-star-icon",
                        selectorGuids: ["c622372a-7bd6-97e1-dd50-7eabec231c29"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-13-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e3,
                      target: {
                        selector: ".marquee-star-icon",
                        selectorGuids: ["c622372a-7bd6-97e1-dd50-7eabec231c29"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198eb294601,
          },
          "a-14": {
            id: "a-14",
            title: "Tertiary Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-14-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tertiary-button-bg",
                        selectorGuids: ["7b6e814d-ccd0-98a8-16f7-f671640b6cd5"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-14-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-14-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tertiary-button-bg",
                        selectorGuids: ["7b6e814d-ccd0-98a8-16f7-f671640b6cd5"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-14-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-14-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: -200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-14-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198277b47aa,
          },
          "a-15": {
            id: "a-15",
            title: "Tertiary Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tertiary-button-bg",
                        selectorGuids: ["7b6e814d-ccd0-98a8-16f7-f671640b6cd5"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-15-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-15-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-15-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198277b47aa,
          },
          "a-16": {
            id: "a-16",
            title: "Secondary Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".secondary-button-bg",
                        selectorGuids: ["f730e346-8ba3-df6a-9163-f2977f501886"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-16-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-13",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-15",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-19",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-18",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-16-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".secondary-button-bg",
                        selectorGuids: ["f730e346-8ba3-df6a-9163-f2977f501886"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-16-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: -200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-16-n-14",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-16",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-20",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-16-n-17",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198277b47aa,
          },
          "a-17": {
            id: "a-17",
            title: "Secondary Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".secondary-button-bg",
                        selectorGuids: ["f730e346-8ba3-df6a-9163-f2977f501886"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-17-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-17-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-17-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-17-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-17-n-9",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-17-n-10",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198277b47aa,
          },
          "a-18": {
            id: "a-18",
            title: "FAQ Item Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-summary-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e7"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e5"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-8",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-summary-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e7"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-18-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e5"],
                      },
                      zValue: 270,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x195d0e1e5ce,
          },
          "a-19": {
            id: "a-19",
            title: "FAQ Item Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-summary-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e7"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-icon-block",
                        selectorGuids: ["eab069b7-cbf6-a0da-4364-b7d08499d3e5"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x195d0e1e5ce,
          },
          "a-59": {
            id: "a-59",
            title: "Star Icon Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-59-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".star-icon",
                        selectorGuids: ["30734cf9-ce46-a92c-e360-a5e86949f9cc"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-59-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 8e3,
                      target: {
                        selector: ".star-icon",
                        selectorGuids: ["30734cf9-ce46-a92c-e360-a5e86949f9cc"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19947845323,
          },
          "a-27": {
            id: "a-27",
            title: "Slide to top (delay 0.4 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-27-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-25": {
            id: "a-25",
            title: "Image Overlay On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|5ed036bb-c7e4-a188-7f69-316a7028b6d6",
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutCubic",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|5ed036bb-c7e4-a188-7f69-316a7028b6d6",
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19913e5145a,
          },
          "a-26": {
            id: "a-26",
            title: "Image On View Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
                      },
                      xValue: 1.6,
                      yValue: 1.6,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-26-n",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "71ae",
                          value: 10,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
                      },
                      filters: [
                        {
                          type: "blur",
                          filterId: "a7ce",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-26-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1400,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b4cf68b-a727-1467-e340-979ba7f56b62",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19913e72413,
          },
          "a-42": {
            id: "a-42",
            title: "Hero Text Slide (delay 0.2 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-42-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 80,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-42-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-42-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-42-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-44": {
            id: "a-44",
            title: "Hero Text Slide (delay 0.6 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-44-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 80,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-44-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-44-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-44-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-45": {
            id: "a-45",
            title: "Hero Text Slide (delay 0.8 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 80,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-45-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-30": {
            id: "a-30",
            title: "Right Liner On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922438f3d,
          },
          "a-23": {
            id: "a-23",
            title: "Slide to top (delay 0.2 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-23-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-23-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-23-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-28": {
            id: "a-28",
            title: "Slide to top (delay 0.6 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-31": {
            id: "a-31",
            title: "Left Liner On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|1b7f059e-a4e8-2714-220c-57de3a079384",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922438f3d,
          },
          "a-29": {
            id: "a-29",
            title: "Slide to top (delay 0.8 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-29-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-5": {
            id: "a-5",
            title: "Dropdown Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["e9125b66-1fe8-c7c9-17a9-43cb08df74ab"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["e9125b66-1fe8-c7c9-17a9-43cb08df74ab"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["e9125b66-1fe8-c7c9-17a9-43cb08df74ab"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19569c806c6,
          },
          "a-6": {
            id: "a-6",
            title: "Dropdown Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav-dropdown-list",
                        selectorGuids: ["e9125b66-1fe8-c7c9-17a9-43cb08df74ab"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19569c806c6,
          },
          "a-38": {
            id: "a-38",
            title: "Causes Liner On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-38-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|8f664497-d988-609c-22ec-07ec97618ee7",
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-38-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|8f664497-d988-609c-22ec-07ec97618ee7",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922d9d04f,
          },
          "a-40": {
            id: "a-40",
            title: "Slide to top (delay 1 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-40-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 60,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-40-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-40-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-40-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outQuad",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          "a-41": {
            id: "a-41",
            title: "Why Choose Card Scroll Animation",
            continuousParameterGroups: [
              {
                id: "a-41-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-41-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-1",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "62fdd6d0-86bd-2a7c-e89b-692d53ccb2fc",
                            ],
                          },
                          xValue: 109.5,
                          yValue: 40,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-2",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "250674ae-ed28-42e6-cbb1-dcf7b781aee1",
                            ],
                          },
                          xValue: 3.5,
                          yValue: 300,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: -102.5,
                          yValue: 300,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-41-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-1",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "62fdd6d0-86bd-2a7c-e89b-692d53ccb2fc",
                            ],
                          },
                          xValue: 109.5,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-2",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "250674ae-ed28-42e6-cbb1-dcf7b781aee1",
                            ],
                          },
                          xValue: 3.5,
                          yValue: 300,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: -102.5,
                          yValue: 300,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 45,
                    actionItems: [
                      {
                        id: "a-41-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-2",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "250674ae-ed28-42e6-cbb1-dcf7b781aee1",
                            ],
                          },
                          xValue: 3.5,
                          yValue: 5,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-12",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: -102.5,
                          yValue: 300,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-41-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: -102.5,
                          yValue: 10,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-41-n-13",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-1",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "62fdd6d0-86bd-2a7c-e89b-692d53ccb2fc",
                            ],
                          },
                          xValue: 109.5,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-2",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "250674ae-ed28-42e6-cbb1-dcf7b781aee1",
                            ],
                          },
                          xValue: 3.5,
                          yValue: 5,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: -102.5,
                          yValue: 10,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-41-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-1",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "62fdd6d0-86bd-2a7c-e89b-692d53ccb2fc",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-2",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "250674ae-ed28-42e6-cbb1-dcf7b781aee1",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-41-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".why-choose-single-card.is-3",
                            selectorGuids: [
                              "680a18a4-074e-a721-49b3-bb3650a07c13",
                              "50e472b8-d904-6b30-f76a-e14d9caf1ced",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1992376c1ee,
          },
          "a-49": {
            id: "a-49",
            title: "Read more hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-icon",
                        selectorGuids: ["a8529bf0-b7f1-d3df-dd00-2119504b1130"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f03dbe5b8,
          },
          "a-48": {
            id: "a-48",
            title: "Read more hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-icon",
                        selectorGuids: ["a8529bf0-b7f1-d3df-dd00-2119504b1130"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-48-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-icon",
                        selectorGuids: ["a8529bf0-b7f1-d3df-dd00-2119504b1130"],
                      },
                      xValue: 10,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f03dbe5b8,
          },
          "a-50": {
            id: "a-50",
            title: "Testimonial Slider In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-50-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".slide-single-image-block",
                        selectorGuids: ["4314df20-81c5-4d8e-eea4-0f76359ee998"],
                      },
                      xValue: -110,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-50-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".slide-content-block",
                        selectorGuids: ["76530d68-030c-cd43-0de1-de44d20c7480"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19931bf07e6,
          },
          "a-51": {
            id: "a-51",
            title: "Testimonial Slider Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-51-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".slide-single-image-block",
                        selectorGuids: ["4314df20-81c5-4d8e-eea4-0f76359ee998"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-51-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".slide-content-block",
                        selectorGuids: ["76530d68-030c-cd43-0de1-de44d20c7480"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19931bf07e6,
          },
          "a-36": {
            id: "a-36",
            title: "Link Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-button-arrow",
                        selectorGuids: ["fe416a41-a1e1-2307-09f8-955d6cde4362"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-36-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-button-arrow",
                        selectorGuids: ["fe416a41-a1e1-2307-09f8-955d6cde4362"],
                      },
                      xValue: 10,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922ced6e7,
          },
          "a-37": {
            id: "a-37",
            title: "Link Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-37-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-button-arrow",
                        selectorGuids: ["fe416a41-a1e1-2307-09f8-955d6cde4362"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19922ced6e7,
          },
          "a-56": {
            id: "a-56",
            title: "About Hero Mouse Over",
            continuousParameterGroups: [
              {
                id: "a-56-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-56-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-video-control-block",
                            selectorGuids: [
                              "f1f4ad55-40fa-773e-7844-541e72a7a307",
                            ],
                          },
                          xValue: -300,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-56-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-video-control-block",
                            selectorGuids: [
                              "f1f4ad55-40fa-773e-7844-541e72a7a307",
                            ],
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-56-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-56-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-video-control-block",
                            selectorGuids: [
                              "f1f4ad55-40fa-773e-7844-541e72a7a307",
                            ],
                          },
                          yValue: -400,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-56-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-video-control-block",
                            selectorGuids: [
                              "f1f4ad55-40fa-773e-7844-541e72a7a307",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19937f80c0b,
          },
          "a-53": {
            id: "a-53",
            title: "Primary Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".primary-button-bg",
                        selectorGuids: ["ad2dda1a-7129-02e9-5f1f-06fd1af32e28"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-53-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block.hero",
                        selectorGuids: [
                          "fce9c48e-3603-9eab-646c-f60df474a205",
                          "c13476b7-e9ef-f4a3-aa1a-90fa2ec88a05",
                        ],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-53-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-53-n-7",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".primary-button-bg",
                        selectorGuids: ["ad2dda1a-7129-02e9-5f1f-06fd1af32e28"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-53-n-8",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block.hero",
                        selectorGuids: [
                          "fce9c48e-3603-9eab-646c-f60df474a205",
                          "c13476b7-e9ef-f4a3-aa1a-90fa2ec88a05",
                        ],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-53-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: -200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-53-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198277b47aa,
          },
          "a-54": {
            id: "a-54",
            title: "Primary Button Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-54-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".primary-button-bg",
                        selectorGuids: ["ad2dda1a-7129-02e9-5f1f-06fd1af32e28"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-54-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-icon-block",
                        selectorGuids: ["fce9c48e-3603-9eab-646c-f60df474a205"],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-54-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-54-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-54-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-54-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198277b47aa,
          },
          "a-57": {
            id: "a-57",
            title: "About Hero Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-57-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                          "da7c1311-9759-4171-986a-64d32ab788ed",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                          "81028f51-f607-d15f-e037-e742e5c182a9",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-10",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-hero-button-bg",
                        selectorGuids: ["8b889516-6df3-a5eb-bb6c-b3c1fbb78672"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-57-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                          "da7c1311-9759-4171-986a-64d32ab788ed",
                        ],
                      },
                      yValue: -200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                          "81028f51-f607-d15f-e037-e742e5c182a9",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-57-n-9",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-hero-button-bg",
                        selectorGuids: ["8b889516-6df3-a5eb-bb6c-b3c1fbb78672"],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x198277b47aa,
          },
          "a-58": {
            id: "a-58",
            title: "About Hero Button Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-58-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-2",
                        selectorGuids: [
                          "690b0b1c-fb51-2d02-f951-c09515d13a66",
                          "8f013dec-ca4b-a86a-2b9c-22293026d8fa",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-58-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-text.is-1",
                        selectorGuids: [
                          "8d891880-929e-eec0-d51c-906e0257038e",
                          "149166e3-34c5-6f80-dc9d-aae5f794a046",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-58-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-1.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "19e30124-eb11-d8a1-cb61-6470ff1ff887",
                          "da7c1311-9759-4171-986a-64d32ab788ed",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-58-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow-icon.is-2.about-hero",
                        selectorGuids: [
                          "e9125b66-1fe8-c7c9-17a9-43cb08df74ae",
                          "1b0dc187-ea48-45af-92f6-2ca7ae08f860",
                          "81028f51-f607-d15f-e037-e742e5c182a9",
                        ],
                      },
                      yValue: 200,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-58-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".about-hero-button-bg",
                        selectorGuids: ["8b889516-6df3-a5eb-bb6c-b3c1fbb78672"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x198277b47aa,
          },
          "a-32": {
            id: "a-32",
            title: "Service Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.home",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "57d5345a-f606-8f6f-64b1-bdb8764481df",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-content-block",
                        selectorGuids: ["88943b1a-511b-4829-3d85-cf6a29e8f623"],
                      },
                      globalSwatchId: "",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-32-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-title",
                        selectorGuids: ["792e2548-ceb9-1b44-b919-e2bb51bda657"],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-summary",
                        selectorGuids: ["6d9ba124-4668-63cd-4d6b-d0c9e7bf48f4"],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-10",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-icon-block",
                        selectorGuids: ["bacc0d55-00aa-c7f5-2409-9e9c0d5ffb42"],
                      },
                      globalSwatchId: "",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 0.1,
                    },
                  },
                  {
                    id: "a-32-n-11",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.is-2",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "fcee4663-a913-b231-0aa7-5ccbe812a336",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.home",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "57d5345a-f606-8f6f-64b1-bdb8764481df",
                        ],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-32-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-content-block",
                        selectorGuids: ["88943b1a-511b-4829-3d85-cf6a29e8f623"],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-title",
                        selectorGuids: ["792e2548-ceb9-1b44-b919-e2bb51bda657"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-summary",
                        selectorGuids: ["6d9ba124-4668-63cd-4d6b-d0c9e7bf48f4"],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-9",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-icon-block",
                        selectorGuids: ["bacc0d55-00aa-c7f5-2409-9e9c0d5ffb42"],
                      },
                      globalSwatchId: "--color--secondary-color",
                      rValue: 246,
                      bValue: 105,
                      gValue: 212,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-32-n-12",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.is-2",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "fcee4663-a913-b231-0aa7-5ccbe812a336",
                        ],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922b197ff,
          },
          "a-61": {
            id: "a-61",
            title: "Service Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-61-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.home",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "57d5345a-f606-8f6f-64b1-bdb8764481df",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-61-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-content-block",
                        selectorGuids: ["88943b1a-511b-4829-3d85-cf6a29e8f623"],
                      },
                      globalSwatchId: "",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-61-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-title",
                        selectorGuids: ["792e2548-ceb9-1b44-b919-e2bb51bda657"],
                      },
                      globalSwatchId: "--color--primary-color",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-61-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-summary",
                        selectorGuids: ["6d9ba124-4668-63cd-4d6b-d0c9e7bf48f4"],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-61-n-5",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-icon-block",
                        selectorGuids: ["bacc0d55-00aa-c7f5-2409-9e9c0d5ffb42"],
                      },
                      globalSwatchId: "",
                      rValue: 53,
                      bValue: 66,
                      gValue: 28,
                      aValue: 0.1,
                    },
                  },
                  {
                    id: "a-61-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".service-item-thumbnail.is-2",
                        selectorGuids: [
                          "0ec95f53-4c60-ffd6-d8e5-8744cab053a0",
                          "fcee4663-a913-b231-0aa7-5ccbe812a336",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19922b197ff,
          },
          "a-62": {
            id: "a-62",
            title: "New Timed Animation",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-62-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|4476bb17-845a-faf7-9451-26f22df7329d",
                      },
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-62-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68abe6353889f23ffa0aeb78|4476bb17-845a-faf7-9451-26f22df7329d",
                      },
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19993fb67a1,
          },
          "a-34": {
            id: "a-34",
            title: "Blog Image Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-34-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-item-thumbnail",
                        selectorGuids: ["ac1d9acf-7aec-6bf3-f373-25dab737871f"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-34-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-item-thumbnail",
                        selectorGuids: ["ac1d9acf-7aec-6bf3-f373-25dab737871f"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19922b197ff,
          },
          "a-35": {
            id: "a-35",
            title: "Blog Image Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".blog-item-thumbnail",
                        selectorGuids: ["ac1d9acf-7aec-6bf3-f373-25dab737871f"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19922b197ff,
          },
          "a-63": {
            id: "a-63",
            title: "Our Journey Hover One",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-63-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-9",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-63-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-14",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-63-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-63-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-64": {
            id: "a-64",
            title: "Our Journey Hover Two",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-64-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-64-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-64-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-64-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-65": {
            id: "a-65",
            title: "Our Journey Hover Three",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-65-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-65-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-65-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-65-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-66": {
            id: "a-66",
            title: "Our Journey Hover Four",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-66-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-66-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-66-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-67": {
            id: "a-67",
            title: "Our Journey Hover Five",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-67-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-67-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-67-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-67-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-67-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-67-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-67-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-68": {
            id: "a-68",
            title: "Our Journey Hover Six",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-68-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-single-point-overlay.is-1",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "42c42add-c5c1-b68c-c0fc-0c2fea3b2a20",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-1",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "37b17c48-b183-0ac5-651c-df80ff409a62",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-2",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "6a5a6293-db59-3cd1-9ae0-54c0616194b7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-3",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "154f75d0-90ca-7c07-8e77-6e060cb1cde8",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-4",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "63c03dda-c54f-53d3-83e2-455b939b99a7",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".our-journey-single-point-block.is-5",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "b39ceb65-9bd7-ef61-7538-7be49720f23f",
                        ],
                      },
                      globalSwatchId: "--color--black-color",
                      rValue: 10,
                      bValue: 10,
                      gValue: 10,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-8",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-block.is-6",
                        selectorGuids: [
                          "caf09871-0702-63ec-c2f2-b81d36630aed",
                          "f6575d4f-2078-aafe-0cb8-321ac00c4bc9",
                        ],
                      },
                      globalSwatchId: "--color--white-color",
                      rValue: 254,
                      bValue: 254,
                      gValue: 254,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-68-n-9",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-2",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "4d129d71-13f2-e745-89ab-df123ca7ee83",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-10",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-3",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "7664f64d-dd1e-126d-f960-2743c01c25d1",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-11",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-4",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "b06b4d94-5fcb-7576-1889-e871fbbe63ba",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-12",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-5",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "25539a7f-8bb7-ad91-714f-1ff5ca6af4b2",
                        ],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-13",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-single-point-overlay.is-6",
                        selectorGuids: [
                          "cb4e13ed-70cc-f88d-5749-c80a2c046267",
                          "0c8d70de-689b-1d49-9f9c-147158f07206",
                        ],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-68-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-68-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 800,
                      target: {
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19998a474f6,
          },
          "a-69": {
            id: "a-69",
            title: "Our Journey Image On View",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-69-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-69-n-10",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "9712",
                          value: 10,
                          unit: "px",
                        },
                      ],
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-69-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-9",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1400,
                      target: {},
                      filters: [
                        {
                          type: "blur",
                          filterId: "814d",
                          value: 0,
                          unit: "px",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-69-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 1500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-69-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-image.is-2",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "bf35d293-020d-cb31-0cc3-c9ebc3715462",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-image.is-3",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "8a9acd54-a9f9-b337-cfd2-275d795836ee",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-image.is-4",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "7eb8e5f5-bcef-0fce-5d80-a92085ecd646",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-image.is-5",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "add7d3c7-160b-a98d-a88c-1f1fe2d2fc0f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-69-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".our-journey-image.is-6",
                        selectorGuids: [
                          "dc8b4d42-e098-a456-22a4-f63f419b9a8d",
                          "eef6b276-77f1-f9f1-3785-34e7041019d7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19998d3f580,
          },
          "a-70": {
            id: "a-70",
            title: "Behind The scene Hover One",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-70-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-1",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "87ca02ce-f976-5fc3-f673-fbb87a0fcc83",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-70-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-2",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "063179a8-372b-bf9d-f195-d6d24796e062",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-70-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-3",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "2ca6d505-5bbe-1a44-a6fc-390fcc2639b3",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19999391b9c,
          },
          "a-71": {
            id: "a-71",
            title: "Behind The scene Hover Two",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-71-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-1",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "87ca02ce-f976-5fc3-f673-fbb87a0fcc83",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-71-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-2",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "063179a8-372b-bf9d-f195-d6d24796e062",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-71-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-3",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "2ca6d505-5bbe-1a44-a6fc-390fcc2639b3",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19999391b9c,
          },
          "a-72": {
            id: "a-72",
            title: "Behind The scene Hover Three",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-72-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-1",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "87ca02ce-f976-5fc3-f673-fbb87a0fcc83",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-72-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-2",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "063179a8-372b-bf9d-f195-d6d24796e062",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-72-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 600,
                      target: {
                        selector: ".our-story-image.is-3",
                        selectorGuids: [
                          "f2dcaad9-d34a-5503-695a-43cb8209047a",
                          "2ca6d505-5bbe-1a44-a6fc-390fcc2639b3",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19999391b9c,
          },
          "a-43": {
            id: "a-43",
            title: "Hero Text Slide (delay 0.4 s)",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 800,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 80,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-43-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-43-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outQuad",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "675aad80668f56c9d2258863|70e206a3-f151-b9c9-b826-4452a4848100",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933eb3008f,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
