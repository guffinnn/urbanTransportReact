// Импорт необходимых модулей
import React, { useState } from 'react';
import '../styles/log_in_style.css';
import Input from "../components/log-in/Input";
import Submit from "../components/log-in/Submit";

// Функция добавления компонента LogIn
function LogIn() {
    // Переменные для работы с данными страницы
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const successMessage = "*Успешная авторизация";
    const successClass = "success";
    const errorMessage = "*Пользователя с такими данными не существует";
    const errorClass = "error";

    // Строка подключения к API
    const baseUrl = "https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users";

    // Функция для удаления данных с inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        setAlertMessage("");
    };

    // Функция, которая вызывается при клике на кнопку подтверждения
    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkUser();
    };

    // Функция, для показа состояния
    function showAlert(message, className) {
        setAlertMessage(message);
    }

    /*const history = useHistory();*/

    // Функция для проверки наличия пользователя в БД
    const checkUser = () => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((users) => {
                const foundUser = users.find(
                    (user) => user.email === email && user.password === password
                );
                if (foundUser) {
                    showAlert(successMessage, successClass);
                    /*history.push("/map");*/
                } else {
                    showAlert(errorMessage, errorClass);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="col-12" id="sign__up__paragraph">Авторизация</p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="row vertical__frame">
                                <Input  type="text"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        placeholder="Email" />
                                <Input type="password"
                                       name="password"
                                       value={password}
                                       onChange={handleInputChange}
                                       placeholder="Пароль" />
                            </div>
                            {alertMessage && <div id="alert" className={`alert alert__frame ${alertMessage === successMessage ? successClass : errorClass}`}>{alertMessage}</div>}
                            <Submit />
                        </form>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <div className="registration">
                            <p id="question" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">Еще не зарегистрированы?</p>
                            <a href="/signUp" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 link">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;