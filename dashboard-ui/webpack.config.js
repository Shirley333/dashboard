var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        dashboard: './src/containers/dashboard'
    },
    // 'eventsource-polyfill',
    // 'webpack-hot-middleware/client?reload=true',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js',
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            filename: 'views/dashboard.html',
            template: 'index.html',
            files: {
                js: 'js/dashboard.bundle.js'
            },
            inject: true,//script标签放的位置,"head"
            minify: {
                removeComments: true,
                // collapseWhitespace:true
            }//对html进行压缩
        })
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]
    }

};
