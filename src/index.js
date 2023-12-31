// Импорт файлов React
import React, {lazy, Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

// Импорт страницы загрузки
import Loading from "./components/basic-components/Loader";
/*import FirstPage from "./pages/FirstPage";*/

// Использование "ленивого" подключения страниц
const FirstPage = lazy(() => import('./pages/FirstPage')),
      SearchPage = lazy(() => import('./pages/SearchPage')),
      Catalog = lazy(() => import('./pages/CatalogPage')),
      SignUp = lazy(() => import('./pages/SignUp')),
      LogIn = lazy(() => import('./pages/LogIn')),
      Map = lazy(() => import('./pages/Map')),
      Account = lazy(() => import('./pages/Account')),
      Basket = lazy(() => import('./pages/BasketPage'));

const router = createBrowserRouter([
    {
        path: "/urbanTransportReact",
        element: <FirstPage />,
    },
    {
        path: "signUp",
        element: <SignUp />,
    },
    {
        path: "logIn",
        element: <LogIn />,
    },
    {
        path: "map",
        element: <Map />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "account",
        element: <Account />,
    },
    {
        path: "catalog",
        element: <Catalog />,
    },
    {
        path: "basket",
        element: <Basket />,
    },
]);

// Отображение страницы загрузки ровно 2 секунды
const LoadingWithDelay = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000); // Задержка в 2 секунды

        return () => clearTimeout(timer);
    }, []);

    return showLoading ? <Loading /> : null;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<LoadingWithDelay />}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>,
);