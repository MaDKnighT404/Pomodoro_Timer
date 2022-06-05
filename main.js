// Variables

let secondS = 0,
    minuteS = 0,
    timerStart = false,
    pressStop = false,
    sessionEnd = false,
    secondB = 0,
    minuteB = 0,
    interval;




    // buttons


const btnLength = document.querySelectorAll('.btn__length')
      sessionLenght = document.querySelector('.session__text__minutes');
      breakLenght = document.querySelector('.break__text__minutes');



const modalWindow = document.querySelector('.modal__wrapper');
const modalText = document.querySelector('.modal__text');
const btnOk = document.querySelector('.modal__ok')



const start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    refresh = document.querySelector('.refresh');

// timers

const timerSession = document.querySelector('.timer-session'),
      timerBreak = document.querySelector('.timer-break')
      secondsSession = document.querySelector('.seconds__session'),
      minutesSession = document.querySelector('.minutes__session'),
      secondsBreak = document.querySelector('.seconds__break'),
      minutesBreak = document.querySelector('.minutes__break');

const circles = document.querySelector('.circles');
const bell = document.querySelector('audio');


// Listeners

// modal

btnOk.addEventListener('click', () => {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show')
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalWindow.classList.add('hide')
        modalWindow.classList.remove('show')
    }

})


btnLength.forEach (btn => {
    btn.addEventListener('click', (event) => {

        if (event.target.getAttribute('id') == 'session__down') {
        if (sessionLenght.textContent > 0) {
            sessionLenght.textContent = addZero(+sessionLenght.textContent - 5);
            minutesSession.textContent = sessionLenght.textContent;
            minuteS = +minutesSession.textContent;
            }
        }

        if (event.target.getAttribute('id') == 'session__up') {
            if (sessionLenght.textContent < 60) {
                sessionLenght.textContent = addZero(+sessionLenght.textContent + 5);
                minutesSession.textContent = sessionLenght.textContent;
                minuteS = +minutesSession.textContent;
            }
        }

        if (event.target.getAttribute('id') == 'break__down') {
            if (breakLenght.textContent > 0) {
                breakLenght.textContent = addZero(+breakLenght.textContent - 5);
                minutesBreak.textContent = sessionLenght.textContent;
                minuteB = +minutesBreak.textContent
            }
        }

        if (event.target.getAttribute('id') == 'break__up') {
            if (breakLenght.textContent < 20) {
                breakLenght.textContent = addZero(+breakLenght.textContent + 5);
                minutesBreak.textContent = breakLenght.textContent;
                minuteB = +minutesBreak.textContent;
            }
        }

    })
})


start.addEventListener('click', ()=> {
    clearInterval(interval);

    if (minuteS != 0 && minutesSession.textContent != 0 && minuteB != 0 && minutesBreak.textContent != 0 || pressStop == true) {
    interval = setInterval(startTimer, 10)
    }

    if (minuteS == 0 && minutesSession.textContent == 0  && timerStart === false && pressStop == false) {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        createModalMessage('Session')
    }

    if (minuteB == 0 && minutesBreak.textContent == 0  && timerStart === false && pressStop == false) {
        createModalMessage('Break')
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
    }
})

stop.addEventListener('click', () => {
    clearInterval(interval);
    timerStart = false;
    pressStop = true;
})

refresh.addEventListener('click', clearAll);






//functions

function createModalMessage(time) {
    modalText.innerHTML = 
    `
    Sorry! <br><br> You need to set <br> <strong> ${time} Length</strong>
    `
}

function startTimer () {

    startSessionTimer();

    startBreakTimer();

}

function startSessionTimer() {
    secondS--
    secondsSession.textContent = addZero(secondS);
   
    if (secondS < 0 && sessionEnd === false) {
        secondS = 59;
        secondsSession.textContent = addZero(secondS);
        minuteS--
        minutesSession.textContent = addZero(minuteS)
    }

    if (minuteS === 0 && secondS === 0 && sessionEnd === false) {
        timerBreak.style.display = '';
        timerSession.style.display = 'none'
        minutesBreak.textContent = breakLenght.textContent;
        minuteB = +minutesBreak.textContent;
        sessionEnd = true;
        bell.play()
    }

}

function startBreakTimer() {
    if (sessionEnd === true) {
    secondB--
    secondsBreak.textContent = addZero(secondB);
    }
    if (secondB < 0 &&sessionEnd === true) {
        secondB = 59;
        secondsBreak.textContent = addZero(secondB);
        minuteB--
        minutesBreak.textContent = addZero(minuteB)
    }

    if (minuteB === 0 && secondB === 0 && sessionEnd === true) {
        circles.textContent++;
        timerBreak.style.display = 'none';
        timerSession.style.display = '';
        sessionEnd = false;
        minutesSession.textContent = sessionLenght.textContent;
        minuteS = +minutesSession.textContent;
        bell.play()
    }
}





function clearAll () {
    clearInterval(interval);
    secondS = 0;
    secondB = 0;
    minuteS = 0;
    minuteB = 0;
    sessionLenght.textContent = '00'
    breakLenght.textContent = '00'

    secondsSession.textContent = '00';
    minutesSession.textContent = '00';

    secondsBreak.textContent = '00';
    minutesBreak.textContent = '00';

    timerSession.style.display = '';
    timerBreak.style.display = 'none';
    circles.textContent = 0;
    sessionEnd = false;
    pressStop = false;
    modalWindow.classList.add('hide')
}

clearAll()

function addZero(num) {
    if(num >= 0 && num < 10) {
        return `0${num}`
    } else {
        return num
    }
}







// interval2 = setInterval(equalize, 10)
// function equalize () {
//     minutes = sessionLenght.textContent;
//     minutesSession.textContent = addZero(minutes);
// }