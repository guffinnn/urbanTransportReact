// Импорт useState - для создания локального состояния routeData
// Импорт useEffect - для выполнения эффекта только один раз
import React, { useState, useEffect } from 'react';
import {fetchJson} from "./responseJson";

// Функция для добавления компонента FrameRoute
function FrameRoute() {
    // Объект для хранения данных из JSON файла
    const [routeData, setRouteData] = useState({
        route_PK: '',
        to: '',
        from: '',
        number_of_transport: '',
        days: '',
        type_of_transport: ''
    });

    // "Одноразовое" выполнение функции при создании компонента
    useEffect(() => {
        // Вызываем функцию с запросом к API
        fetchJson(setRouteData);

    }, []);

    return (
        <div className="frame">
            <p className="text_type">Направление</p>
            <div className="type_of">
                <p className="text_content">{routeData.from}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z" fill="black"/>
                </svg>
                <p className="text_content">{routeData.to}</p>
            </div>
        </div>
    );
}

export default FrameRoute;