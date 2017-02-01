const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function showTime() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    
    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 90;
    
    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    
    
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
}

setInterval(showTime, 1000);