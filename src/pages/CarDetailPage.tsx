import {useLocation, useParams} from "react-router-dom";
import {ICar} from "../interfaces/carInterface";
import {useAppLocation} from "../hooks/useAppLocation";

const CarDetailPage = () => {
    const {state: {id, brand, price, year}} = useAppLocation<ICar>();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetailPage};