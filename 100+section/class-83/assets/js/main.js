(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $("#web-designprogressbar").circleProgress({
            value: 0.9,
            size: 200,
            fill: '#177cf2',
            thickness: 2,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $("#digitalmarketing-designprogressbar").circleProgress({
            value: 0.7,
            size: 200,
            fill: '#D76A58',
            thickness: 4,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(70 * progress) + '<i>%</i>');
        });

        $("#graphic-designprogressbar").circleProgress({
            value: 0.45,
            size: 100,
            fill: '#ABB1BA',
            thickness: 2,
            emptyFill: '#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-percentage').html(Math.round(45 * progress) + '<i>%</i>');
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	