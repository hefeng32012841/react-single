import React, { Component } from 'react'
import AddTodo from './views/AddTodo'
import TodoList from './views/TodoList'
import Footer from './views/Footer'
import { connect } from 'react-redux'
import { addAction, completeAction, filterAction } from './actions/actionCreator'
import './styles/style.scss'

class App extends Component {
	render() {
        const { addDispatch, completeDispatch, switchFilterDispatch } = this.props
		return (
			<div className="root">
				<AddTodo
                    onAddClick={ addDispatch }
                />
                <TodoList
                    todos={ this.props.todos }
                    onComplete={ completeDispatch }
                />
                <Footer
                    visibilityFilter={ this.props.visibilityFilter }
                    onSwitchFilter={ switchFilterDispatch }
                />
			</div>
		)
	}
}

function slectTodo(todos = [], filter) {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_NOT_COMPLETED':
            return todos.filter(todo => !todo.completed)
    }
    return todos
}

const mapStateToProps = (state) => {
    return {
        todos: slectTodo(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = {
    addDispatch: text => addAction(text),
    completeDispatch: index => completeAction(index),
    switchFilterDispatch: filter => filterAction(filter)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
