// Импорт библиотеки React
import React from 'react';
import '../../styles/map_style.css';
import iconTransport from '../../styles/svg/transportSvg.svg';

// Функция для создания InputSearch
function ButtonTicket({name}) {
    return (
        <div className="second__transport__button">
            <div className="image2">
                <div className="vector2">
                    <img alt={'No'} src={iconTransport}/>
                </div>
            </div>
            <p className="paragraph2">Транспорт</p>
        </div>
    );
}

export default ButtonTicket;
