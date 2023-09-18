// Импорт библиотеки React
// Импорт компонентов страниц
import React from 'react';
import ChangeAccount from "../buttons/ChangeAccount";
import DeleteAccount from "../buttons/DeleteAccount";
import ExitAccount from "../buttons/ExitAccount";
import './AccountInfo.css';

// Функция для создания AccountInfo
function AccountInfo() {
    return (
        <div className="container box__account">
            <div className="row information__account">
                <div className="col-md-12 global__account__head">
                    <div className="head__info__account">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0015 22.6667C20.8847 22.6667 25.1549 24.7668 27.4777 27.8996L25.0217 29.0613C23.1313 26.8209 19.7981 25.3333 16.0015 25.3333C12.2049 25.3333 8.87166 26.8209 6.98135 29.0613L4.52637 27.8984C6.8493 24.7663 11.1189 22.6667 16.0015 22.6667ZM16.0015 2.66667C19.6834 2.66667 22.6682 5.65145 22.6682 9.33334V13.3333C22.6682 16.9184 19.8385 19.8424 16.2907 19.9939L16.0015 20C12.3196 20 9.33482 17.0152 9.33482 13.3333V9.33334C9.33482 5.74834 12.1646 2.82425 15.7123 2.67283L16.0015 2.66667ZM16.0015 5.33334C13.8713 5.33334 12.1299 6.99857 12.0083 9.09831L12.0015 9.33334V13.3333C12.0015 15.5425 13.7923 17.3333 16.0015 17.3333C18.1318 17.3333 19.873 15.6681 19.9947 13.5684L20.0015 13.3333V9.33334C20.0015 7.12421 18.2106 5.33334 16.0015 5.33334Z" fill="#132FBA"/>
                        </svg>
                        <div className="text__account__info">
                            <p className="text__paragraph">Личные данные</p>
                        </div>
                    </div>
                    <div className="email__account">
                        <p className="heading__email__account">E-mail</p>
                        <p className="value__email__account">lilyatarusina@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="divider__account"></div>
            <div className="buttons__account">
                <ChangeAccount />
                <ExitAccount />
                <DeleteAccount />
            </div>
        </div>
    );
}

export default AccountInfo;
