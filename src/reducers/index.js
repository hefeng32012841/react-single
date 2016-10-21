export const inputValue = (state = '', action) => {
	switch(action.type) {
		case 'INPUT':
			return action.text
	}
	return state
}

export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    index: fixNewIndex(state)
                }
            ]
        case 'COMPLETE':
            return complete(state, action.index)
    }
    return state
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'FILTER':
            return action.filter
        default: 
            return state
    }
}

const fixNewIndex = state => {
    return state.length + 1
}

const complete = (state, index) => {
    let arrIndex = 0
    state.forEach((todo, i) => {
        todo.index === index && (arrIndex = i)
    })

    return [
        ...state.slice(0, arrIndex),
        Object.assign({}, state[arrIndex], {
            completed: !state[arrIndex].completed
        }),
        ...state.slice(arrIndex + 1)
    ]
}
