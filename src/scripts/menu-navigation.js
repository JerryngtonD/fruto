var burgerIcon = document.querySelector('.page-header__toggle');
var burgerClose = document.querySelector('.page-header__close');

burgerIcon.addEventListener('click', function (evt) {
    var menuBar = document.querySelector('.main-nav');
    menuBar.classList.toggle('main-nav--closed');
});


burgerClose.addEventListener('click', function (evt) {
    var menuBar = document.querySelector('.main-nav');
    menuBar.classList.toggle('main-nav--closed');
});

