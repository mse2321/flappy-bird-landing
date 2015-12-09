$( document ).ready(function() {
	"use strict";

	$( ".fa-bars" ).click(function() {
    	$( "#nav-options" ).slideToggle( "slow" );
  	});

	$("#button").velocity({
    	backgroundColor: "#00ce00"
	}, 3000);

});