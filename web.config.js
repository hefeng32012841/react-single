/**
 * @file web.config.js
 * @author denglb@jingoal.com
 *
 * Node 服务配置
 */

var path = require('path');

var config = {
    /**
     * dev 开关
     * @params {boolean} true, false
     */
    debug: true,

    /**
     * dev host
     * @params {string}
     */
    host: '127.0.0.1',

    /**
     * publicPath
     * @params {string}
     */
    publicPath: '',

    /**
     * 监听端口
     * @params {number}
     */
    port: 4000,

    secure: true
};

module.exports = config;
