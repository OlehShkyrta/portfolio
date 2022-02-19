"use strict";

// Burger button
const menuBtn = document.querySelector('.menu__btn'),
      mobileMenu = document.querySelector('.mobile__menu');

menuBtn.addEventListener('click', e => {
    e.preventDefault();
    menuBtn.classList.toggle('menu__btn--active');
    mobileMenu.classList.toggle('mobile__menu--active');
});

ScrollReveal().reveal('.about__inner', {duration: 4000, distance: '150px'});
ScrollReveal().reveal('.contact', {duration: 4000, distance: '150px'});