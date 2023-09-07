// Импорт библиотеки React и компонента RouteCard
import React from 'react';
import './index.css';

// Состояние отображения
let checkStatus = 10;

// Функция для создания компонента AppTag
function AppTag() {
    return (
        <div className="status__frame">
            <p className="status__text">Отображается {checkStatus} из 100</p>
        </div>
    );
}

export default AppTag;
