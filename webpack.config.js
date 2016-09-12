var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js',
        styles: './src/sass/main_global.scss'
    },

    output: {
        filename: 'js/[name].js',
        path: './css',
        publicPath: ''
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract('style', 'css?minimize!resolve-url!sass?sourceMap')
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
            },
            {
                test: /\.css$/,
                //loader: ExtractTextPlugin.extract('style', 'css?minimize')
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file?name=css/[name].[ext]'
                //loader: 'url?limit=10240&name=css/[name].[ext]'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        })/*,
        new webpack.optimize.UglifyJsPlugin({minimize: true})*/
    ]
}
