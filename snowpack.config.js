/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	extends: 'snowpack-plugin-angular/snowpack.config.js',
	mount: { public: '/' },
	alias: {
		styles: './public/styles',
	},
};
