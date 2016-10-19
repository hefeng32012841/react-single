import React, { PropTypes, Component } from 'react'
import { Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import 'antd/dist/antd.css'
import "./style/index.scss"
import store from './store'

import App from './App'
import Dsp from './views/dsp/Dsp'
import Login from './views/Login'
import AdFreeMainTab from './views/adFree/MainTab'

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={App}>
                        <IndexRoute component={Dsp} />
                        <Route path="dsp" component={Dsp}/>
                        <Route path="adFree" component={AdFreeMainTab}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}