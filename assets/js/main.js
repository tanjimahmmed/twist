(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // -- start work -- //

        // hero slider
        $(".homepage_slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });

        $(".homepage_slides").on("translate.owl.carousel", function(){
            $(".single_slide_item h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slide_item .video_btn").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single_slide_item .boxed_btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".homepage_slides").on("translated.owl.carousel", function(){
            $(".single_slide_item h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slide_item .video_btn").addClass("animated fadeInUp").css("opacity", "1");
            $(".single_slide_item .boxed_btn").addClass("animated fadeInDown").css("opacity", "0");
        });

        // wow
        var wow = new WOW({
            mobile: false
        });
        wow.init();

        // team slider
        $(".team_list").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
        });

        // testimonial slider
        $(".testimonial_list").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            responsiveClass:true,
            responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
        });


        // brand slider
        $(".logo_carousel").owlCarousel({
            items: 5,
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            responsiveClass:true,
            responsive:{
            0:{
                items:2,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            }
        }
        });

        // progress bar 
        $(".web_design_skill_bar").circleProgress({
            animation: {
                duration: 2000,
                easing: "circleProgressEasing",
            },
            delay: 3000,
            lineCap: "round",
            value: 0.90,
            size: 250,
            thickness: 3,
            emptyFill: 'rgba(255,255,255,0.2)',
            fill: {
                gradient: ["#0bbbc1"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.skill_count_number').html(Math.round(90 * progress) + '<i>%</i>');
        });
        $(".graphic_design_skill_bar").circleProgress({
            animation: {
                duration: 2000,
                easing: "circleProgressEasing",
            },
            delay: 3000,
            lineCap: "round",
            value: 0.95,
            size: 250,
            thickness: 3,
            emptyFill: 'rgba(255,255,255,0.2)',
            fill: {
                gradient: ["#0bbbc1"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.skill_count_number').html(Math.round(95 * progress) + '<i>%</i>');
        });
        $(".marketing_design_skill_bar").circleProgress({
            animation: {
                duration: 2000,
                easing: "circleProgressEasing",
            },
            delay: 3000,
            lineCap: "round",
            value: 0.84,
            size: 250,
            thickness: 3,
            emptyFill: 'rgba(255,255,255,0.2)',
            fill: {
                gradient: ["#0bbbc1"]
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.skill_count_number').html(Math.round(84 * progress) + '<i>%</i>');
        });


        // isotope 
        $(".portfolio_filter li").on('click', function () {
            var filterValue = $(this).attr("data-filter");
            $(".portfolio_list").isotope({
                filter: filterValue,
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.col-md-3',
                    horizontalOrder: false
                }
            });
            $(".portfolio_filter li").removeClass('active');
            $(this).addClass('active')
        });


        $(".portfolio_list").isotope({
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.col-md-3',
                horizontalOrder: false
            }
        });

        // modal video
        $(".play_icon").modalVideo();
        $(".play_icon").on('click', function () {
            return false;
        });

        // search input
        $(".search_triggers").on('click', function () {
            $(".search_bar_wrap").addClass("active");
        });
        $(".search_close").on('click', function () {
            $(".search_bar_wrap").removeClass("active");
        });

        // scroll to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back_to_top').fadeIn('slow');
            } else {
                $('.back_to_top').fadeOut('slow');
            }
        });
        $('.back_to_top').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500, 'easeInOutExpo');
            return false;
        });  

        // slick nav
        // $("ul#navigation").slicknav({
        //     'prependTo':'.mobile_menu_wrap',
        // });

        // mobile resposnsive
        // $(".menu_icon").click(function(){
        //     $(".mainmenu").toggleClass("visible");
        // });



        // -- End work -- //

    });

    jQuery(window).load(function () {
        // body preloader
        $(".spinner").fadeOut();
        $(".twist_preloader_wrap").delay(450).fadeOut('slow');
    });

}(jQuery));	