const changeNameApp = (state = {name: "unknown"}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { name: action.name }
        default:
            return state
    }
}

export default changeNameApp