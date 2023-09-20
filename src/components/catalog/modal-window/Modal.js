// Импорт библиотеки React
// Импорт стилей css
import './Modal.css';
import React, {useState, useEffect} from 'react';
import {routes} from "../../json/routes";

// Функция для создания главного компонента App
function Modal() {
    // Объект для хранения примененных фильтров
    const [selectedFilters, setSelectedFilters] = useState({
        bus: false,
        tram: false,
        trolley: false,
        everyday: false,
        workday: false,
        resortday: false,
    });
    const [searchInput, setSearchInput] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Функция для закрытия модального окна
    const closeModalWindow = () => {
        // Обработчик закрытия модального окна
    };

    // Обработчик изменения состояния checkbox
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [id]: checked,
        }));

        console.log('checked');
    };

    // Получение состояния checkbox

    // Функция, осуществляющая поиск в БД
    const handleSearch = () => {
        if (searchInput.trim() !== "") {
            // Отбираем пути, соответствующих поисковому запросу
            const filteredResults = routes.filter((route) =>
                routes.type_of_transport.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredUsers(filteredResults);

            console.log(filteredResults);
        } else {
            // Вывод сообщения об ошибке
            console.log('error');
        }
    };

    return (
        <div className="row modal">
            <div className="col-md-12 modal__content">
                <div className="row__text__modal">
                    <p className="filter__text__modal">Фильтры</p>
                    <div onClick={closeModalWindow} className="svg__frame__modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M17.7501 17.1466L17.1465 17.7501C16.8133 18.0833 16.273 18.0833 15.9396 17.7501L9.00001 10.8103L2.06027 17.75C1.72705 18.0833 1.18669 18.0833 0.853415 17.75L0.249958 17.1465C-0.0833193 16.8133 -0.0833193 16.273 0.249958 15.9396L7.18968 9.00001L0.249958 2.06027C-0.0833193 1.72705 -0.0833193 1.18669 0.249958 0.853415L0.853402 0.24997C1.18668 -0.0833071 1.72705 -0.0833071 2.06027 0.24997L9.00001 7.18968L15.9396 0.249958C16.273 -0.0833193 16.8133 -0.0833193 17.1465 0.249958L17.7501 0.853402C18.0833 1.18668 18.0833 1.72705 17.7501 2.06027L10.8103 9.00001L17.7501 15.9396C18.0833 16.273 18.0833 16.8133 17.7501 17.1466Z" fill="#132FBA"/>
                        </svg>
                    </div>
                </div>
                <div className="col-md-12 row__filters__modal">
                    <div className="column__modal">
                        <div className="categories__modal">
                            <p className="text__wrapper__modal">Все</p>
                            <p className="text__wrapper__modal">По типу транспорта</p>
                            <p className="text__wrapper__modal">По дням курсирования</p>
                        </div>
                        <div className="filters__modal">
                            <div className="filter__modal__one">
                                <p className="text__head__modal">По типу транспорта</p>
                                <div className="variants__modal">
                                    <div className="bus__modal">
                                        <input onClick={handleCheckboxChange} id="bus" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="bus" className="text__content__modal">Автобус</label>
                                    </div>
                                    <div className="tram__modal">
                                        <input onClick={handleCheckboxChange} id="tram" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="tram" className="text__content__modal">Трамвай</label>
                                    </div>
                                    <div className="troley__modal">
                                        <input onClick={handleCheckboxChange} id="trolley" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="trolley" className="text__content__modal">Троллейбус</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__modal__two">
                                <p className="text__head__modal">По дням курсирования</p>
                                <div className="variants__modal">
                                    <div className="everyday__modal">
                                        <input onClick={handleCheckboxChange} id="everyday" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="everyday" className="text__content__modal">Любой день</label>
                                    </div>
                                    <div className="workday__modal">
                                        <input onClick={handleCheckboxChange} id="workday" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="workday" className="text__content__modal">Будние дни (Пн, Вт, Ср, Чт, Пт)</label>
                                    </div>
                                    <div className="resortday__modal">
                                        <input onClick={handleCheckboxChange} id="resortday" type="checkbox" className="input__new__modal"></input>
                                        <label htmlFor="resortday" className="text__content__modal">Выходные дни (Сб, Вс)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__modal__three">
                                <p className="text__head__modal">По ключевому слову</p>
                                <div className="col-md-12 search__box__modal">
                                    <div className="search__input__modal">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="#799CF0"/>
                                        </svg>
                                        <label htmlFor="search" className="text__input__modal"></label>
                                        <input id="search" type="text" defaultValue="Откуда" className="text__input FROM__modal"></input>
                                    </div>
                                    <div className="search__input__modal">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="#799CF0"/>
                                        </svg>
                                        <label htmlFor="search" className="text__input__modal"></label>
                                        <input id="search" type="text" defaultValue="Куда" className="text__input TO__modal"></input>
                                    </div>
                                    <button className="btn__search__modal">Искать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row__modal__footer">
                    <a className="col-md-6 delete__info__modal" href="#">Очистить</a>
                    <button onClick={handleSearch} className="col-md-6 btn__ok__modal">Применить</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
