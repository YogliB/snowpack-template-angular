/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
		'out-tsc/app': '/_dist_',
	},
	plugins: [
		[
			'@snowpack/plugin-run-script',
			{
				cmd: 'ngcc --tsconfig ./tsconfig.app.json',
				output: 'stream',
			},
		],
		[
			'@snowpack/plugin-run-script',
			{
				cmd: 'ngc --project ./tsconfig.app.json',
				output: 'stream',
			},
		],
		'@snowpack/plugin-dotenv',
	],
	install: [
		/* ... */
	],
	installOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
	proxy: {
		/* ... */
	},
	alias: {
		/* ... */
	},
};
