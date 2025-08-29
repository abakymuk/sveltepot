import '../chunks/DsnmJJEf.js';
import '../chunks/D36tYwTZ.js';
import {
	c as b,
	V as k,
	u as i,
	e as x,
	W as l,
	X as $,
	Y as v,
	Z as y,
	_ as E,
	J,
	O as M,
	S as O,
	T as P,
	P as S,
	M as T,
	$ as u,
	a0 as m,
	a1 as V
} from '../chunks/Bkrak6hP.js';
import { s as _ } from '../chunks/B9nppItn.js';
import { s as W, p as g } from '../chunks/Vt3J8MqF.js';
function X(a = !1) {
	const e = b,
		t = e.l.u;
	if (!t) return;
	let r = () => y(e.s);
	if (a) {
		let o = 0,
			s = {};
		const f = E(() => {
			let p = !1;
			const c = e.s;
			for (const n in c) c[n] !== s[n] && ((s[n] = c[n]), (p = !0));
			return (p && o++, o);
		});
		r = () => v(f);
	}
	(t.b.length &&
		k(() => {
			(h(e, r), l(t.b));
		}),
		i(() => {
			const o = x(() => t.m.map($));
			return () => {
				for (const s of o) typeof s == 'function' && s();
			};
		}),
		t.a.length &&
			i(() => {
				(h(e, r), l(t.a));
			}));
}
function h(a, e) {
	if (a.l.s) for (const t of a.l.s) v(t);
	e();
}
const Y = {
	get error() {
		return g.error;
	},
	get status() {
		return g.status;
	}
};
W.updated.check;
const d = Y;
var Z = M('<h1> </h1> <p> </p>', 1);
function B(a, e) {
	(J(e, !1), X());
	var t = Z(),
		r = O(t),
		o = u(r, !0);
	m(r);
	var s = V(r, 2),
		f = u(s, !0);
	(m(s),
		P(() => {
			(_(o, d.status), _(f, d.error?.message));
		}),
		S(a, t),
		T());
}
export { B as component };
