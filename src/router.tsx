import {createBrowserRouter, Navigate} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {CountPage} from "./pages/CountPage";
import React from "react";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to={'users'}/>
            },
            {
                path:'users',
                element:<UsersPage/>
            },
            {
                path:'posts',
                element:<PostsPage/>
            },
            {
                path:'count',
                element:<CountPage/>
            }
        ]
    }
])

export {
    router
}