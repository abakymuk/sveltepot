import {
	au as k,
	ae as C,
	av as I,
	aw as O,
	ax as E,
	ay as g,
	i as D,
	a as F,
	L as P,
	F as V,
	a2 as S,
	az as B,
	I as l,
	C as H,
	H as W,
	p as b,
	r as w,
	v as T,
	x as _,
	o as A,
	w as j,
	aA as q,
	K as z,
	a3 as G,
	G as U,
	U as K,
	aB as X
} from './Bkrak6hP.js';
function re(e) {
	return e.endsWith('capture') && e !== 'gotpointercapture' && e !== 'lostpointercapture';
}
const Y = [
	'beforeinput',
	'click',
	'change',
	'dblclick',
	'contextmenu',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keyup',
	'mousedown',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'pointerdown',
	'pointermove',
	'pointerout',
	'pointerover',
	'pointerup',
	'touchend',
	'touchmove',
	'touchstart'
];
function ne(e) {
	return Y.includes(e);
}
const J = {
	formnovalidate: 'formNoValidate',
	ismap: 'isMap',
	nomodule: 'noModule',
	playsinline: 'playsInline',
	readonly: 'readOnly',
	defaultvalue: 'defaultValue',
	defaultchecked: 'defaultChecked',
	srcobject: 'srcObject',
	novalidate: 'noValidate',
	allowfullscreen: 'allowFullscreen',
	disablepictureinpicture: 'disablePictureInPicture',
	disableremoteplayback: 'disableRemotePlayback'
};
function ie(e) {
	return ((e = e.toLowerCase()), J[e] ?? e);
}
const Q = ['touchstart', 'touchmove'];
function oe(e) {
	return Q.includes(e);
}
const Z = ['textarea', 'script', 'style', 'title'];
function se(e) {
	return Z.includes(e);
}
const $ = new Set(),
	ee = new Set();
function x(e, t, i, n = {}) {
	function r(a) {
		if ((n.capture || te.call(t, a), !a.cancelBubble)) return I(() => i?.call(this, a));
	}
	return (
		e.startsWith('pointer') || e.startsWith('touch') || e === 'wheel'
			? C(() => {
					t.addEventListener(e, r, n);
				})
			: t.addEventListener(e, r, n),
		r
	);
}
function ue(e, t, i, n = {}) {
	var r = x(t, e, i, n);
	return () => {
		e.removeEventListener(t, r, n);
	};
}
function le(e, t, i, n, r) {
	var a = { capture: n, passive: r },
		s = x(e, t, i, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
		k(() => {
			t.removeEventListener(e, s, a);
		});
}
function ce(e) {
	for (var t = 0; t < e.length; t++) $.add(e[t]);
	for (var i of ee) i(e);
}
let m = null;
function te(e) {
	var t = this,
		i = t.ownerDocument,
		n = e.type,
		r = e.composedPath?.() || [],
		a = r[0] || e.target;
	m = e;
	var s = 0,
		u = m === e && e.__root;
	if (u) {
		var p = r.indexOf(u);
		if (p !== -1 && (t === document || t === window)) {
			e.__root = t;
			return;
		}
		var v = r.indexOf(t);
		if (v === -1) return;
		p <= v && (s = p);
	}
	if (((a = r[s] || e.target), a !== t)) {
		O(e, 'currentTarget', {
			configurable: !0,
			get() {
				return a || i;
			}
		});
		var L = F,
			N = P;
		(E(null), g(null));
		try {
			for (var c, y = []; a !== null; ) {
				var h = a.assignedSlot || a.parentNode || a.host || null;
				try {
					var f = a['__' + n];
					if (f != null && (!a.disabled || e.target === a))
						if (D(f)) {
							var [M, ...R] = f;
							M.apply(a, [e, ...R]);
						} else f.call(a, e);
				} catch (d) {
					c ? y.push(d) : (c = d);
				}
				if (e.cancelBubble || h === t || h === null) break;
				a = h;
			}
			if (c) {
				for (let d of y)
					queueMicrotask(() => {
						throw d;
					});
				throw c;
			}
		} finally {
			((e.__root = t), delete e.currentTarget, E(L), g(N));
		}
	}
}
let o;
function fe() {
	o = void 0;
}
function de(e) {
	let t = null,
		i = l;
	var n;
	if (l) {
		for (
			t = _, o === void 0 && (o = A(document.head));
			o !== null && (o.nodeType !== H || o.data !== W);

		)
			o = b(o);
		o === null ? w(!1) : (o = T(b(o)));
	}
	l || (n = document.head.appendChild(V()));
	try {
		S(() => e(n), B);
	} finally {
		i && (w(!0), (o = _), T(t));
	}
}
function _e(e, t, ...i) {
	var n = e,
		r = K,
		a;
	(S(() => {
		r !== (r = t()) && (a && (X(a), (a = null)), (a = U(() => r(n, ...i))));
	}, G),
		l && (n = _));
}
function pe(e) {
	return (t, ...i) => {
		var n = e(...i),
			r;
		if (l) ((r = _), j());
		else {
			var a = n.render().trim(),
				s = q(a);
			((r = A(s)), t.before(r));
		}
		const u = n.setup?.(r);
		(z(r, r), typeof u == 'function' && k(u));
	};
}
export {
	$ as a,
	fe as b,
	pe as c,
	de as d,
	re as e,
	x as f,
	ce as g,
	te as h,
	oe as i,
	ne as j,
	se as k,
	le as l,
	ie as n,
	ue as o,
	ee as r,
	_e as s
};
