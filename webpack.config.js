var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './runtime/stdlib'
  ],
  output: {
    path: path.join(__dirname, 'client'),
    publicPath: '/',
    filename: 'stdlib.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'runtime'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  }
};