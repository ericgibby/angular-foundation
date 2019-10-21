const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'projects', 'angular-foundation'),
	devtool: 'source-map',
	entry: './src/scss/angular-foundation.scss',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [{ loader: MiniCssExtractPlugin.loader, options: { hmr: false } }, 'css-loader', 'sass-loader']
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist', 'angular-foundation')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'angular-foundation.css'
		})
	]
};
