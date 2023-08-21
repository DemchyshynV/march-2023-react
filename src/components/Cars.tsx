import {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);


    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};