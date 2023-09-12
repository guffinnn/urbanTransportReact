// Импорт библиотеки React
import React from 'react';
import '../../styles/map_style.css';
import iconAccount from '../../styles/svg/account.svg';

// Функция для создания InputSearch
function ButtonAccount({name}) {
    return (
        <div className="third__account__button">
            <div className="image3">
                <div className="vector3">
                    <img alt={'No'} src={iconAccount}/>
                </div>
            </div>
            <p className="paragraph3">Аккаунт</p>
        </div>
    );
}

export default ButtonAccount;
