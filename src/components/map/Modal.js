// Импорт необходимых модулей
import React from 'react';
import './Modal.css';

// Функция для добавления компонента Modal
function Modal() {
    return (
        <div className="container modal__frame__map">
            <div className="row">
                <div className="col-md-12 frame__global">
                    <div className="now__map">
                        <div className="heading__map">
                            <p className="heading">Доступные:</p>
                        </div>
                        <div className="text__map">
                            <p className="text__content">Автобусы</p>
                            <p className="text__content">Трамваи</p>
                            <p className="text__content">Троллейбусы</p>
                        </div>
                    </div>
                    <div className="in__process__map">
                        <div className="heading__map">
                            <p className="heading">В доработке:</p>
                        </div>
                        <div className="text__map">
                            <p className="text__content">Электропоезда</p>
                            <p className="text__content">Маршрутные такси</p>
                            <p className="text__content">Каршеринг</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;