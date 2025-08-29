export const index = 0;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default);
export const imports = [
	'_app/immutable/nodes/0.DNR2IhV5.js',
	'_app/immutable/chunks/DsnmJJEf.js',
	'_app/immutable/chunks/DNHTCZ5S.js',
	'_app/immutable/chunks/CqHW6ZLX.js'
];
export const stylesheets = ['_app/immutable/assets/0.Fx1KqetI.css'];
export const fonts = [];
