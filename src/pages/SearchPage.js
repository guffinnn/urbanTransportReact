// Импорт необходимых модулей
import React from 'react';
import Header from "../components/basic-components/Header";
import Main from "../components/search/Main";
import Footer from "../components/basic-components/Footer";
import '../styles/search.css';

// Функция для добавления страницы авторизации
function SignUp() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default SignUp;