// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import './Main.css';

// Функция для создания PriceBox
function PriceBox() {
    return (
        <div className="container price__box__global">
            <div className="heading__text__basket">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5.33915 8.55549L1.01562 4.23197L2.90124 2.34636L7.22476 6.66988H27.5471C28.2835 6.66988 28.8804 7.26683 28.8804 8.00321C28.8804 8.13297 28.8615 8.26204 28.8243 8.38633L25.6243 19.0531C25.4551 19.6169 24.9359 20.0032 24.3471 20.0032H8.00581V22.6699H22.6725V25.3365H6.67248C5.93609 25.3365 5.33915 24.7396 5.33915 24.0032V8.55549ZM8.00581 9.33655V17.3365H23.3551L25.7551 9.33655H8.00581ZM7.33915 30.6699C6.23457 30.6699 5.33915 29.7744 5.33915 28.6699C5.33915 27.5653 6.23457 26.6699 7.33915 26.6699C8.44372 26.6699 9.33915 27.5653 9.33915 28.6699C9.33915 29.7744 8.44372 30.6699 7.33915 30.6699ZM23.3392 30.6699C22.2345 30.6699 21.3392 29.7744 21.3392 28.6699C21.3392 27.5653 22.2345 26.6699 23.3392 26.6699C24.4437 26.6699 25.3392 27.5653 25.3392 28.6699C25.3392 29.7744 24.4437 30.6699 23.3392 30.6699Z" fill="#132FBA"/>
                </svg>
                <p className="heading__text">Заказ №58582034</p>
            </div>
            <div className="info__frame__basket">
                <div className="all__info__basket">
                    <div className="text__box__basket">
                        <p className="heading__text__basket">Количество позиций</p>
                        <p className="info__text__basket">3</p>
                    </div>
                    <div className="text__box__basket">
                        <p className="heading__text__basket">Аккаунт</p>
                        <p className="info__text__basket">Lilya Tarusina</p>
                    </div>
                    <div className="text__box__basket">
                        <p className="heading__text__basket">Платежные реквизиты</p>
                        <p className="info__text__basket">1111 **** **** 1111</p>
                    </div>
                </div>
                <div className="price__info__basket">
                    <p className="heading__price__info">К оплате:</p>
                    <p className="price__value">0,85 Br</p>
                </div>
            </div>
            <div className="button__frame__basket">
                <div className="button">
                    <p className="name__of__button">Подтверждение оплаты</p>
                </div>
            </div>
        </div>
    );
}

export default PriceBox;
