import {
	ae as J,
	a2 as B,
	aB as M,
	G,
	ac as K,
	I as L,
	i as Z,
	aG as Q,
	aH as W,
	au as X,
	aI as m,
	Y as x,
	aJ as rr,
	r as j,
	a8 as ir,
	aK as fr,
	aL as tr,
	aM as sr,
	aN as er
} from './Bkrak6hP.js';
import { e as ur, f as ar, g as or, n as lr, j as cr } from './DqcR2uyH.js';
function nr(r, t) {
	if (t) {
		const i = document.body;
		((r.autofocus = !0),
			J(() => {
				document.activeElement === i && r.focus();
			}));
	}
}
function vr(r, t) {
	var i = void 0,
		f;
	B(() => {
		i !== (i = t()) &&
			(f && (M(f), (f = null)),
			i &&
				(f = G(() => {
					K(() => i(r));
				})));
	});
}
function R(r) {
	var t,
		i,
		f = '';
	if (typeof r == 'string' || typeof r == 'number') f += r;
	else if (typeof r == 'object')
		if (Array.isArray(r)) {
			var s = r.length;
			for (t = 0; t < s; t++) r[t] && (i = R(r[t])) && (f && (f += ' '), (f += i));
		} else for (i in r) r[i] && (f && (f += ' '), (f += i));
	return f;
}
function dr() {
	for (var r, t, i = 0, f = '', s = arguments.length; i < s; i++)
		(r = arguments[i]) && (t = R(r)) && (f && (f += ' '), (f += t));
	return f;
}
function br(r) {
	return typeof r == 'object' ? dr(r) : (r ?? '');
}
const $ = [
	...` 	
\r\f \v\uFEFF`
];
function gr(r, t, i) {
	var f = r == null ? '' : '' + r;
	if (i) {
		for (var s in i)
			if (i[s]) f = f ? f + ' ' + s : s;
			else if (f.length)
				for (var e = s.length, u = 0; (u = f.indexOf(s, u)) >= 0; ) {
					var o = u + e;
					(u === 0 || $.includes(f[u - 1])) && (o === f.length || $.includes(f[o]))
						? (f = (u === 0 ? '' : f.substring(0, u)) + f.substring(o + 1))
						: (u = o);
				}
	}
	return f === '' ? null : f;
}
function P(r, t = !1) {
	var i = t ? ' !important;' : ';',
		f = '';
	for (var s in r) {
		var e = r[s];
		e != null && e !== '' && (f += ' ' + s + ': ' + e + i);
	}
	return f;
}
function O(r) {
	return r[0] !== '-' || r[1] !== '-' ? r.toLowerCase() : r;
}
function pr(r, t) {
	if (t) {
		var i = '',
			f,
			s;
		if ((Array.isArray(t) ? ((f = t[0]), (s = t[1])) : (f = t), r)) {
			r = String(r)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
				.trim();
			var e = !1,
				u = 0,
				o = !1,
				v = [];
			(f && v.push(...Object.keys(f).map(O)), s && v.push(...Object.keys(s).map(O)));
			var l = 0,
				A = -1;
			const b = r.length;
			for (var d = 0; d < b; d++) {
				var n = r[d];
				if (
					(o
						? n === '/' && r[d - 1] === '*' && (o = !1)
						: e
							? e === n && (e = !1)
							: n === '/' && r[d + 1] === '*'
								? (o = !0)
								: n === '"' || n === "'"
									? (e = n)
									: n === '('
										? u++
										: n === ')' && u--,
					!o && e === !1 && u === 0)
				) {
					if (n === ':' && A === -1) A = d;
					else if (n === ';' || d === b - 1) {
						if (A !== -1) {
							var N = O(r.substring(l, A).trim());
							if (!v.includes(N)) {
								n !== ';' && d++;
								var _ = r.substring(l, d).trim();
								i += ' ' + _ + ';';
							}
						}
						((l = d + 1), (A = -1));
					}
				}
			}
		}
		return (f && (i += P(f)), s && (i += P(s, !0)), (i = i.trim()), i === '' ? null : i);
	}
	return r == null ? null : String(r);
}
function hr(r, t, i, f, s, e) {
	var u = r.__className;
	if (L || u !== i || u === void 0) {
		var o = gr(i, f, e);
		((!L || o !== r.getAttribute('class')) &&
			(o == null ? r.removeAttribute('class') : t ? (r.className = o) : r.setAttribute('class', o)),
			(r.__className = i));
	} else if (e && s !== e)
		for (var v in e) {
			var l = !!e[v];
			(s == null || l !== !!s[v]) && r.classList.toggle(v, l);
		}
	return e;
}
function y(r, t = {}, i, f) {
	for (var s in i) {
		var e = i[s];
		t[s] !== e && (i[s] == null ? r.style.removeProperty(s) : r.style.setProperty(s, e, f));
	}
}
function Ar(r, t, i, f) {
	var s = r.__style;
	if (L || s !== t) {
		var e = pr(t, f);
		((!L || e !== r.getAttribute('style')) &&
			(e == null ? r.removeAttribute('style') : (r.style.cssText = e)),
			(r.__style = t));
	} else
		f && (Array.isArray(f) ? (y(r, i?.[0], f[0]), y(r, i?.[1], f[1], 'important')) : y(r, i, f));
	return f;
}
function w(r, t, i = !1) {
	if (r.multiple) {
		if (t == null) return;
		if (!Z(t)) return Q();
		for (var f of r.options) f.selected = t.includes(H(f));
		return;
	}
	for (f of r.options) {
		var s = H(f);
		if (W(s, t)) {
			f.selected = !0;
			return;
		}
	}
	(!i || t !== void 0) && (r.selectedIndex = -1);
}
function _r(r) {
	var t = new MutationObserver(() => {
		w(r, r.__value);
	});
	(t.observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ['value'] }),
		X(() => {
			t.disconnect();
		}));
}
function H(r) {
	return '__value' in r ? r.__value : r.value;
}
const E = Symbol('class'),
	I = Symbol('style'),
	V = Symbol('is custom element'),
	D = Symbol('is html');
function Nr(r, t) {
	t ? r.hasAttribute('selected') || r.setAttribute('selected', '') : r.removeAttribute('selected');
}
function U(r, t, i, f) {
	var s = k(r);
	(L &&
		((s[t] = r.getAttribute(t)),
		t === 'src' || t === 'srcset' || (t === 'href' && r.nodeName === 'LINK'))) ||
		(s[t] !== (s[t] = i) &&
			(t === 'loading' && (r[sr] = i),
			i == null
				? r.removeAttribute(t)
				: typeof i != 'string' && q(r).includes(t)
					? (r[t] = i)
					: r.setAttribute(t, i)));
}
function Sr(r, t, i, f, s = !1) {
	var e = k(r),
		u = e[V],
		o = !e[D];
	let v = L && u;
	v && j(!1);
	var l = t || {},
		A = r.tagName === 'OPTION';
	for (var d in t) d in i || (i[d] = null);
	(i.class ? (i.class = br(i.class)) : i[E] && (i.class = null), i[I] && (i.style ??= null));
	var n = q(r);
	for (const a in i) {
		let c = i[a];
		if (A && a === 'value' && c == null) {
			((r.value = r.__value = ''), (l[a] = c));
			continue;
		}
		if (a === 'class') {
			var N = r.namespaceURI === 'http://www.w3.org/1999/xhtml';
			(hr(r, N, c, f, t?.[E], i[E]), (l[a] = c), (l[E] = i[E]));
			continue;
		}
		if (a === 'style') {
			(Ar(r, c, t?.[I], i[I]), (l[a] = c), (l[I] = i[I]));
			continue;
		}
		var _ = l[a];
		if (!(c === _ && !(c === void 0 && r.hasAttribute(a)))) {
			l[a] = c;
			var b = a[0] + a[1];
			if (b !== '$$')
				if (b === 'on') {
					const h = {},
						S = '$$' + a;
					let g = a.slice(2);
					var T = cr(g);
					if ((ur(g) && ((g = g.slice(0, -7)), (h.capture = !0)), !T && _)) {
						if (c != null) continue;
						(r.removeEventListener(g, l[S], h), (l[S] = null));
					}
					if (c != null)
						if (T) ((r[`__${g}`] = c), or([g]));
						else {
							let z = function (F) {
								l[a].call(this, F);
							};
							l[S] = ar(g, r, z, h);
						}
					else T && (r[`__${g}`] = void 0);
				} else if (a === 'style') U(r, a, c);
				else if (a === 'autofocus') nr(r, !!c);
				else if (!u && (a === '__value' || (a === 'value' && c != null))) r.value = r.__value = c;
				else if (a === 'selected' && A) Nr(r, c);
				else {
					var p = a;
					o || (p = lr(p));
					var C = p === 'defaultValue' || p === 'defaultChecked';
					if (c == null && !u && !C)
						if (((e[a] = null), p === 'value' || p === 'checked')) {
							let h = r;
							const S = t === void 0;
							if (p === 'value') {
								let g = h.defaultValue;
								(h.removeAttribute(p), (h.defaultValue = g), (h.value = h.__value = S ? g : null));
							} else {
								let g = h.defaultChecked;
								(h.removeAttribute(p), (h.defaultChecked = g), (h.checked = S ? g : !1));
							}
						} else r.removeAttribute(a);
					else
						C || (n.includes(p) && (u || typeof c != 'string'))
							? ((r[p] = c), p in e && (e[p] = ir))
							: typeof c != 'function' && U(r, p, c);
				}
		}
	}
	return (v && j(!0), l);
}
function Ir(r, t, i = [], f = [], s, e = !1) {
	m(i, f, (u) => {
		var o = void 0,
			v = {},
			l = r.nodeName === 'SELECT',
			A = !1;
		if (
			(B(() => {
				var n = t(...u.map(x)),
					N = Sr(r, o, n, s, e);
				A && l && 'value' in n && w(r, n.value);
				for (let b of Object.getOwnPropertySymbols(v)) n[b] || M(v[b]);
				for (let b of Object.getOwnPropertySymbols(n)) {
					var _ = n[b];
					(b.description === rr &&
						(!o || _ !== o[b]) &&
						(v[b] && M(v[b]), (v[b] = G(() => vr(r, () => _)))),
						(N[b] = _));
				}
				o = N;
			}),
			l)
		) {
			var d = r;
			K(() => {
				(w(d, o.value, !0), _r(d));
			});
		}
		A = !0;
	});
}
function k(r) {
	return (r.__attributes ??= { [V]: r.nodeName.includes('-'), [D]: r.namespaceURI === fr });
}
var Y = new Map();
function q(r) {
	var t = r.getAttribute('is') || r.nodeName,
		i = Y.get(t);
	if (i) return i;
	Y.set(t, (i = []));
	for (var f, s = r, e = Element.prototype; e !== s; ) {
		f = er(s);
		for (var u in f) f[u].set && i.push(u);
		s = tr(s);
	}
	return i;
}
export { Ir as a, br as b, dr as c, hr as d, U as s };
