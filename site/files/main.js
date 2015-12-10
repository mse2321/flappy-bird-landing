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
<<<<<<< HEAD
	}, {loop: true}, "slow");
=======
	}, { loop: true }, "slow");
>>>>>>> c5410fc84682b466d3275f0a38c98a6bdd04f83f

});