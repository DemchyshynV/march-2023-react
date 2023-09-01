import {useReducer} from "react";

const initialState = {
    count1: 0,
    count2: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INC_COUNT1':
            state.count1++
            break
        case 'DEC_COUNT1':
            state.count1--
            break
        case 'RESET_COUNT1':
            state.count1 = 0
            break
        case 'INC_COUNT2':
            state.count2++
            break
        case 'DEC_COUNT2':
            state.count2--
            break
        case 'RESET_COUNT2':
            state.count2 = 0
            break
        default:
            return state
    }
    return {...state}
}
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                count1: {state.count1}
                <button onClick={()=>dispatch({type:'INC_COUNT1'})}>inc</button>
                <button onClick={()=>dispatch({type:'DEC_COUNT1'})}>dec</button>
                <button onClick={()=>dispatch({type:'RESET_COUNT1'})}>res</button>
            </div>
            <div>
                count2: {state.count2}
                <button onClick={()=>dispatch({type:'INC_COUNT2'})}>inc</button>
                <button onClick={()=>dispatch({type:'DEC_COUNT2'})}>dec</button>
                <button onClick={()=>dispatch({type:'RESET_COUNT2'})}>res</button>
            </div>
        </div>
    );
};

export {App};
