import {
	a2 as N,
	I as w,
	w as Y,
	a3 as j,
	a4 as q,
	a5 as B,
	a6 as F,
	v as U,
	r as A,
	F as C,
	G as x,
	a7 as K,
	a8 as M,
	a9 as G,
	aa as Z,
	ab as $,
	x as z,
	ac as H,
	ad as J,
	ae as Q,
	e as D,
	af as T,
	ag as g,
	ah as L,
	ai as R,
	aj as V,
	ak as W,
	Y as O,
	_ as X,
	al as k,
	am as ee,
	an as re,
	ao as ae,
	L as ne,
	ap as se,
	aq as te,
	ar as ie,
	d as fe,
	as as ue,
	at as le
} from './Bkrak6hP.js';
function pe(e, r, n = !1) {
	w && Y();
	var a = e,
		s = null,
		t = null,
		l = M,
		d = n ? j : 0,
		p = !1;
	const P = (o, f = !0) => {
		((p = !0), _(f, o));
	};
	var u = null;
	function S() {
		u !== null && (u.lastChild.remove(), a.before(u), (u = null));
		var o = l ? s : t,
			f = l ? t : s;
		(o && Z(o),
			f &&
				$(f, () => {
					l ? (t = null) : (s = null);
				}));
	}
	const _ = (o, f) => {
		if (l === (l = o)) return;
		let I = !1;
		if (w) {
			const y = q(a) === B;
			!!l === y && ((a = F()), U(a), A(!1), (I = !0));
		}
		var h = G(),
			c = a;
		if (
			(h && ((u = document.createDocumentFragment()), u.append((c = C()))),
			l ? (s ??= f && x(() => f(c))) : (t ??= f && x(() => f(c))),
			h)
		) {
			var b = K,
				i = l ? s : t,
				v = l ? t : s;
			(i && b.skipped_effects.delete(i), v && b.skipped_effects.add(v), b.add_callback(S));
		} else S();
		I && A(!0);
	};
	(N(() => {
		((p = !1), r(P), p || _(null, null));
	}, d),
		w && (a = z));
}
function m(e, r) {
	return e === r || e?.[T] === r;
}
function ve(e = {}, r, n, a) {
	return (
		H(() => {
			var s, t;
			return (
				J(() => {
					((s = t),
						(t = []),
						D(() => {
							e !== n(...t) && (r(e, ...t), s && m(n(...s), e) && r(null, ...s));
						}));
				}),
				() => {
					Q(() => {
						t && m(n(...t), e) && r(null, ...t);
					});
				}
			);
		}),
		e
	);
}
let E = !1;
function oe(e) {
	var r = E;
	try {
		return ((E = !1), [e(), E]);
	} finally {
		E = r;
	}
}
const ce = {
	get(e, r) {
		if (!e.exclude.includes(r)) return e.props[r];
	},
	set(e, r) {
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		if (!e.exclude.includes(r) && r in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[r] };
	},
	has(e, r) {
		return e.exclude.includes(r) ? !1 : r in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
	}
};
function he(e, r, n) {
	return new Proxy({ props: e, exclude: r }, ce);
}
const de = {
	get(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let a = e.props[n];
			if ((g(a) && (a = a()), typeof a == 'object' && a !== null && r in a)) return a[r];
		}
	},
	set(e, r, n) {
		let a = e.props.length;
		for (; a--; ) {
			let s = e.props[a];
			g(s) && (s = s());
			const t = R(s, r);
			if (t && t.set) return (t.set(n), !0);
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, r) {
		let n = e.props.length;
		for (; n--; ) {
			let a = e.props[n];
			if ((g(a) && (a = a()), typeof a == 'object' && a !== null && r in a)) {
				const s = R(a, r);
				return (s && !s.configurable && (s.configurable = !0), s);
			}
		}
	},
	has(e, r) {
		if (r === T || r === L) return !1;
		for (let n of e.props) if ((g(n) && (n = n()), n != null && r in n)) return !0;
		return !1;
	},
	ownKeys(e) {
		const r = [];
		for (let n of e.props)
			if ((g(n) && (n = n()), !!n)) {
				for (const a in n) r.includes(a) || r.push(a);
				for (const a of Object.getOwnPropertySymbols(n)) r.includes(a) || r.push(a);
			}
		return r;
	}
};
function be(...e) {
	return new Proxy({ props: e }, de);
}
function ge(e, r, n, a) {
	var s = !fe || (n & ue) !== 0,
		t = (n & ie) !== 0,
		l = (n & te) !== 0,
		d = a,
		p = !0,
		P = () => (p && ((p = !1), (d = l ? D(a) : a)), d),
		u;
	if (t) {
		var S = T in e || L in e;
		u = R(e, r)?.set ?? (S && r in e ? (i) => (e[r] = i) : void 0);
	}
	var _,
		o = !1;
	(t ? ([_, o] = oe(() => e[r])) : (_ = e[r]),
		_ === void 0 && a !== void 0 && ((_ = P()), u && (s && V(), u(_))));
	var f;
	if (
		(s
			? (f = () => {
					var i = e[r];
					return i === void 0 ? P() : ((p = !0), i);
				})
			: (f = () => {
					var i = e[r];
					return (i !== void 0 && (d = void 0), i === void 0 ? d : i);
				}),
		s && (n & W) === 0)
	)
		return f;
	if (u) {
		var I = e.$$legacy;
		return function (i, v) {
			return arguments.length > 0 ? ((!s || !v || I || o) && u(v ? f() : i), i) : f();
		};
	}
	var h = !1,
		c = ((n & le) !== 0 ? X : k)(() => ((h = !1), f()));
	t && O(c);
	var b = ne;
	return function (i, v) {
		if (arguments.length > 0) {
			const y = v ? O(c) : s && t ? ee(i) : i;
			return (re(c, y), (h = !0), d !== void 0 && (d = y), i);
		}
		return (ae && h) || (b.f & se) !== 0 ? c.v : O(c);
	};
}
export { ve as b, pe as i, ge as p, he as r, be as s };
