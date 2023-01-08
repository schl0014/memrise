let time = 0;
let timer;

/**
 * reset the timer on game end or reset
 */
export function resetTimer() {
  clearInterval(timer);
}

/**
 * starts the clock and adds it to the page
 */
export function startTimer() {
  timer = setInterval(function () {
    time++;
    const clock = document.querySelector('.clock');
    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    if (seconds < 10) {
      clock.innerHTML = `${minutes} : 0${seconds}`;
    } else {
      clock.innerHTML = `${minutes} : ${seconds}`;
    }
  }, 1000);
}

/**
 * reset time to zero
 */
export function resetTime() {
  time = 0;
}
