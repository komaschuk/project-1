$(document).ready(function(){
    // $('.js-mobile-menu__menu').click(function(){
    //  $(this).toggleClass('is-open');
    //  $('.mobile-menu').toggleClass('is-open');
    // });

    $('.js-mobile-menu__menu').on('click', function(event) {
        $('.js-mobile-menu__menu, .js-mobile-menu-overlay, .mobile-menu__wrapper').toggleClass('is-open');
        event.preventDefault();
    });

    $('.js-mobile-menu-overlay').on('click', function(event) {
        $('.js-mobile-menu__menu, .js-mobile-menu-overlay, .mobile-menu__wrapper').toggleClass('is-open');
        event.preventDefault();
    });
});