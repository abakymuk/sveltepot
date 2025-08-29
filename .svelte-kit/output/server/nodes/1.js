export const index = 1;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/1.BDNDAt_P.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/D36tYwTZ.js',
	'_app/immutable/chunks/Bkrak6hP.js',
	'_app/immutable/chunks/B9nppItn.js',
	'_app/immutable/chunks/DqcR2uyH.js',
	'_app/immutable/chunks/Vt3J8MqF.js',
	'_app/immutable/chunks/B1Jm2Y4R.js'
];
export const stylesheets = [];
export const fonts = [];
