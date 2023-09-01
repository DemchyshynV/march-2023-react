const carActionTypes = {
    SET_CARS: 'SET_CARS',
    TRIGGER_CARS: 'TRIGGER_CARS'
}


const carActions = {
    setCars: (cars) => ({type: carActionTypes.SET_CARS, payload: cars}),
    trigger: () => ({type: carActionTypes.TRIGGER_CARS})
}

const carInitialState = {
    cars: [],
    trigger: null
}

const carReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.SET_CARS:
            state.cars = action.payload
            break
        case carActionTypes.TRIGGER_CARS:
            state.trigger = !state.trigger
            break
        default:
            return state
    }
    return {...state}
}

export {
    carActions,
    carReducer,
    carInitialState
}