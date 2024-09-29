window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    opacity = Math.min(scroll, 526);
    
    if (opacity < 526) {
        changeNavOpacity(opacity);
    }

});

nav = document.querySelector('nav');

function changeNavOpacity(opacity) {

    opacity = opacity*70/526;

    nav.style.backgroundColor = 'rgba(13, 6, 1,' + opacity/100 + ')';
}


scroll(-2000, 0)

function goto(elem) {
    procura = document.getElementById(elem);
    scrollToY = Math.max(procura.scrollHeight, procura.offsetTop);
    if (elem == "tupaciguara") {
        scrollToY = scrollToY - 200;
    }

    scroll({left:0, top:scrollToY, behavior: 'smooth'});
}
