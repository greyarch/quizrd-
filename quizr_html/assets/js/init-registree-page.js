/**
 * @project         medbase
 * @version         1.0  26-09-2014
 * @author          New Identity http://new-identity.eu  - zarro
 * @copyright       Copyright (C) 2009 - 2014 New Identity. All rights reserved.
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */

    //DEtect transiotions


$(function () {


    $('#send-message').bootstrapValidator();


    $('#header-slider').owlCarousel({

        //navigation : true, // Show next and prev buttons
        //slideSpeed : 300,
        //paginationSpeed : 400,
        singleItem:true,
        transitionStyle : "backSlide"

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    var otherSpec = $("#other-specialists");

    otherSpec.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        lazyLoad : true,
        itemsCustom : [
            [0, 1],
            [450, 1],
            [600, 2],
            [900, 2],
            [1024, 3],
            [1200, 4]
        ],
        navigation : true

    });

    $('.accordion').collapse()

});

