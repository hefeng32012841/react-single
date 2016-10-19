/**
 * @file webpack.config.dev.js
 * @author yangzhou@jingoal.com
 *
 * webpack dev配置
 */

var path = require('path');
var webpack = require('webpack');
var webConfig = require('./web.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    /**
     * 配置 js 入口
     */
    entry: {
        index: [
            // 热部署需要的配置
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://'
                + webConfig.host + ':' + webConfig.port,
            'webpack/hot/only-dev-server',
            // 入口js
            path.join(__dirname, '/index.js')
        ],
        common: ['react-router', 'react-redux', 'redux-thunk',
            'jquery', 'antd', 'moment', 'lodash'],
    },

    /**
     * 打包目录配置
     */
    output: {
        path: path.join(__dirname, 'dist'),
        // 输出文件
        filename: '[name].js',
        // 发布路径
        publicPath: './',
        // 需要被异步加载的文件
        chunkFilename: '[chunkhash:8].chunk.js'
    },

    /**
     * webpack 插件集合
     */
    plugins: [
        new webpack.NoErrorsPlugin(),

        // to: 实际为 path/xxx
        new CopyPlugin([
            {
                from: path.join(__dirname, '/vendors/'),
                to: './vendors/'
            }
        ]),

        // 提取样式组件
        new ExtractTextPlugin('css/[name].css'),

        new webpack.ProgressPlugin(function (percentage, msg) {
            /* eslint-disable */
            console.log('progress: ' + percentage.toFixed(2) + ' -- ' + msg);
            /* eslint-enable */
        }),

        // 提供共用插件
        new webpack.optimize.CommonsChunkPlugin({
            names: 'common'
        }),

        // Html 插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // 模板源位置
            template: path.join(__dirname, '/index.html'),
            // 设置 js 入口
            chunks: ['common', 'index'],
            // script 插入位置
            inject: 'body'
        }),

        new webpack.DefinePlugin({
            // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),

        new webpack.HotModuleReplacementPlugin(),
    ],

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },

    /**
     * 模块加载器
     */
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: path.join(__dirname, 'node_modules'),
            },
        ],

        loaders: [
            // js|jsx 加载器
            // Reference: https://github.com/webpack/babel
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    "presets": ["es2015", "stage-0", "react"],
                    "plugins": [
                        'babel-plugin-transform-runtime',
                        'babel-plugin-add-module-exports',
                        'babel-plugin-transform-decorators-legacy',
                        "react-hot-loader/babel",
                    ],
                    "env": {
                        "development": {
                            "presets": ["react-hmre"]
                        }
                    },
                },
                exclude: path.join(__dirname, 'node_modules')
            },

            // sass 加载器
            // Reference: https://github.com/webpack/style-loader
            // Reference: https://github.com/webpack/css-loader
            // Reference: https://github.com/webpack/sass-loader
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
            },

            // css 加载器
            // Reference: https://github.com/webpack/style-loader
            // Reference: https://github.com/webpack/css-loader
            // Reference: https://github.com/webpack/autoprefixer-loader
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'autoprefixer-loader?minimize')
            },
            // 模板 加载器
            // Reference: https://github.com/webpack/html-loader
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    devtool: 'source-map',

    eslint: {
        configFile: './.eslintrc'
    }
};