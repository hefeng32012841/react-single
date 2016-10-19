/**
 * @file server.js
 * @author denglb@jingoal.com
 *
 * mock server
 */

var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync(__dirname + '/ssl/server.key'),
    cert: fs.readFileSync(__dirname + '/ssl/server.crt')
};

/**
 * 获取头信息
 *
 * @param {string} origin, 来源
 * @return {Object} 头信息
 */
var getHeaders = function (origin) {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        // 解决跨域, 允许任意 origin
        'Access-Control-Allow-Origin': origin,
        // 前端使用 withCredentials: true 来模拟 cookie 传递，同时 Origin 不能用 *
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'token, Origin, X-Requested-With, Content-Type, Accept'
    };
};

/**
 * 获取头信息
 *
 * @param {Request} req, request
 * @param {Response} res, response
 * @param {string} dir, 目录位置字符串
 */
var requestHandler = function (req, res, dir) {
    var url = req.url.replace(/(\?.+)/, '');
    var origin = req.headers.origin;

    var expr = /\/api\/(.+)/.exec(url);
    var file = null;

    if (expr && expr.length > 1) {
        file = dir + expr[1] + '.json';

        /* eslint-disable */
        console.log(file);
        /* eslint-enable */

        try {
            var buffer = fs.readFileSync(file);

            res.writeHead(200, getHeaders(origin));

            res.end(JSON.stringify(JSON.parse(buffer)));
        }
        catch (ex) {

            // 模拟等待 1 秒钟
            setTimeout(function () {

                res.writeHead(404, getHeaders(origin));

                res.end(JSON.stringify({
                    error: ex
                }));
            }, 1000);
        }
    }
    // 无法匹配 request url
    else {

        res.writeHead(404, getHeaders(origin));

        res.end(JSON.stringify({
            error: '[' + url + '] Error.'
        }));
    }
};

module.exports = function (config) {
    var server;

    if (!config.isHttps) {
        server = http.createServer(function (req, res) {
            requestHandler(req, res, config.dir);
        });
    }
    else {
        server = https.createServer(options, function (req, res) {
            requestHandler(req, res, config.dir);
        });
    }

    server.listen(config.port, config.host);

};
