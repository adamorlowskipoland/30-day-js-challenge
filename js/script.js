function makeSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return //stops function when not found proper elem
    audio.currentTime = 0; //rewind to start every time key was hit
    audio.play();
    key.classList.add("playing");
};

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //stops functions if it's not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', makeSound);