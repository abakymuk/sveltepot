import {
	P as z,
	Q as R,
	R as D,
	S as $,
	T,
	U as j,
	V as C,
	i as q,
	C as k,
	a as B,
	g as F,
	W as S,
	s as b,
	d as M,
	j as J,
	f as g,
	X as K,
	Y as Q,
	Z as X,
	_ as Z,
	$ as G,
	a0 as ee,
	c as te,
	m as ae,
	h as O,
	J as re,
	x as l,
	l as ne,
	K as se,
	a1 as y,
	z as oe,
	a2 as ie,
	a3 as I,
	a4 as le,
	A,
	a5 as ue,
	a6 as ce,
	a7 as fe,
	a8 as de,
	a9 as _e,
	aa as he,
	ab as pe
} from './Dw-cPJ-t.js';
import { r as ve, c as ge } from './LeL_DqrY.js';
const ye = ['touchstart', 'touchmove'];
function me(e) {
	return ye.includes(e);
}
const be = new Set(),
	P = new Set();
let V = null;
function w(e) {
	var t = this,
		r = t.ownerDocument,
		u = e.type,
		s = e.composedPath?.() || [],
		a = s[0] || e.target;
	V = e;
	var o = 0,
		c = V === e && e.__root;
	if (c) {
		var d = s.indexOf(c);
		if (d !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var h = s.indexOf(t);
		if (h === -1) return;
		d <= h && (o = d);
	}
	if (((a = s[o] || e.target), a !== t)) {
		z(e, 'currentTarget', {
			configurable: !0,
			get() {
				return a || r;
			}
		});
		var E = T,
			f = j;
		(R(null), D(null));
		try {
			for (var n, i = []; a !== null; ) {
				var p = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var _ = a['__' + u];
					if (_ != null && (!a.disabled || e.target === a))
						if ($(_)) {
							var [U, ...W] = _;
							U.apply(a, [e, ...W]);
						} else _.call(a, e);
				} catch (m) {
					n ? i.push(m) : (n = m);
				}
				if (e.cancelBubble || p === t || p === null) break;
				a = p;
			}
			if (n) {
				for (let m of i)
					queueMicrotask(() => {
						throw m;
					});
				throw n;
			}
		} finally {
			((e.__root = t), delete e.currentTarget, R(E), D(f));
		}
	}
}
function De(e, t) {
	var r = t == null ? '' : typeof t == 'object' ? t + '' : t;
	r !== (e.__t ??= e.nodeValue) && ((e.__t = r), (e.nodeValue = r + ''));
}
function L(e, t) {
	return Y(e, t);
}
function we(e, t) {
	(C(), (t.intro = t.intro ?? !1));
	const r = t.target,
		u = O,
		s = g;
	try {
		for (var a = q(r); a && (a.nodeType !== k || a.data !== B); ) a = F(a);
		if (!a) throw S;
		(b(!0), M(a), J());
		const o = Y(e, { ...t, anchor: a });
		if (g === null || g.nodeType !== k || g.data !== K) throw (Q(), S);
		return (b(!1), o);
	} catch (o) {
		if (
			o instanceof Error &&
			o.message
				.split(
					`
`
				)
				.some((c) => c.startsWith('https://svelte.dev/e/'))
		)
			throw o;
		return (
			o !== S && console.warn('Failed to hydrate: ', o),
			t.recover === !1 && X(),
			C(),
			Z(r),
			b(!1),
			L(e, t)
		);
	} finally {
		(b(u), M(s), ve());
	}
}
const v = new Map();
function Y(e, { target: t, anchor: r, props: u = {}, events: s, context: a, intro: o = !0 }) {
	C();
	var c = new Set(),
		d = (f) => {
			for (var n = 0; n < f.length; n++) {
				var i = f[n];
				if (!c.has(i)) {
					c.add(i);
					var p = me(i);
					t.addEventListener(i, w, { passive: p });
					var _ = v.get(i);
					_ === void 0
						? (document.addEventListener(i, w, { passive: p }), v.set(i, 1))
						: v.set(i, _ + 1);
				}
			}
		};
	(d(G(be)), P.add(d));
	var h = void 0,
		E = ee(() => {
			var f = r ?? t.appendChild(te());
			return (
				ae(() => {
					if (a) {
						re({});
						var n = l;
						n.c = a;
					}
					(s && (u.$$events = s),
						O && ne(f, null),
						(h = e(f, u) || {}),
						O && (j.nodes_end = g),
						a && se());
				}),
				() => {
					for (var n of c) {
						t.removeEventListener(n, w);
						var i = v.get(n);
						--i === 0 ? (document.removeEventListener(n, w), v.delete(n)) : v.set(n, i);
					}
					(P.delete(d), f !== r && f.parentNode?.removeChild(f));
				}
			);
		});
	return (x.set(h, E), h);
}
let x = new WeakMap();
function Ee(e, t) {
	const r = x.get(e);
	return r ? (x.delete(e), r(t)) : Promise.resolve();
}
function Se() {
	return (T === null && ie(), (T.ac ??= new AbortController()).signal);
}
function H(e) {
	(l === null && y(),
		le && l.l !== null
			? N(l).m.push(e)
			: oe(() => {
					const t = A(e);
					if (typeof t == 'function') return t;
				}));
}
function Te(e) {
	(l === null && y(), H(() => () => A(e)));
}
function Ce(e, t, { bubbles: r = !1, cancelable: u = !1 } = {}) {
	return new CustomEvent(e, { detail: t, bubbles: r, cancelable: u });
}
function Oe() {
	const e = l;
	return (
		e === null && y(),
		(t, r, u) => {
			const s = e.s.$$events?.[t];
			if (s) {
				const a = $(s) ? s.slice() : [s],
					o = Ce(t, r, u);
				for (const c of a) c.call(e.x, o);
				return !o.defaultPrevented;
			}
			return !0;
		}
	);
}
function xe(e) {
	(l === null && y(), l.l === null && I(), N(l).b.push(e));
}
function Ae(e) {
	(l === null && y(), l.l === null && I(), N(l).a.push(e));
}
function N(e) {
	var t = e.l;
	return (t.u ??= { a: [], b: [], m: [] });
}
const ke = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			afterUpdate: Ae,
			beforeUpdate: xe,
			createEventDispatcher: Oe,
			createRawSnippet: ge,
			flushSync: ue,
			getAbortSignal: Se,
			getAllContexts: ce,
			getContext: fe,
			hasContext: de,
			hydrate: we,
			mount: L,
			onDestroy: Te,
			onMount: H,
			setContext: _e,
			settled: he,
			tick: pe,
			unmount: Ee,
			untrack: A
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
);
export { ke as a, we as h, L as m, H as o, De as s, Ee as u };
