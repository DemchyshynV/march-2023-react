import {FC, PropsWithChildren} from "react";
import {ICar} from "../interfaces";

interface IProps extends PropsWithChildren {
    car: ICar
}

const CarDetails: FC<IProps> = ({car: {id, brand, price, year}}) => {
    return (
        <div>
            <div>{id}) {brand}--{price}--{year}</div>
        </div>
    );
};

export {CarDetails};