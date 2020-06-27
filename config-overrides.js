const path = require('path');
const {
	override,
	addBabelPlugin,
	addWebpackAlias,
} = require('customize-cra');


module.exports = override(
	addBabelPlugin([
		'babel-plugin-root-import',
		{
			rootPathPrefix: '~',
			rootPathSuffix: 'src',
		},
	]),
	addWebpackAlias({
		src: path.resolve(__dirname, 'src'),
	}),
);
