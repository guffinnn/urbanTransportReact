// Импорт необходимых модулей
import React, {useState} from 'react';
import '../styles/log_in_style.css';
import Input from "../components/sign-up/Input";
import Submit from "../components/sign-up/Submit";

// Функция для добавления страницы авторизации
function SignUp() {
    const baseUrl = 'https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users';

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const successMessage = "*Успешная регистрация";
    const successClass = "success";
    const errorMessage = "*Проверьте правильность вводимых данных";
    const errorClass = "error";

    const addUser = (userData) => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(userData)
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'surname':
                setSurname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkEmailFormat(email) && checkPasswordFormat(password)) {
            addUser({
                name: name,
                surname: surname,
                email: email,
                password: password
            });

            showAlert(successMessage,successClass);
        } else {
            showAlert(errorMessage, errorClass);
        }
    };

    // Функция, для показа состояния
    function showAlert(message, className) {
        setAlertMessage(message);
    }

    const checkEmailFormat = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(email)) {
            return true;
        }
        return false;
    };

    const checkPasswordFormat = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;
        if (regex.test(password)) {
            return true;
        }
        return false;
    };

    return (
        <div className="window">
            <div className="container glass">
                <div className="row form">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="col-12" id="sign__up__paragraph">Регистрация</p>
                        <form onSubmit={handleSubmit}>
                            <div className="row vertical__frame">
                                <Input type="text"
                                       name="name"
                                       value={name}
                                       onChange={handleInputChange}
                                       placeholder="Имя" />
                                <Input type="text"
                                       name="surname"
                                       value={surname}
                                       onChange={handleInputChange}
                                       placeholder="Фамилия" />
                                <Input type="text"
                                       name="email"
                                       value={email}
                                       onChange={handleInputChange}
                                       placeholder="E-mail" />
                                <Input type="text"
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