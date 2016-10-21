import React, { Component } from 'react'
import { filterAction } from '../actions/actionCreator'

export default class Footer extends Component {
    filterArr = [
        {
            filter: 'SHOW_ALL',
            text: 'show all'
        },
        {
            filter: 'SHOW_COMPLETED',
            text: 'show completed'
        },
        {
            filter: 'SHOW_NOT_COMPLETED',
            text: 'show not completed'
        }
    ]

    render() {
        const { visibilityFilter, onSwitchFilter } = this.props
        return (
            <div className="footer">
                {
                    this.filterArr.map((filterItem, index) => {
                        return (
                            <span 
                                className={visibilityFilter === filterItem.filter ? 'curr' : ''} 
                                key={index} 
                                filter={filterItem.filter}
                                onClick={() => onSwitchFilter(filterItem.filter)}
                            >
                                {filterItem.text}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}