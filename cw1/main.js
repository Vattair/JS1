const gallery = document.querySelectorAll('.gallery img');
const arrowPrev = document.querySelector('.prev');
const arrowNext = document.querySelector('.next');
const closeLb = document.querySelector('.closeLb');

arrowNext.addEventListener('click', showNextImg);
arrowPrev.addEventListener('click', showPrevImg);
closeLb.addEventListener('click', closeLightbox);

let n = 0;

for(let idx = 0; idx < gallery.length;idx++){
    gallery[idx].id = idx;
    gallery[idx].addEventListener('click', showLightbox);
}

function showLightbox(ev) {
    n = Number(this.id);
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    img.src = ev.target.src;
    lightbox.classList.add('visible');
}
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('visible');
}
function showNextImg(){
    const img = document.querySelector('.lightbox img');
    if(n < gallery.length - 1){
        n += 1;
    }else{
        n = 0;
    }
    img.src = gallery[n].src;  
}
function showPrevImg(){
    const img = document.querySelector('.lightbox img');
    if(n != 0){
        n -= 1;
    }else{
        n = gallery.length - 1;
    }
    img.src = gallery[n].src;  
}
