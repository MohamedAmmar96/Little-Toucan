$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(document).ready(function() {

    $('.products .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            768: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                dots: true,
                nav: false,
                loop: true
            },
            1200: {
                items: 4,
                dots: false,
                nav: true,
                loop: true
            }
        }
    });

    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }


    //This is to Open Side Menu in Small Screens
    $(".menu .menu-link").click(function() {
        $("body").addClass("overflow")
        $(".side-menu").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".side-menu").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });




    //This is to Open user-config, language & Products Menus in Small Screens Side Menu
    $(".dept-link").click(function() {
        $(".side-menu .dept-list").slideToggle(600);
    });
    $(".account").click(function() {
        $(".side-menu .config-box").slideToggle(600);
    });

    $(".language").click(function() {
        $(".side-menu .page-language").slideToggle(600);
    });


    //This is to Open Search Box in small screens
    $(".terms .search-link").click(function() {
        $(".overlay-box2").fadeIn(300);
    });

    $(".terms .search-link").click(function() {
        $(".logo").hide();
        $(".terms .search-link .main-search").removeClass("open-search")
        $(".terms .search-link .main-search").addClass("close-search")
        $(".terms .search-bar").slideDown(300);
    });

    $(".close-btn,.overlay-box2").click(function() {
        $(".overlay-box2").fadeOut(300);
    });

    $(".close-btn,.overlay-box2").click(function() {
        $(".logo").show();
        $(".terms .search-link .main-search").addClass("open-search")
        $(".terms .search-link .main-search").removeClass("close-search")
        $(".terms .search-bar").slideUp(300);
    });


    // This is to Open Configuration menu  
    $(".terms .terms-content .config-link").click(function() {
        $(".overlay-box3").fadeIn(300);
    });

    $(".terms .terms-content .config-link").click(function() {
        $(".terms-content .user-config").slideDown(300);
    });

    $(".overlay-box3").click(function() {
        $(".overlay-box3").fadeOut(300);
    });

    $(".overlay-box3").click(function() {
        $(".terms-content .user-config").slideUp(300);
    });


    //Hide And Show Icons in Config Box
    $(".config-box .get-one").hover(function() {
        $(".config-box .get-one").toggleClass("login");
    });
    $(".config-box .get-two").hover(function() {
        $(".config-box .get-two").toggleClass("signup");
    });

});