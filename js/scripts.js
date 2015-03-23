$(window).load(function() {
    hideloader();
});
//=============== loader ==============
	var loadTimer;
function hideloader() {
    $(".loader-inner").removeClass("loader-vis");
	clearTimeout(loadTimer);
   loadTimer = setTimeout(function() {  
        $(".loader-holder").addClass("no-vis-load");
    }, 500);
 
        $(".loader-holder").delay(1500).fadeOut(10);
 
}
function showloader2() {
    $(".loader-inner").addClass("loader-vis");
	clearTimeout(loadTimer);
     loadTimer = setTimeout(function() {  
        $(".loader-holder").removeClass("no-vis-load");
    }, 600);
}
//========== Plugins and function's ===========
function initAlexon() {
    "use strict";
//================= Menu =============
    $("#menu").menu();
    function showmenu() {
        $(".pagenav-holder").removeClass("isDown");
        $(".body-overlay").addClass("vis-over");
        $(".pagenav-holder").animate({
            right: "0"
        }, 300);
        $("#menu a.no-vismen").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    right: "0",
                    opacity: 1
                }, 200);
            }, 150 * a);
        });
    }
    function hidemenu() {
        $(".body-overlay").removeClass("vis-over");
        $(".pagenav-holder").addClass("isDown");
        $(".pagenav-holder").animate({
            right: "-100%"
        }, 300);
        $("#menu a.no-vismen").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    right: "-180px",
                    opacity: 0
                }, 10);
            }, 10 * a);
        });
    }
    $(".nav-button").bind("click", function() {
        if ($(".pagenav-holder").hasClass("isDown")) showmenu(); else hidemenu();
    });
    $(".close-menu , .body-overlay").click(function() {
        hidemenu();
    });
    $(".scroll-nav-btn").click(function() {
        $(".scroll-nav").slideToggle(500);
        $(this).toggleClass("rot-icon");
    });
//=============== magnificPopup ==============
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        mainClass: "my-mfp-slide-bottom",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
//=============== isotope ==============
    function initisotope() {
        if ($(".ms-grid-items").length) {
            var a = $(".ms-grid-items").isotope({
                columnnWidth: ".grid-sizer,.grid-sizer-second,.grid-sizer-three",
                itemSelector: ".ms-grid-item, .ms-grid-item-second, .ms-grid-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".masonry-filters").on("click", "a", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".masonry-filters a").removeClass("masonry-filter_active");
                $(this).addClass("masonry-filter_active");
            });
            $(".ms-grid-items").isotope("on", "layoutComplete", function(a, b) {
                var c = b.length;
                $(".num-cat").html(c);
            });
            $(".allval").hover(function() {
                var a = $(".box").length;
                $(".numpr-all").html(a);
            });
            $(".shuffle-button").on("click", function() {
                a.isotope("shuffle");
            });
            $(".load-more").click(function() {
                $(this).addClass("compload");
                setTimeout(function() {
                    var a = $(".load-more").attr("data-ltext");
                    $(".load-more").removeClass("compload");
                    $(".load-more").find("span").html(a);
                }, 700);
                a.infinitescroll({
                    navSelector: "#infiniti_nav",
                    nextSelector: "#infiniti_nav a",
                    itemSelector: ".ms-grid-item, .ms-grid-item-second, .ms-grid-item-three"
                }, function(b) {
                    a.isotope("appended", $(b));
                    a.imagesLoaded(function() {
                        a.isotope("layout");
                    });               
                    $(".image-popup").magnificPopup({
                        type: "image",
                        closeOnContentClick: false,
                        removalDelay: 600,
                        mainClass: "my-mfp-slide-bottom",
                        image: {
                            verticalFit: false
                        }
                    });
                });
            });
        }
    }
    initisotope();
    $(window).load(function() {
        initisotope();
    });
    $(".filter-button").click(function() {
        $(this).find("i").toggleClass("rot-icon");
        $(".masonry-filters").toggleClass("vis-filter");
    });
//=============== Page scroll navigation ==============
    $(".scroll-nav ul").onePageNav({
        currentClass: "actscroll",
        changeHash: false,
        scrollSpeed: 800,
        scrollOffset: 50,
        scrollThreshold: .5,
        filter: "",
        easing: "easeInOutExpo"
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 74;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, 800, "easeInOutExpo");
                return false;
            }
        }
    });
//=============== text rotator  ==============
    $(".text-rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 4000
    });
//=============== owlCarousel ==============
    var sinslider = $(".custom-slider");
    sinslider.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: true,
        autoHeight: true,
        singleItem: true
    });
    $(".custom-slider-holder a.next-slide").click(function() {
        $(this).closest(".custom-slider-holder").find(sinslider).trigger("owl.next");
    });
    $(".custom-slider-holder a.prev-slide").click(function() {
        $(this).closest(".custom-slider-holder").find(sinslider).trigger("owl.prev");
    });
    if ($(".owl-carousel").lenth) {
        var owl = $(".owl-carousel").data("owlCarousel");
        owl.reinit();
    }
    $(".slideshow-container").superslides({
        animation: "fade",
        play: 6000
    });
    var z2 = $(".fullscreen-slider");
    z2.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        singleItem: true,
        pagination: true
    });
    $(".fullscreen-slider-holder a.next-slide").click(function() {
        $(this).closest(".fullscreen-slider-holder").find(z2).trigger("owl.next");
    });
    $(".fullscreen-slider-holder a.prev-slide").click(function() {
        $(this).closest(".fullscreen-slider-holder").find(z2).trigger("owl.prev");
    });
    $(".fullscreen-slider .item").css({
        height: $(".fullscreen-slider").outerHeight(true)
    });
    $(".fullscreen-slider .item").css({
        width: $(".fullscreen-slider").width()
    });
    var carouselimage = $("#carousel-image");
    carouselimage.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        items: 3
    });
    var clientcarousel = $("#client-carousel");
    clientcarousel.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        items: 4
    });
    var portcarousel = $("#carousel-portfolio");
    portcarousel.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        items: 4,
        itemsDesktop: false,
        itemsDesktopSmall: [ 979, 2 ],
        itemsTablet: [ 768, 2 ],
        itemsMobile: [ 600, 1 ]
    });
    $(".carous-holder .next-slide").click(function() {
        portcarousel.trigger("owl.next");
    });
    $(".carous-holder .prev-slide").click(function() {
        portcarousel.trigger("owl.prev");
    });
    var sercarousel = $("#services-carusel");
    sercarousel.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        pagination: false,
        items: 4,
        itemsDesktop: false,
        itemsDesktopSmall: [ 979, 2 ],
        itemsTablet: [ 768, 2 ],
        itemsMobile: [ 600, 1 ]
    });
    $(".ser-carous-holder .next-slide").click(function() {
        sercarousel.trigger("owl.next");
    });
    $(".ser-carous-holder .prev-slide").click(function() {
        sercarousel.trigger("owl.prev");
    });
    var f = $("#testimonials-slider");
    f.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        autoHeight: true,
        singleItem: true
    });
    $(".testimonilas-holder .next-slide").click(function() {
        f.trigger("owl.next");
    });
    $(".testimonilas-holder .prev-slide").click(function() {
        f.trigger("owl.prev");
    });
    var sync1 = $("#sync-carousel-image");
    var sync2 = $("#sync-carousel-info");
    sync1.owlCarousel({
        singleItem: true,
        slideSpeed: 500,
        pagination: false,
        navigation: false,
        autoHeight: true,
        afterAction: syncPosition
    });
    sync2.owlCarousel({
        singleItem: true,
        pagination: false,
        slideSpeed: 500,
        navigation: false,
        touchDrag: false,
        mouseDrag: false,
        autoHeight: true,
        afterInit: function(a) {
            a.find(".owl-item").eq(0).addClass("synced");
        }
    });
    function syncPosition(a) {
        var b = this.currentItem;
        $("#sync-carousel-info").find(".owl-item").removeClass("synced").eq(b).addClass("synced");
        if (void 0 !== $("#sync-carousel-info").data("owlCarousel")) center(b);
    }
    $("#sync-carousel-info").on("click", ".owl-item", function(a) {
        a.preventDefault();
        var b = $(this).data("owlItem");
        sync1.trigger("owl.goTo", b);
    });
    function center(a) {
        var b = sync2.data("owlCarousel").owl.visibleItems;
        var c = a;
        var d = false;
        for (var e in b) if (c === b[e]) var d = true;
        if (false === d) if (c > b[b.length - 1]) sync2.trigger("owl.goTo", c - b.length + 1); else {
            if (c - 1 === -1) c = 0;
            sync2.trigger("owl.goTo", c);
        } else if (c === b[b.length - 1]) sync2.trigger("owl.goTo", b[1]); else if (c === b[0]) sync2.trigger("owl.goTo", c - 1);
    }
    $(".left-column .next-slide").click(function() {
        sync1.trigger("owl.next");
    });
    $(".left-column .prev-slide").click(function() {
        sync1.trigger("owl.prev");
    });
    var vH = $(".sync-carousel-image-holder").height();
    $(".fullheight").css("height", vH);
    $(window).bind("resize", function() {
        var a = $(".sync-carousel-image-holder").height();
        $(".fullheight").css("height", a);
        $(".fullscreen-slider .item").css({
            height: $(".fullscreen-slider").outerHeight(true)
        });
    });
//=============== share ==============
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });	
//=============== twitter add your username here  after username: " ==============
    if ($("#twitter-feed").length) {
        $("#twitter-feed").tweet({
            username: "katokli3mmm",
            join_text: "auto",
            avatar_size: 0,
            count: 4
        });
        $("#twitter-feed").find("ul").addClass("twitter-slider");
        $("#twitter-feed").find("ul li").addClass("item");
        var owl3 = $(".twitter-slider");
        owl3.owlCarousel({
            navigation: false,
            slideSpeed: 500,
            pagination: false,
            autoHeight: true,
            singleItem: true
        });
        $(".twitter-holder .next-slide").click(function() {
            owl3.trigger("owl.next");
        });
        $(".twitter-holder .prev-slide").click(function() {
            owl3.trigger("owl.prev");
        });
    }
//=============== contact form ==============
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
//=============== subscribe form  ==============
    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
 
    $('#subscribe').ajaxChimp({
        language: 'eng',
        url: 'http://kwst.us9.list-manage1.com/subscribe/post?u=992ebe1f14864e841317ca145&id=163340d9c8'
    });

    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.eng = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-check"></i> We will be in touch soon!',
        1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
        2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
        5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    }
//=============== skills and facts  ==============
    var $i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === $i) stats(2600);
        $i++;
    });
    function number(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function stats(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            number(c, d, b, a);
        });
    }
    $(".animaper").appear();
    $(document.body).on("appear", ".piechart-holder", function() {
        $(this).find(".chart").each(function() {
            $(".chart").easyPieChart({
                barColor: "#9ACFB7",
                trackColor: "#fff",
                scaleColor: "#9ACFB7",
                size: "150",
                lineWidth: "10",
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(document.body).on("appear", ".skillbar-box", function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
//=============== Accordion  ==============
    $(".accordion").each(function() {
        var a = 2 * $(this).attr("data-name");
        $(this).find(".accordion-inner:nth-child(" + a + ")").show();
        $(this).find(".accordion-inner:nth-child(" + a + ")").prev().addClass("activeac");
    });
    $(".accordion .accordion-title").click(function() {
        if ($(this).next().is(":hidden")) {
            $(this).parent().find(".accordion-title").removeClass("activeac").next().slideUp(500);
            $(this).toggleClass("activeac").next().slideDown(500);
        }
        return false;
    });
//=============== Tabs  ==============
    $(".tabs-menu a").click(function(a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(".tab-content").not(b).css("display", "none");
        $(b).fadeIn();
    });
//=============== header animation  ==============
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("sticky");
            $(".to-top").fadeIn(500);
        } else {
            $("header").removeClass("sticky");
            $(".to-top").fadeOut(500);
        }
    });
    $('<a class="to-top"><i class="fa fa-chevron-up"></i></a>').appendTo(".content-holder");
    $(".to-top").on("click", function(a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
//=============== Columns height  ==============
    $(".column").matchHeight();
    $(".header-height-emulator").css({
        height: $("header").outerHeight(true)
    });
    $(".height-emulator").css({
        height: $("footer").outerHeight(true)
    });
    $(window).resize(function() {
        $(".height-emulator").animate({
            height: $("footer").outerHeight(true)
        });
    });
//=============== map  ==============
    var dl = $(".map").attr("data-latitude"), dlo = $(".map").attr("data-longitude"), dma = $(".map").attr("data-location");
    $("#map_addresses").gMap({
        latitude: dl,
        longitude: dlo,
        zoom: 19,
        html: "Tettnang, Germany",
        maptype: "ROADMAP",
        markers: [ {
            latitude: dl,
            longitude: dlo,
            html: dma,
            popup: false,
            icon: {
                image: "images/marker.png",
                iconsize: [ 50, 50 ],
                iconanchor: [ 50, 50 ]
            }
        } ]
    });
    jQuery.fn.toggleText = function() {
        var a = this.data("alt-text");
        if (a) {
            this.data("alt-text", this.html());
            this.html(a);
        }
    };
    $(".showmap").bind("click", function() {
        $(this).toggleText();
        $(".full-height-map").toggleClass("bim");
    });
    var ww3 = $(window).width();
    if (ww3 < 1036) $(".scroll-nav a").click(function() {
        setTimeout(function() {
            $(".scroll-nav").slideUp(500);
            $(".scroll-nav-btn").removeClass("rot-icon");
        }, 700);
    });
    $(window).resize(function() {
        var a = $(window).width();
        if (a < 1036) $(".scroll-nav").css("display", "none"); else if (a > 1036) $(".scroll-nav").css("display", "block");
		$(".fullscreen-slider .item").css({
			height: $(".fullscreen-slider").outerHeight(true)
		});
		$(".fullscreen-slider .item").css({
			width: $(".fullscreen-slider").width()
		});
    });
	$('a.ajax').bind("click", function() {
		$(".video-container video , .resp-video video").remove();

    });
}
//=============== If mobile remove video and  disable parallax  ==============
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        $(".run-par").parallax("70%", .3);
        $(".run-par2").parallax("100%", .1);
        $(".run-par3").parallax("50%", .5);
    }
    if (trueMobile) $(".video-container video , .resp-video video").remove();
}
//=============== hide menu   ==============
function hidemenu() {
    $(".body-overlay").removeClass("vis-over");
    $(".pagenav-holder").addClass("isDown");
    $(".pagenav-holder").animate({
        right: "-100%"
    }, 600);
    $("#menu a.no-vismen").each(function(a) {
        var b = $(this);
        setTimeout(function() {
            b.animate({
                right: "-180px",
                opacity: 0
            }, 10);
        }, 10 * a);
    });
}
//=============== init ajax  ==============
$(function() {
    $.coretemp({
        reloadbox: "#wrapper",
		ctbTrigger: "a.ajax",
		loadErrorMessage: "THE PAGE YOU WERE LOOKING FOR COULD NOT BE FOUND.", // 404 error text 
        loadErrorBacklinkText: "Back to the last page", // 404 back button  text 
        outDuration: 750,
        inDuration: 700
    });
    readyFunctions();
    $(document).on({
        ksctbCallback: function() {
            readyFunctions();
        }
    });
});
//=============== init all functions  ==============
function readyFunctions() {
    initAlexon();
    initparallax();
}