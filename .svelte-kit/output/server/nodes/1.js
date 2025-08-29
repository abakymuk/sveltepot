export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.C1eYEBon.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/BeTFHaFW.js',
	'_app/immutable/chunks/Dw-cPJ-t.js',
	'_app/immutable/chunks/3b2-FxGb.js',
	'_app/immutable/chunks/LeL_DqrY.js',
	'_app/immutable/chunks/DGDjkSrj.js'
];
export const stylesheets = [];
export const fonts = [];
