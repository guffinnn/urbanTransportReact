// Импорт useState - для создания локального состояния routeData
// Импорт useEffect - для выполнения эффекта только один раз
import React from 'react';
import './RouteCard.css';

// Функция для добавления компонента FrameRoute
function FrameRoute({to, from}) {
    return (
        <div className="frame__routecard">
            <p className="text_type__routecard">Направление</p>
            <div className="type_of__routecard">
                <p className="text_content__routecard" id="frame1">{from}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z" fill="black"/>
                </svg>
                <p className="text_content__routecard" id="frame2">{to}</p>
            </div>
        </div>
    );
}

export default FrameRoute;