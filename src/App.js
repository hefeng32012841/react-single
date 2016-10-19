import React, {Component} from 'react'
import Header from './views/Header'
import Footer from './views/Footer'
import LeftSide from './views/LeftSide'

export default class App extends Component {
    render() {
        return (
            <div className="root">
                <Header/>
                <LeftSide/>
                <div id="main">{this.props.children}</div>
            </div>
        )
    }
}