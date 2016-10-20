import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './app'
import store from './stores'

export default class Index extends Component {
    render() {
        return (
            <Provider store={ store }>
                <App />
            </Provider>
        )
    }
}
