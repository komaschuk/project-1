$(document).ready(function() {
    var fooReveal = {
        origin: 'left',
        delay: 200,
        distance: '100px',
        easing: 'ease-in-out',
        scale: 1.1,
        // rotate   : { z: 10 },
        // reset: false
    };
    var barReveal = {
        origin: 'right',
        delay: 200,
        distance: '100px',
        easing: 'ease-in-out',
        scale: 1.5,
        // rotate   : { z: 10 },
        // reset: false
    };

    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.foo', fooReveal);
    sr.reveal('.bar', barReveal);
});