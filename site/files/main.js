	if ( $(window).width() < 1024) {
		$("#nav-options").hide();
	}

$( document ).ready(function() {
	"use strict";

	$( ".fa-bars" ).click(function() {
    	$( "#nav-options" ).slideToggle( "slow" );
  	});

	$("#button").velocity({
    	backgroundColor: "#00ce00"
	}, {loop: true}, 3000);

});