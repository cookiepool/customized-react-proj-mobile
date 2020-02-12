const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.config.js');

module.exports = webpackMerge(webpackCommonConfig, {
  mode: 'development',
  devtool: "#@cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 9866,
    contentBase: './dist',
    clientLogLevel: 'error',
    overlay: {
      errors: true,
      warnings: true
    }
  }
})
