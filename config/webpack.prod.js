const { resolve } = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')

const paths = require('./paths.js')
const common = require('./webpack.common.js')

function resolveDir(dir) {
  return resolve(__dirname, dir)
}

const clearPath = resolveDir('../dist')

const REACT_MODULE =
  /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-config|react-router-dom|react-router-redux|redux|react-transition-group|framer-motion)[\\/]/

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanOnceBeforeBuildPatterns: [clearPath, clearPath]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolveDir('../public/models'),
          to: paths.build + '/models'
        }
      ]
    })
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    splitChunks: {
      chunks: 'all',
      minChunks: 3,
      cacheGroups: {
        // vendor: {
        //   test: regVendor,
        //   name: 'vendor',
        //   minChunks: 1,
        //   priority: 10,
        //   enforce: true,
        //   chunks: 'all'
        // },
        react: {
          test: REACT_MODULE,
          name: 'react',
          minChunks: 1,
          priority: 10,
          enforce: true,
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})
