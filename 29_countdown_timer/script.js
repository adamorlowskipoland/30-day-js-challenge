let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer (seconds) {
    // first you need to clear any existing timers
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        // display 
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft (seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
//    console.log({minutes, remainderSeconds});
}

function displayEndTime (timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    // line for american time display
    // put adjustedHour in endTime.textContent
//    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`; 
}

function startTimer () {
//    console.log(this);
//    console.log(this.dataset);
    
    // this is what we need
//    console.log(this.dataset.time);
    
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
//    console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
//    console.log(mins);
    timer(mins * 60);
    this.reset();
});