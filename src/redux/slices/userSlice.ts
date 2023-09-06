import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";

interface IState {
    users: IUser[],
    user: string
}

const initialState: IState = {
    users: [],
    user: null
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.users = action.payload
        },
        setCurrent: (state, action) => {
            state.user = action.payload
        }
    }
})

const {reducer:userReducer, actions:userActions} = userSlice;

export {
    userReducer,
    userActions
}