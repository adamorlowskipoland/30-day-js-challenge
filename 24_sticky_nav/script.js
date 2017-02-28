const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop

function fixNav() {
    console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';  //when we add class we also add padding top to body (equals to nav height) so the content won't pops up. It pops up couse nav as fixed position is suddelny "taken out" of the page, so it doesn't take space directly on the screen
        document.body.classList.add('fixed-nav');
        
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);


/*
    NOCE: very nice thing is that we add only one class
        to body element and we animated 3 things by editing code in css
*/