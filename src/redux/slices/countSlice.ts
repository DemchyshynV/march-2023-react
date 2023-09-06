import {createSlice} from "@reduxjs/toolkit";

interface IState {
    count: number
}

const initialState: IState = {
    count: 0
}
const countSlice = createSlice({
    name: 'countSlice',
    initialState,
    reducers: {
        inc: state => {
            state.count += 1
        },
        dec: state => {
            state.count -= 1
        },
        reset: state => {
            state.count = 0
        }
    }
});

const {reducer: countReducer, actions: countActions} = countSlice;


export {
    countReducer,
    countActions
}