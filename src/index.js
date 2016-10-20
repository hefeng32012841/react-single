import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute } from 'react-router'
import store from './stores'
import App from './App'

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
