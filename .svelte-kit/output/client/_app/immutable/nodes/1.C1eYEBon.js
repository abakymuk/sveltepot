import '../chunks/DsnmJJEf.js';
import '../chunks/BeTFHaFW.js';
import {
	x,
	y as b,
	z as i,
	A as k,
	B as l,
	D as y,
	F as v,
	G as $,
	I as q,
	J as w,
	p as z,
	v as A,
	w as B,
	q as D,
	K as E,
	L as u,
	M as m,
	O as F
} from '../chunks/Dw-cPJ-t.js';
import { s as g } from '../chunks/3b2-FxGb.js';
import { s as G, p as _ } from '../chunks/DGDjkSrj.js';
function I(a = !1) {
	const e = x,
		t = e.l.u;
	if (!t) return;
	let r = () => $(e.s);
	if (a) {
		let o = 0,
			s = {};
		const f = q(() => {
			let c = !1;
			const p = e.s;
			for (const n in p) p[n] !== s[n] && ((s[n] = p[n]), (c = !0));
			return (c && o++, o);
		});
		r = () => v(f);
	}
	(t.b.length &&
		b(() => {
			(h(e, r), l(t.b));
		}),
		i(() => {
			const o = k(() => t.m.map(y));
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
const J = {
	get error() {
		return _.error;
	},
	get status() {
		return _.status;
	}
};
G.updated.check;
const d = J;
var K = z('<h1> </h1> <p> </p>', 1);
function H(a, e) {
	(w(e, !1), I());
	var t = K(),
		r = A(t),
		o = u(r, !0);
	m(r);
	var s = F(r, 2),
		f = u(s, !0);
	(m(s),
		B(() => {
			(g(o, d.status), g(f, d.error?.message));
		}),
		D(a, t),
		E());
}
export { H as component };
