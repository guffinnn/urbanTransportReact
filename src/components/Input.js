// Импорт библиотеки React
import React from 'react';
import '../styles/log_in_style.css';

// Функция для создания Input
function Input({email='Адрес электронной почты', password = 'Пароль'}) {
    return (
        <div className="row vertical__frame">
            <div className="col-md-12 input__work__email">
                <label htmlFor="work__email" id="label__3">{email}</label>
                <input type="text" id="work__email" defaultValue={email} />
            </div>
            <div className="col-md-12 input__password">
                <label htmlFor="password" id="label__4">{password}</label>
                <input type="text" id="password" defaultValue={password} />
            </div>
        </div>
    );
}

export default Input;
