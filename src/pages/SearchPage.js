// Импорт необходимых модулей
import React, { useState } from "react";
import '../styles/SearchPage.css';
import {stops} from "../components/json/stops";
import {routes} from "../components/json/routes";
import Header from "../components/basic-components/Header";

// Массивы для хранения информации об остановках и маршрутах
let stopsInfo = [],
    routesInfo = [];

// Заполняем массив остановок
for(let i = 0; i < stops.length; i++) {stopsInfo[i] = `${stops[i].name} , ${stops[i].street}`;}

// Заполняем массив маршрутов
for(let i = 0; i < routes.length; i++) {routesInfo[i] = `${routes[i].from} - ${routes[i].to} ; ${routes[i].stops}`;}

// Функция лобавления компонента SearchPage
export default function SearchPage() {
    // Переменная для хранения отфильтрованных значений
    const [filteredListStops, setFilteredListStops] = new useState(stopsInfo),
          [filteredListRoutes, setFilteredListRoutes] = new useState(routesInfo);

    // Функция фильтрации данных
    const filterBySearch = (event) => {
        // Получаем входные данные
        const query = event.target.value;
        // Создаем копию в списке
        var updatedListStops = [...stopsInfo];
        // Выводим все элементы содержащие запрос
        updatedListStops = updatedListStops.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Триггер вывода новых данных
        setFilteredListStops(updatedListStops);

        // Создаем копию в списке
        var updatedListRoutes = [...routesInfo];
        // Выводим все элементы содержащие запрос
        updatedListRoutes = updatedListRoutes.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Триггер вывода новых данных
        setFilteredListRoutes(updatedListRoutes);
    };

    return (
        <div className="global__container">
            <Header />
            <div className="container search__page__main">
                <div className="row heading__frame__search">
                    <div className="col-md-12 heading__text__search">
                        <p className="heading">Поиск</p>
                    </div>
                    <p className="col-md-12 text__content">Ищите необходимые остановки быстро и удобно</p>
                </div>
                <div className="row search__frame">
                    <div className="col-md-12 search-header">
                        <div className="search-text">Введите название остановки:</div>
                        <input id="search-box" onChange={filterBySearch} />
                    </div>
                    <div className="col-md-12 placeholders__frame">
                        <div className="placeholder__search">
                            <div className="search-text">Доступные остановки 👇</div>
                            <div id="item-list">
                                <ol>
                                    {filteredListStops.map((item, index) => (
                                        <li id="stop__name" className="list__value" key={index}>{item.split(' , ')[0]}
                                            <ul>
                                                <li id="street__name" className="list__value" key={index}>{item.split(' , ')[1]}</li>
                                            </ul>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="placeholder__search__second">
                            <div className="search-text">Доступные маршруты 👇</div>
                            <div>
                                <ol>
                                    {filteredListRoutes.map((item, index) => {
                                        const routeName = item.split(' ; ')[0];
                                        const stops = (item.split(' ; ')[1].split(' - '));

                                        return (
                                            <li id="routes__name" className="list__value" key={index}>
                                                {routeName}
                                                {stops.length > 1 &&
                                                    <ul>
                                                        {stops.map((stop, stopIndex) => (
                                                            <li id="stops__name" className="list__value" key={stopIndex}>
                                                                {stop}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}