// Импорт библиотеки React
import React from 'react';
import '../../styles/sign_up_style.css';

// Функция для создания Input
function Input({name}) {
    if (name === 'email')
        return (
            <div className="col-md-12 input__work__email">
                <label htmlFor="work__email" id="label__3">Адрес электронной почты</label>
                <input type="text" id="work__email" defaultValue='E-mail' />
            </div>
        );
    else if(name === 'password')
        return (
            <div className="col-md-12 input__password">
                <label htmlFor="password" id="label__4">Пароль</label>
                <input type="text" id="password" defaultValue='Пароль' />
            </div>
        );
    else if(name === 'name')
        return (
            <div className="col-md-12 input__first__name">
                <label htmlFor="first__name" id="label__1">Имя</label>
                <input type="text" id="first__name" value="Имя" />
            </div>
        );
    else if(name === 'surname')
        return (
            <div className="col-md-12 input__second__name">
                <label htmlFor="second__name" id="label__2" >Фамилия</label>
                <input type="text" id="second__name" value="Фамилия" />
            </div>
        );
}

export default Input;
