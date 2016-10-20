import React, { Component } from 'react'
// import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions/actionCreator'

export class AddTodo extends Component {
	constructor(props) {
		super(props)
	}

	addHandle(e) {
		const { onClick } = this.props
		// const input = findDOMNode(this.refs.input)
		// const value = input.value
		const value = e.target.value
		onClick(value)
	}

	changeHandle(e) {
		const { onChange } = this.props
		// const input = findDOMNode(this.refs.input)
		// const value = input.value
		const value = e.target.value
		onChange(value)
	}

	render() {
		const { value } = this.props
		return (
			<div className="add-todo">
				<input type="text" value={ value } 
				ref="input" onChange={ e => this.changeHandle(e) } />
				<button onClick={ e => this.addHandle(e) }>add</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		value: state.inputValue
	}
}

const mapDispatchToProps = {
	onClick: value => addTodoAction('ADD' ,value),
	onChange: value => addTodoAction('INPUT', value),
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)
