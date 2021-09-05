const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const paths = require('./paths')
const commonConfig = require('./webpack.common')

const jstsRegex = /\.(js|jsx|ts|tsx)$/

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		static: paths.build,
		compress: true,
		hot: true,
		port: 8081
	}

	// module: {
	// 	rules: [
	// 		{
	// 			test: jstsRegex,
	// 			exclude: /node_modules/,
	// 			use: [
	// 				{
	// 					loader: 'babel-loader',
	// 					options: {
	// 						cacheDirectory: true,
	// 						plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
	// 					}
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean)
})
