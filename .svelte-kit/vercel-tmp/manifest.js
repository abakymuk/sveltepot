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
				start: '_app/immutable/entry/start.BGM8kfME.js',
				app: '_app/immutable/entry/app.Bxg9aUl4.js',
				imports: [
					'_app/immutable/entry/start.BGM8kfME.js',
					'_app/immutable/chunks/DGDjkSrj.js',
					'_app/immutable/chunks/3b2-FxGb.js',
					'_app/immutable/chunks/Dw-cPJ-t.js',
					'_app/immutable/chunks/LeL_DqrY.js',
					'_app/immutable/entry/app.Bxg9aUl4.js',
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
				__memo(() => import('../output/server/nodes/0.js')),
				__memo(() => import('../output/server/nodes/1.js')),
				__memo(() => import('../output/server/nodes/2.js'))
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
