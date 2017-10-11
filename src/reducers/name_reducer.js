const changeNameApp = (state = {name: "Frank"}, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { name: action.name }
        default:
            return state
    }
}

export default changeNameApp