const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	mode: 'production',

	entry: {
		'Hello': './src/Hello.vue',
		'World': './src/World.vue',
	},

	output: {
		filename: '[name].js',
		path: path.resolve('dist'),
		libraryTarget: 'umd',

		// https://github.com/webpack/webpack/issues/6525
		globalObject: `(typeof window !== 'undefined' ? window : this)`,
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'vue-style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
	            default: false,
	            common: false,
				styles: {
					name: 'styles',
					test(file) {
						return file.type.match(/css/);
					},
					chunks: 'initial',
					minChunks: 1,
					enforce: true,
				},
			},
		},
		minimizer: [],
	},

	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
};
