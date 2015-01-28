/**
 * @project         medbase
 * @version         1.0  26-09-2014
 * @author          New Identity http://new-identity.eu  - zarro
 * @copyright       Copyright (C) 2009 - 2014 New Identity. All rights reserved.
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */

$(function () {
    $("html").niceScroll({styler:"fb",cursorcolor:"#fff"});
    $('body').scrollspy({ target: '#navbar-main' })
    var offset = 50;

    $('a[href^=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    $(".wallpapered").wallpaper();
    $('.selectpicker').selectpicker();



    //Magnific popup initiliazation
    $('.mfp').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    // Hinge effect popup
    $('a.da-hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function() {
                this.content.addClass('hinge');
            },
            close: function() {
                this.content.removeClass('hinge');
            }
        },
        midClick: true
    });


})