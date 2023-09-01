import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarsPage} from "./pages/CarsPage";
import {LoginPage} from "./pages/LoginPage";
import {AuthRequired} from "./hoc/AuthRequired";

const router = createBrowserRouter([
    {
        path: '',
        element: <AuthRequired><MainLayout/></AuthRequired>,
        children: [
            {
                index: true,
                element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars',
                element: <CarsPage/>
            },
        ]
    },
    {
        path: 'login',
        element: <LoginPage/>
    }
])

export {
    router
}