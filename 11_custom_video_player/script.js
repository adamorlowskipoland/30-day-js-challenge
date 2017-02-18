// ELEMENTS
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = document.querySelector('.fullscreen');


// FUNCTIONS
function togglePlay () {
//    const method = video.paused ? 'play' : 'pause';
//    video[method]();
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

function updateBtn () {
//    const icon = this.paused ? '►' : '||';
//    toggle.textContent = icon;
    if (video.paused) {
        toggle.textContent = "►";
    } else {
        toggle.textContent = "||";
    }
};

function skip () {
    const skipButton = this.dataset.skip;
    video.currentTime += parseFloat(skipButton);
}

function handleRangeUpdate () {
    video[this.name] = this.value;
}

function handleProgress () {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFullScreen () {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    }
    if (video.exitFullScreen) {
        video.exitFullScreen();
    } else if (video.webkitExitFullScreen) {
        video.webkitExitFullScreen();
    } else if (video.mozCancelFullScreen) {
        video.mozCancelFullScreen();
    }
};
//document.webkitExitFullscreen();
//document.mozCancelFullscreen();
//document.exitFullscreen();




// EVENT LISTENERS
video.addEventListener('click', togglePlay, false);
video.addEventListener('play', updateBtn, false);
video.addEventListener('pause', updateBtn, false);
video.addEventListener('timeupdate', handleProgress, false);
window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        togglePlay ();
    }
}, false);

toggle.addEventListener('click', togglePlay, false);


skipButtons.forEach(button => button.addEventListener('click', skip, false));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate, false));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate, false));

let mouseDown = false;
progress.addEventListener('click', scrub, false);
//progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousemove', (e) => {
    if (mouseDown) { scrub (e); }
}, false);
progress.addEventListener('mousedown', () => mouseDown = true, false);
progress.addEventListener('mouseup', () => mouseDown = false, false);

fullScreenButton.addEventListener('click', toggleFullScreen);