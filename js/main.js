$(document).ready(function() {
    'use strict';

    $(".parent").click(function() {
        if ($(this).siblings(".level-two").is(":hidden")) {
            $(".menu .level-two").slideUp();
            $(this).siblings(".level-two").slideToggle();
        } else {
            $(this).siblings(".level-two").slideUp();
        }
    });

    $('.navtoggle').click(function() {
        $('.menu').toggleClass('active');
    });

    $('.menu .fa').append('<a href="#"> submenu öffnen</a>');

    // open external links in new window
    $("a[href^='http']").attr("target","_blank");

    $(window).resize(function () {
        // Variables
        var didScroll,
            lastScrollTop = 0,
            delta = 15,
            navbarHeight = $('.menu').outerHeight(),
            headerHeight = $('header').outerHeight(),
			vw = $(window).width();

        $('.backtotop').click( function(){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });

        // dissapearing .header based on nav state
        $(window).scroll(function (event) {
            if ($(window).scrollTop() > (headerHeight + navbarHeight)) {
                didScroll = true;
            }
        });

        function hasScrolled() {
            var st = $(window).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                $('nav').css({top: -navbarHeight});
            } else {
                // Scroll Up
                if (st + $(window).height() < $(document).height()) {
                    $('nav').css({top: '0'});
                }
            }
            lastScrollTop = st;
        }

        setInterval(function () {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
    }).resize();
});

$(document).on('lity:open', function(event, lightbox, trigger) {
    if($('.lity-iframe-container iframe[src*="instagram"]')){
        $('.lity').addClass('insta');
    }
});
