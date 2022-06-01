// Variables

let secondS = 0,
    minuteS = 0,
    sessionEnd = false,
    breakEnd = true,
    secondB = 0,
    minuteB = 0,
    interval;



    // buttons


const btnLength = document.querySelectorAll('.btn__length')
      sessionLenght = document.querySelector('.session__text__minutes');
      breakLenght = document.querySelector('.break__text__minutes');

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

// Listeners

btnLength.forEach (btn => {
    btn.addEventListener('click', (event) => {

        if (event.target.getAttribute('id') == 'session__down') {
        if (sessionLenght.textContent > 0) {
            sessionLenght.textContent = addZero(+sessionLenght.textContent - 5);
            minuteS = sessionLenght.textContent;
            minutesSession.textContent = sessionLenght.textContent;
            }
        }

        if (event.target.getAttribute('id') == 'session__up') {
            if (sessionLenght.textContent < 60) {
                sessionLenght.textContent = addZero(+sessionLenght.textContent + 5);
                minuteS = sessionLenght.textContent;
                minutesSession.textContent = sessionLenght.textContent;
            }
        }

        if (event.target.getAttribute('id') == 'break__down') {
            if (breakLenght.textContent > 0) {
                breakLenght.textContent = addZero(+breakLenght.textContent - 5);
                minuteB = sessionLenght.textContent;
                minutesBreak.textContent = sessionLenght.textContent;
            }
        }

        if (event.target.getAttribute('id') == 'break__up') {
            if (breakLenght.textContent < 20) {
                breakLenght.textContent = addZero(+breakLenght.textContent + 5);
                minuteB = breakLenght.textContent;
                minutesBreak.textContent = breakLenght.textContent;
            }
        }

    })
})


start.addEventListener('click', ()=> {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
})

stop.addEventListener('click', () => {
    clearInterval(interval);
})

refresh.addEventListener('click', clearAll);




// Functions


function startTimer() {

    if(sessionEnd == false) {
    secondS--;
    secondsSession.textContent = addZero(secondS);
    if(secondS <= 0) {
        secondS = 59;
        secondsSession.textContent = addZero(secondS);
        minuteS--;
        minutesSession.textContent = addZero(minuteS);
    }

    if (minuteS <= 0) {
        secondS = '00';
        minuteS = '00';
        secondsSession.textContent = secondS;
        minutesSession.textContent = minuteS;
        sessionEnd = true;
        timerSession.style.display = 'none';
        timerBreak.style.display = '';
    }
    }

    if(sessionEnd == true) {
        secondB--;
        secondsBreak.textContent = addZero(secondB);
        if(secondB <= 0) {
            secondB = 59;
            secondsBreak.textContent = addZero(secondB);
            minuteB--;
            minutesBreak.textContent = addZero(minuteB);
        }
        if (minuteB <= 0) {
            secondB = '00';
            minuteB = '00';
            secondsBreak.textContent = secondB;
            minutesBreak.textContent = minuteB;
            timerBreak.style.display = 'none';
            timerSession.style.display = '';
            
            // secondS = '00'
            // minuteS = sessionLenght.textContent
            // secondsSession.textContent = secondS;
            // minutesSession.textContent = minuteS;
            // sessionEnd = true;
            // console.log(1)
    }

    }



}

function clearAll () {

    secondS = '00',
    minuteS = '00',
    secondsSession.textContent = secondS;
    minutesSession.textContent = minuteS;
    secondsBreak.textContent = minuteS;
    minutesBreak.textContent = minuteS;
    sessionLenght.textContent = '00'
    breakLenght.textContent = '00'
    timerBreak.style.display = 'none';
    circles.textContent = '0'
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