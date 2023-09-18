// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import AccountInfo from "./boxes/AccountInfo";
import NewRoutes from "./boxes/NewRoutes";
import HistoryRoutes from "./boxes/HistoryRoutes";
import PaymentInfo from "./boxes/PaymentInfo";
import './Main.css';

// Функция для создания Main
function Main() {
    return (
        <main className="">
            <div className="container account">
                <div className="row text__info__account justify-content-center">
                    <div className="col-12">
                        <p className="heading__account__first">Аккаунт</p>
                        <p className="text__account">Личная страница пользователя</p>
                    </div>
                </div>
                <div className="row boxes__account">
                    <div className="col-md-12">
                        <AccountInfo />
                    </div>
                    <div className="col-md-12 global__frame__account">
                        <div className="row routes__global__frame__account">
                            <div className="col-12">
                                <div className="routes__boxes">
                                    <NewRoutes />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="routes__boxes">
                                    <HistoryRoutes />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="payment__box">
                                    <PaymentInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
