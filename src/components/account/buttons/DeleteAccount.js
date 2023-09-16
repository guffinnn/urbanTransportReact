// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';

// Функция для создания AccountInfo
function DeleteAccount() {
    return (
        <div className="row delete__account__button">
            <div className="text__account__button">
                <p className="text__content">Удалить аккаунт</p>
            </div>
            <div className="button__frame">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M20.334 5.66668H27.0007V8.33334H24.334V25.6667C24.334 26.4031 23.7371 27 23.0007 27H4.33398C3.59761 27 3.00065 26.4031 3.00065 25.6667V8.33334H0.333984V5.66668H7.00065V1.66668C7.00065 0.930304 7.59761 0.333344 8.33398 0.333344H19.0007C19.7371 0.333344 20.334 0.930304 20.334 1.66668V5.66668ZM21.6673 8.33334H5.66732V24.3333H21.6673V8.33334ZM9.66732 12.3333H12.334V20.3333H9.66732V12.3333ZM15.0007 12.3333H17.6673V20.3333H15.0007V12.3333ZM9.66732 3.00001V5.66668H17.6673V3.00001H9.66732Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default DeleteAccount;
