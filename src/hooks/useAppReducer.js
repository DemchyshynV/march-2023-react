import {useContext} from "react";
import {StateContext} from "../hoc/Provider";

const useAppReducer = (cb)=>cb(useContext(StateContext))


// const getReducer =(reducers)=>{
//     return reducers.cars
// }
// useAppReducer(reducers=>reducers.)

export {
    useAppReducer
}