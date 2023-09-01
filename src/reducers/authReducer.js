const authActionTypes = {
    SET_ME: 'SET_ME'
}

const authActions = {
    setMe: (me) => ({type: authActionTypes.SET_ME, payload: me})
}

const authInitialState = {
    me: null
}
const authReducer = (state, action) => {
    switch (action.type) {
        case authActionTypes.SET_ME:
            state.me = action.payload
            break
        default:
            return state
    }
    return {...state}
}

export {
    authReducer,
    authActions,
    authInitialState
}