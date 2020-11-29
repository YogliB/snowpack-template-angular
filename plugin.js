const execa = require('execa');
const npmRunPath = require('npm-run-path');
const cwd = process.cwd();

function angularPlugin(_, { args } = {}) {
	return {
		name: 'snowpack-plugin-angular',
		async run({ isDev, log }) {
			return new Promise((resolve, reject) => {
				execa.commandSync(
					`ngcc ${
						args?.ngccArgs?.trim() ||
						'--tsconfig ./tsconfig.app.json'
					}`,
					{
						cwd,
						env: npmRunPath.env(),
						extendEnv: true,
						windowsHide: false,
						stdio: 'inherit',
					},
				);

				execa.commandSync(
					`ngc ${
						args?.ngcArgs?.trim() || '--project ./tsconfig.app.json'
					}`,
					{
						env: npmRunPath.env(),
						extendEnv: true,
						windowsHide: false,
						cwd,
						stdio: 'inherit',
					},
				);

				resolve();
			});
		},
	};
}

module.exports = angularPlugin;
