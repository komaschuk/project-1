$(document).ready(function() {
    var fooReveal = {
        origin: 'left',
        delay: 200,
        distance: '100px',
        easing: 'ease-in-out',
        scale: 1.1,
        mobile: false,
        // rotate   : { z: 10 },
        // reset: false
    };
    var barReveal = {
        origin: 'right',
        delay: 200,
        distance: '100px',
        easing: 'ease-in-out',
        scale: 1.1,
        mobile: true,
    };
    var text = {
        origin: 'bottom',
        delay: 500,
        distance: '600px',
        easing: 'ease-in-out',
        scale: 1.5,
        mobile: true,
    };

    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.img-lf', fooReveal);
    sr.reveal('.img-rg', barReveal);
    sr.reveal('.text', text);
});