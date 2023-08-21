import {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";

interface IProps extends PropsWithChildren {
    cars: ICar[],
    setCarForUpdate: Dispatch<SetStateAction<ICar>>,
    setTrigger:Dispatch<SetStateAction<boolean>>
}

const Cars: FC<IProps> = ({cars,setCarForUpdate,setTrigger}) => {


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} />)}
        </div>
    );
};

export {Cars};