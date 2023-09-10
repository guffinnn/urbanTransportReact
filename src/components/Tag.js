// Импорт библиотеки React и компонента RouteCard
import React from 'react';
import '../index.css';
import iconClose from '../styles/svg/close.svg';

// Состояние тега
let tagStatus = 'Все виды транспорта';

// Функция для создания компонента AppTag
function Tag() {
    return (
        <div className="tag__frame">
            <p className="tag__text">{tagStatus}</p>
            <img alt={'No'} src={iconClose}/>
        </div>
    );
}

export default Tag;
