/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
	},
	plugins: ['./plugin.js', '@snowpack/plugin-dotenv'],
	install: [
		/* ... */
	],
	installOptions: {
		installTypes: true,
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
