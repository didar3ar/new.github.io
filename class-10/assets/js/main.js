(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".homepage-slides").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: true,
			navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
			
			});


        $(".logo-carousel").owlCarousel({
			items: 6,
			margin: 30,
			loop: true,
			dots: false,
			nav: false,
			
			});
			
			
			$(".case-studies-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			
			});
			
        $(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			
			});
        



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	