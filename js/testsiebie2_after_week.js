function playSound (e) {
    
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    if (key === null) return;

    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing");
}

function removeClass() {
    this.classList.remove("playing");
}


window.addEventListener('keydown', playSound);


var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeClass))

