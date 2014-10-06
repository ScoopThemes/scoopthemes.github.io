/*
 * Runek
 * http://www.scoopthemes.com/
 *
 * Copyright (c) 2014, ScoopThemes
 * Licensed under the BSD license.
 */
'use strict';

var appMaster = {

    navSpy: function(){
        /* affix the navbar after scroll below header */
        $('#nav.navbar-static-top').affix({
            offset: {
                top: $(window).height()
            }
        });

        /* highlight the top nav as scrolling occurs */
        $('body').scrollspy({
            target: '#nav'
        });
    },

    smoothScroll: function() {
        // Smooth Scrolling
        $('a[href*=#]:not([href=#carousel-example-generic], [href=#testimonials-carousel])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    },

    scollToTop: function(){
        /* smooth scrolling for scroll to top */
        $('.scroll-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    },

    revSlider: function(){

        var docHeight = $(window).height();
        
        var revapi;
        revapi = jQuery('.tp-banner').revolution(
        {
            delay: 9000,
            startwidth: 1170,
            startheight: docHeight,
            hideThumbs: 10,
            fullWidth: "off",
            fullScreen: "on",
            onHoverStop: "off",
            touchenabled:false,
            fullScreenOffsetContainer: "",
            navigationHAlign: "right",
            navigationVAlign:"bottom",
            navigationHOffset: 80,
            navigationStyle:"square"
        });
    },

    stellar: function(){
        $(window).stellar();
    },

    skillsCircles: function(){
        $('#myStat1').circliful();
        $('#myStat2').circliful();
        $('#myStat3').circliful();
        $('#myStat4').circliful();
    },

    maps: function(){
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
        google.maps.event.addDomListener(window, 'resize', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                zoom: 13,
                draggable: false,
                zoomControl: true, 
                scrollwheel:false,
                streetViewControl:false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(31.1997396,29.9194378), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 65
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 51
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 30
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -100
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "hue": "#ffff00"
                            },
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": -97
                            }
                        ]
                    }
                ]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using out element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            var myLatlng = new google.maps.LatLng(31.1997396,29.9194378);
            var image = {
                url: '../img/map_pin.png',
                // This marker is 20 pixels wide by 32 pixels tall.
                size: new google.maps.Size(27, 42),
                // The origin for this image is 0,0.
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor: new google.maps.Point(0, 32)
            };

            var marker = new google.maps.Marker({
                position: myLatlng,
                icon: image,
                map: map,
                title: 'Hello World!'
            });

        }
    },

    isoTop: function(){
        var $container = $('#container');
        // init
        $container.isotope({
            // options
            itemSelector: '.item'
        });

        $('#filters').on('click', 'button', function() {
            $('#filters button').removeClass("current");
            $(this).addClass("current");
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
    },

    animateScript: function() {
        $('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'100%'});
       $('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'100%'});
       $('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'100%'});
       $('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'100%'});
       $('.scrollpoint.sp-effect5').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInUp');},{offset:'100%'});
       $('.scrollpoint.sp-effect6').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated bounceIn');},{offset:'100%'});
       $('.scrollpoint.skills-effect').waypoint(function(){appMaster.skillsCircles();},{offset:'0'});
    }
};


$(document).ready(function() {

    appMaster.smoothScroll();
    appMaster.animateScript();
    appMaster.navSpy();
    appMaster.scollToTop();
    appMaster.revSlider();
    appMaster.stellar();
    
    appMaster.maps();
    appMaster.isoTop();

});