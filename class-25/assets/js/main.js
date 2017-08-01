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
			margin: 30,
			loop: true,
			dots: false,
			nav: false,
			responsive : {
			    0 : {
			        items: 2
			    },
			    
			    768 : {
			        items: 4
			    },
			    992 : {
			        items: 6
			    }
			}
			
			});
			
			
			$(".case-studies-carousel").owlCarousel({
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
			responsive : {
			    0 : {
			        items: 1
			    },
			    
			    768 : {
			        items: 2
			    },
			    992 : {
			        items: 3
			    }
			}
			
			});
			
        $(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			
			});
        


        $(".menu-trigger").on('click',function() {
        	$(".off-canvas-menu").addClass("show-off-canvas-menu");
        	$(".off-canvas-menu-shade").addClass("active");
        });


		$(".menu-close, .off-canvas-menu-shade").on('click', function() {
			 $(".off-canvas-menu").removeClass("show-off-canvas-menu");
			 $(".off-canvas-menu-shade").removeClass("active");
		});




		$(".single-testimonial-box").hover(function() {
			 $(".single-testimonial-box").removeClass('active');
			 $(this).addClass('active');
		});

		$(".video-play-btn").magnificPopup({
			type: 'video'
		});



		$("#traffic-menu").slicknav({
			prependTo: '#mobile-menu-wrap',
			allowParentLinks: true
			
		});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	