// buttons

const btnLength = document.querySelectorAll('.btn__length')
      sessionLenght = document.querySelector('.session__text__minutes');
      breakLenght = document.querySelector('.break__text__minutes');

const start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    refresh = document.querySelector('.refresh');

// Listeners


btnLength.forEach (btn => {
    btn.addEventListener('click', (event) => {

        if (event.target.getAttribute('id') == 'session__down') {
        if (sessionLenght.textContent > 0) {
            sessionLenght.textContent = +sessionLenght.textContent - 5;
            }
        }

        if (event.target.getAttribute('id') == 'session__up') {
            if (sessionLenght.textContent < 60) {
                sessionLenght.textContent = +sessionLenght.textContent + 5;
            }
        }

        if (event.target.getAttribute('id') == 'break__down') {
            if (breakLenght.textContent > 0) {
                breakLenght.textContent = +breakLenght.textContent - 5;
            }
        }

        if (event.target.getAttribute('id') == 'break__up') {
            if (breakLenght.textContent < 20) {
                breakLenght.textContent = +breakLenght.textContent + 5;
            }
        }

    })
})






