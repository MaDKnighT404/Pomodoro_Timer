// buttons

const sessionDown = document.querySelector('.session__down'),
      sessionUp = document.querySelector('.session__up'),
      breakDown = document.querySelector('.break__down'),
      breakUp = document.querySelector('.break__up');
      sessionLenght = document.querySelector('.session__text__minutes');
      breakLenght = document.querySelector('.break__text__minutes');

const start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    refresh = document.querySelector('.refresh');

// Listeners

sessionDown.addEventListener('click', ()=> {
    if (sessionLenght.textContent > 0) {
        sessionLenght.textContent = +sessionLenght.textContent - 5;
    }
})

sessionUp.addEventListener('click', ()=> {
    if (sessionLenght.textContent < 60) {
        sessionLenght.textContent = +sessionLenght.textContent + 5;
    }
})

breakDown.addEventListener('click', ()=> {
    if (breakLenght.textContent > 0) {
        breakLenght.textContent = +breakLenght.textContent - 5;
    }
})

breakUp.addEventListener('click', ()=> {
    if (breakLenght.textContent < 20) {
        breakLenght.textContent = +breakLenght.textContent + 5;
    }
})




