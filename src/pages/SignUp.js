// Импорт необходимых модулей
import React from 'react';
import '../styles/log_in_style.css';
import Input from "../components/sign-up/Input";
import Submit from "../components/sign-up/Submit";

// Функция для добавления страницы авторизации
function SignUp() {
    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="col-12" id="sign__up__paragraph">Регистрация</p>
                        <form>
                            <div className="row vertical__frame">
                                <Input name="name" />
                                <Input name="surname" />
                                <Input name="email" />
                                <Input name="password" />
                            </div>
                            <Submit />
                        </form>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="registration">
                            <p id="question" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Уже есть аккаунт?</p>
                            <a href="#" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 link__autorization">Авторизация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;