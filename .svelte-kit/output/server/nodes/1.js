export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.iEzEmqdo.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/B_zhfS5Q.js',
	'_app/immutable/chunks/DNHTCZ5S.js',
	'_app/immutable/chunks/j99YIqQk.js',
	'_app/immutable/chunks/CqHW6ZLX.js',
	'_app/immutable/chunks/DpLAjxfr.js'
];
export const stylesheets = [];
export const fonts = [];
