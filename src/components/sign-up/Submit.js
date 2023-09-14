// Импорт библиотеки React
import React from 'react';
import '../../styles/log_in_style.css';

// Функция для создания Submit
function Submit({submit = 'Зарегистрироваться'}) {
    return (
        <div className="row alert__frame ">
            <p className="col-md-12 alert"></p>
            <button className="col-md-12 button__autorization" type="submit">{submit}</button>
        </div>
    );
}

export default Submit;
