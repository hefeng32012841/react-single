/**
 * @file Login.test.js
 * @author yangzhou@jingoal.com
 *
 * 登录组件测试
 */

import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import Login from '../src/views/Login'
import store from '../src/store'

describe('Test Login', () => {
    let $wrapper

    // 在本区块的所有测试用例之前执行
    before(() => {
        $wrapper = mount(<Login store={store}/>)
    })

    it('存在用户名和密码输入框', () => {
        const $name = $wrapper.find('#name')
        expect($name.type()).to.equal('input')
        expect($name.prop('placeholder')).to.equal('请输入账户名')

        const $pwd = $wrapper.find('#password')
        expect($pwd.type()).to.equal('input')
        expect($pwd.prop('type')).to.equal('password')
        expect($pwd.prop('placeholder')).to.equal('请输入密码')
    })

    it('输入用户名不满5个字符时显示提示信息', () => {
        // 初始时不显示提示
        expect($wrapper.find('.ant-form-explain').length).to.equal(0)

        // 在账户名框中输入4个字符，显示提示信息
        const $name = $wrapper.find('#name')
        $name.simulate('change', {target: {value: '1234'}})
        const $inputTip = $wrapper.find('.ant-form-explain')
        expect($inputTip.length).to.equal(1)
        expect($inputTip.text()).to.equal('用户名至少为 5 个字符')

        // 在账户名框中输入5个字符，隐藏提示信息
        $name.simulate('change', {target: {value: '12345'}})
        expect($wrapper.find('.ant-form-explain').length).to.equal(0)
    })
})
