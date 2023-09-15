// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import Modal from "./modal-window/Modal";
import Tag from "./Tag";
/*import Status from "../log-in/Status";*/
import RouteCard from "./route-card/RouteCard";
import './Main.css';
import iconFilter from '../../styles/svg/filter.svg';
/*import iconList from '../../styles/svg/list.svg';*/

import {routes} from "../json/routes";

// Функция для создания Main
function Main() {
    return (
        <main className="search">
            <div className="container category__filters__search">
                <div className="row section__title__search">
                    <h1 className="col-md-12 heading__search">Поиск</h1>
                    <p className="col-md-12 text__search">Ищите нужные маршруты здесь</p>
                </div>
                <div className="col-md-6 modal__window__search">
                    <Modal />
                </div>
                <div className="row content__search">
                    <div className="col-md-12 filter__row__search">
                        <div className="filter__box__search">
                            <img alt={'No'} src={iconFilter} />
                            <p className="filter__search">Фильтры</p>
                        </div>

                        {/*<div className="sort__box">
                            <p className="sort">Сортировка</p>
                            <img alt={'No'} src={iconList} />
                        </div>*/}
                    </div>
                    <div className="row column__search">
                        <div className="search__row">
                            <div className="tags__row__search">
                                <div className="tag__search">
                                    <Tag />
                                </div>
                                {/*<div className="status">
                                    <Status />
                                </div>*/}
                            </div>

                            <div className="col-md-12 placeholder__search">
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