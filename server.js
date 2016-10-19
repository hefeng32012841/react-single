/**
 * @file server.js
 * @author denglb@jingoal.com
 *
 * 本地Web开发服务
 * dev模式启动命令：node server.js
 * prod模式启动命令：node server.js prod
 */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webConfig = require('./web.config');
var webpackDevConfig = require('./webpack.config.dev');
var webpackProdConfig = require('./webpack.config.prod');

var isProd = process.argv[2] === 'prod';
console.info('-----------isProd:', isProd);

var compiler = webpack(isProd ? webpackProdConfig : webpackDevConfig);

/**
 * webpack dev server 配置
 */
var server = new WebpackDevServer(compiler, {
    contentBase: '',
    publicPath: '/',
    noInfo: false,
    hot: true,
    port: webConfig.port,
    historyApiFallback: true,
    compress: true,
    inline: true,
    watch: true,
    stats: {
        cached: false,
        colors: true
    }
});

server.app.use(webpackHotMiddleware(compiler));

/**
 * 启动本地服务环境
 */
server.listen(webConfig.port, webConfig.host, function (error) {
    /* eslint-disable */
    if (error) {
        console.error(error);
    } else {
        console.info('==> Listening on port %s. ' +
            'Open up http://' + webConfig.host + ':%s/ in your browser.',
            webConfig.port, webConfig.port);
    }
    /* eslint-enable */
});
