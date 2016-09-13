webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//webpackConfig = {
//    entry: {
//        bundle: './src/index.js',
//        styles: './src/sass/main_global.scss'
//    },
//    output: {
//        filename: 'assets/js/bundle.js',
//        publicPath: ''
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'
//            },
//            {
//                test: /main_global\.scss$/,
//                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
//            },
//            {
//                test: /\.css$/,
//                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//            },
//            {
//                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
//                loader: 'file-loader'
//            }
//        ]
//    },
//    plugins: [
//        new ExtractTextPlugin('css/styles.css', {
//            allChunks: true
//        })
//    ]
//};
//module.exports = webpackConfig;

module.exports = [
    {
        entry: './src/index.js',

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
    }
    //{
    //    name: 'css',
    //    entry: {
    //        styles: [
    //            './src/sass/main_global.scss'
    //        ]
    //    },
    //
    //    output: {
    //        filename: 'css/main.css',
    //        publicPath: ''
    //    },
    //
    //    module: {
    //        loaders: [
    //            {
    //                test: /\.scss$/,
    //                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
    //            },
    //            {
    //                test: /\.css$/,
    //                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    //            }
    //            //,
    //            //{
    //            //    test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
    //            //    loader: 'file-loader'
    //            //}
    //        ]
    //    },
    //    plugins: [
    //        new ExtractTextPlugin('css/main.css', {
    //            allChunks: true
    //        })
    //    ]
    //}
];