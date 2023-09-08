import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../services/userService";
import {AxiosError} from "axios";

interface IState {
    users: IUser[],
    selectedUsers: IUser[],
    error:any
}

const initialState: IState = {
    users: [],
    selectedUsers: [],
    error:null
}

// const getAll = createAsyncThunk<void, void>(
//     'userSlice/getAll',
//     async (_, {dispatch}) => {
//         try {
//             const {data} = await userService.getAll();
//             dispatch(userActions.setAll(data))
//         } catch (e) {
//
//         }
//     }
// )
const getAll = createAsyncThunk<IUser[], void>(
    'userSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // setAll: (state, action) => {
        //     state.users = action.payload
        // },
        setCurrent: (state, action) => {
            state.selectedUsers = action.payload
        }
    },
    extraReducers:builder => builder
        .addCase(getAll.fulfilled,(state, action) => {
            state.users = action.payload
        })
        // .addCase(getAll.pending,(state, action) => {
        //
        // })
        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
        })
        // .addMatcher(isPending(),(state, action) => {
        //
        // })
})

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions,
    getAll
}
export {
    userReducer,
    userActions
}