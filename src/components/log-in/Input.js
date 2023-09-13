// Импорт библиотеки React
import React from 'react';
import '../../styles/log_in_style.css';

// Функция для создания Input
function Input({type, name, value, onChange, placeholder}) {
    if (name === 'email')
        return (
            <div className="col-md-12 input__work__email">
                <label htmlFor="work__email" id="label__3">Адрес электронной почты</label>
                <input id="work__email"
                       type={type}
                       name={name}
                       value={value}
                       onChange={onChange}
                       placeholder={placeholder}/>
            </div>
        );
    else if(name === 'password')
        return (
            <div className="col-md-12 input__password">
                <label htmlFor="password" id="label__4">Пароль</label>
                <input id="password"
                       type={type}
                       name={name}
                       value={value}
                       onChange={onChange}
                       placeholder={placeholder} />
            </div>
        );
}

export default Input;
