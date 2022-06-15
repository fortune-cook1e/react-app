const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const paths = require('./paths')
const commonConfig = require('./webpack.common')

const jstsRegex = /\.(js|jsx|ts|tsx)$/

const PORT = 8081

const API_PREFIX = '/api'
const API_HOST = 'http://localhost:3000'

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'cheap-source-map',
	devServer: {
		historyApiFallback: true,
		static: paths.build,
		compress: true,
		open: true,
		hot: true,
		port: PORT,
		client: {
			overlay: {
				errors: false,
				warnings: false
			}
		},
		proxy: {
			[`${API_PREFIX}`]: {
				target: API_HOST,
				pathRewrite: { [`^${API_PREFIX}`]: '' }
			}
		}
	},

	plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean)
})
