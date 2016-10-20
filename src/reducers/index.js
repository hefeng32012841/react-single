export function value(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
        case 'SYNC':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'ODD':
            return (Math.abs(state % 2) === 1) ? state + 1 : state
        default:
            return state
    }
}
