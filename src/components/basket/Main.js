// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import './Main.css';
import RouteCard from "./RouteCard";
import PriceBox from "./PriceBox";

// Функция для создания Main
function Main() {
    return (
        <main className="basket">
            <div className="container category__filters__basket">
                <div className="section__title__basket">
                    <h1 className="col-md-12 heading__basket">Корзина</h1>
                    <p className="col-md-12 text__basket">Выберите товары для оплаты</p>
                </div>
                <div className="main__content__basket">
                    <div className="col-md-6 routes__boxes__basket">
                        <RouteCard />
                        <RouteCard />
                    </div>
                    <div className="col-md-6 price__box__basket">
                        <p className="heading__price__box">Оплатить корзину</p>
                        <div className="price__box__main">
                            <PriceBox />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
