// Импорт библиотеки React
import React from 'react';
import '../../styles/log_in_style.css';

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
}

export default Input;
