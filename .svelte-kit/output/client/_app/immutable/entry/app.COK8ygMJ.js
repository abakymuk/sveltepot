const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'../nodes/0.LOrFpYvE.js',
			'../chunks/DsnmJJEf.js',
			'../chunks/Bkrak6hP.js',
			'../chunks/DqcR2uyH.js',
			'../chunks/C3jv8e36.js',
			'../assets/0.CLlhrD_4.css',
			'../nodes/1.BDNDAt_P.js',
			'../chunks/D36tYwTZ.js',
			'../chunks/B9nppItn.js',
			'../chunks/Vt3J8MqF.js',
			'../chunks/B1Jm2Y4R.js',
			'../nodes/2.sjTigZiF.js',
			'../assets/2.CaW0-4hz.css',
			'../nodes/3.DOXEY6ew.js',
			'../chunks/C1k_MOeI.js',
			'../assets/3.CD54FDqW.css'
		])
) => i.map((i) => d[i]);
import {
	I as F,
	w as U,
	a2 as Y,
	a3 as J,
	F as W,
	G as z,
	a7 as I,
	a9 as H,
	x as K,
	ab as Q,
	an as k,
	ah as X,
	Y as m,
	f as Z,
	aw as $,
	aC as ee,
	J as te,
	V as re,
	u as ae,
	aD as x,
	t as se,
	O as V,
	S as R,
	a1 as ne,
	P as E,
	M as oe,
	R as O,
	$ as ce,
	a0 as ie,
	aE as S,
	aF as le,
	T as ue
} from '../chunks/Bkrak6hP.js';
import { h as fe, m as de, u as me, s as he } from '../chunks/B9nppItn.js';
import '../chunks/DsnmJJEf.js';
import { o as _e } from '../chunks/B1Jm2Y4R.js';
import { p as C, i as A, b as L } from '../chunks/C1k_MOeI.js';
function T(c, e, s) {
	F && U();
	var i = c,
		n,
		r,
		t = null,
		a = null;
	function h() {
		(r && (Q(r), (r = null)),
			t && (t.lastChild.remove(), i.before(t), (t = null)),
			(r = a),
			(a = null));
	}
	(Y(() => {
		if (n !== (n = e())) {
			var _ = H();
			if (n) {
				var l = i;
				(_ &&
					((t = document.createDocumentFragment()),
					t.append((l = W())),
					r && I.skipped_effects.add(r)),
					(a = z(() => s(l, n))));
			}
			_ ? I.add_callback(h) : h();
		}
	}, J),
		F && (i = K));
}
function ve(c) {
	return class extends ge {
		constructor(e) {
			super({ component: c, ...e });
		}
	};
}
class ge {
	#t;
	#e;
	constructor(e) {
		var s = new Map(),
			i = (r, t) => {
				var a = ee(t, !1, !1);
				return (s.set(r, a), a);
			};
		const n = new Proxy(
			{ ...(e.props || {}), $$events: {} },
			{
				get(r, t) {
					return m(s.get(t) ?? i(t, Reflect.get(r, t)));
				},
				has(r, t) {
					return t === X ? !0 : (m(s.get(t) ?? i(t, Reflect.get(r, t))), Reflect.has(r, t));
				},
				set(r, t, a) {
					return (k(s.get(t) ?? i(t, a), a), Reflect.set(r, t, a));
				}
			}
		);
		((this.#e = (e.hydrate ? fe : de)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: n,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover
		})),
			(!e?.props?.$$host || e.sync === !1) && Z(),
			(this.#t = n.$$events));
		for (const r of Object.keys(this.#e))
			r === '$set' ||
				r === '$destroy' ||
				r === '$on' ||
				$(this, r, {
					get() {
						return this.#e[r];
					},
					set(t) {
						this.#e[r] = t;
					},
					enumerable: !0
				});
		((this.#e.$set = (r) => {
			Object.assign(n, r);
		}),
			(this.#e.$destroy = () => {
				me(this.#e);
			}));
	}
	$set(e) {
		this.#e.$set(e);
	}
	$on(e, s) {
		this.#t[e] = this.#t[e] || [];
		const i = (...n) => s.call(this, ...n);
		return (
			this.#t[e].push(i),
			() => {
				this.#t[e] = this.#t[e].filter((n) => n !== i);
			}
		);
	}
	$destroy() {
		this.#e.$destroy();
	}
}
const ye = 'modulepreload',
	be = function (c, e) {
		return new URL(c, e).href;
	},
	N = {},
	w = function (e, s, i) {
		let n = Promise.resolve();
		if (s && s.length > 0) {
			let _ = function (l) {
				return Promise.all(
					l.map((d) =>
						Promise.resolve(d).then(
							(v) => ({ status: 'fulfilled', value: v }),
							(v) => ({ status: 'rejected', reason: v })
						)
					)
				);
			};
			const t = document.getElementsByTagName('link'),
				a = document.querySelector('meta[property=csp-nonce]'),
				h = a?.nonce || a?.getAttribute('nonce');
			n = _(
				s.map((l) => {
					if (((l = be(l, i)), l in N)) return;
					N[l] = !0;
					const d = l.endsWith('.css'),
						v = d ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let o = t.length - 1; o >= 0; o--) {
							const u = t[o];
							if (u.href === l && (!d || u.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${l}"]${v}`)) return;
					const f = document.createElement('link');
					if (
						((f.rel = d ? 'stylesheet' : ye),
						d || (f.as = 'script'),
						(f.crossOrigin = ''),
						(f.href = l),
						h && f.setAttribute('nonce', h),
						document.head.appendChild(f),
						d)
					)
						return new Promise((o, u) => {
							(f.addEventListener('load', o),
								f.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${l}`))));
						});
				})
			);
		}
		function r(t) {
			const a = new Event('vite:preloadError', { cancelable: !0 });
			if (((a.payload = t), window.dispatchEvent(a), !a.defaultPrevented)) throw t;
		}
		return n.then((t) => {
			for (const a of t || []) a.status === 'rejected' && r(a.reason);
			return e().catch(r);
		});
	},
	Ee = (c) => c.url.pathname,
	Te = {};
var pe = V(
		'<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
	),
	Pe = V('<!> <!>', 1);
function Re(c, e) {
	te(e, !0);
	let s = C(e, 'components', 23, () => []),
		i = C(e, 'data_0', 3, null),
		n = C(e, 'data_1', 3, null);
	(re(() => e.stores.page.set(e.page)),
		ae(() => {
			(e.stores, e.page, e.constructors, s(), e.form, i(), n(), e.stores.page.notify());
		}));
	let r = x(!1),
		t = x(!1),
		a = x(null);
	_e(() => {
		const o = e.stores.page.subscribe(() => {
			m(r) &&
				(k(t, !0),
				se().then(() => {
					k(a, document.title || 'untitled page', !0);
				}));
		});
		return (k(r, !0), o);
	});
	const h = S(() => e.constructors[1]);
	var _ = Pe(),
		l = R(_);
	{
		var d = (o) => {
				const u = S(() => e.constructors[0]);
				var g = O(),
					p = R(g);
				(T(
					p,
					() => m(u),
					(y, b) => {
						L(
							b(y, {
								get data() {
									return i();
								},
								get form() {
									return e.form;
								},
								get params() {
									return e.page.params;
								},
								children: (P, xe) => {
									var D = O(),
										M = R(D);
									(T(
										M,
										() => m(h),
										(B, q) => {
											L(
												q(B, {
													get data() {
														return n();
													},
													get form() {
														return e.form;
													},
													get params() {
														return e.page.params;
													}
												}),
												(G) => (s()[1] = G),
												() => s()?.[1]
											);
										}
									),
										E(P, D));
								},
								$$slots: { default: !0 }
							}),
							(P) => (s()[0] = P),
							() => s()?.[0]
						);
					}
				),
					E(o, g));
			},
			v = (o) => {
				const u = S(() => e.constructors[0]);
				var g = O(),
					p = R(g);
				(T(
					p,
					() => m(u),
					(y, b) => {
						L(
							b(y, {
								get data() {
									return i();
								},
								get form() {
									return e.form;
								},
								get params() {
									return e.page.params;
								}
							}),
							(P) => (s()[0] = P),
							() => s()?.[0]
						);
					}
				),
					E(o, g));
			};
		A(l, (o) => {
			e.constructors[1] ? o(d) : o(v, !1);
		});
	}
	var j = ne(l, 2);
	{
		var f = (o) => {
			var u = pe(),
				g = ce(u);
			{
				var p = (y) => {
					var b = le();
					(ue(() => he(b, m(a))), E(y, b));
				};
				A(g, (y) => {
					m(t) && y(p);
				});
			}
			(ie(u), E(o, u));
		};
		A(j, (o) => {
			m(r) && o(f);
		});
	}
	(E(c, _), oe());
}
const je = ve(Re),
	De = [
		() =>
			w(
				() => import('../nodes/0.LOrFpYvE.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5]),
				import.meta.url
			),
		() =>
			w(
				() => import('../nodes/1.BDNDAt_P.js'),
				__vite__mapDeps([6, 1, 7, 2, 8, 3, 9, 10]),
				import.meta.url
			),
		() =>
			w(
				() => import('../nodes/2.sjTigZiF.js'),
				__vite__mapDeps([11, 1, 7, 2, 12]),
				import.meta.url
			),
		() =>
			w(
				() => import('../nodes/3.DOXEY6ew.js'),
				__vite__mapDeps([13, 1, 7, 2, 8, 3, 14, 4, 15]),
				import.meta.url
			)
	],
	Fe = [],
	Ie = { '/': [2], '/playground/ui': [3] },
	we = {
		handleError: ({ error: c }) => {
			console.error(c);
		},
		reroute: Ee || (() => {}),
		transport: {}
	},
	ke = Object.fromEntries(Object.entries(we.transport).map(([c, e]) => [c, e.decode])),
	Ne = !1,
	Ve = (c, e) => ke[c](e);
export {
	Ve as decode,
	ke as decoders,
	Ie as dictionary,
	Ne as hash,
	we as hooks,
	Te as matchers,
	De as nodes,
	je as root,
	Fe as server_loads
};
