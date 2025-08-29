export const manifest = (() => {
	function __memo(fn) {
		let value;
		return () => (value ??= value = fn());
	}

	return {
		appDir: '_app',
		appPath: '_app',
		assets: new Set(['robots.txt']),
		mimeTypes: { '.txt': 'text/plain' },
		_: {
			client: {
				start: '_app/immutable/entry/start.CWXVJ6TD.js',
				app: '_app/immutable/entry/app.COK8ygMJ.js',
				imports: [
					'_app/immutable/entry/start.CWXVJ6TD.js',
					'_app/immutable/chunks/Vt3J8MqF.js',
					'_app/immutable/chunks/B1Jm2Y4R.js',
					'_app/immutable/chunks/Bkrak6hP.js',
					'_app/immutable/chunks/B9nppItn.js',
					'_app/immutable/chunks/DqcR2uyH.js',
					'_app/immutable/entry/app.COK8ygMJ.js',
					'_app/immutable/chunks/Bkrak6hP.js',
					'_app/immutable/chunks/B9nppItn.js',
					'_app/immutable/chunks/DqcR2uyH.js',
					'_app/immutable/chunks/DsnmJJEf.js',
					'_app/immutable/chunks/B1Jm2Y4R.js',
					'_app/immutable/chunks/C1k_MOeI.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js')),
				__memo(() => import('../output/server/nodes/3.js'))
			],
			remotes: {},
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
					endpoint: null
				},
				{
					id: '/playground/ui',
					pattern: /^\/playground\/ui\/?$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 3 },
					endpoint: null
				}
			],
			prerendered_routes: new Set([]),
			matchers: async () => {
				return {};
			},
			server_assets: {}
		}
	};
})();
