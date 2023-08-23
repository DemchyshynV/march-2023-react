import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};