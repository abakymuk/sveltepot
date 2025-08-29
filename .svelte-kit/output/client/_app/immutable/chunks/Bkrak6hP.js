var Le = Array.isArray,
	je = Array.prototype.indexOf,
	Dn = Array.from,
	Kt = Object.defineProperty,
	ut = Object.getOwnPropertyDescriptor,
	qe = Object.getOwnPropertyDescriptors,
	Ye = Object.prototype,
	Ue = Array.prototype,
	re = Object.getPrototypeOf,
	Wt = Object.isExtensible;
function Pn(t) {
	return typeof t == 'function';
}
const Cn = () => {};
function In(t) {
	return t();
}
function se(t) {
	for (var e = 0; e < t.length; e++) t[e]();
}
function Be() {
	var t,
		e,
		n = new Promise((r, s) => {
			((t = r), (e = s));
		});
	return { promise: n, resolve: t, reject: e };
}
const A = 2,
	It = 4,
	mt = 8,
	st = 16,
	M = 32,
	X = 64,
	ae = 128,
	k = 256,
	dt = 512,
	E = 1024,
	O = 2048,
	U = 4096,
	q = 8192,
	at = 16384,
	Mt = 32768,
	ie = 65536,
	Zt = 1 << 17,
	He = 1 << 18,
	_t = 1 << 19,
	le = 1 << 20,
	Rt = 1 << 21,
	Ft = 1 << 22,
	V = 1 << 23,
	G = Symbol('$state'),
	Mn = Symbol('legacy props'),
	Fn = Symbol(''),
	Lt = new (class extends Error {
		name = 'StaleReactionError';
		message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
	})(),
	jn = 1,
	jt = 3,
	fe = 8;
function Ve() {
	throw new Error('https://svelte.dev/e/await_outside_boundary');
}
function Ge(t) {
	throw new Error('https://svelte.dev/e/lifecycle_outside_component');
}
function $e() {
	throw new Error('https://svelte.dev/e/async_derived_orphan');
}
function Ke(t) {
	throw new Error('https://svelte.dev/e/effect_in_teardown');
}
function We() {
	throw new Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function Ze(t) {
	throw new Error('https://svelte.dev/e/effect_orphan');
}
function Xe() {
	throw new Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function qn() {
	throw new Error('https://svelte.dev/e/get_abort_signal_outside_reaction');
}
function Yn() {
	throw new Error('https://svelte.dev/e/hydration_failed');
}
function Un(t) {
	throw new Error('https://svelte.dev/e/lifecycle_legacy_only');
}
function Bn(t) {
	throw new Error('https://svelte.dev/e/props_invalid_value');
}
function ze() {
	throw new Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Je() {
	throw new Error('https://svelte.dev/e/state_prototype_fixed');
}
function Qe() {
	throw new Error('https://svelte.dev/e/state_unsafe_mutation');
}
const Hn = 1,
	Vn = 2,
	Gn = 4,
	$n = 8,
	Kn = 16,
	Wn = 4,
	ue = 1,
	tn = 2,
	en = '[',
	nn = '[!',
	rn = ']',
	qt = {},
	m = Symbol(),
	Zn = 'http://www.w3.org/1999/xhtml',
	Xn = 'http://www.w3.org/2000/svg',
	zn = '@attach';
function Yt(t) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
function Jn() {
	console.warn('https://svelte.dev/e/select_multiple_invalid_value');
}
let R = !1;
function Qn(t) {
	R = t;
}
let w;
function tt(t) {
	if (t === null) throw (Yt(), qt);
	return (w = t);
}
function sn() {
	return tt(z(w));
}
function tr(t) {
	if (R) {
		if (z(w) !== null) throw (Yt(), qt);
		w = t;
	}
}
function er(t = 1) {
	if (R) {
		for (var e = t, n = w; e--; ) n = z(n);
		w = n;
	}
}
function nr() {
	for (var t = 0, e = w; ; ) {
		if (e.nodeType === fe) {
			var n = e.data;
			if (n === rn) {
				if (t === 0) return e;
				t -= 1;
			} else (n === en || n === nn) && (t += 1);
		}
		var r = z(e);
		(e.remove(), (e = r));
	}
}
function rr(t) {
	if (!t || t.nodeType !== fe) throw (Yt(), qt);
	return t.data;
}
function oe(t) {
	return t === this.v;
}
function an(t, e) {
	return t != t
		? e == e
		: t !== e || (t !== null && typeof t == 'object') || typeof t == 'function';
}
function ce(t) {
	return !an(t, this.v);
}
let gt = !1;
function sr() {
	gt = !0;
}
let y = null;
function pt(t) {
	y = t;
}
function ar(t) {
	return Et().get(t);
}
function ir(t, e) {
	return (Et().set(t, e), e);
}
function lr(t) {
	return Et().has(t);
}
function fr() {
	return Et();
}
function ur(t, e = !1, n) {
	y = { p: y, c: null, e: null, s: t, x: null, l: gt && !e ? { s: null, u: null, $: [] } : null };
}
function or(t) {
	var e = y,
		n = e.e;
	if (n !== null) {
		e.e = null;
		for (var r of n) xe(r);
	}
	return ((y = e.p), {});
}
function vt() {
	return !gt || (y !== null && y.l === null);
}
function Et(t) {
	return (y === null && Ge(), (y.c ??= new Map(ln(y) || void 0)));
}
function ln(t) {
	let e = t.p;
	for (; e !== null; ) {
		const n = e.c;
		if (n !== null) return n;
		e = e.p;
	}
	return null;
}
const fn = new WeakMap();
function un(t) {
	var e = _;
	if (e === null) return ((c.f |= V), t);
	if ((e.f & Mt) === 0) {
		if ((e.f & ae) === 0) throw (!e.parent && t instanceof Error && _e(t), t);
		e.b.error(t);
	} else Ut(t, e);
}
function Ut(t, e) {
	for (; e !== null; ) {
		if ((e.f & ae) !== 0)
			try {
				e.b.error(t);
				return;
			} catch (n) {
				t = n;
			}
		e = e.parent;
	}
	throw (t instanceof Error && _e(t), t);
}
function _e(t) {
	const e = fn.get(t);
	e && (Kt(t, 'message', { value: e.message }), Kt(t, 'stack', { value: e.stack }));
}
let ot = [],
	Nt = [];
function ve() {
	var t = ot;
	((ot = []), se(t));
}
function on() {
	var t = Nt;
	((Nt = []), se(t));
}
function cr(t) {
	(ot.length === 0 && queueMicrotask(ve), ot.push(t));
}
function cn() {
	(ot.length > 0 && ve(), Nt.length > 0 && on());
}
function _n() {
	for (var t = _.b; t !== null && !t.has_pending_snippet(); ) t = t.parent;
	return (t === null && Ve(), t);
}
function Bt(t) {
	var e = A | O,
		n = c !== null && (c.f & A) !== 0 ? c : null;
	return (
		_ === null || (n !== null && (n.f & k) !== 0) ? (e |= k) : (_.f |= _t),
		{
			ctx: y,
			deps: null,
			effects: null,
			equals: oe,
			f: e,
			fn: t,
			reactions: null,
			rv: 0,
			v: m,
			wv: 0,
			parent: n ?? _,
			ac: null
		}
	);
}
function vn(t, e) {
	let n = _;
	n === null && $e();
	var r = n.b,
		s = void 0,
		l = Vt(m),
		i = null,
		u = !c;
	return (
		bn(() => {
			try {
				var a = t();
				i && Promise.resolve(a).catch(() => {});
			} catch (h) {
				a = Promise.reject(h);
			}
			var f = () => a;
			((s = i?.then(f, f) ?? Promise.resolve(a)), (i = s));
			var o = g,
				v = r.pending;
			u && (r.update_pending_count(1), v || o.increment());
			const p = (h, d = void 0) => {
				((i = null),
					v || o.activate(),
					d ? d !== Lt && ((l.f |= V), Pt(l, d)) : ((l.f & V) !== 0 && (l.f ^= V), Pt(l, h)),
					u && (r.update_pending_count(-1), v || o.decrement()),
					pe());
			};
			if ((s.then(p, (h) => p(null, h || 'unknown')), o))
				return () => {
					queueMicrotask(() => o.neuter());
				};
		}),
		new Promise((a) => {
			function f(o) {
				function v() {
					o === s ? a(l) : f(s);
				}
				o.then(v, v);
			}
			f(s);
		})
	);
}
function _r(t) {
	const e = Bt(t);
	return (Oe(e), e);
}
function hn(t) {
	const e = Bt(t);
	return ((e.equals = ce), e);
}
function he(t) {
	var e = t.effects;
	if (e !== null) {
		t.effects = null;
		for (var n = 0; n < e.length; n += 1) Z(e[n]);
	}
}
function dn(t) {
	for (var e = t.parent; e !== null; ) {
		if ((e.f & A) === 0) return e;
		e = e.parent;
	}
	return null;
}
function Ht(t) {
	var e,
		n = _;
	rt(dn(t));
	try {
		(he(t), (e = Ie(t)));
	} finally {
		rt(n);
	}
	return e;
}
function de(t) {
	var e = Ht(t);
	if ((t.equals(e) || ((t.v = e), (t.wv = Pe())), !it)) {
		var n = (L || (t.f & k) !== 0) && t.deps !== null ? U : E;
		T(t, n);
	}
}
function pn(t, e, n) {
	const r = vt() ? Bt : hn;
	if (e.length === 0) {
		n(t.map(r));
		return;
	}
	var s = g,
		l = _,
		i = wn(),
		u = _n();
	Promise.all(e.map((a) => vn(a)))
		.then((a) => {
			(s?.activate(), i());
			try {
				n([...t.map(r), ...a]);
			} catch (f) {
				(l.f & at) === 0 && Ut(f, l);
			}
			(s?.deactivate(), pe());
		})
		.catch((a) => {
			u.error(a);
		});
}
function wn() {
	var t = _,
		e = c,
		n = y,
		r = g;
	return function () {
		(rt(t), Y(e), pt(n), r?.activate());
	};
}
function pe() {
	(rt(null), Y(null), pt(null));
}
const St = new Set();
let g = null,
	Xt = new Set(),
	wt = [];
function we() {
	const t = wt.shift();
	(wt.length > 0 && queueMicrotask(we), t());
}
let K = [],
	bt = null,
	Ot = !1,
	ht = !1;
class W {
	current = new Map();
	#f = new Map();
	#s = new Set();
	#t = 0;
	#u = null;
	#o = !1;
	#n = [];
	#a = [];
	#r = [];
	#e = [];
	#i = [];
	#c = [];
	#_ = [];
	skipped_effects = new Set();
	process(e) {
		K = [];
		for (const s of e) this.#h(s);
		if (this.#n.length === 0 && this.#t === 0) {
			this.#v();
			var n = this.#r,
				r = this.#e;
			((this.#r = []),
				(this.#e = []),
				(this.#i = []),
				(g = null),
				zt(n),
				zt(r),
				g === null ? (g = this) : St.delete(this),
				this.#u?.resolve());
		} else (this.#l(this.#r), this.#l(this.#e), this.#l(this.#i));
		for (const s of this.#n) Q(s);
		for (const s of this.#a) Q(s);
		((this.#n = []), (this.#a = []));
	}
	#h(e) {
		e.f ^= E;
		for (var n = e.first; n !== null; ) {
			var r = n.f,
				s = (r & (M | X)) !== 0,
				l = s && (r & E) !== 0,
				i = l || (r & q) !== 0 || this.skipped_effects.has(n);
			if (!i && n.fn !== null) {
				if (s) n.f ^= E;
				else if ((r & It) !== 0) this.#e.push(n);
				else if ((r & E) === 0)
					if ((r & Ft) !== 0) {
						var u = n.b?.pending ? this.#a : this.#n;
						u.push(n);
					} else Tt(n) && ((n.f & st) !== 0 && this.#i.push(n), Q(n));
				var a = n.first;
				if (a !== null) {
					n = a;
					continue;
				}
			}
			var f = n.parent;
			for (n = n.next; n === null && f !== null; ) ((n = f.next), (f = f.parent));
		}
	}
	#l(e) {
		for (const n of e) (((n.f & O) !== 0 ? this.#c : this.#_).push(n), T(n, E));
		e.length = 0;
	}
	capture(e, n) {
		(this.#f.has(e) || this.#f.set(e, n), this.current.set(e, e.v));
	}
	activate() {
		g = this;
	}
	deactivate() {
		g = null;
		for (const e of Xt) if ((Xt.delete(e), e(), g !== null)) break;
	}
	neuter() {
		this.#o = !0;
	}
	flush() {
		(K.length > 0 ? Dt() : this.#v(),
			g === this && (this.#t === 0 && St.delete(this), this.deactivate()));
	}
	#v() {
		if (!this.#o) for (const e of this.#s) e();
		this.#s.clear();
	}
	increment() {
		this.#t += 1;
	}
	decrement() {
		if (((this.#t -= 1), this.#t === 0)) {
			for (const e of this.#c) (T(e, O), et(e));
			for (const e of this.#_) (T(e, U), et(e));
			((this.#r = []), (this.#e = []), this.flush());
		} else this.deactivate();
	}
	add_callback(e) {
		this.#s.add(e);
	}
	settled() {
		return (this.#u ??= Be()).promise;
	}
	static ensure() {
		if (g === null) {
			const e = (g = new W());
			(St.add(g),
				ht ||
					W.enqueue(() => {
						g === e && e.flush();
					}));
		}
		return g;
	}
	static enqueue(e) {
		(wt.length === 0 && queueMicrotask(we), wt.unshift(e));
	}
}
function yn(t) {
	var e = ht;
	ht = !0;
	try {
		var n;
		for (t && (Dt(), (n = t())); ; ) {
			if ((cn(), K.length === 0 && (g?.flush(), K.length === 0))) return ((bt = null), n);
			Dt();
		}
	} finally {
		ht = e;
	}
}
function Dt() {
	var t = J;
	Ot = !0;
	try {
		var e = 0;
		for (te(!0); K.length > 0; ) {
			var n = W.ensure();
			if (e++ > 1e3) {
				var r, s;
				mn();
			}
			(n.process(K), j.clear());
		}
	} finally {
		((Ot = !1), te(t), (bt = null));
	}
}
function mn() {
	try {
		Xe();
	} catch (t) {
		Ut(t, bt);
	}
}
let H = null;
function zt(t) {
	var e = t.length;
	if (e !== 0) {
		for (var n = 0; n < e; ) {
			var r = t[n++];
			if (
				(r.f & (at | q)) === 0 &&
				Tt(r) &&
				((H = []),
				Q(r),
				r.deps === null &&
					r.first === null &&
					r.nodes_start === null &&
					(r.teardown === null && r.ac === null ? ke(r) : (r.fn = null)),
				H?.length > 0)
			) {
				j.clear();
				for (const s of H) Q(s);
				H = [];
			}
		}
		H = null;
	}
}
function et(t) {
	for (var e = (bt = t); e.parent !== null; ) {
		e = e.parent;
		var n = e.f;
		if (Ot && e === _ && (n & st) !== 0) return;
		if ((n & (X | M)) !== 0) {
			if ((n & E) === 0) return;
			e.f ^= E;
		}
	}
	K.push(e);
}
const j = new Map();
function Vt(t, e) {
	var n = { f: 0, v: t, reactions: null, equals: oe, rv: 0, wv: 0 };
	return n;
}
function F(t, e) {
	const n = Vt(t);
	return (Oe(n), n);
}
function vr(t, e = !1, n = !0) {
	const r = Vt(t);
	return (e || (r.equals = ce), gt && n && y !== null && y.l !== null && (y.l.s ??= []).push(r), r);
}
function B(t, e, n = !1) {
	c !== null &&
		(!N || (c.f & Zt) !== 0) &&
		vt() &&
		(c.f & (A | st | Ft | Zt)) !== 0 &&
		!I?.includes(t) &&
		Qe();
	let r = n ? lt(e) : e;
	return Pt(t, r);
}
function Pt(t, e) {
	if (!t.equals(e)) {
		var n = t.v;
		(it ? j.set(t, e) : j.set(t, n), (t.v = e));
		var r = W.ensure();
		(r.capture(t, n),
			(t.f & A) !== 0 && ((t.f & O) !== 0 && Ht(t), T(t, (t.f & k) === 0 ? E : U)),
			(t.wv = Pe()),
			ye(t, O),
			vt() &&
				_ !== null &&
				(_.f & E) !== 0 &&
				(_.f & (M | X)) === 0 &&
				(S === null ? kn([t]) : S.push(t)));
	}
	return e;
}
function kt(t) {
	B(t, t.v + 1);
}
function ye(t, e) {
	var n = t.reactions;
	if (n !== null)
		for (var r = vt(), s = n.length, l = 0; l < s; l++) {
			var i = n[l],
				u = i.f;
			if (!(!r && i === _)) {
				var a = (u & O) === 0;
				(a && T(i, e),
					(u & A) !== 0 ? ye(i, U) : a && ((u & st) !== 0 && H !== null && H.push(i), et(i)));
			}
		}
}
function lt(t) {
	if (typeof t != 'object' || t === null || G in t) return t;
	const e = re(t);
	if (e !== Ye && e !== Ue) return t;
	var n = new Map(),
		r = Le(t),
		s = F(0),
		l = $,
		i = (u) => {
			if ($ === l) return u();
			var a = c,
				f = $;
			(Y(null), ne(l));
			var o = u();
			return (Y(a), ne(f), o);
		};
	return (
		r && n.set('length', F(t.length)),
		new Proxy(t, {
			defineProperty(u, a, f) {
				(!('value' in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) &&
					ze();
				var o = n.get(a);
				return (
					o === void 0
						? (o = i(() => {
								var v = F(f.value);
								return (n.set(a, v), v);
							}))
						: B(o, f.value, !0),
					!0
				);
			},
			deleteProperty(u, a) {
				var f = n.get(a);
				if (f === void 0) {
					if (a in u) {
						const o = i(() => F(m));
						(n.set(a, o), kt(s));
					}
				} else (B(f, m), kt(s));
				return !0;
			},
			get(u, a, f) {
				if (a === G) return t;
				var o = n.get(a),
					v = a in u;
				if (
					(o === void 0 &&
						(!v || ut(u, a)?.writable) &&
						((o = i(() => {
							var h = lt(v ? u[a] : m),
								d = F(h);
							return d;
						})),
						n.set(a, o)),
					o !== void 0)
				) {
					var p = ft(o);
					return p === m ? void 0 : p;
				}
				return Reflect.get(u, a, f);
			},
			getOwnPropertyDescriptor(u, a) {
				var f = Reflect.getOwnPropertyDescriptor(u, a);
				if (f && 'value' in f) {
					var o = n.get(a);
					o && (f.value = ft(o));
				} else if (f === void 0) {
					var v = n.get(a),
						p = v?.v;
					if (v !== void 0 && p !== m)
						return { enumerable: !0, configurable: !0, value: p, writable: !0 };
				}
				return f;
			},
			has(u, a) {
				if (a === G) return !0;
				var f = n.get(a),
					o = (f !== void 0 && f.v !== m) || Reflect.has(u, a);
				if (f !== void 0 || (_ !== null && (!o || ut(u, a)?.writable))) {
					f === void 0 &&
						((f = i(() => {
							var p = o ? lt(u[a]) : m,
								h = F(p);
							return h;
						})),
						n.set(a, f));
					var v = ft(f);
					if (v === m) return !1;
				}
				return o;
			},
			set(u, a, f, o) {
				var v = n.get(a),
					p = a in u;
				if (r && a === 'length')
					for (var h = f; h < v.v; h += 1) {
						var d = n.get(h + '');
						d !== void 0 ? B(d, m) : h in u && ((d = i(() => F(m))), n.set(h + '', d));
					}
				if (v === void 0)
					(!p || ut(u, a)?.writable) && ((v = i(() => F(void 0))), B(v, lt(f)), n.set(a, v));
				else {
					p = v.v !== m;
					var xt = i(() => lt(f));
					B(v, xt);
				}
				var Gt = Reflect.getOwnPropertyDescriptor(u, a);
				if ((Gt?.set && Gt.set.call(o, f), !p)) {
					if (r && typeof a == 'string') {
						var $t = n.get('length'),
							At = Number(a);
						Number.isInteger(At) && At >= $t.v && B($t, At + 1);
					}
					kt(s);
				}
				return !0;
			},
			ownKeys(u) {
				ft(s);
				var a = Reflect.ownKeys(u).filter((v) => {
					var p = n.get(v);
					return p === void 0 || p.v !== m;
				});
				for (var [f, o] of n) o.v !== m && !(f in u) && a.push(f);
				return a;
			},
			setPrototypeOf() {
				Je();
			}
		})
	);
}
function Jt(t) {
	try {
		if (t !== null && typeof t == 'object' && G in t) return t[G];
	} catch {}
	return t;
}
function hr(t, e) {
	return Object.is(Jt(t), Jt(e));
}
var Qt, gn, me, ge, Ee;
function dr() {
	if (Qt === void 0) {
		((Qt = window), (gn = document), (me = /Firefox/.test(navigator.userAgent)));
		var t = Element.prototype,
			e = Node.prototype,
			n = Text.prototype;
		((ge = ut(e, 'firstChild').get),
			(Ee = ut(e, 'nextSibling').get),
			Wt(t) &&
				((t.__click = void 0),
				(t.__className = void 0),
				(t.__attributes = null),
				(t.__style = void 0),
				(t.__e = void 0)),
			Wt(n) && (n.__t = void 0));
	}
}
function nt(t = '') {
	return document.createTextNode(t);
}
function D(t) {
	return ge.call(t);
}
function z(t) {
	return Ee.call(t);
}
function pr(t, e) {
	if (!R) return D(t);
	var n = D(w);
	if (n === null) n = w.appendChild(nt());
	else if (e && n.nodeType !== jt) {
		var r = nt();
		return (n?.before(r), tt(r), r);
	}
	return (tt(n), n);
}
function wr(t, e) {
	if (!R) {
		var n = D(t);
		return n instanceof Comment && n.data === '' ? z(n) : n;
	}
	return w;
}
function yr(t, e = 1, n = !1) {
	let r = R ? w : t;
	for (var s; e--; ) ((s = r), (r = z(r)));
	if (!R) return r;
	if (n && r?.nodeType !== jt) {
		var l = nt();
		return (r === null ? s?.after(l) : r.before(l), tt(l), l);
	}
	return (tt(r), r);
}
function mr(t) {
	t.textContent = '';
}
function gr() {
	return !1;
}
function be(t) {
	var e = c,
		n = _;
	(Y(null), rt(null));
	try {
		return t();
	} finally {
		(Y(e), rt(n));
	}
}
function Te(t) {
	(_ === null && c === null && Ze(),
		c !== null && (c.f & k) !== 0 && _ === null && We(),
		it && Ke());
}
function En(t, e) {
	var n = e.last;
	n === null ? (e.last = e.first = t) : ((n.next = t), (t.prev = n), (e.last = t));
}
function C(t, e, n, r = !0) {
	var s = _;
	s !== null && (s.f & q) !== 0 && (t |= q);
	var l = {
		ctx: y,
		deps: null,
		nodes_start: null,
		nodes_end: null,
		f: t | O,
		first: null,
		fn: e,
		last: null,
		next: null,
		parent: s,
		b: s && s.b,
		prev: null,
		teardown: null,
		transitions: null,
		wv: 0,
		ac: null
	};
	if (n)
		try {
			(Q(l), (l.f |= Mt));
		} catch (a) {
			throw (Z(l), a);
		}
	else e !== null && et(l);
	if (r) {
		var i = l;
		if (
			(n &&
				i.deps === null &&
				i.teardown === null &&
				i.nodes_start === null &&
				i.first === i.last &&
				(i.f & _t) === 0 &&
				(i = i.first),
			i !== null &&
				((i.parent = s), s !== null && En(i, s), c !== null && (c.f & A) !== 0 && (t & X) === 0))
		) {
			var u = c;
			(u.effects ??= []).push(i);
		}
	}
	return l;
}
function Er() {
	return c !== null && !N;
}
function br(t) {
	const e = C(mt, null, !1);
	return (T(e, E), (e.teardown = t), e);
}
function Tr(t) {
	Te();
	var e = _.f,
		n = !c && (e & M) !== 0 && (e & Mt) === 0;
	if (n) {
		var r = y;
		(r.e ??= []).push(t);
	} else return xe(t);
}
function xe(t) {
	return C(It | le, t, !1);
}
function xr(t) {
	return (Te(), C(mt | le, t, !0));
}
function Ar(t) {
	W.ensure();
	const e = C(X | _t, t, !0);
	return (n = {}) =>
		new Promise((r) => {
			n.outro
				? An(e, () => {
						(Z(e), r(void 0));
					})
				: (Z(e), r(void 0));
		});
}
function Sr(t) {
	return C(It, t, !1);
}
function bn(t) {
	return C(Ft | _t, t, !0);
}
function kr(t, e = 0) {
	return C(mt | e, t, !0);
}
function Rr(t, e = [], n = []) {
	pn(e, n, (r) => {
		C(mt, () => t(...r.map(ft)), !0);
	});
}
function Nr(t, e = 0) {
	var n = C(st | e, t, !0);
	return n;
}
function Or(t, e = !0) {
	return C(M | _t, t, !0, e);
}
function Ae(t) {
	var e = t.teardown;
	if (e !== null) {
		const n = it,
			r = c;
		(ee(!0), Y(null));
		try {
			e.call(null);
		} finally {
			(ee(n), Y(r));
		}
	}
}
function Se(t, e = !1) {
	var n = t.first;
	for (t.first = t.last = null; n !== null; ) {
		const s = n.ac;
		s !== null &&
			be(() => {
				s.abort(Lt);
			});
		var r = n.next;
		((n.f & X) !== 0 ? (n.parent = null) : Z(n, e), (n = r));
	}
}
function Tn(t) {
	for (var e = t.first; e !== null; ) {
		var n = e.next;
		((e.f & M) === 0 && Z(e), (e = n));
	}
}
function Z(t, e = !0) {
	var n = !1;
	((e || (t.f & He) !== 0) &&
		t.nodes_start !== null &&
		t.nodes_end !== null &&
		(xn(t.nodes_start, t.nodes_end), (n = !0)),
		Se(t, e && !n),
		yt(t, 0),
		T(t, at));
	var r = t.transitions;
	if (r !== null) for (const l of r) l.stop();
	Ae(t);
	var s = t.parent;
	(s !== null && s.first !== null && ke(t),
		(t.next =
			t.prev =
			t.teardown =
			t.ctx =
			t.deps =
			t.fn =
			t.nodes_start =
			t.nodes_end =
			t.ac =
				null));
}
function xn(t, e) {
	for (; t !== null; ) {
		var n = t === e ? null : z(t);
		(t.remove(), (t = n));
	}
}
function ke(t) {
	var e = t.parent,
		n = t.prev,
		r = t.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n)));
}
function An(t, e) {
	var n = [];
	(Re(t, n, !0),
		Sn(n, () => {
			(Z(t), e && e());
		}));
}
function Sn(t, e) {
	var n = t.length;
	if (n > 0) {
		var r = () => --n || e();
		for (var s of t) s.out(r);
	} else e();
}
function Re(t, e, n) {
	if ((t.f & q) === 0) {
		if (((t.f ^= q), t.transitions !== null))
			for (const i of t.transitions) (i.is_global || n) && e.push(i);
		for (var r = t.first; r !== null; ) {
			var s = r.next,
				l = (r.f & ie) !== 0 || (r.f & M) !== 0;
			(Re(r, e, l ? n : !1), (r = s));
		}
	}
}
function Dr(t) {
	Ne(t, !0);
}
function Ne(t, e) {
	if ((t.f & q) !== 0) {
		((t.f ^= q), (t.f & E) === 0 && (T(t, O), et(t)));
		for (var n = t.first; n !== null; ) {
			var r = n.next,
				s = (n.f & ie) !== 0 || (n.f & M) !== 0;
			(Ne(n, s ? e : !1), (n = r));
		}
		if (t.transitions !== null) for (const l of t.transitions) (l.is_global || e) && l.in();
	}
}
let J = !1;
function te(t) {
	J = t;
}
let it = !1;
function ee(t) {
	it = t;
}
let c = null,
	N = !1;
function Y(t) {
	c = t;
}
let _ = null;
function rt(t) {
	_ = t;
}
let I = null;
function Oe(t) {
	c !== null && (I === null ? (I = [t]) : I.push(t));
}
let b = null,
	x = 0,
	S = null;
function kn(t) {
	S = t;
}
let De = 1,
	ct = 0,
	$ = ct;
function ne(t) {
	$ = t;
}
let L = !1;
function Pe() {
	return ++De;
}
function Tt(t) {
	var e = t.f;
	if ((e & O) !== 0) return !0;
	if ((e & U) !== 0) {
		var n = t.deps,
			r = (e & k) !== 0;
		if (n !== null) {
			var s,
				l,
				i = (e & dt) !== 0,
				u = r && _ !== null && !L,
				a = n.length;
			if ((i || u) && (_ === null || (_.f & at) === 0)) {
				var f = t,
					o = f.parent;
				for (s = 0; s < a; s++)
					((l = n[s]), (i || !l?.reactions?.includes(f)) && (l.reactions ??= []).push(f));
				(i && (f.f ^= dt), u && o !== null && (o.f & k) === 0 && (f.f ^= k));
			}
			for (s = 0; s < a; s++) if (((l = n[s]), Tt(l) && de(l), l.wv > t.wv)) return !0;
		}
		(!r || (_ !== null && !L)) && T(t, E);
	}
	return !1;
}
function Ce(t, e, n = !0) {
	var r = t.reactions;
	if (r !== null && !I?.includes(t))
		for (var s = 0; s < r.length; s++) {
			var l = r[s];
			(l.f & A) !== 0 ? Ce(l, e, !1) : e === l && (n ? T(l, O) : (l.f & E) !== 0 && T(l, U), et(l));
		}
}
function Ie(t) {
	var e = b,
		n = x,
		r = S,
		s = c,
		l = L,
		i = I,
		u = y,
		a = N,
		f = $,
		o = t.f;
	((b = null),
		(x = 0),
		(S = null),
		(L = (o & k) !== 0 && (N || !J || c === null)),
		(c = (o & (M | X)) === 0 ? t : null),
		(I = null),
		pt(t.ctx),
		(N = !1),
		($ = ++ct),
		t.ac !== null &&
			(be(() => {
				t.ac.abort(Lt);
			}),
			(t.ac = null)));
	try {
		t.f |= Rt;
		var v = t.fn,
			p = v(),
			h = t.deps;
		if (b !== null) {
			var d;
			if ((yt(t, x), h !== null && x > 0))
				for (h.length = x + b.length, d = 0; d < b.length; d++) h[x + d] = b[d];
			else t.deps = h = b;
			if (!L || ((o & A) !== 0 && t.reactions !== null))
				for (d = x; d < h.length; d++) (h[d].reactions ??= []).push(t);
		} else h !== null && x < h.length && (yt(t, x), (h.length = x));
		if (vt() && S !== null && !N && h !== null && (t.f & (A | U | O)) === 0)
			for (d = 0; d < S.length; d++) Ce(S[d], t);
		return (
			s !== null && s !== t && (ct++, S !== null && (r === null ? (r = S) : r.push(...S))),
			(t.f & V) !== 0 && (t.f ^= V),
			p
		);
	} catch (xt) {
		return un(xt);
	} finally {
		((t.f ^= Rt), (b = e), (x = n), (S = r), (c = s), (L = l), (I = i), pt(u), (N = a), ($ = f));
	}
}
function Rn(t, e) {
	let n = e.reactions;
	if (n !== null) {
		var r = je.call(n, t);
		if (r !== -1) {
			var s = n.length - 1;
			s === 0 ? (n = e.reactions = null) : ((n[r] = n[s]), n.pop());
		}
	}
	n === null &&
		(e.f & A) !== 0 &&
		(b === null || !b.includes(e)) &&
		(T(e, U), (e.f & (k | dt)) === 0 && (e.f ^= dt), he(e), yt(e, 0));
}
function yt(t, e) {
	var n = t.deps;
	if (n !== null) for (var r = e; r < n.length; r++) Rn(t, n[r]);
}
function Q(t) {
	var e = t.f;
	if ((e & at) === 0) {
		T(t, E);
		var n = _,
			r = J;
		((_ = t), (J = !0));
		try {
			((e & st) !== 0 ? Tn(t) : Se(t), Ae(t));
			var s = Ie(t);
			((t.teardown = typeof s == 'function' ? s : null), (t.wv = De));
			var l;
		} finally {
			((J = r), (_ = n));
		}
	}
}
async function Pr() {
	(await Promise.resolve(), yn());
}
function Cr() {
	return W.ensure().settled();
}
function ft(t) {
	var e = t.f,
		n = (e & A) !== 0;
	if (c !== null && !N) {
		var r = _ !== null && (_.f & at) !== 0;
		if (!r && !I?.includes(t)) {
			var s = c.deps;
			if ((c.f & Rt) !== 0)
				t.rv < ct &&
					((t.rv = ct),
					b === null && s !== null && s[x] === t
						? x++
						: b === null
							? (b = [t])
							: (!L || !b.includes(t)) && b.push(t));
			else {
				(c.deps ??= []).push(t);
				var l = t.reactions;
				l === null ? (t.reactions = [c]) : l.includes(c) || l.push(c);
			}
		}
	} else if (n && t.deps === null && t.effects === null) {
		var i = t,
			u = i.parent;
		u !== null && (u.f & k) === 0 && (i.f ^= k);
	}
	if (it) {
		if (j.has(t)) return j.get(t);
		if (n) {
			i = t;
			var a = i.v;
			return ((((i.f & E) === 0 && i.reactions !== null) || Me(i)) && (a = Ht(i)), j.set(i, a), a);
		}
	} else n && ((i = t), Tt(i) && de(i));
	if ((t.f & V) !== 0) throw t.v;
	return t.v;
}
function Me(t) {
	if (t.v === m) return !0;
	if (t.deps === null) return !1;
	for (const e of t.deps) if (j.has(e) || ((e.f & A) !== 0 && Me(e))) return !0;
	return !1;
}
function Ir(t) {
	var e = N;
	try {
		return ((N = !0), t());
	} finally {
		N = e;
	}
}
const Nn = -7169;
function T(t, e) {
	t.f = (t.f & Nn) | e;
}
function Mr(t) {
	if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
		if (G in t) Ct(t);
		else if (!Array.isArray(t))
			for (let e in t) {
				const n = t[e];
				typeof n == 'object' && n && G in n && Ct(n);
			}
	}
}
function Ct(t, e = new Set()) {
	if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !e.has(t)) {
		(e.add(t), t instanceof Date && t.getTime());
		for (let r in t)
			try {
				Ct(t[r], e);
			} catch {}
		const n = re(t);
		if (
			n !== Object.prototype &&
			n !== Array.prototype &&
			n !== Map.prototype &&
			n !== Set.prototype &&
			n !== Date.prototype
		) {
			const r = qe(n);
			for (let s in r) {
				const l = r[s].get;
				if (l)
					try {
						l.call(t);
					} catch {}
			}
		}
	}
}
function Fe(t) {
	var e = document.createElement('template');
	return ((e.innerHTML = t.replaceAll('<!>', '<!---->')), e.content);
}
function P(t, e) {
	var n = _;
	n.nodes_start === null && ((n.nodes_start = t), (n.nodes_end = e));
}
function Fr(t, e) {
	var n = (e & ue) !== 0,
		r = (e & tn) !== 0,
		s,
		l = !t.startsWith('<!>');
	return () => {
		if (R) return (P(w, null), w);
		s === void 0 && ((s = Fe(l ? t : '<!>' + t)), n || (s = D(s)));
		var i = r || me ? document.importNode(s, !0) : s.cloneNode(!0);
		if (n) {
			var u = D(i),
				a = i.lastChild;
			P(u, a);
		} else P(i, i);
		return i;
	};
}
function On(t, e, n = 'svg') {
	var r = !t.startsWith('<!>'),
		s = (e & ue) !== 0,
		l = `<${n}>${r ? t : '<!>' + t}</${n}>`,
		i;
	return () => {
		if (R) return (P(w, null), w);
		if (!i) {
			var u = Fe(l),
				a = D(u);
			if (s) for (i = document.createDocumentFragment(); D(a); ) i.appendChild(D(a));
			else i = D(a);
		}
		var f = i.cloneNode(!0);
		if (s) {
			var o = D(f),
				v = f.lastChild;
			P(o, v);
		} else P(f, f);
		return f;
	};
}
function Lr(t, e) {
	return On(t, e, 'svg');
}
function jr(t = '') {
	if (!R) {
		var e = nt(t + '');
		return (P(e, e), e);
	}
	var n = w;
	return (n.nodeType !== jt && (n.before((n = nt())), tt(n)), P(n, n), n);
}
function qr() {
	if (R) return (P(w, null), w);
	var t = document.createDocumentFragment(),
		e = document.createComment(''),
		n = nt();
	return (t.append(e, n), P(e, n), t);
}
function Yr(t, e) {
	if (R) {
		((_.nodes_end = w), sn());
		return;
	}
	t !== null && t.before(e);
}
export {
	pr as $,
	Yn as A,
	mr as B,
	fe as C,
	Dn as D,
	Ar as E,
	nt as F,
	Or as G,
	en as H,
	R as I,
	ur as J,
	P as K,
	_ as L,
	or as M,
	sr as N,
	Fr as O,
	Yr as P,
	er as Q,
	qr as R,
	wr as S,
	Rr as T,
	Cn as U,
	xr as V,
	se as W,
	In as X,
	ft as Y,
	Mr as Z,
	Bt as _,
	c as a,
	tr as a0,
	yr as a1,
	Nr as a2,
	ie as a3,
	rr as a4,
	nn as a5,
	nr as a6,
	g as a7,
	m as a8,
	gr as a9,
	Fe as aA,
	Z as aB,
	vr as aC,
	F as aD,
	_r as aE,
	jr as aF,
	Jn as aG,
	hr as aH,
	pn as aI,
	zn as aJ,
	Zn as aK,
	re as aL,
	Fn as aM,
	qe as aN,
	Er as aO,
	Vt as aP,
	kt as aQ,
	xn as aR,
	jn as aS,
	Xn as aT,
	st as aU,
	Mt as aV,
	Wn as aW,
	Lr as aX,
	gn as aY,
	an as aZ,
	Dr as aa,
	An as ab,
	Sr as ac,
	kr as ad,
	cr as ae,
	G as af,
	Pn as ag,
	Mn as ah,
	ut as ai,
	Bn as aj,
	Gn as ak,
	hn as al,
	lt as am,
	B as an,
	it as ao,
	at as ap,
	Kn as aq,
	$n as ar,
	Vn as as,
	Hn as at,
	br as au,
	be as av,
	Kt as aw,
	Y as ax,
	rt as ay,
	He as az,
	Un as b,
	y as c,
	gt as d,
	Ir as e,
	yn as f,
	qn as g,
	fr as h,
	Le as i,
	ar as j,
	lr as k,
	Ge as l,
	Cr as m,
	dr as n,
	D as o,
	z as p,
	qt as q,
	Qn as r,
	ir as s,
	Pr as t,
	Tr as u,
	tt as v,
	sn as w,
	w as x,
	rn as y,
	Yt as z
};
