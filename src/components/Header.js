// Импорт библиотеки React
import React from 'react';
import './Header.css';

// Функция для создания Header
function Header() {
    return (
        <header>
            <div className="container header">
                <div className="row">
                    <div className="col-md-12 list">
                        <nav className="navbar navbar-expand-sm">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Поиск</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Карта</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Корзина</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Аккаунт</a>
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
