import {Dispatch, FC, PropsWithChildren, SetStateAction} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    car: ICar,
    setCarForUpdate: Dispatch<SetStateAction<ICar>>,
    setTrigger: Dispatch<SetStateAction<boolean>>
}

const Car: FC<IProps> = ({car, setCarForUpdate, setTrigger}) => {
    const navigate = useNavigate();

    const {id, brand} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setTrigger(prev => !prev)

    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => navigate(id.toString(), {state: car})}>details</button>
        </div>
    );
};

export {Car};