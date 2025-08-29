export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.LOrFpYvE.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/Bkrak6hP.js',
	'_app/immutable/chunks/DqcR2uyH.js',
	'_app/immutable/chunks/C3jv8e36.js'
];
export const stylesheets = ['_app/immutable/assets/0.CLlhrD_4.css'];
export const fonts = [];
