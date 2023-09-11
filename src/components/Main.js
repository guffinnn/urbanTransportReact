// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import Modal from "./modal-window/Modal";
import Tag from "./Tag";
import Status from "./Status";
import RouteCard from "./route-card/RouteCard";
import './Main.css';
import iconFilter from '../styles/svg/filter.svg';
import iconList from '../styles/svg/list.svg';

import {routes} from "./json/routes";

// Функция для создания Main
function Main() {
    /*// Получаем элемент Фильтры со страницы
    const btnFilter = document.querySelector('.filter__box');

    // Обработчик события клика на кнопку Фильтры
    btnFilter.addEventListener('click', () => {
        // Добавляем модальное окно на страницу
        // const modal = ReactDOM.createRoot(document.getElementById('modal'));
        // modal.render(<AppModal />);
    })*/

    return (
        <main>
            <div className="container category__filters">
                <div className="row section__title">
                    <h1 className="col-md-12 heading">Поиск</h1>
                    <p className="col-md-12 text">Ищите нужные маршруты здесь</p>
                </div>
                <div className="col-md-6 modal__window">
                    <Modal />
                </div>
                <div className="row content">
                    <div className="col-md-12 filter__row">
                        <div className="filter__box">
                            <img alt={'No'} src={iconFilter} />
                            <p className="filter">Фильтры</p>
                        </div>

                        {/*<div className="sort__box">
                            <p className="sort">Сортировка</p>
                            <img alt={'No'} src={iconList} />
                        </div>*/}
                    </div>
                    <div className="row column">
                        <div className="search__row">
                            <div className="tags__row">
                                <div className="tag">
                                    <Tag />
                                </div>
                                {/*<div className="status">
                                    <Status />
                                </div>*/}
                            </div>

                            <div className="col-md-12 placeholder">
                                {routes.map((route) => (
                                    <RouteCard
                                        key={route.route_PK}
                                        to={route.to}
                                        from={route.from}
                                        number_of_transport={route.number_of_transport}
                                        days={route.days}
                                        type_of_transport={route.type_of_transport}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default Main;
