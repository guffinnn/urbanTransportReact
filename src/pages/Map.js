// Импорт необходимых модулей
import React from 'react';
import '../styles/map_style.css';
import InputSearch from "../components/map/InputSearch";
import ButtonTicket from "../components/map/ButtonTicket";
import ButtonTransport from "../components/map/ButtonTransport";
import ButtonAccount from "../components/map/ButtonAccount";

// Функция для добавления страницы авторизации
function Map() {
    return (
        <div className="container global__frame">
            <div className="col-md-5 text-center navigation__frame">
                <InputSearch />
                <div className="col-md-12 buttons__frame">
                    <ButtonTicket />
                    <ButtonTransport />
                    <ButtonAccount />
                </div>
            </div>
            <div className="col-md-12 map__frame">
                <div className="col-md-12 svg__map">
                    <div className="div__map">
                        <a className="first__a__map" href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps">Минск</a>
                        <a className="second__a__map" href="https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&utm_medium=mapframe&utm_source=maps&z=12">Карта Минска с улицами и номерами домов — Яндекс Карты</a>
                        <iframe className="iframe__map" src="https://yandex.by/map-widget/v1/?ll=27.555691%2C53.902735&z=12" width="1040" height="730"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;