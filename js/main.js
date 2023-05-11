/*==============================================================================

 * Template Name: Dahuk - Portfolio Template
 * Template URI: 
 * Author: ixtheme - (https://themeforest.net/user/ixtheme)
 * Description: Portfolio Template
 * Version: 1.0
 * Copyright 2020 ixtheme

==============================================================================*/


(function ($) {
    "use strict";

    $(window).on('load', function () {
        preLoader();
        magnificPopup();
    });

    $(window).on('scroll', function () {
        headerFixed();
        goTop();
    });

    $(document).ready(function () {
        menuToggle();
        smoothScroll();
        rotateText();
        skillPercent();
        eduCarousel();
        workGallery();
        clientsCarousel();
    });

    // PreLoader Init
    function preLoader() {
        setTimeout(function () {
            $('.loading-inner').addClass('scale');
            setTimeout(function () {
                $('body').addClass('loaded');
                setTimeout(function () {
                    $('.loading-wrapper').remove();
                }, 300);
            }, 100);
        }, 300);
    };


    // headerFixed init
    function headerFixed() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 50) sticky.addClass('header-fixed');
        else sticky.removeClass('header-fixed');
    };


    // scrollIndicator Init
    (function(){
        window.onscroll = function() {ProgressBar()};
        function ProgressBar() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.querySelector(".scroll-indicator").style.width = scrolled + "%";
        }
    }());


    // goTop init
    function goTop() {
        var elmnt = $('.go-top'),
            scrlTop = $(window).scrollTop();
        if (scrlTop >= 500) elmnt.addClass('show');
        else elmnt.removeClass('show');
    };


    // menuToggle init
    function menuToggle() {
        $('.menu-toggle').on('click', function() {
            $(this).toggleClass('clicked');
            $('.menu-links').toggleClass('show');
        });
        $('.nav-item').on('click', function() {
            $('.menu-toggle').removeClass('clicked');
            $('.menu-links').removeClass('show');
        });
    };


    // Smooth-Scroll init
    function smoothScroll() {
        var scrollLink = $('.menu-links a, .scrollTo');
        scrollLink.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 700, "easeInOutExpo");
                    return false;
                }
            }
        });
    };

    // rotateText init
    function rotateText() {
        $('.rotate-text').marquee({
            startVisible: true,
            delayBeforeStart: 0,
            pauseOnHover: false,
            duration: 3000,
            gap: 5,
            duplicated: true
        });
    };

    // skillPercent init
    function skillPercent() {
        $('.expertise-skillbar-item').each(function() {
            var dataPercent = $(this).attr('data-percent');
            $(this).find('.slide-inner').width(dataPercent+'%');
        });
        $(".expertise-progress").each(function() {
            var value = $(this).attr('data-progress');
            var left = $(this).find('.progLeft .progBar');
            var right = $(this).find('.progRight .progBar');
            if (value > 0) {
                if (value <= 50) {
                    right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
                } else {
                    right.css('transform', 'rotate(180deg)')
                    left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
                }
            }
        });
        function percentageToDegrees(percentage) {return percentage / 100 * 360}

        $('#v-pills-expertise-tab').on('click', function() {
            $('.slide-inner').delay(300).animate({left:0}, 2000);
            $('.progValue').each(function () {
                $(this).prop('progCounter',0).animate({
                    progCounter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });

    };


    // educationCarousel Init
    function eduCarousel() {
        $('.owl-carousel.education-carousel').owlCarousel({
            margin: 30,
            dots: false,
            nav: true,
            rewind:true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    };


    // projectFilter Init
    function workGallery() {
        $('.work-img img').each(function() {
            var workImgSrc = $(this).attr('src');
            $('<img class="animImg" src="'+workImgSrc+'">').insertAfter(this);
        });
    };


    // clientsCarousel Init
    function clientsCarousel() {
        $('.owl-carousel.clients-carousel').owlCarousel({
            margin: 30,
            dots: false,
            nav: true,
            autoHeight:true,
            loop:true,
            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1199: {
                    items: 2
                }
            }
        });

        $('.cilent-image img').each(function() {
            var cilentImgSrc = $(this).attr('src');
            $('<img class="cilentImgDup" src="'+cilentImgSrc+'">').insertAfter(this);
        });
    }


    // magnificPopup Init
    function magnificPopup() {
        $(".work-preview-wrap").magnificPopup({
            delegate: "a.zoom-image",
            type: "image",
            closeOnContentClick: !1,
            closeBtnInside: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile",
            image: {
                verticalFit: !0
            },
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function (a) {
                    return a.find("img");
                }
            }
        });
    }


})(jQuery);