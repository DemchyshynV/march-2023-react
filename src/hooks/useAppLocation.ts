import {useLocation, Location} from "react-router-dom";

interface ILocation<StateType> extends Location {
    state: StateType
}

const useAppLocation = <State>() => useLocation() as ILocation<State>

export {
    useAppLocation
}

