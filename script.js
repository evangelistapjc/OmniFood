$(document).ready( () => {
    /* STICKY NAVIGATION STARTS */
    var waypoint = new Waypoint({
      element: $('.section-intro-js'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky-nav');
            } else {
                $('nav').removeClass('sticky-nav');
            }
        }, offset: '90px;',
    });

    /* STICKY NAVIGATION */
    $('.btn-plans-js').click( () => {
        $('html, body').animate({scrollTop: $('.section-plans-js').offset().top -97}, 1000);
    });

    $('.btn-intro-js').click( () => {
        $('html, body').animate({scrollTop: $('.section-intro-js').offset().top -90}, 1000);
    });

    /* SCROLL ANIMATIONS */
    $('.wp-1-js').waypoint( () => {
        $('.wp-1-js').addClass('animate__animated animate__fadeIn'); 
    }, {
        offset: '50%',
    });

    $('.wp-2-js').waypoint( () => {
        $('.wp-2-js').addClass('animate__animated animate__fadeInUp'); 
    }, {
        offset: '50%',
    });

    $('.wp-3-js').waypoint( () => {
        $('.wp-3-js').addClass('animate__animated animate__fadeIn'); 
    }, {
        offset: '60%',
    });

    $('.wp-4-js').waypoint( () => {
        $('.wp-4-js').addClass('animate__animated animate__pulse'); 
    }, {
        offset: '45%',
    });

    $('.nav-icon-js').click( () => {
        var show = $('.main-nav-js');
        var change = $('.nav-icon-js i');

        show.slideToggle(200);
        if (change.hasClass('ion-navicon-round')) {
            change.removeClass('ion-navicon-round').addClass('ion-close-round');
        } else {
            change.removeClass('ion-close-round').addClass('ion-navicon-round');
        }
    });

    /* SMOOTH SCROLLING */
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({scrollTop: target.offset().top -90}, 1000, function() {
                    // Callback after animation
                    var $target = $(target);
                    // Must change focus!
                    $target.focus();

                    // Checking if the target was focused                    
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        // Adding tabindex for elements not focusable
                        $target.attr('tabindex','-1');
                        // Set focus again
                        $target.focus();
                    };
                });
            }
        }
    });
});

function checkWindow() {  
    if ( $(window).width() <= 992 ) {  
        $('.intro-resize').removeClass('col-3').addClass('col-6');
        $('.steps-box').removeClass('col-6').addClass('col-12');
        $('.city-resize').removeClass('col-3').addClass('col-6');
        $('.plans-container-resize').removeClass('container').addClass('container-fluid');
    } else {  
        $('.intro-resize').removeClass('col-6').addClass('col-3');
        $('.steps-box').removeClass('col-12').addClass('col-6');
        $('.city-resize').removeClass('col-6').addClass('col-3');
        $('.plans-container-resize').addClass('container');
    }

    if ( $(window).width() <= 768 ) {  
        $('.steps-box').removeClass('col-6').addClass('col-12');
        $('.quote-resize').removeClass('col-4').addClass('col-12');
        $('.plans-container-resize').removeClass('container-fluid').addClass('container');
        $('.plans-resize').removeClass('col-4').addClass('col-12');
        $('.btn-resize').removeClass('btn-partial').addClass('btn-full');
        $('.form-resize').removeClass('col-6').addClass('col-12');
        $('.submit-resize').removeClass('col-6 offset-6').addClass('col-12');
        $('.footer-container-resize').removeClass('container').addClass('container-fluid');
        $('.footer-resize').removeClass('col-9').addClass('col-12');
        $('.socials-resize').removeClass('col-3').addClass('col-12');
    } else {  
        $('.steps-box').removeClass('col-12').addClass('col-6');
        $('.quote-resize').removeClass('col-12').addClass('col-4');
        $('.plans-container-resize').removeClass('container-fluid');
        $('.plans-resize').removeClass('col-12').addClass('col-4');
        $('.btn-resize').removeClass('btn-full').addClass('btn-partial');
        $('.form-resize').removeClass('col-12').addClass('col-6');
        $('.submit-resize').removeClass('col-12').addClass('col-6 offset-6');
        $('.footer-container-resize').removeClass('container-fluid').addClass('container');
        $('.footer-resize').removeClass('col-12').addClass('col-9');
        $('.socials-resize').removeClass('col-12').addClass('col-3');
    }
}  

/* RUN CODE */
$(window).resize(checkWindow);