import {useEffect, useRef, useState} from "react";
import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};