import {ICar} from "../interfaces/carInterface";
import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const navigate = useNavigate();
    const {id, brand} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={()=>navigate(id.toString(), {state:car})}>Details</button>
        </div>
    );
};

export {Car};