import {useEffect, useState} from "react";
import {carService} from "../services/carService";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [trigger,setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null)


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <div>
                {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
            </div>
        </div>
    );
};

export {Cars};