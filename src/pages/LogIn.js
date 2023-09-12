// Импорт библиотеки React
import React from 'react';
import '../styles/log_in_style.css';
import Input from "../components/log-in/Input";
import Submit from "../components/log-in/Submit";

// Функция для создания Header
function LogIn() {
    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="col-12" id="sign__up">Авторизация</p>
                        <form>
                            <Input />
                            <Submit />
                        </form>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="registration">
                            <p id="question" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Еще не зарегистрированы?</p>
                            <a href="{/*../pages/sign_up.html*/}" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
