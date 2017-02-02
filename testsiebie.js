function workClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    
    const secDeg = ((sec / 60) * 360) + 90;
    const minDeg = ((min / 60) * 360) + 90;
    const hourDeg = ((hour / 12) * 360) + 90;
    
    const secHand = document.querySelector(".sec-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(workClock, 1000);