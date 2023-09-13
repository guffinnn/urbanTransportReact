import React, { useState } from "react";

const Test = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const baseUrl = "https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        setAlertMessage("");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkUser();
    };

    const checkUser = () => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((users) => {
                const foundUser = users.find(
                    (user) => user.email === email && user.password === password
                );
                if (foundUser) {
                    setAlertMessage("*Успешная авторизация");
                } else {
                    setAlertMessage("*Пользователь с таким email не существует");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Пароль"
                />
                <button type="submit">Войти в аккаунт</button>
            </form>
            {alertMessage && <div className="alert-message">{alertMessage}</div>}
        </div>
    );
};

export default Test;