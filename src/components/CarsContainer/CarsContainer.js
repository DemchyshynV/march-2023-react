import {useSelector} from "react-redux";

import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    const {isLoading, errors} = useSelector(state => state.cars);
    return (
        <div>
            <CarForm/>
            <hr/>
            {isLoading && <h1>Loading....</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Cars/>
        </div>
    );
};

export {CarsContainer};
