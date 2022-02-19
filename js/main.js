"use strict";

// Burger button
const menuBtn = document.querySelector('.menu__btn'),
      mobileMenu = document.querySelector('.mobile__menu');

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    menuBtn.classList.toggle('menu__btn--active');
    mobileMenu.classList.toggle('mobile__menu--active');
});

// $('.menu__btn').on('click', function(){
//     $('.menu__btn').toggleClass('menu__btn--active');
//     $('.mobile__menu-list').toggleClass('mobile__menu-list--active');
// });

// function  deleteClass () {
//     $('.menu__btn').removeClass('menu__btn--active');
//     $('.mobile__menu-list').removeClass('mobile__menu-list--active');
//     $('.mobile__submenu-list').css('display', 'none');
// }

// $('.single-link').on('click', deleteClass);
// $('.mobile__submenu-link').on('click', deleteClass);