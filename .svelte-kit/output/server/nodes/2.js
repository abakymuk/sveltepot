export const index = 2;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_page.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/2.sjTigZiF.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/D36tYwTZ.js',
	'_app/immutable/chunks/Bkrak6hP.js'
];
export const stylesheets = ['_app/immutable/assets/2.CaW0-4hz.css'];
export const fonts = [];
