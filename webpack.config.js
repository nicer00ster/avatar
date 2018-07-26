const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');

module.exports = {
    entry: {
      app: './frontend/index.js',
      html: './frontend/index.html'
    },

    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'static/build/'),
    },

    // Uncomment this for production
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'bundle',
                    chunks: 'all'
                }
            }
        }
    },

    module: {
      rules: [
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
                'react'
              ],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
                'react',
              ],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebPackPlugin({
        template: './avatar/templates/index.html',
        filename: './index.html'
      }),
      new BundleTracker({ filename: './webpack-stats.json' })
    ]

};
