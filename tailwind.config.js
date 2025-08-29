import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {}
	},
	plugins: [flowbite]
};
