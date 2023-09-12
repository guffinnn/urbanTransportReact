// Импорт необходимых модулей
import React, { useState } from 'react';
import '../styles/log_in_style.css';
import Input from "../components/log-in/Input";
import Submit from "../components/log-in/Submit";
import { users } from "../components/json/users";

// Функция для добавления страницы авторизации
function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isError, setIsError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Функция для проверки наличия пользователя в users
    const checkUser = () => {
        // С помощью тернарного оператора получаем true/false
        const userExists = users.some(user => user.email === email && user.password === password);

        // Если пользователь существует
        if (userExists) {
            // Выводим сообщение об успешной авторизации
            setSuccessMessage('*Успешная авторизация');
            setIsError(false);
        // Если пользователь не существует
        } else {
            // Выводим сообщение об отклонении авторизации
            setSuccessMessage('*Пользователь с таким E-mail не существует');
            setIsError(true);
        }


        // Вывод сообщения
        setShowAlert(true);
    }

    // Функция, которая удаляет значения inputs при первом клике на него
    const handleInputChange = event => {
        event.preventDefault();

        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }

        console.log('a');
    }

    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="col-12" id="sign__up">Авторизация</p>
                        <form>
                            <div className="row vertical__frame">
                                <Input name="email" value={email} onChange={handleInputChange} />
                                <Input name="password" value={password} onChange={handleInputChange} />
                            </div>
                            <Submit onClick={checkUser} />
                        </form>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="registration">
                            <p id="question" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Еще не зарегистрированы?</p>
                            <a href="#" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Регистрация</a>
                        </div>
                    </div>
                    {showAlert && (
                        <div className={isError ? "alert error" : "alert congratulation"}>
                            {successMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LogIn;