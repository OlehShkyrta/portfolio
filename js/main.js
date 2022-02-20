$(document).ready(function() {
    // Sticky heaxder
    $('.header__menu-link').click(function(e) {
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 100
        }, 1000);
        e.preventDefault();
    });
});



// Scroll animation
ScrollReveal().reveal('.about__inner', {duration: 2000, distance: '150px'});
ScrollReveal().reveal('.contact', {duration: 1000, distance: '200px'});


//Highlighting the desired menu item when scrolling
// var sections = $('section'),    
//     header = $('header'),
//     nav = $('.header__top-inner'),
//     navHeight = nav.outerHeight(),
//     menuLink = $('.header__menu');

// $(window).on('scroll', function() {
//     var currentPosition = $(this).scrollTop();

//     sections.each(function() {
//         var top = $(this).offset().top - navHeight,
//             bottom = top + $(this).outerHeight(); 
    
//         if (currentPosition >= top && currentPosition <= bottom) {
//             menuLink.find('a').removeClass('link-active');
//             sections.removeClass('header__menu-link--active');

//             $(this).addClass('link-active');
//             menuLink.find('a[href="#'+$(this).attr('id')+'"]').addClass('link-active'); 
//         }
//     });
// });

// menuLink.find('a').on('click', function() {
//     var $el = $(this),
//         id = $el.attr('href');

//     $('html, body').animate({
//         scrollTop: $(id).offset().top - navHeight
//     }, 500);

//     return false;
// });