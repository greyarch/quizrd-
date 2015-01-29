/**
 * @project         medbase
 * @version         1.0  26-09-2014
 * @author          New Identity http://new-identity.eu  - zarro
 * @copyright       Copyright (C) 2009 - 2014 New Identity. All rights reserved.
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */



$(function () {
    $('.hasPopover').popover();
    $('.hasTooltip').tooltip();

    $('.header-slider').owlCarousel({

        navigation : true, // Show next and prev buttons
        //slideSpeed : 300,
        //paginationSpeed : 400,
        singleItem: true,
        //transitionStyle : "fadeUp",
        transitionStyle : "backSlide",
        navigationText : false,
        autoPlay : false,
        //stopOnHover : true,
        lazyLoad : true,
        autoHeight : true,
        theme: 'medbase-header'


        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $('.slide-header').fitText(1.2, {  maxFontSize: '200px' });

    $('#send-message').bootstrapValidator({container: 'popover'});

    $('#about-read-more').click(function () {
        $('#about-medbase').toggleClass('collapse-text');
    })

});

