var carousel = document.getElementById('collapseExample');
var boton = document.getElementById('boton1');

window.addEventListener('click', function(e){
    if(e.target == boton){
        carousel.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
})