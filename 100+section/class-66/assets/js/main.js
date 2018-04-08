(function ($) {
	"use strict";

	    jQuery(document).ready(function($){


	        $(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	     //>=, not <=
	    if (scroll >= 100) {
	        $(".stick-area-2").addClass("is-stick");
	    } else {
	    	$(".stick-area-2").removeClass("is-stick");
	    }
	});



       $(".stick-area").sticky();


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	