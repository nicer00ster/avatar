const webpack = require('webpack');
const merge = require('webpack-merge');
const main = require('./webpack.config.js');
const path = require('path');

module.exports = merge(main, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'static/build/'),
    historyApiFallback: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'react-hot-loader'
      }
    ]
  }

});
