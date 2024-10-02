nav = document.querySelector('nav');
nav.style.display = 'None';

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    opacity = Math.min(scroll, 1000);
    
    if (opacity < 1000) {
        nav.style.display = 'None';
    } else if (opacity < 1550 || opacity > 1000) {
        nav.style.display = 'Block'
        changeNavOpacity(opacity);
    }

});



function changeNavOpacity(opacity) {

    opacity = opacity*70/1000;

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
