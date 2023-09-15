// Импорт библиотеки React
import React from 'react';
import '../styles/style.css';
import iconBelavia from '../styles/svg/belavia.svg';
import iconBelzhd from '../styles/svg/belzhd.svg';
import iconGoogle from '../styles/svg/google_maps.svg';
import iconYandex from '../styles/svg/yandex_maps.svg';

// Функция для создания Header
function FirstPage() {
    return (
        <div className="global__auto__layout">
            <div className="auto__layout">
                <div className="background__layout">
                    <div className="glass__layout">
                        <div className="global__frame">
                            <div className="text__frame">
                                <p id="logo__text">Все ваши билеты в одном месте</p>
                            </div>
                            <div className="buttons__frame">
                                <a className="link__sign__up" href="/signUp">Зарегистрироваться бесплатно</a>
                                <a id="log__in__default" href="/search">Авторизоваться</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logos__layout">
                    <div className="logos__global__frame">
                        <div className="container__frame">
                            <div className="logos__text__frame">
                                <p id="logos__text">Основано на передовых компаниях в мире</p>
                            </div>
                            <div className="logos__content__frame">
                                <img alt={"No"} src={iconBelavia} />
                                <img alt={"No"} src={iconBelzhd} />
                                <img alt={"No"} src={iconGoogle} />
                                <img alt={"No"} src={iconYandex} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paragraphs__auto__layout">
                <div className="advertisement__text">
                    <div className="paragraph__1">
                        <p id="paragraph1">
                            Прошли те дни ожидания в
                            длинных очередях,<br></br>
                            чтобы купить билеты.<br></br>

                            С нашей простой и удобной системой продажи<br></br>
                            билетов вы можете легко<br></br>
                            покупать билеты, не выходя из дома или в дороге.
                        </p>
                    </div>
                    <div className="paragraph__frame__first">
                        <div className="image__container">
                            <img alt="Ошибка..." src={require("../styles/img/iphone.png")} className="image__container" />
                        </div>
                        <div className="paragraph__frame__second">
                            <p id="paragraph2">
                                Просто зайдите на наш веб-сайт или в мобильное приложение,
                                выберите желаемый способ передвижения,
                                выберите соответствующий тип билета
                                (в один конец, дневной проездной, недельный и т. д.)
                                и безопасно завершите платеж.
                            </p>
                        </div>
                    </div>
                    <div className="paragraph__2">
                        <p id="paragraph3">
                            После покупки ваш цифровой билет будет доступен для мгновенного использования
                            или может быть сохранен на вашем мобильном устройстве для дальнейшего использования.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
