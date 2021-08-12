var foto = document.getElementsByTagName('img');
var box = document.getElementsByClassName('lightbox')
var cerrar = document.getElementById('close');
var seleccionada = document.getElementsByClassName('carousel-item')

window.addEventListener('click', function(e) {
    for(i=1;i<=20;i++) {
        if(e.target == foto[i]) { 
            seleccionada[i-1].classList.add('active');
            box[0].classList.remove('collapse');
            box[0].scrollIntoView({block: 'start', behavior: 'smooth'});
            document.body.style.overflow = 'hidden';
        }
    }
});
window.addEventListener('click', function(e) {
    if(e.target == cerrar) {
        box[0].classList.add('collapse');
        document.body.style.overflow = 'initial';
        for(i=0;i<20;i++) {
            seleccionada[i].classList.remove('active');
        }
    }
});