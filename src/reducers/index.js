export const inputValue = (state = '', action) => {
	switch(action.type) {
		case 'ADD':
			return ''
		case 'INPUT':
			return action.value
	}
	return state
} 