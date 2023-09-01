import {createContext, useReducer} from "react";
import {carInitialState, carReducer} from "../reducers/carReducer";
import {authInitialState, authReducer} from "../reducers/authReducer";

const StateContext = createContext(null);
const Provider = ({children}) => {
    const reducers = {
        cars: useReducer(carReducer, carInitialState),
        auth:useReducer(authReducer, authInitialState)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    Provider,
    StateContext
};