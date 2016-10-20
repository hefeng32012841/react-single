import React, { Component } from 'react'
import AddTodo from './views/AddTodo'
// import TodoList from './views/TodoList'
// import Footer from './views/Footer'

export default class App extends Component {
	render() {
		return (
			<div className="root">
				<AddTodo />
			</div>
		)
	}
}
