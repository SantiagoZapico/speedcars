
var container= document.getElementById('container');
setTimeout(function() {
    container.classList.add('cerrar');
}, 6000);

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
/* SCROLL HEADER */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>0);
})

/* SCROLL CARRUSEL */
window.addEventListener("scroll", function(){
    var carrusel = document.querySelector(".Carousel");
    carrusel.classList.toggle("back-carrusel", window.scrollY>150);
})

/* SCROLL ABOUT */
window.addEventListener("scroll", function(){
    var About = document.querySelector(".about");
    About.classList.toggle("back-About", window.scrollY>950);
})

/* SCROLL CARRUSEL 2 */
window.addEventListener("scroll", function(){
    var carrusel2 = document.querySelector(".PREMIOS");
    carrusel2.classList.toggle("back-PREMIOS", window.scrollY>2800);
})

/* SCROLL INFO */
window.addEventListener("scroll", function(){
    var info = document.querySelector(".info");
    info.classList.toggle("back-info", window.scrollY>3600);
})