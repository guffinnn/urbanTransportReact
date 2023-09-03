let addEventsForInputs = input => {
    input.addEventListener('click', () => {
        if(input === signUpButton) {
            window.location.href = './pages/sign_up.html';
        }
        else if(input === logInButton) {
            window.location.href = './pages/log_in.html';
        }
        else if(input === mapButton) {
            window.location.href = './pages/map.html';
        }
    });
}

const signUpButton = document.querySelector('#sign__up__default'),
      logInButton = document.querySelector('#log__in__default'),
      mapButton = document.querySelector('#map');

addEventsForInputs(signUpButton);
addEventsForInputs(logInButton);
addEventsForInputs(mapButton);