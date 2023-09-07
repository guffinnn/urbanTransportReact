// Импорт useState - для создания локального состояния routeData
// Импорт useEffect - для выполнения эффекта только один раз
import React, { useState, useEffect } from 'react';
import {fetchJson} from "./responseJson";

// Функция для добавления компонента FrameTime
function FrameTime() {
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
            <p className="text_type">Дни курсирования</p>
            <div className="type_of_time">
                <p className="text_content">{routeData.days}</p>
            </div>
        </div>
    );
}

export default FrameTime;