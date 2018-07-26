var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
// use resolve() to normalize paths between unix/windows environments
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: __dirname + '/frontend',
    entry: {
      javascript: './App.js',
      html: './index.html'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },

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
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /^(?!.*\.{test,min}\.js$).*\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },

    plugins: [
        // ensure that we get a production build of any dependencies
        // this is primarily for React, where this removes 179KB from the bundle
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new HtmlWebPackPlugin({
          template: './index.html',
          filename: './index.html'
        })
    ]

};
