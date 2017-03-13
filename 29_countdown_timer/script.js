const timerDisplay = document.querySelector('.display__time-left');

function timer (seconds) {
    let countDown;
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
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
    console.log({minutes, remainderSeconds});
}