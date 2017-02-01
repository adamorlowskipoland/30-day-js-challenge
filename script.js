function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    console.log(sec);
    console.log(secDeg);
    

    const secHand = document.querySelector(".sec-hand");
    secHand.style.transform = `rotate(${secDeg}deg)`;
}



setInterval(setDate, 1000);