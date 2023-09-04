import {createBrowserRouter, Navigate} from "react-router-dom";
import {CarsPage} from "./pages/CarsPage";
import {CarDetailPage} from "./pages/CarDetailPage";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [

            {
                index:true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>,
                children: [
                    {
                        path: ':id',
                        element: <CarDetailPage/>
                    }
                ]
            }
        ]
    }
])


export {
    router
}