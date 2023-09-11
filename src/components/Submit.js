// Импорт библиотеки React
import React from 'react';
import '../styles/log_in_style.css';

// Функция для создания Submit
function Submit({submit = 'Войти в аккаунт'}) {
    return (
        <div className="col-md-12 alert__frame">
            <p className="alert"></p>
            <button type="submit">{submit}</button>
        </div>
    );
}

export default Submit;
