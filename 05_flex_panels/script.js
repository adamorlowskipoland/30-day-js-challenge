const panels = document.querySelectorAll(".panel");

function toggleOpen () {
//    option function for having only one open panel
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.toggle('open');
}

function toggleActive (e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));