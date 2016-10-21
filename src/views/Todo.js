import React, { Component } from 'react'

class Todo extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { index, text, completed } = this.props
        return (
            <li className={ completed ? 'completed' : '' } onClick={ this.props.onCompleteItem }>
                { text }
            </li>
        )
    }
}

export default Todo
