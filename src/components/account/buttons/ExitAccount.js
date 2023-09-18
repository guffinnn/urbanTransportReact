// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import './ExitAccount.css';

// Функция для создания AccountInfo
function ExitAccount() {
    return (
        <div className="row exit__account__button">
            <div className="text__account__button">
                <p className="text__content">Выйти из аккаунта</p>
            </div>
            <div className="button__frame" id="exit">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                        <path d="M4.66699 22H7.33366V24.6667H23.3337V3.33334H7.33366V6.00001H4.66699V2.00001C4.66699 1.26363 5.26395 0.666672 6.00033 0.666672H24.667C25.4034 0.666672 26.0003 1.26363 26.0003 2.00001V26C26.0003 26.7364 25.4034 27.3333 24.667 27.3333H6.00033C5.26395 27.3333 4.66699 26.7364 4.66699 26V22ZM7.33366 12.6667H16.667V15.3333H7.33366V19.3333L0.666992 14L7.33366 8.66667V12.6667Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default ExitAccount;
