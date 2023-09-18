// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import './ChangeAccount.css';

// Функция для создания AccountInfo
function ChangeAccount() {
    return (
        <div className="row change__account__button">
            <div className="text__account__button">
                <p className="text__content">Сменить аккаунт</p>
            </div>
            <div className="button__frame" id="change">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27" fill="none">
                        <path d="M2.66667 17.3333H5.33333V24H21.3333V2.66667H5.33333V9.33333H2.66667V1.33333C2.66667 0.59696 3.26363 0 4 0H22.6667C23.4031 0 24 0.59696 24 1.33333V25.3333C24 26.0697 23.4031 26.6667 22.6667 26.6667H4C3.26363 26.6667 2.66667 26.0697 2.66667 25.3333V17.3333ZM10.6667 12V8L17.3333 13.3333L10.6667 18.6667V14.6667H0V12H10.6667Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default ChangeAccount;
