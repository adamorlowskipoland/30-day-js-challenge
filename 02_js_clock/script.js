const secHand = document.querySelector(".sec-hand");    //grabbing sec-hand div
const minHand = document.querySelector(".min-hand");    //grabbing min-hand div
const hourHand = document.querySelector(".hour-hand");  //grabbing hour-hand div
const date = document.querySelector(".date");

const secP = "";

function setDate() {

    
    const now = new Date(); //geting current date: week day mouth day h:m:s timezone
    
    const sec = now.getSeconds(); // getting current second
    const secDeg = ((sec / 60) * 360) + 90; // setting deg based on current second
//    adding extra 90deg because div starts turning from horizontal

    const min = now.getMinutes();   // getting current minute
    const minDeg = ((min / 60) * 360) + 90; //setting deg based on current minute
    
    const hour = now.getHours(); // getting current hour
    const hourDeg = ((hour / 12) * 360) +90; // setting deg based on current hour
    
    secHand.style.transform = `rotate(${secDeg}deg)`;   // setting rotate deg based on secDeg
    minHand.style.transform = `rotate(${minDeg}deg)`;     // setting rotate deg based on minDeg
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    // function adding 0 where 
    function digitClock(e, f, g) {
        if (e < 10) {
            e = "0" + e;
        }
        if (f < 10) {
            f = "0" + f;
        }
        if (g < 10) {
            g = "0" + g;
        }
        
    const hms = g + ":" + f + ":" + e;
    date.innerHTML = hms;
    }
    digitClock(sec, min, hour);
    
//    const hms = hour + ":" + min + ":" + sec;
//    date.innerHTML = hms;
}



setInterval(setDate, 1000);