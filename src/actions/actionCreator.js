export const addAction = text => ({
    type: 'ADD',
    text
})

export const completeAction = index => ({
    type: 'COMPLETE',
    index
})

export const changeAction = text => ({
    type: 'INPUT',
    text
})

export const filterAction = filter => ({
    type: 'FILTER',
    filter
})
