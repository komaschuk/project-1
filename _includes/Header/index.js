$(document).ready(function () {

    function onScrollHeader() {
        var siteHeader = $('.js-header');
        var offsetDevider = 10;

        $(window).on('scroll', function () {
            var offsetTop = $(this).scrollTop();

            if ( offsetTop > offsetDevider && !siteHeader.hasClass('is-colored') ) {
               siteHeader.addClass('is-colored');
            } else if ( offsetTop < offsetDevider && siteHeader.hasClass('is-colored') ) {
                siteHeader.removeClass('is-colored');
            }

        }).scroll();
    }

    onScrollHeader();

});
