const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.config.js');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [

    ]
  },
  plugins: [
    
  ]
})