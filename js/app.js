
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    header.classList.toggle('active');
}

