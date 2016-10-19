/**
 * @file SectionBar.test.js
 * @author yangzhou@jingoal.com
 *
 * SectionBar组件测试
 */

import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import SectionBar from '../src/views/SectionBar'

describe('Test SectionBar', function () {
    it('根据sectionName展示SectionBar', function () {
        const sName = '测试sectionName'
        let $wrapper = shallow(<SectionBar sectionName={sName}/>)
        expect($wrapper.type()).to.equal('h1')
        expect($wrapper.text()).to.equal(sName)
    })
})
