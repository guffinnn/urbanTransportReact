// Импорт библиотеки React
import React from 'react';
import '../../styles/map_style.css';
import iconTicket from '../../styles/svg/ticket.svg';

// Функция для создания InputSearch
function ButtonTicket({name}) {
    return (
        <div className="first__tickets__button">
            <div className="image1">
                <div className="vector1">
                    <img alt={'No'} src={iconTicket}/>
                </div>
            </div>
            <a href="/search" className="paragraph1">Билеты</a>
        </div>
    );
}

export default ButtonTicket;
