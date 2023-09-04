let addEventsForInputs = input => {
    input.addEventListener('click', () => {
        switch(input) {
            case signUpButton:
                window.location.href = './pages/sign_up.html'
                break
            case logInButton:
                window.location.href = './pages/log_in.html'
                break
            case mapButton:
                window.location.href = './pages/map.html';
                break
            case searchButton:
                window.location.href = './pages/search.html';
                break
            default:
                return 0
        }
    });
}

const signUpButton = document.querySelector('#sign__up__default'),
      logInButton = document.querySelector('#log__in__default'),
      mapButton = document.querySelector('#map'),
      searchButton = document.querySelector('#catalog');

addEventsForInputs(signUpButton);
addEventsForInputs(logInButton);
addEventsForInputs(mapButton);
addEventsForInputs(searchButton);