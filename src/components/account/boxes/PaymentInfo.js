import React from 'react';
import './PaymentInfo.css';

function PaymentInfo() {
    return (
        <div className="container global__payment__frame">
            <div className="row">
                <div className="col-12">
                    <div className="payments__account">
                        <div className="heading__payment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M14.6735 2.66666L24.4046 5.7076C24.9611 5.88155 25.3402 6.39707 25.3402 6.98024V9.33332H28.0069C28.7433 9.33332 29.3402 9.93028 29.3402 10.6667V21.3333C29.3402 22.0697 28.7433 22.6667 28.0069 22.6667L23.7134 22.6681C23.1979 23.3477 22.5705 23.9491 21.8469 24.4424L14.6735 29.3333L7.50014 24.4424C5.3145 22.9521 4.00684 20.4779 4.00684 17.8325V6.98024C4.00684 6.39707 4.38584 5.88155 4.94248 5.7076L14.6735 2.66666ZM14.6735 5.45866L6.6735 7.95999V17.8325C6.6735 19.4924 7.44574 21.0512 8.75138 22.0571L9.00238 22.2391L14.6735 26.1053L19.7162 22.6667H13.3402C12.6038 22.6667 12.0068 22.0697 12.0068 21.3333V10.6667C12.0068 9.93028 12.6038 9.33332 13.3402 9.33332H22.6735V7.95999L14.6735 5.45866ZM14.6735 16V20H26.6735V16H14.6735ZM14.6735 13.3333H26.6735V12H14.6735V13.3333Z" fill="#132FBA"/>
                            </svg>
                            <p className="heading__account">Платежные данные</p>
                        </div>
                        <div className="payment__info">
                            <div className="card__number__frame">
                                <div className="heading__card__number">
                                    <p className="heading">Номер карты</p>
                                </div>
                                <div className="card__number">
                                    {/* Ваш код для номера карты */}
                                    <p className="card__number__text">1111 **** **** 1111</p>
                                </div>
                            </div>
                            <div className="initials__frame">
                                <div className="heading__initials">
                                    <p className="heading">Владелец карты</p>
                                </div>
                                <div className="initials">
                                    {/* Ваш код для владельца карты */}
                                    <p className="initials__text">Lilya Tarusina</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentInfo;