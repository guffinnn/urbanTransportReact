// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import AccountInfo from "./boxes/AccountInfo";
import NewRoutes from "./boxes/NewRoutes";
import HistoryRoutes from "./boxes/HistoryRoutes";
import PaymentInfo from "./boxes/PaymentInfo";

// Функция для создания Main
function Main() {
    return (
        <main className="account">
            <div className="container">
                <div className="row text__info__account">
                    <p className="heading__account">Аккаунт</p>
                    <p className="text__account">Личная страница пользователя</p>
                </div>
                <div className="row boxes__account">
                    <AccountInfo />
                    <div className="pay__route__boxes">
                        <div className="routes__boxes">
                            <NewRoutes />
                            <HistoryRoutes />
                        </div>
                        <div className="payment__box">
                            <PaymentInfo />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
