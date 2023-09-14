// Импорт библиотеки React и компонента RouteCard
import React from 'react';
import '../../index.css';
import iconClose from '../../styles/svg/close.svg';

// Состояние тега
let tagStatus = 'Все виды транспорта';

// Функция для создания компонента AppTag
function Tag() {
    return (
        <div className="tag__frame__search">
            <p className="tag__text__search">{tagStatus}</p>
            <img alt={'No'} src={iconClose}/>
        </div>
    );
}

export default Tag;
