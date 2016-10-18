
webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        entry: ['babel-polyfill', 'whatwg-fetch', './src/index.js'],

        output: {
            filename: 'assets/js/bundle.js',
            publicPath: ''
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react'
                }
            ]
        }
    },
    {
        name: 'css',
        entry: {
            styles: [
                './src/sass/main_global.scss'
            ]
        },
    
        output: {
            filename: 'css/style.css',
            publicPath: ''
        },
    
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                },
                {
                    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                    //loader: 'file?name=css/[name].[ext]'
                    loader: 'url?limit=10240&name=css/[name].[ext]'
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('css/style.css', {
                allChunks: true
            })
        ]
    }
];
