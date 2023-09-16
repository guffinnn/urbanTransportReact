// Импорт библиотеки React
import React from 'react';
import Header from "../components/basic-components/Header";
import Footer from "../components/basic-components/Footer";
import Main from "../components/account/Main";

// Функция для создания Account
function Account() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Account;
