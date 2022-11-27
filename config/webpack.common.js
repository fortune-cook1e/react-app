const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const deps = require('../package.json').dependencies

const paths = require('./paths')
const antdTheme = require('./theme')

const isDev = process.env.NODE_ENV === 'development'
const analyse = process.env.ANALYSE === '1'

const jstsRegex = /\.(js|jsx|ts|tsx)$/
const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/
const assetRegex = /\.(png|svg|jpg|jpeg|gif|json)$/i

const smp = new SpeedMeasurePlugin()

const cssModuleOptions = (type, useModules) => {
  const options = { importLoaders: type || 1 }
  if (useModules) {
    options.modules = {
      localIdentName: '[path][name]_[hash:base64:5]',
      // localIdentContext: paths.src,
      exportLocalsConvention: 'camelCase'
    }
  }
  return options
}

const lessOptions = () => {
  const lessOptions = {
    // modifyVars: antdTheme,
    javascriptEnabled: true
  }
  return {
    lessOptions
  }
}

const config = smp.wrap({
  // FIXBUG: 解决webpack-dev-server 热更新未开启bug
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  entry: {
    app: paths.src + '/Main.tsx'
  },
  output: {
    path: paths.build,
    publicPath: isDev ? '/' : './',
    filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[contenthash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': paths.src
    },
    // FIXBUG: 解决react-dnd 不兼容 react17问题
    // see:https://github.com/react-dnd/react-dnd/issues/3423
    fallback: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
      'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      fs: false
    }
  },
  module: {
    rules: [
      {
        test: jstsRegex,
        include: paths.src,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      },
      // {
      //   test: jstsRegex,
      //   include: paths.src,
      //   use: {
      //     loader: 'swc-loader',
      //     options: {
      //       sync: true
      //     }
      //   }
      // },
      {
        test: cssRegex,
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader'
        ],
        sideEffects: true
      },
      {
        test: cssModuleRegex,
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, true)
          },
          'postcss-loader'
        ],
        sideEffects: true
      },
      {
        test: lessRegex,
        include: paths.src,
        exclude: [lessModuleRegex],
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOptions(1, false)
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: lessOptions()
          }
        ],
        sideEffects: true
      },
      {
        test: lessModuleRegex,
        include: paths.src,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: cssModuleOptions(1, true) },
          'postcss-loader',
          { loader: 'less-loader' }
        ],
        sideEffects: true
      },
      {
        test: assetRegex,
        include: paths.src,
        type: 'asset/resource'
      }
    ].filter(Boolean)
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Webpack Template',
      template: paths.public + '/index.html', // template file
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html', // output file
      inject: 'body' // script插入body底部
    }),

    // new Dotenv(),
    isDev && new ReactRefreshWebpackPlugin({ overlay: false }),
    analyse && new BundleAnalyzerPlugin()
    // 	new ErrorPlugin(),
    // new ModuleFederationPlugin({
    // 	name: 'reactApp',
    // 	remotes: {
    // 		// cookieComponent:
    // 		// 	'cookieComponent@http://localhost:8888/cookie-component.js'
    // 		// cookieComponent:
    // 		// 	'cookieComponent@https://fortune-cook1e.github.io/react-component-rollup/cookie-component.js'
    // 	},

    // 	shared: {
    // 		// ...deps,
    // 		react: {
    // 			singleton: true,
    // 			eager: true,
    // 			requiredVersion: deps.react
    // 		},
    // 		'react-dom': {
    // 			singleton: true,
    // 			eager: true,
    // 			requiredVersion: deps['react-dom']
    // 		}
    // 	}
    // })
  ].filter(Boolean)
})

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: 'styles/[id].[contenthash].css'
  })
)

module.exports = config
