window.addEventListener('click', function(e) {
    let tapa = document.getElementsByClassName('tapa');
    let disco = document.getElementsByClassName('card');
    let contenido = document.getElementsByClassName('contenido');
    
    for(i=0; i <= 5; i++){
        if(e.target == tapa[i]) {
            disco[i].classList.toggle('full');
            contenido[i].classList.toggle('collapse');
            disco[i].scrollIntoView({block:'center', behavior: 'smooth'});
        }
    }
})
