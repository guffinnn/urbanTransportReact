// Импорт необходимых модулей
import React from 'react';
import Header from "../components/basic-components/Header";
import Main from '../components/basket/Main'
import Footer from "../components/basic-components/Footer";

// Функция для добавления страницы корзины
function BasketPage() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default BasketPage;