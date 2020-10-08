const gallery = document.querySelectorAll('.gallery img');
const arrowPrev = document.querySelector('.prev');
const arrowNext = document.querySelector('.next');

arrowNext.addEventListener('click', showNextImg);
arrowPrev.addEventListener('click', showPrevImg);

for(let idx = 0; idx < gallery.length;idx++){
    const img = gallery[idx];
    img.addEventListener('click', showLightbox);
}

function showLightbox(ev) {
    console.dir(ev.target);
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    img.src = ev.target.src;
    lightbox.classList.add('visible');
}

function hideLightbox(){
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}
function showNextImg(ev){
    const img = document.querySelector('.lightbox img');
    img.src = ev.target.nextSibling.src;
}
function showPrevImg(ev){
    const img = document.querySelector('.lightbox img');
    img.src = ev.target.previousSibling.src;
}
