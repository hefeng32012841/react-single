import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers/'

const reducer = combineReducers({
	...reducers
})

export default function configure(preloadedState) {
	return createStore(
		reducer,
		preloadedState,
		applyMiddleware(thunkMiddleware, createLogger())
	)
}