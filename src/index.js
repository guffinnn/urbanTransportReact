// Импорт файлов React
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import './index.css';
import App from './App';
import SearchPage from "./pages/SearchPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Map from "./pages/Map";

const router = createBrowserRouter([
    {
        path: "/urbanTransportReact",
        element: <App />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
    {
        path: "/logIn",
        element: <LogIn />,
    },
    {
        path: "/map",
        element: <Map />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);