$(document).ready(function() {
    var productItem = {
        origin: 'bottom',
        delay: 200,
        distance: '200px',
        easing: 'ease',
        scale: 1,
        mobile: false,
        rotate   : { z: 10 },
        reset: false
    };

    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.js-product-list__item', productItem);
});