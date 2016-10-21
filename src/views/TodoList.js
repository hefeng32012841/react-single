import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { todoListAction } from '../actions/todoListAction'
import Todo from './Todo'

export default class TodoList extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { todos } = this.props
        return (
            <ul>
                { 
                    todos.map((todo, index) => 
                        <Todo
                            key={ index }
                            { ...todo }
                            onCompleteItem={ () => this.props.onComplete(todo.index) }
                        />)
                }
            </ul>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todos,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }
// export default connect(
//     mapStateToProps
// )(TodoList)
