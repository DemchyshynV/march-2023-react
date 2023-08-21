import {useLocation, Location} from "react-router-dom";

interface IState<STATE> extends Location {
    state: STATE
}

const useAppLocation = <T>(): IState<T> => useLocation()

export {
    useAppLocation
}
