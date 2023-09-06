import {createBrowserRouter, Navigate} from "react-router-dom";
import {MailLauout} from "./layouts/MailLauout";
import {UsersPage} from "./pages/UsersPage";

const router = createBrowserRouter([
    {
        path:'',
        element:<MailLauout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'users'}/>
            },
            {
                path:'users',
                element:<UsersPage/>
            }
        ]
    }
])