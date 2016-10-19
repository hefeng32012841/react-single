var lodash  = require('lodash')
var express = require('express')
var webConfig = require('../web.config')

function MockUtil() {
    this.routers = []
}

MockUtil.prototype.addRouter = function(method, url, fn, httpStatus, neverRemote) {
    var r = express.Router()
    httpStatus = httpStatus ? httpStatus : 200
    if (lodash.isPlainObject(fn)) {
        var result = fn
        fn = function (req, res, next) {
            if (!webConfig.remoteDebug || neverRemote) {
                res.status(httpStatus).send(JSON.stringify(result))
            } else {
                next()
            }
        }
    }
    r[method.toLowerCase()](url, fn)
    this.routers.push(r)
}

MockUtil.prototype.getRouters = function() {
    return this.routers
}

module.exports = MockUtil