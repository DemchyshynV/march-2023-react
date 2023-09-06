import {countActions} from "../redux/slices/countSlice";
import {useAppDispatch} from "../hooks/useAppDispatch";

const CountPage = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(countActions.inc())}>inc</button>
            <button onClick={()=>dispatch(countActions.dec())}>dec</button>
            <button onClick={()=>dispatch(countActions.reset())}>res</button>
        </div>
    );
};

export {CountPage};