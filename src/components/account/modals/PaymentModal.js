// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import './PaymentModal.css';

// Функция для создания PaymentModal
function PaymentModal() {
    return (
        <div className="container global__frame__modal">
            <div className="row global">
                <div className="col-12 heading__frame">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M14.6735 2.66663L24.4046 5.70757C24.9611 5.88152 25.3402 6.39704 25.3402 6.98021V9.33329H28.0069C28.7433 9.33329 29.3402 9.93025 29.3402 10.6666V21.3333C29.3402 22.0697 28.7433 22.6666 28.0069 22.6666L23.7134 22.6681C23.1979 23.3477 22.5705 23.949 21.8469 24.4424L14.6735 29.3333L7.50014 24.4424C5.3145 22.9521 4.00684 20.4778 4.00684 17.8325V6.98021C4.00684 6.39704 4.38584 5.88152 4.94248 5.70757L14.6735 2.66663ZM14.6735 5.45863L6.6735 7.95996V17.8325C6.6735 19.4924 7.44574 21.0512 8.75138 22.057L9.00238 22.239L14.6735 26.1053L19.7162 22.6666H13.3402C12.6038 22.6666 12.0068 22.0697 12.0068 21.3333V10.6666C12.0068 9.93025 12.6038 9.33329 13.3402 9.33329H22.6735V7.95996L14.6735 5.45863ZM14.6735 16V20H26.6735V16H14.6735ZM14.6735 13.3333H26.6735V12H14.6735V13.3333Z" fill="#132FBA"/>
                    </svg>
                    <p className="heading__text__modal">Платежные данные</p>
                </div>
                <div className="col-12 payment__info__modal">
                    <div className="component__frame">
                        <div className="heading__frame">
                            <p className="heading">Номер карты</p>
                        </div>
                        <div className="info__frame">
                            {/* Ваш код для номера карты */}
                            <p className="text__content">1111 **** **** 1111</p>
                        </div>
                    </div>
                    <div className="component__frame">
                        <div className="heading__frame">
                            <p className="heading">Срок действия</p>
                        </div>
                        <div className="info__frame">
                            {/* Ваш код для срока действия */}
                            <p className="text__content">06/24</p>
                        </div>
                    </div>
                    <div className="component__frame">
                        <div className="heading__frame">
                            <p className="heading">Владелец карты</p>
                        </div>
                        <div className="info__frame">
                            {/* Ваш код для владельца карты */}
                            <p className="text__content">Lilya Tarusina</p>
                        </div>
                    </div>
                    <div className="component__frame">
                        <div className="heading__frame">
                            <p className="heading">CSV</p>
                        </div>
                        <div className="info__frame">
                            {/* Ваш код для CSV */}
                            <p className="text__content">***</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;
