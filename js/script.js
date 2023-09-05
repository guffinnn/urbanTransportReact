// Функция добавления действий по клику на кнопки
let addEventsForInputs = input => {
    // Событие клика активирует callback-функцию
    input.addEventListener('click', () => {
        // Конструкция Switch case
        switch(input) {
            // Кнопка Авторизации
            case signUpButton:
                window.location.href = './pages/sign_up.html'
                break
            // Кнопка Регистрации
            case logInButton:
                window.location.href = './pages/log_in.html'
                break
             // Кнопка Карты
            case mapButton:
                window.location.href = './pages/map.html';
                break
            // Кнопка Поиск
            case searchButton:
                window.location.href = './pages/search.html';
                break
            // По умолчанию - ничего не происходит
            default:
                return 0
        }
    });
}

// Получаем элементы со страницы
const signUpButton = document.querySelector('#sign__up__default'),
      logInButton = document.querySelector('#log__in__default'),
      mapButton = document.querySelector('#map'),
      searchButton = document.querySelector('#catalog');

// Добавляем обработчики клика каждому элементу страницы
addEventsForInputs(signUpButton);
addEventsForInputs(logInButton);
addEventsForInputs(mapButton);
addEventsForInputs(searchButton);