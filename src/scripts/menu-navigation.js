var burgerIcon = document.querySelector('.page-header__toggle');

burgerIcon.addEventListener('click', function (evt) {
    var menuBar = document.querySelector('.main-nav');
    menuBar.classList.toggle('main-nav--closed');
    burgerIcon.classList.toggle('close');
});
