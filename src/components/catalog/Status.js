// Импорт библиотеки React и компонента RouteCard
import React from 'react';

// Состояние отображения
let checkStatus = 268;

// Функция для создания компонента AppTag
function Status() {
    return (
        <div className="status__frame__search">
            <p className="status__text__search">Отображается {checkStatus} из 268</p>
        </div>
    );
}

export default Status;
