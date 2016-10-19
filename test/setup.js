/**
 * @file setup.js
 * @author yangzhou@jingoal.com
 *
 * Mocha启动前执行，模拟构建一个真实的DOM环境
 */

import jsdom from 'jsdom'

if (typeof document === 'undefined') {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
    global.window = document.defaultView
    global.navigator = global.window.navigator

    global.window.matchMedia = window.matchMedia || function() {
        return {
            matches : false,
            addListener : function() {},
            removeListener: function() {}
        }
    }
}