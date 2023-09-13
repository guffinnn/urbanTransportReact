// Импорт библиотеки React
import React from 'react';
import '../../styles/log_in_style.css';

// Функция для создания Submit
function Submit({submit = 'Войти в аккаунт'}) {


    return (
        <div className="row alert__frame ">
            <button className="col-md-12" type="submit">{submit}</button>
        </div>
    );
}

export default Submit;
