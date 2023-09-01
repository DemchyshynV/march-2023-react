import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "./hoc/Provider";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <RouterProvider router={router}/>
    </Provider>
);
