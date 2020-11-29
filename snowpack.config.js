/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
		'out-tsc/app': '/_dist_',
	},
	plugins: [
		'./plugin.js',
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
