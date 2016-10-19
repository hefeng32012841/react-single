/**
 * @file webpack.config.js
 * @author denglb@jingoal.com
 *
 * Webpack 构建入口
 * 构建dev包时在命令行执行：webpack -dev
 * 构建prod包时在命令行执行：webpack
 */

var isDev = process.argv[2] === '-dev';
console.info('---------isDev:', isDev);

module.exports = isDev ?
    require('./webpack.config.dev') :
    require('./webpack.config.prod');