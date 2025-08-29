export const index = 3;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/playground/ui/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/3.DOXEY6ew.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/D36tYwTZ.js',
	'_app/immutable/chunks/Bkrak6hP.js',
	'_app/immutable/chunks/B9nppItn.js',
	'_app/immutable/chunks/DqcR2uyH.js',
	'_app/immutable/chunks/C1k_MOeI.js',
	'_app/immutable/chunks/C3jv8e36.js'
];
export const stylesheets = ['_app/immutable/assets/3.CD54FDqW.css'];
export const fonts = [];
