/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: '/',
	},
	plugins: ['snowpack-plugin-angular'],
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
