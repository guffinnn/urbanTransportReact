// Строка подключения к API
const baseUrl = 'https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users';

// Функция для проверки наличия пользователя в файле
const checkUser = userData =>
    fetch(baseUrl)
        .then(response => response.json())
        .then(users => {
            const foundUser = users.find(user => user.email === userData.email && user.password === userData.password);
            return !!foundUser; // Упрощенная версия тернарного оператора
        })
        .catch(error => {
            console.error('Error:', error);
            return false;
        });

// Функция для добавления обработчиков событий всем inputs
let addEventsForInputs = input => {
    input.addEventListener('click', () => {
        if(input.value === 'Email' || input.value === 'Пароль') {
            input.value = '';
            alertBox.innerHTML = '';
        }
    });
}

// Функция удачного входа в аккаунт
let confirmedAccountData = () => {
    // Если сообщение ошибки уже было высвечено, то мы удаляем его
    if(alertBox.classList.contains('error')){
        alertBox.classList.remove('error');
    }

    // Сообщение об успешной регистрации
    alertBox.classList.toggle('congratulation');
    alertBox.innerHTML = '*Успешная авторизация';
}

// Функция неудачного входа в аккаунт
let notConfirmedAccountData = () => {
    // Если сообщение ошибки уже было высвечено, то мы удаляем его
    if(alertBox.classList.contains('congratulation')){
        alertBox.classList.remove('congratulation');
    }

    // Сообщение об ошибке
    alertBox.classList.toggle('error');
    alertBox.innerHTML = '*Пользователь с таким email не существует';
}

// Получаю данные со страницы
const emailInput = document.querySelector('#work__email'),
      passwordInput = document.querySelector('#password'),
      checkUserButton = document.querySelector('button'),
      alertBox = document.querySelector('.alert');

// Объект Клиент
let userInfo = {
    name: '',
    surname: '',
    email: '',
    password: ''
};

addEventsForInputs(emailInput);
addEventsForInputs(passwordInput);

// Событие по клику кнопки "Войти в аккаунт"
checkUserButton.addEventListener('click', e => {
    e.preventDefault();

    // Получаем данные аккаунта из формы
    userInfo = {
        name: '',
        surname: '',
        email: emailInput.value,
        password: passwordInput.value
    };

    console.log(userInfo);

    // Проверяем наличие аккаунта в БД
    checkUser(userInfo)
        .then(userExists => {
            if (userExists) {
                console.log('Пользователь существует');
                confirmedAccountData();
            } else {
                console.log('Пользователь не существует');
                notConfirmedAccountData();
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
})