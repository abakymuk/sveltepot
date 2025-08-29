import {
	n as g,
	o as L,
	C as R,
	H as M,
	p as C,
	q as p,
	r as c,
	v as D,
	w as H,
	x as _,
	y as I,
	z as x,
	A as Y,
	B as F,
	D as S,
	E as V,
	F as W,
	G as $,
	I as m,
	J as j,
	c as k,
	K as q,
	L as z,
	M as B
} from './Bkrak6hP.js';
import { a as G, r as O, h, i as J, b as K } from './DqcR2uyH.js';
let w = !0;
function X(t) {
	w = t;
}
function Z(t, e) {
	var r = e == null ? '' : typeof e == 'object' ? e + '' : e;
	r !== (t.__t ??= t.nodeValue) && ((t.__t = r), (t.nodeValue = r + ''));
}
function P(t, e) {
	return b(t, e);
}
function ee(t, e) {
	(g(), (e.intro = e.intro ?? !1));
	const r = e.target,
		l = m,
		u = _;
	try {
		for (var s = L(r); s && (s.nodeType !== R || s.data !== M); ) s = C(s);
		if (!s) throw p;
		(c(!0), D(s), H());
		const o = b(t, { ...e, anchor: s });
		if (_ === null || _.nodeType !== R || _.data !== I) throw (x(), p);
		return (c(!1), o);
	} catch (o) {
		if (
			o instanceof Error &&
			o.message
				.split(
					`
`
				)
				.some((f) => f.startsWith('https://svelte.dev/e/'))
		)
			throw o;
		return (
			o !== p && console.warn('Failed to hydrate: ', o),
			e.recover === !1 && Y(),
			g(),
			F(r),
			c(!1),
			P(t, e)
		);
	} finally {
		(c(l), D(u), K());
	}
}
const d = new Map();
function b(t, { target: e, anchor: r, props: l = {}, events: u, context: s, intro: o = !0 }) {
	g();
	var f = new Set(),
		v = (i) => {
			for (var a = 0; a < i.length; a++) {
				var n = i[a];
				if (!f.has(n)) {
					f.add(n);
					var T = J(n);
					e.addEventListener(n, h, { passive: T });
					var N = d.get(n);
					N === void 0
						? (document.addEventListener(n, h, { passive: T }), d.set(n, 1))
						: d.set(n, N + 1);
				}
			}
		};
	(v(S(G)), O.add(v));
	var y = void 0,
		A = V(() => {
			var i = r ?? e.appendChild(W());
			return (
				$(() => {
					if (s) {
						j({});
						var a = k;
						a.c = s;
					}
					(u && (l.$$events = u),
						m && q(i, null),
						(w = o),
						(y = t(i, l) || {}),
						(w = !0),
						m && (z.nodes_end = _),
						s && B());
				}),
				() => {
					for (var a of f) {
						e.removeEventListener(a, h);
						var n = d.get(a);
						--n === 0 ? (document.removeEventListener(a, h), d.delete(a)) : d.set(a, n);
					}
					(O.delete(v), i !== r && i.parentNode?.removeChild(i));
				}
			);
		});
	return (E.set(y, A), y);
}
let E = new WeakMap();
function te(t, e) {
	const r = E.get(t);
	return r ? (E.delete(t), r(e)) : Promise.resolve();
}
export { X as a, w as b, ee as h, P as m, Z as s, te as u };
