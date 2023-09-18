// Импорт библиотеки React
import React from 'react';
import './Header.css';

// Функция для создания Header
function Header() {
    return (
        <header className="global__header">
            <div className="container__header">
                <div className="row__header">
                    <div className="col-md-12 list__header">
                        <nav className="navbar navbar-expand-sm">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/search">Поиск</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/map">Карта</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Корзина</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/account">Аккаунт</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
