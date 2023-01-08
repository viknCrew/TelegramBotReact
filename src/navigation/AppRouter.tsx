import {createBrowserRouter} from "react-router-dom";
import Wallet from "../Pages/Wallet";
import * as React from "react";
import ErrorPage from "../component/error-page";


export  const router = createBrowserRouter([
    {
        path: "/",
        element: <Wallet/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/send",
        element:<div>send</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/receive",
        element:<div>receive</div>,
        errorElement: <ErrorPage />,
    }
]);
