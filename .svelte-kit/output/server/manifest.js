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
				start: '_app/immutable/entry/start.CA-2n9Nb.js',
				app: '_app/immutable/entry/app.AY_ISb3A.js',
				imports: [
					'_app/immutable/entry/start.CA-2n9Nb.js',
					'_app/immutable/chunks/CEXL2NML.js',
					'_app/immutable/chunks/3b2-FxGb.js',
					'_app/immutable/chunks/Dw-cPJ-t.js',
					'_app/immutable/chunks/LeL_DqrY.js',
					'_app/immutable/entry/app.AY_ISb3A.js',
					'_app/immutable/chunks/Dw-cPJ-t.js',
					'_app/immutable/chunks/3b2-FxGb.js',
					'_app/immutable/chunks/LeL_DqrY.js',
					'_app/immutable/chunks/DsnmJJEf.js'
				],
				stylesheets: [],
				fonts: [],
				uses_env_dynamic_public: false
			},
			nodes: [
				__memo(() => import('./nodes/0.js')),
				__memo(() => import('./nodes/1.js')),
				__memo(() => import('./nodes/2.js'))
			],
			remotes: {},
			routes: [
				{
					id: '/',
					pattern: /^\/$/,
					params: [],
					page: { layouts: [0], errors: [1], leaf: 2 },
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
