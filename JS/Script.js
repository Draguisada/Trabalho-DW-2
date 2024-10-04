nav = document.querySelector('nav');
nav.style.display = 'None';

var showNavMin = 400;

const icone = document.getElementById('icon');
const fundo_araguari = document.getElementsByClassName('araguari-header-titulo');

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    // console.log('ScrollY valor')
    // console.log(scroll);
    
    // Mudar o icone da página dependendo do segmento (Oq eu to fazendo o site nem ta pronto)
    scrollIcon = scroll;
    if (scrollIcon < 1500) {
        icone.href='Imagens/tapuciguara/poker-cards.png';
    } else if (scrollIcon < 2800) {
        icone.href='Imagens/Sacramento/T.webp';
    } else if (scrollIcon < 3250) {
        icone.href='Imagens/Araguari/Indio.png';
    }


    // Mudar opacidade da Nav com o scroll
    scrollNav = scroll - showNavMin/2
    opacityNav = Math.min(scrollNav, 1000);
    if (opacityNav < showNavMin) {
        nav.style.display = 'None';
    } else if (opacityNav < 1000 || opacityNav > showNavMin) {
        nav.style.display = 'Block';
        changeNavOpacity(opacityNav);
    }

    // Parallax para o titulo de Araguari
    if (scroll > 2250) {
        scrollArag = scroll;
        var paralax = fundo_araguari[0].offsetTop - scrollArag;
        paralax = 1000-paralax
        // console.log('Fundo - paralax')
        // console.log(paralax);
        paralax = Math.min(Math.max(Math.ceil(paralax*45/624), 25), 45);
        // console.log('Regra de 3')
        // console.log(paralax);
        fundo_araguari[0].style.backgroundPositionY = paralax + '%'
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
        scrollToY = scrollToY - 180;
    }
    if (elem == "sacramento") {
        scrollToY = scrollToY - 320;
    }

    scrollToY = scrollToY - 30;

    scroll({left:0, top:scrollToY, behavior: 'smooth'});
}
