! function() {
	var e, t, n;
	! function(o) {
		function i(e, t) {
			return y.call(e, t)
		}

		function s(e, t) {
			var n, o, i, s, a, r, c, u, l, p, f, h = t && t.split("https://demos.qreativethemes.com/"),
				d = w.map,
				v = d && d["*"] || {};
			if (e && "." === e.charAt(0))
				if (t) {
					for (e = e.split("https://demos.qreativethemes.com/"), a = e.length - 1, w.nodeIdCompat && j.test(e[a]) && (e[a] = e[a].replace(j, "")), e = h.slice(0, h.length - 1).concat(e), l = 0; l < e.length; l += 1)
						if (f = e[l], "." === f) e.splice(l, 1), l -= 1;
						else if (".." === f) {
						if (1 === l && (".." === e[2] || ".." === e[0])) break;
						l > 0 && (e.splice(l - 1, 2), l -= 2)
					}
					e = e.join("https://demos.qreativethemes.com/")
				} else 0 === e.indexOf("index.html") && (e = e.substring(2));
			if ((h || v) && d) {
				for (n = e.split("https://demos.qreativethemes.com/"), l = n.length; l > 0; l -= 1) {
					if (o = n.slice(0, l).join("https://demos.qreativethemes.com/"), h)
						for (p = h.length; p > 0; p -= 1)
							if (i = d[h.slice(0, p).join("https://demos.qreativethemes.com/")], i && (i = i[o])) {
								s = i, r = l;
								break
							} if (s) break;
					!c && v && v[o] && (c = v[o], u = l)
				}!s && c && (s = c, r = u), s && (n.splice(0, r, s), e = n.join("https://demos.qreativethemes.com/"))
			}
			return e
		}

		function a(e, t) {
			return function() {
				var n = T.call(arguments, 0);
				return "string" != typeof n[0] && 1 === n.length && n.push(null), h.apply(o, n.concat([e, t]))
			}
		}

		function r(e) {
			return function(t) {
				return s(t, e)
			}
		}

		function c(e) {
			return function(t) {
				m[e] = t
			}
		}

		function u(e) {
			if (i(g, e)) {
				var t = g[e];
				delete g[e], b[e] = !0, f.apply(o, t)
			}
			if (!i(m, e) && !i(b, e)) throw new Error("No " + e);
			return m[e]
		}

		function l(e) {
			var t, n = e ? e.indexOf("!") : -1;
			return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
		}

		function p(e) {
			return function() {
				return w && w.config && w.config[e] || {}
			}
		}
		var f, h, d, v, m = {},
			g = {},
			w = {},
			b = {},
			y = Object.prototype.hasOwnProperty,
			T = [].slice,
			j = /\.js$/;
		d = function(e, t) {
			var n, o = l(e),
				i = o[0];
			return e = o[1], i && (i = s(i, t), n = u(i)), i ? e = n && n.normalize ? n.normalize(e, r(t)) : s(e, t) : (e = s(e, t), o = l(e), i = o[0], e = o[1], i && (n = u(i))), {
				f: i ? i + "!" + e : e,
				n: e,
				pr: i,
				p: n
			}
		}, v = {
			require: function(e) {
				return a(e)
			},
			exports: function(e) {
				var t = m[e];
				return "undefined" != typeof t ? t : m[e] = {}
			},
			module: function(e) {
				return {
					id: e,
					uri: "",
					exports: m[e],
					config: p(e)
				}
			}
		}, f = function(e, t, n, s) {
			var r, l, p, f, h, w, y = [],
				T = typeof n;
			if (s = s || e, "undefined" === T || "function" === T) {
				for (t = !t.length && n.length ? ["require", "exports", "module"] : t, h = 0; h < t.length; h += 1)
					if (f = d(t[h], s), l = f.f, "require" === l) y[h] = v.require(e);
					else if ("exports" === l) y[h] = v.exports(e), w = !0;
				else if ("module" === l) r = y[h] = v.module(e);
				else if (i(m, l) || i(g, l) || i(b, l)) y[h] = u(l);
				else {
					if (!f.p) throw new Error(e + " missing " + l);
					f.p.load(f.n, a(s, !0), c(l), {}), y[h] = m[l]
				}
				p = n ? n.apply(m[e], y) : void 0, e && (r && r.exports !== o && r.exports !== m[e] ? m[e] = r.exports : p === o && w || (m[e] = p))
			} else e && (m[e] = n)
		}, e = t = h = function(e, t, n, i, s) {
			if ("string" == typeof e) return v[e] ? v[e](t) : u(d(e, t).f);
			if (!e.splice) {
				if (w = e, w.deps && h(w.deps, w.callback), !t) return;
				t.splice ? (e = t, t = n, n = null) : e = o
			}
			return t = t || function() {}, "function" == typeof n && (n = i, i = s), i ? f(o, e, t, n) : setTimeout(function() {
				f(o, e, t, n)
			}, 4), h
		}, h.config = function(e) {
			return h(e)
		}, e._defined = m, n = function(e, t, n) {
			if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
			t.splice || (n = t, t = []), i(m, e) || i(g, e) || (g[e] = [e, t, n])
		}, n.amd = {
			jQuery: !0
		}
	}(), n("bower_components/almond/almond", function() {}), n("jquery", [], function() {
			"use strict";
			return jQuery
		}), n("underscore", [], function() {
			"use strict";
			return _
		}), n("assets/js/maps", ["jquery", "underscore"], function(e, t) {
			"use strict";
			e(document).ready(function() {
				var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
				e(".qt-map").length && e(".qt-map").each(function() {
					var n = e(this).data();
					if ("1" == n.dragmobile) var o = t > 480 ? !0 : !1;
					var i = {
							center: new google.maps.LatLng(n.lat, n.lng),
							draggable: o,
							scrollwheel: !1,
							zoom: n.zoom,
							mapTypeId: n.type,
							styles: n.style
						},
						s = new google.maps.Map(this, i);
					if (n.title) var a = new google.maps.InfoWindow({
						content: n.title
					});
					var r = new google.maps.Marker({
						position: i.center,
						map: s,
						icon: n.pin
					});
					google.maps.event.addListener(r, "click", function() {
						a.open(s, r)
					}), google.maps.event.addDomListener(window, "load")
				})
			})
		}), n("assets/js/stickynav", ["jquery", "underscore"], function(e, t) {
			"use strict";
			var n = e(".navigation"),
				o = e("body"),
				i = n.offset().top,
				s = n.height(),
				a = e("body").hasClass("admin-bar") ? 32 : 0;
			(e(".header").hasClass("header-default") || e(".header").hasClass("header-overlay")) && (s = n.height() / 2), e(window).on("scroll", function() {
				e(window).scrollTop() > i - a ? o.hasClass("fixed-navigation") && (o.addClass("is-sticky-nav"), e(".sticky-offset").height(s), n.addClass("is-sticky")) : (o.removeClass("is-sticky-nav"), n.removeClass("is-sticky"))
			});
			var r = t.debounce(function() {
				e(".sticky-offset").height(s)
			}, 100);
			window.addEventListener("resize", r, !1)
		}), n("assets/js/scrollToTop", ["jquery"], function(e) {
			"use strict";
			var t = !1;
			e(window).scroll(function() {
				var n = e(window).scrollTop() > 1e3;
				n && !t ? (t = !0, e(".scrollToTop").addClass("visible")) : t && !n && (t = !1, e(".scrollToTop").removeClass("visible"))
			}), e(".scrollToTop").on("click", function(t) {
				t.preventDefault(), e("html, body").animate({
					scrollTop: 0
				}, 700)
			})
		}), n("assets/js/doubletaptogo", ["jquery"], function(e) {
			"use strict";
			e.fn.doubleTapToGo = function(t) {
				return "ontouchstart" in window || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i) ? (this.each(function() {
					var t = !1;
					e(this).on("click", function(n) {
						var o = e(this);
						o[0] != t[0] && (n.preventDefault(), t = o)
					}), e(document).on("click touchstart MSPointerDown", function(n) {
						for (var o = !0, i = e(n.target).parents(), s = 0; s < i.length; s++) i[s] == t[0] && (o = !1);
						o && (t = !1)
					})
				}), this) : !1
			}
		}),
		function(e, t, o) {
			"function" == typeof n && n.amd ? n("assets/js/jquery-mobile-touch-support.min", ["jquery"], function(n) {
				return o(n, e, t), n.mobile
			}) : o(e.jQuery, e, t)
		}(this, document, function(e, t, n, o) {
			! function(e, t, n, o) {
				function i(e) {
					for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent;
					return e
				}

				function s(t, n) {
					var s, a, r, c, u, l, p, f, h, d = t.type;
					if (t = e.Event(t), t.type = n, s = t.originalEvent, a = e.event.props, d.search(/^(mouse|click)/) > -1 && (a = P), s)
						for (p = a.length, c; p;) c = a[--p], t[c] = s[c];
					if (d.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== d.search(/^touch/) && (r = i(s), d = r.touches, u = r.changedTouches, l = d && d.length ? d[0] : u && u.length ? u[0] : o, l))
						for (f = 0, h = E.length; h > f; f++) c = E[f], t[c] = l[c];
					return t
				}

				function a(t) {
					for (var n, o, i = {}; t;) {
						n = e.data(t, x);
						for (o in n) n[o] && (i[o] = i.hasVirtualBinding = !0);
						t = t.parentNode
					}
					return i
				}

				function r(t, n) {
					for (var o; t;) {
						if (o = e.data(t, x), o && (!n || o[n])) return t;
						t = t.parentNode
					}
					return null
				}

				function c() {
					A = !1
				}

				function u() {
					A = !0
				}

				function l() {
					Q = 0, S.length = 0, z = !1, u()
				}

				function p() {
					c()
				}

				function f() {
					h(), X = setTimeout(function() {
						X = 0, l()
					}, e.vmouse.resetTimerDuration)
				}

				function h() {
					X && (clearTimeout(X), X = 0)
				}

				function d(t, n, o) {
					var i;
					return (o && o[t] || !o && r(n.target, t)) && (i = s(n, t), e(n.target).trigger(i)), i
				}

				function v(t) {
					var n, o = e.data(t.target, q);
					!z && (!Q || Q !== o) && (n = d("v" + t.type, t), n && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
				}

				function m(t) {
					var n, o, s, r = i(t).touches;
					r && 1 === r.length && (n = t.target, o = a(n), o.hasVirtualBinding && (Q = H++, e.data(n, q, Q), h(), p(), O = !1, s = i(t).touches[0], Y = s.pageX, L = s.pageY, d("vmouseover", t, o), d("vmousedown", t, o)))
				}

				function g(e) {
					A || (O || d("vmousecancel", e, a(e.target)), O = !0, f())
				}

				function w(t) {
					if (!A) {
						var n = i(t).touches[0],
							o = O,
							s = e.vmouse.moveDistanceThreshold,
							r = a(t.target);
						O = O || Math.abs(n.pageX - Y) > s || Math.abs(n.pageY - L) > s, O && !o && d("vmousecancel", t, r), d("vmousemove", t, r), f()
					}
				}

				function b(e) {
					if (!A) {
						u();
						var t, n, o = a(e.target);
						d("vmouseup", e, o), O || (t = d("vclick", e, o), t && t.isDefaultPrevented() && (n = i(e).changedTouches[0], S.push({
							touchID: Q,
							x: n.clientX,
							y: n.clientY
						}), z = !0)), d("vmouseout", e, o), O = !1, f()
					}
				}

				function y(t) {
					var n, o = e.data(t, x);
					if (o)
						for (n in o)
							if (o[n]) return !0;
					return !1
				}

				function T() {}

				function j(t) {
					var n = t.substr(1);
					return {
						setup: function() {
							y(this) || e.data(this, x, {});
							var o = e.data(this, x);
							o[t] = !0, I[t] = (I[t] || 0) + 1, 1 === I[t] && B.bind(n, v), e(this).bind(n, T), N && (I.touchstart = (I.touchstart || 0) + 1, 1 === I.touchstart && B.bind("touchstart", m).bind("touchend", b).bind("touchmove", w).bind("scroll", g))
						},
						teardown: function() {
							--I[t], I[t] || B.unbind(n, v), N && (--I.touchstart, I.touchstart || B.unbind("touchstart", m).unbind("touchmove", w).unbind("touchend", b).unbind("scroll", g));
							var o = e(this),
								i = e.data(this, x);
							i && (i[t] = !1), o.unbind(n, T), y(this) || o.removeData(x)
						}
					}
				}
				var k, D, x = "virtualMouseBindings",
					q = "virtualTouchID",
					C = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
					E = "clientX clientY pageX pageY screenX screenY".split(" "),
					M = e.event.mouseHooks ? e.event.mouseHooks.props : [],
					P = e.event.props.concat(M),
					I = {},
					X = 0,
					Y = 0,
					L = 0,
					O = !1,
					S = [],
					z = !1,
					A = !1,
					N = "addEventListener" in n,
					B = e(n),
					H = 1,
					Q = 0;
				for (e.vmouse = {
						moveDistanceThreshold: 10,
						clickDistanceThreshold: 10,
						resetTimerDuration: 1500
					}, D = 0; D < C.length; D++) e.event.special[C[D]] = j(C[D]);
				N && n.addEventListener("click", function(t) {
					var n, o, i, s, a, r, c = S.length,
						u = t.target;
					if (c)
						for (n = t.clientX, o = t.clientY, k = e.vmouse.clickDistanceThreshold, i = u; i;) {
							for (s = 0; c > s; s++)
								if (a = S[s], r = 0, i === u && Math.abs(a.x - n) < k && Math.abs(a.y - o) < k || e.data(i, q) === a.touchID) return t.preventDefault(), void t.stopPropagation();
							i = i.parentNode
						}
				}, !0)
			}(e, t, n),
			function(e) {
				e.mobile = {}
			}(e),
			function(e, t) {
				var o = {
					touch: "ontouchend" in n
				};
				e.mobile.support = e.mobile.support || {}, e.extend(e.support, o), e.extend(e.mobile.support, o)
			}(e),
			function(e, t, o) {
				function i(t, n, i, s) {
					var a = i.type;
					i.type = n, s ? e.event.trigger(i, o, t) : e.event.dispatch.call(t, i), i.type = a
				}
				var s = e(n),
					a = e.mobile.support.touch,
					r = "touchmove scroll",
					c = a ? "touchstart" : "mousedown",
					u = a ? "touchend" : "mouseup",
					l = a ? "touchmove" : "mousemove";
				e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
					e.fn[n] = function(e) {
						return e ? this.bind(n, e) : this.trigger(n)
					}, e.attrFn && (e.attrFn[n] = !0)
				}), e.event.special.scrollstart = {
					enabled: !0,
					setup: function() {
						function t(e, t) {
							n = t, i(s, n ? "scrollstart" : "scrollstop", e)
						}
						var n, o, s = this,
							a = e(s);
						a.bind(r, function(i) {
							e.event.special.scrollstart.enabled && (n || t(i, !0), clearTimeout(o), o = setTimeout(function() {
								t(i, !1)
							}, 50))
						})
					},
					teardown: function() {
						e(this).unbind(r)
					}
				}, e.event.special.tap = {
					tapholdThreshold: 750,
					emitTapOnTaphold: !0,
					setup: function() {
						var t = this,
							n = e(t),
							o = !1;
						n.bind("vmousedown", function(a) {
							function r() {
								clearTimeout(l)
							}

							function c() {
								r(), n.unbind("vclick", u).unbind("vmouseup", r), s.unbind("vmousecancel", c)
							}

							function u(e) {
								c(), o || p !== e.target ? o && e.preventDefault() : i(t, "tap", e)
							}
							if (o = !1, a.which && 1 !== a.which) return !1;
							var l, p = a.target;
							n.bind("vmouseup", r).bind("vclick", u), s.bind("vmousecancel", c), l = setTimeout(function() {
								e.event.special.tap.emitTapOnTaphold || (o = !0), i(t, "taphold", e.Event("taphold", {
									target: p
								}))
							}, e.event.special.tap.tapholdThreshold)
						})
					},
					teardown: function() {
						e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), s.unbind("vmousecancel")
					}
				}, e.event.special.swipe = {
					scrollSupressionThreshold: 30,
					durationThreshold: 1e3,
					horizontalDistanceThreshold: 30,
					verticalDistanceThreshold: 30,
					getLocation: function(e) {
						var n = t.pageXOffset,
							o = t.pageYOffset,
							i = e.clientX,
							s = e.clientY;
						return 0 === e.pageY && Math.floor(s) > Math.floor(e.pageY) || 0 === e.pageX && Math.floor(i) > Math.floor(e.pageX) ? (i -= n, s -= o) : (s < e.pageY - o || i < e.pageX - n) && (i = e.pageX - n, s = e.pageY - o), {
							x: i,
							y: s
						}
					},
					start: function(t) {
						var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
							o = e.event.special.swipe.getLocation(n);
						return {
							time: (new Date).getTime(),
							coords: [o.x, o.y],
							origin: e(t.target)
						}
					},
					stop: function(t) {
						var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
							o = e.event.special.swipe.getLocation(n);
						return {
							time: (new Date).getTime(),
							coords: [o.x, o.y]
						}
					},
					handleSwipe: function(t, n, o, s) {
						if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
							var a = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
							return i(o, "swipe", e.Event("swipe", {
								target: s,
								swipestart: t,
								swipestop: n
							}), !0), i(o, a, e.Event(a, {
								target: s,
								swipestart: t,
								swipestop: n
							}), !0), !0
						}
						return !1
					},
					eventInProgress: !1,
					setup: function() {
						var t, n = this,
							o = e(n),
							i = {};
						t = e.data(this, "mobile-events"), t || (t = {
							length: 0
						}, e.data(this, "mobile-events", t)), t.length++, t.swipe = i, i.start = function(t) {
							if (!e.event.special.swipe.eventInProgress) {
								e.event.special.swipe.eventInProgress = !0;
								var o, a = e.event.special.swipe.start(t),
									r = t.target,
									c = !1;
								i.move = function(t) {
									a && !t.isDefaultPrevented() && (o = e.event.special.swipe.stop(t), c || (c = e.event.special.swipe.handleSwipe(a, o, n, r), c && (e.event.special.swipe.eventInProgress = !1)), Math.abs(a.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
								}, i.stop = function() {
									c = !0, e.event.special.swipe.eventInProgress = !1, s.off(l, i.move), i.move = null
								}, s.on(l, i.move).one(u, i.stop)
							}
						}, o.on(c, i.start)
					},
					teardown: function() {
						var t, n;
						t = e.data(this, "mobile-events"), t && (n = t.swipe, delete t.swipe, t.length--, 0 === t.length && e.removeData(this, "mobile-events")), n && (n.start && e(this).off(c, n.start), n.move && s.off(l, n.move), n.stop && s.off(u, n.stop))
					}
				}, e.each({
					scrollstop: "scrollstart",
					taphold: "tap",
					swipeleft: "swipe.left",
					swiperight: "swipe.right"
				}, function(t, n) {
					e.event.special[t] = {
						setup: function() {
							e(this).bind(n, e.noop)
						},
						teardown: function() {
							e(this).unbind(n)
						}
					}
				})
			}(e, this)
		}), t.config({
			paths: {
				jquery: "assets/js/return.jquery",
				underscore: "assets/js/return.underscore"
			}
		}), t.config({
			baseUrl: TheLandscaper.themePath
		}), t(["jquery", "underscore", "assets/js/maps", "assets/js/stickynav", "assets/js/scrollToTop", "assets/js/doubletaptogo", "assets/js/jquery-mobile-touch-support.min"], function(e, t) {
			if (e(".main-navigation").on("focus.aria  mouseenter.aria", '[aria-haspopup="true"]', function(t) {
					e(t.currentTarget).attr("aria-expanded", !0)
				}), e(".main-navigation").on("blur.aria  mouseleave.aria", '[aria-haspopup="true"]', function(t) {
					e(t.currentTarget).attr("aria-expanded", !1)
				}), (e("body").hasClass("doubletap") && "ontouchstart" in window && window.matchMedia("(min-width: 992px)").matches || window.DocumentTouch && document instanceof DocumentTouch) && e(".menu-item-has-children").doubleTapToGo(), e(".main-navigation li.menu-item-has-children").each(function() {
					e(this).prepend('<div class="nav-toggle-mobile-submenu"><i class="fas fa-caret-down"></i></div>')
				}), e(".nav-toggle-mobile-submenu").on("click", function() {
					e(this).parent().toggleClass("nav-toggle-dropdown")
				}), e('[data-toggle="tooltip"]').tooltip(), e("#mega-menu-wrap-primary li.mega-menu-item-has-children > a").prepend(e('<i class="fas fa-caret-down"></i>')), e("#mega-menu-wrap-primary").wrap(e('<div class="main-navigation"></div>')), e('.main-navigation a[href^="#"]').on("click", function(t) {
					var n = e(this.getAttribute("href"));
					n.length && (t.preventDefault(), e("html, body").stop().animate({
						scrollTop: n.offset().top
					}, 1e3))
				}), e(".panel-title a").on("click", function(t) {
					t.preventDefault(), e(this).parents(".panel-title").hasClass("active") ? e(".panel-title").removeClass("active") : (e(".panel-title").removeClass("active"), e(this).parent().addClass("active").next().addClass("active"))
				}), e(document).ready(function() {
					var t = window.location.hash,
						n = e("body").hasClass("fixed-navigation") ? e(".navigation").outerHeight() + 110 : 110;
					if (t.length) {
						var o = e('.accordion-toggle[href="' + t + '"]');
						o.length && e("html,body").animate({
							scrollTop: o.parents(".panel").offset().top - n
						}, 500, function() {
							o.trigger("click")
						})
					}
				}), e(".jumbotron").length) {
				var n = (e(this), e(".carousel-touch"));
				n.swiperight(function() {
					e(this).carousel("prev")
				}), n.swipeleft(function() {
					e(this).carousel("next")
				})
			}
			if (e(".testimonial-carousel").length) {
				var n = (e(this), e(".carousel-touch"));
				n.swiperight(function() {
					e(this).carousel("prev")
				}), n.swipeleft(function() {
					e(this).carousel("next")
				})
			}
			e(".qt-table").length > 0 && e(".qt-table").wrap("<div class='qt-table-wrap'></div>")
		}), n("assets/js/main", function() {})
}();