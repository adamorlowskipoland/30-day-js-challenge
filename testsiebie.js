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
    
    
    
    function digitalClock(a, b, c) {
        if (a < 10) {
            a = "0" + a;
        }
        if (b < 10) {
            b = "0" + b;
        }
        if (c < 10) {
            c = "0" + c;
        }
        
        const hms = a + ":" + b + ":" + c;
        
        const date = document.querySelector(".date");
        date.innerHTML = hms;
    }
    
    digitalClock(hour, min, sec);
    

}

setInterval(workClock, 1000);