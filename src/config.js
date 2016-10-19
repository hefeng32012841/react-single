/**
 * @file config.js
 * @author denglb@jingoal.com
 *
 * 前端基础配置
 */

import webConfig from '../web.config.js'

let config = {

    // 注释请保留, 发布在测试环境或生产环境时，debug 请务必确认为 false
    debug: false,

    API: {
        // 用于发送异步请求
        host: '',

        prefix: '/api/v1/',

        // dsp列表数据接口
        DSP_LIST: 'dsp',

        // 保存dsp接口，完整url为:dsp/${dspId}
        SAVE_DSP: 'dsp',

        // 增删改查（通过Method区分）免广告用户
        ADFREE_USER: 'uid',

        // 增删改查（通过Method区分）免广告企业
        ADFREE_COMPANY: 'cid',

        USER_SIGNIN: 'token'
    }
}

let env = {
    test: function () {
        config.API.host = 'http://admin.jinji.test1.com'
    },
    dev: function () {
        config.API.host = 'http://localhost:3000'
    }
}

if (config.debug) {
    env.dev()
}

export default config
