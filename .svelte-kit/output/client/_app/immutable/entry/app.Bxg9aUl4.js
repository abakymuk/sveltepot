const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.Dnvx4nEz.js',
			'../chunks/DsnmJJEf.js',
			'../chunks/Dw-cPJ-t.js',
			'../chunks/LeL_DqrY.js',
			'../assets/0.Fx1KqetI.css',
			'../nodes/1.C1eYEBon.js',
			'../chunks/BeTFHaFW.js',
			'../chunks/3b2-FxGb.js',
			'../chunks/DGDjkSrj.js',
			'../nodes/2.C_3TNKIb.js',
			'../assets/2.CaW0-4hz.css'
		])
) => i.map((i) => d[i]);
import {
	h as w,
	j as F,
	b as Y,
	E as V,
	ac as ae,
	ad as ne,
	ae as se,
	d as ie,
	s as q,
	c as Z,
	m as N,
	af as j,
	ag as oe,
	ah as G,
	ai as ce,
	aj as H,
	f as J,
	ak as fe,
	al as le,
	am as ue,
	A as K,
	an as W,
	ao as de,
	ap as _e,
	aq as ve,
	F as E,
	I as me,
	ar as he,
	as as ge,
	at as L,
	au as be,
	U as ye,
	av as Ee,
	aw as Pe,
	a4 as Re,
	ax as Se,
	ay as we,
	az as Le,
	aA as Q,
	a5 as Oe,
	P as Ae,
	aB as Ie,
	J as Te,
	y as pe,
	z as ke,
	aC as I,
	ab as xe,
	p as X,
	v as O,
	O as De,
	q as S,
	K as Ue,
	u as T,
	L as Ce,
	M as Ne,
	aD as p,
	aE as je,
	w as Be
} from '../chunks/Dw-cPJ-t.js';
import { h as qe, m as Me, u as ze, o as Fe, s as Ye } from '../chunks/3b2-FxGb.js';
import '../chunks/DsnmJJEf.js';
function k(r, e, n = !1) {
	w && F();
	var o = r,
		s = null,
		t = null,
		a = oe,
		i = n ? V : 0,
		m = !1;
	const b = (y, f = !0) => {
		((m = !0), v(f, y));
	};
	var c = null;
	function h() {
		c !== null && (c.lastChild.remove(), o.before(c), (c = null));
		var y = a ? s : t,
			f = a ? t : s;
		(y && ce(y),
			f &&
				H(f, () => {
					a ? (t = null) : (s = null);
				}));
	}
	const v = (y, f) => {
		if (a === (a = y)) return;
		let u = !1;
		if (w) {
			const R = ae(o) === ne;
			!!a === R && ((o = se()), ie(o), q(!1), (u = !0));
		}
		var d = G(),
			_ = o;
		if (
			(d && ((c = document.createDocumentFragment()), c.append((_ = Z()))),
			a ? (s ??= f && N(() => f(_))) : (t ??= f && N(() => f(_))),
			d)
		) {
			var P = j,
				l = a ? s : t,
				g = a ? t : s;
			(l && P.skipped_effects.delete(l), g && P.skipped_effects.add(g), P.add_callback(h));
		} else h();
		u && q(!0);
	};
	(Y(() => {
		((m = !1), e(b), m || v(null, null));
	}, i),
		w && (o = J));
}
function x(r, e, n) {
	w && F();
	var o = r,
		s,
		t,
		a = null,
		i = null;
	function m() {
		(t && (H(t), (t = null)),
			a && (a.lastChild.remove(), o.before(a), (a = null)),
			(t = i),
			(i = null));
	}
	(Y(() => {
		if (s !== (s = e())) {
			var b = G();
			if (s) {
				var c = o;
				(b &&
					((a = document.createDocumentFragment()),
					a.append((c = Z())),
					t && j.skipped_effects.add(t)),
					(i = N(() => n(c, s))));
			}
			b ? j.add_callback(m) : m();
		}
	}, V),
		w && (o = J));
}
function M(r, e) {
	return r === e || r?.[W] === e;
}
function D(r = {}, e, n, o) {
	return (
		fe(() => {
			var s, t;
			return (
				le(() => {
					((s = t),
						(t = []),
						K(() => {
							r !== n(...t) && (e(r, ...t), s && M(n(...s), r) && e(null, ...s));
						}));
				}),
				() => {
					ue(() => {
						t && M(n(...t), r) && e(null, ...t);
					});
				}
			);
		}),
		r
	);
}
let A = !1;
function Ve(r) {
	var e = A;
	try {
		return ((A = !1), [r(), A]);
	} finally {
		A = e;
	}
}
function U(r, e, n, o) {
	var s = !Re || (n & Se) !== 0,
		t = (n & Pe) !== 0,
		a = (n & Le) !== 0,
		i = o,
		m = !0,
		b = () => (m && ((m = !1), (i = a ? K(o) : o)), i),
		c;
	if (t) {
		var h = W in r || Q in r;
		c = de(r, e)?.set ?? (h && e in r ? (l) => (r[e] = l) : void 0);
	}
	var v,
		y = !1;
	(t ? ([v, y] = Ve(() => r[e])) : (v = r[e]),
		v === void 0 && o !== void 0 && ((v = b()), c && (s && _e(), c(v))));
	var f;
	if (
		(s
			? (f = () => {
					var l = r[e];
					return l === void 0 ? b() : ((m = !0), l);
				})
			: (f = () => {
					var l = r[e];
					return (l !== void 0 && (i = void 0), l === void 0 ? i : l);
				}),
		s && (n & ve) === 0)
	)
		return f;
	if (c) {
		var u = r.$$legacy;
		return function (l, g) {
			return arguments.length > 0 ? ((!s || !g || u || y) && c(g ? f() : l), l) : f();
		};
	}
	var d = !1,
		_ = ((n & we) !== 0 ? me : he)(() => ((d = !1), f()));
	t && E(_);
	var P = ye;
	return function (l, g) {
		if (arguments.length > 0) {
			const R = g ? E(_) : s && t ? ge(l) : l;
			return (L(_, R), (d = !0), i !== void 0 && (i = R), l);
		}
		return (be && d) || (P.f & Ee) !== 0 ? _.v : E(_);
	};
}
function Ze(r) {
	return class extends Ge {
		constructor(e) {
			super({ component: r, ...e });
		}
	};
}
class Ge {
	#t;
	#e;
	constructor(e) {
		var n = new Map(),
			o = (t, a) => {
				var i = Ie(a, !1, !1);
				return (n.set(t, i), i);
			};
		const s = new Proxy(
			{ ...(e.props || {}), $$events: {} },
			{
				get(t, a) {
					return E(n.get(a) ?? o(a, Reflect.get(t, a)));
				},
				has(t, a) {
					return a === Q ? !0 : (E(n.get(a) ?? o(a, Reflect.get(t, a))), Reflect.has(t, a));
				},
				set(t, a, i) {
					return (L(n.get(a) ?? o(a, i), i), Reflect.set(t, a, i));
				}
			}
		);
		((this.#e = (e.hydrate ? qe : Me)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: s,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover
		})),
			(!e?.props?.$$host || e.sync === !1) && Oe(),
			(this.#t = s.$$events));
		for (const t of Object.keys(this.#e))
			t === '$set' ||
				t === '$destroy' ||
				t === '$on' ||
				Ae(this, t, {
					get() {
						return this.#e[t];
					},
					set(a) {
						this.#e[t] = a;
					},
					enumerable: !0
				});
		((this.#e.$set = (t) => {
			Object.assign(s, t);
		}),
			(this.#e.$destroy = () => {
				ze(this.#e);
			}));
	}
	$set(e) {
		this.#e.$set(e);
	}
	$on(e, n) {
		this.#t[e] = this.#t[e] || [];
		const o = (...s) => n.call(this, ...s);
		return (
			this.#t[e].push(o),
			() => {
				this.#t[e] = this.#t[e].filter((s) => s !== o);
			}
		);
	}
	$destroy() {
		this.#e.$destroy();
	}
}
const He = 'modulepreload',
	Je = function (r, e) {
		return new URL(r, e).href;
	},
	z = {},
	C = function (e, n, o) {
		let s = Promise.resolve();
		if (n && n.length > 0) {
			let b = function (c) {
				return Promise.all(
					c.map((h) =>
						Promise.resolve(h).then(
							(v) => ({ status: 'fulfilled', value: v }),
							(v) => ({ status: 'rejected', reason: v })
						)
					)
				);
			};
			const a = document.getElementsByTagName('link'),
				i = document.querySelector('meta[property=csp-nonce]'),
				m = i?.nonce || i?.getAttribute('nonce');
			s = b(
				n.map((c) => {
					if (((c = Je(c, o)), c in z)) return;
					z[c] = !0;
					const h = c.endsWith('.css'),
						v = h ? '[rel="stylesheet"]' : '';
					if (!!o)
						for (let u = a.length - 1; u >= 0; u--) {
							const d = a[u];
							if (d.href === c && (!h || d.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${c}"]${v}`)) return;
					const f = document.createElement('link');
					if (
						((f.rel = h ? 'stylesheet' : He),
						h || (f.as = 'script'),
						(f.crossOrigin = ''),
						(f.href = c),
						m && f.setAttribute('nonce', m),
						document.head.appendChild(f),
						h)
					)
						return new Promise((u, d) => {
							(f.addEventListener('load', u),
								f.addEventListener('error', () => d(new Error(`Unable to preload CSS for ${c}`))));
						});
				})
			);
		}
		function t(a) {
			const i = new Event('vite:preloadError', { cancelable: !0 });
			if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented)) throw a;
		}
		return s.then((a) => {
			for (const i of a || []) i.status === 'rejected' && t(i.reason);
			return e().catch(t);
		});
	},
	Ke = ['en', 'ru'];
globalThis.__paraglide = {};
let We = () => (typeof window < 'u' ? window.location.origin : 'http://fallback.com');
function Qe(r) {
	return r ? Ke.includes(r) : !1;
}
function Xe(r) {
	return $e(r);
}
function $e(r) {
	const e = typeof r == 'string' ? new URL(r, We()) : new URL(r),
		n = e.pathname.split('/').filter(Boolean);
	return (n.length > 0 && Qe(n[0]) && (e.pathname = '/' + n.slice(1).join('/')), e);
}
const et = (r) => Xe(r.url.pathname),
	lt = {};
var tt = X(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	rt = X('<!> <!>', 1);
function at(r, e) {
	Te(e, !0);
	let n = U(e, 'components', 23, () => []),
		o = U(e, 'data_0', 3, null),
		s = U(e, 'data_1', 3, null);
	(pe(() => e.stores.page.set(e.page)),
		ke(() => {
			(e.stores, e.page, e.constructors, n(), e.form, o(), s(), e.stores.page.notify());
		}));
	let t = I(!1),
		a = I(!1),
		i = I(null);
	Fe(() => {
		const u = e.stores.page.subscribe(() => {
			E(t) &&
				(L(a, !0),
				xe().then(() => {
					L(i, document.title || 'untitled page', !0);
				}));
		});
		return (L(t, !0), u);
	});
	const m = p(() => e.constructors[1]);
	var b = rt(),
		c = O(b);
	{
		var h = (u) => {
				const d = p(() => e.constructors[0]);
				var _ = T(),
					P = O(_);
				(x(
					P,
					() => E(d),
					(l, g) => {
						D(
							g(l, {
								get data() {
									return o();
								},
								get form() {
									return e.form;
								},
								get params() {
									return e.page.params;
								},
								children: (R, it) => {
									var B = T(),
										$ = O(B);
									(x(
										$,
										() => E(m),
										(ee, te) => {
											D(
												te(ee, {
													get data() {
														return s();
													},
													get form() {
														return e.form;
													},
													get params() {
														return e.page.params;
													}
												}),
												(re) => (n()[1] = re),
												() => n()?.[1]
											);
										}
									),
										S(R, B));
								},
								$$slots: { default: !0 }
							}),
							(R) => (n()[0] = R),
							() => n()?.[0]
						);
					}
				),
					S(u, _));
			},
			v = (u) => {
				const d = p(() => e.constructors[0]);
				var _ = T(),
					P = O(_);
				(x(
					P,
					() => E(d),
					(l, g) => {
						D(
							g(l, {
								get data() {
									return o();
								},
								get form() {
									return e.form;
								},
								get params() {
									return e.page.params;
								}
							}),
							(R) => (n()[0] = R),
							() => n()?.[0]
						);
					}
				),
					S(u, _));
			};
		k(c, (u) => {
			e.constructors[1] ? u(h) : u(v, !1);
		});
	}
	var y = De(c, 2);
	{
		var f = (u) => {
			var d = tt(),
				_ = Ce(d);
			{
				var P = (l) => {
					var g = je();
					(Be(() => Ye(g, E(i))), S(l, g));
				};
				k(_, (l) => {
					E(a) && l(P);
				});
			}
			(Ne(d), S(u, d));
		};
		k(y, (u) => {
			E(t) && u(f);
		});
	}
	(S(r, b), Ue());
}
const ut = Ze(at),
	dt = [
		() =>
			C(() => import('../nodes/0.Dnvx4nEz.js'), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url),
		() =>
			C(
				() => import('../nodes/1.C1eYEBon.js'),
				__vite__mapDeps([5, 1, 6, 2, 7, 3, 8]),
				import.meta.url
			),
		() =>
			C(() => import('../nodes/2.C_3TNKIb.js'), __vite__mapDeps([9, 1, 6, 2, 10]), import.meta.url)
	],
	_t = [],
	vt = { '/': [2] },
	nt = {
		handleError: ({ error: r }) => {
			console.error(r);
		},
		reroute: et || (() => {}),
		transport: {}
	},
	st = Object.fromEntries(Object.entries(nt.transport).map(([r, e]) => [r, e.decode])),
	mt = !1,
	ht = (r, e) => st[r](e);
export {
	ht as decode,
	st as decoders,
	vt as dictionary,
	mt as hash,
	nt as hooks,
	lt as matchers,
	dt as nodes,
	ut as root,
	_t as server_loads
};
