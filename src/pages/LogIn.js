// Импорт библиотеки React
import React from 'react';
import '../styles/log_in_style.css';
import Input from "../components/Input";
import Submit from "../components/Submit";

// Функция для создания Header
function LogIn() {
    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-md-12">
                        <p className="col-md-12" id="sign__up">Авторизация</p>
                        <form>
                            <Input />
                            <Submit />
                        </form>
                    </div>
                    <div className="col-md-12 registration">
                        <p id="question" className="col-md-6">Еще не зарегистрированы?</p>
                        <a href="{/!*../pages/sign_up.html*!/}" className="col-md-6">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LogIn;
