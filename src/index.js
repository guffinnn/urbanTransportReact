// Импорт файлов React
import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import './index.css';
const App = lazy(() => import('./App'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const SignUp = lazy(() => import('./pages/SignUp'));
const LogIn = lazy(() => import('./pages/LogIn'));
const Map = lazy(() => import('./pages/Map'));

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
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>,
);