import {Outlet} from "react-router-dom";
import {Cars} from "../components/Cars";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
