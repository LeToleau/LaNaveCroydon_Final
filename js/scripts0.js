var land = document.getElementById('collapseOnClick');
var video = document.getElementById('video');
var fadeLeft = [document.getElementById('difusion'), document.getElementById('vivos')];
var fadeRight = [document.getElementById('portadaRight'), document.getElementById('playlist')];
var fadeDown = document.getElementsByClassName('navbar');

land.scrollIntoView();

window.addEventListener('click', function(e) {
    if(e.target != land) {
        land.style.display = 'none';
        document.body.style.overflow = 'visible';
        video.style.display = 'initial'; // para evitar el display de los controles sobre la portada
        fadeLeft[0].classList.add('animate__fadeInLeft');
        fadeLeft[1].classList.add('animate__fadeInLeft');
        fadeRight[0].classList.add('animate__fadeInRight');
        fadeRight[1].classList.add('animate__fadeInRight');
        fadeDown[0].classList.add('animate__fadeInDown');
    }
});

