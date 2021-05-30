// burger start

let header__burger = document.querySelector('.header__burger');
let header__list = document.querySelector('.header__list');
let header__icon = document.querySelector('.header__icon');
let body = document.querySelector('body');
let html = document.querySelector('html');

header__burger.addEventListener('click', function() {
    header__list.classList.toggle('active');
    header__icon.classList.toggle('active');
    body.classList.toggle('lock');
    body.classList.toggle('after');
    html.classList.toggle('lock');
    html.classList.toggle('after');

})

// burger end

// body lock start

setTimeout(() => {
    document.documentElement.style.overflow = 'auto';
}, 2500);

// body lock end