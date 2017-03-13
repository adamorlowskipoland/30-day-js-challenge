function timer (seconds) {
    let countDown;
    const now = Date.now();
    const then = now + seconds * 1000;
    
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop
        if (secondsLeft <= 0) {
            clearInterval(countDown);
            return;
        }
        // display 
        console.log(secondsLeft);
    }, 1000);
    
    console.log(now, then);
}