import {useAppLocation} from "../hooks/routerHooks";
import {ICar} from "../interfaces";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {carService} from "../services";
import {CarDetails} from "../components/CarDetails";

const CarDetailsPage = () => {
    const {state} = useAppLocation<ICar>();
    const {id} = useParams<{ id: string }>();

    const [car, setCar] = useState<ICar>(null)


    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(+id).then(({data}) => setCar(data))
        }
    }, [id, state])

    return (
        <div>
            {car&&<CarDetails car={car}/>}
        </div>
    );
};

export {CarDetailsPage};