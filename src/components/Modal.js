// Импорт библиотеки React
// Импорт стилей css
import './Modal.css';
import React, {useState, useEffect} from 'react';
import {fetchJsonFilter} from "./responseJson";

// Функция для скрытия модального окна
const closeModalWindow = () => {
    // Получаю элемент Модальное окно
    const modalWindow = document.querySelector('.modal');
    // Скрываю элемент
    modalWindow.remove();
}

// Функция для удаления содержимого input
const deleteInfoInInput = () => {
    // Получаю элементы со страницы
    const searchInput = document.querySelectorAll('.text__input');

    // Перебираю элементы, добавляю каждому условие
    for(let i = 0; i < searchInput.length; i++) {
        // Условие: Если элемент заполнен defaultValue, то удаляем значение полностью
        if(searchInput[i].value === 'Откуда' || searchInput[i].value === 'Куда') searchInput[i].value = '';
    }

    // Выводим состояние в консоль
    console.log('delete');
}

// Объект для хранения данных ою остановках
let stopsData = {
    to: '',
    from: ''
}

// Функция для получения значения из поля search
const saveRouteData = () => {
    // Получаю элементы Откуда, Куда
    const inputSearchTo = document.querySelector('.TO'),
          inputSearchFrom = document.querySelector('.FROM');

    // При пустых значениях полей завершаем функцию
    if(inputSearchTo.value === '' || inputSearchFrom.value === '')
        return 0;

    // Сохраняю значения элементов в объекте
    const routeData = {
              to: inputSearchTo.value,
              from: inputSearchFrom.value
          };

    // Выводим состояние в консоль
    console.log(routeData);

    // Сохраняю в глобальную переменную
    stopsData = routeData;
}



// Функция для создания главного компонента App
function Modal(active, setActive) {
    // Объект для хранения данных из JSON файла
    const [routeData, setRouteData] = useState({
        route_PK: '',
        to: 'Вокзал',
        from: 'С Веснянка',
        number_of_transport: '',
        days: '',
        type_of_transport: ''
    });

    // "Одноразовое" выполнение функции при создании компонента
    useEffect(() => {
        // Вызываем функцию с запросом к API
        fetchJsonFilter(setRouteData);
    }, []);

    return (
        <div className="row modal">
            <div className="col-md-12 modal__content">
                <div className="row__text">
                    <p className="filter__text">Фильтры</p>
                    <div onClick={closeModalWindow} className="svg__frame">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M17.7501 17.1466L17.1465 17.7501C16.8133 18.0833 16.273 18.0833 15.9396 17.7501L9.00001 10.8103L2.06027 17.75C1.72705 18.0833 1.18669 18.0833 0.853415 17.75L0.249958 17.1465C-0.0833193 16.8133 -0.0833193 16.273 0.249958 15.9396L7.18968 9.00001L0.249958 2.06027C-0.0833193 1.72705 -0.0833193 1.18669 0.249958 0.853415L0.853402 0.24997C1.18668 -0.0833071 1.72705 -0.0833071 2.06027 0.24997L9.00001 7.18968L15.9396 0.249958C16.273 -0.0833193 16.8133 -0.0833193 17.1465 0.249958L17.7501 0.853402C18.0833 1.18668 18.0833 1.72705 17.7501 2.06027L10.8103 9.00001L17.7501 15.9396C18.0833 16.273 18.0833 16.8133 17.7501 17.1466Z" fill="#132FBA"/>
                        </svg>
                    </div>
                </div>
                <div className="col-md-12 row__filters">
                    <div className="column">
                        <div className="categories">
                            <p className="text__wrapper">Все</p>
                            <p className="text__wrapper">По типу транспорта</p>
                            <p className="text__wrapper">По дням курсирования</p>
                        </div>
                        <div className="filters">
                            <div className="filter one">
                                <p className="text__head">По типу транспорта</p>
                                <div className="variants">
                                    <div className="bus">
                                        <input id="bus" type="checkbox" className="input__new"></input>
                                        <label htmlFor="bus" className="text__content">Автобус</label>
                                    </div>
                                    <div className="tram">
                                        <input id="tram" type="checkbox" className="input__new"></input>
                                        <label htmlFor="tram" className="text__content">Трамвай</label>
                                    </div>
                                    <div className="troley">
                                        <input id="trolley" type="checkbox" className="input__new"></input>
                                        <label htmlFor="trolley" className="text__content">Троллейбус</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter two">
                                <p className="text__head">По дням курсирования</p>
                                <div className="variants">
                                    <div className="everyday">
                                        <input id="everyday" type="checkbox" className="input__new"></input>
                                        <label htmlFor="everyday" className="text__content">Любой день</label>
                                    </div>
                                    <div className="workday">
                                        <input id="workday" type="checkbox" className="input__new"></input>
                                        <label htmlFor="workday" className="text__content">Будние дни (Пн, Вт, Ср, Чт, Пт)</label>
                                    </div>
                                    <div className="resortday">
                                        <input id="resortday" type="checkbox" className="input__new"></input>
                                        <label htmlFor="resortday" className="text__content">Выходные дни (Сб, Вс)</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter three">
                                <p className="text__head">По ключевому слову</p>
                                <div className="col-md-12 search__box">
                                    <div className="search__input">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="#799CF0"/>
                                        </svg>
                                        <label htmlFor="search" className="text__input"></label>
                                        <input onClick={deleteInfoInInput} id="search" type="text" defaultValue="Откуда" className="text__input FROM"></input>
                                    </div>
                                    <div className="search__input">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="#799CF0"/>
                                        </svg>
                                        <label htmlFor="search" className="text__input"></label>
                                        <input onClick={deleteInfoInInput} id="search" type="text" defaultValue="Куда" className="text__input TO"></input>
                                    </div>
                                    <button onClick={saveRouteData} className="btn__search">Искать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row__modal__footer">
                    <a className="col-md-6 delete__info" href="#">Очистить</a>
                    <button className="col-md-6 btn__ok">Применить</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
