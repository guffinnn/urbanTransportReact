// Строка подключения к API
const baseUrl = 'https://64e5fa4809e64530d17f5f7a.mockapi.io/api/db/users';

// Функция для добавления пользователя в JSON файл (БД)
const addUser = userData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(userData)
    });

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
        if(input.value === '' ||
            input.value === 'Имя' ||
            input.value === 'Фамилия' ||
            input.value === 'Email' ||
            input.value === 'Пароль') {

            input.value = '';
            alertBox.innerHTML = '';
        }
    });
}

// Функция, проверяющая формат почты
let checkEmailFormat = (email) => {
    // Регулярное выражение для проверки email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)) {return true;}

    return false;
}

// Функция, проверяющая формат пароля
let checkPasswordFormat = (password) => {
    // Регулярное выражение для проверки password
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/;

    if(regex.test(password)) {return true;}

    return false;
}

// Функция удачного входа в аккаунт
let confirmedAccountData = () => {
    // Если сообщение ошибки уже было высвечено, то мы удаляем его
    if(alertBox.classList.contains('error')){
        alertBox.classList.remove('error');
    }

    // Сообщение об успешной регистрации
    alertBox.classList.toggle('congratulation');
    alertBox.innerHTML = '*Успешная регистрация';
}

// Функция неудачного входа в аккаунт
let notConfirmedAccountData = () => {
    // Если сообщение ошибки уже было высвечено, то мы удаляем его
    if(alertBox.classList.contains('congratulation')){
        alertBox.classList.remove('congratulation');
    }

    // Сообщение об ошибке
    alertBox.classList.toggle('error');
    alertBox.innerHTML = '*Похоже что пользователь с таким email уже существует';
}

// Получаем данные со страницы
const nameInput = document.querySelector('#first__name'),
      surnameInput = document.querySelector('#second__name'),
      emailInput = document.querySelector('#work__email'),
      passwordInput = document.querySelector('#password'),
      createAccountButton = document.querySelector('button'),
      alertBox = document.querySelector('.alert');

// Объект Клиент
let userInfo = {
    name: '',
    surname: '',
    email: '',
    password: ''
};

addEventsForInputs(nameInput);
addEventsForInputs(surnameInput);
addEventsForInputs(emailInput);
addEventsForInputs(passwordInput);

// Событие по нажатию кнопки "Создать аккаунт"
createAccountButton.addEventListener('click', e => {
    e.preventDefault();

    // Если почта и пароль введены в правильном формате
    if(checkEmailFormat(emailInput.value) && checkPasswordFormat(passwordInput.value)) {
        confirmedAccountData();

        // Получаем данные аккаунта из формы
        userInfo = {
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(userInfo);

        // Проверяем наличие аккаунта в БД
        checkUser(userInfo)
            .then(userExists => {
                if (userExists) {
                    console.log('Пользователь существует');
                    notConfirmedAccountData();
                } else {
                    console.log('Пользователь не существует');
                    confirmedAccountData();

                    // Сохраняем данные в JSON файл
                    addUser(userInfo)
                        .then(response => {
                            console.log('Данные успешно добавлены');
                        })
                        .catch(error => {
                            console.error('Ошибка при добавлении данных:', error);
                        });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    else {
        console.log('Некорректные данные');
    }
})
