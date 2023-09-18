// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';

// Функция для создания NewRoutes
function NewRoutes() {
    return (
        <div className="container">
            <div className="row new__route__account">
                <div className="col-md-12 heading__new__route">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M17.9134 1.02942C18.4341 0.508707 19.2783 0.508726 19.799 1.02942L24.9845 6.21487C23.6827 7.51661 23.6827 9.62718 24.9845 10.9289C26.2862 12.2307 28.3968 12.2307 29.6985 10.9289L34.884 16.1144C35.4047 16.6351 35.4047 17.4793 34.884 18L17.9134 34.9706C17.3927 35.4913 16.5485 35.4913 16.0278 34.9706L10.8423 29.7851C12.1441 28.4834 12.144 26.3728 10.8423 25.0711C9.54057 23.7693 7.43 23.7693 6.12826 25.0711L0.942809 19.8856C0.422114 19.3649 0.422114 18.5207 0.942809 18L17.9134 1.02942ZM18.8562 3.85785L3.77124 18.9428L6.56949 21.7411L6.79291 21.6705C8.74504 21.0986 10.9307 21.5386 12.5236 22.9904L12.7279 23.1855C14.3347 24.7922 14.8396 27.0834 14.2428 29.1204L14.1714 29.3429L16.9706 32.1421L32.0555 17.0572L29.2563 14.258L29.0338 14.3294C27.0817 14.9014 24.896 14.4614 23.3031 13.0096L23.0988 12.8145C21.4921 11.2078 20.9871 8.91655 21.5839 6.87953L21.6545 6.6561L18.8562 3.85785Z" fill="#132FBA"/>
                    </svg>
                    <p className="heading__account">Текущие заказы</p>
                </div>
                <div className="row new__routes__info">

                </div>
            </div>
        </div>
    );
}

export default NewRoutes;
