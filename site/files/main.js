$( document ).ready(function() {
	"use strict";

	$(".fa-bars").hide(hideMobileNav);

	$(".fa-bars").click(showMobileNav);

	$("#button").velocity({
	    /* Animate a color property to a hex value of red... */
	    color: "#ff0000";
	});

	/* Shows Navigation when in a mobile view */
	function hideMobileNav () {
		$("#nav-options").hide();
	}

	/* Shows Navigation when in a mobile view */
	function showMobileNav () {
		$("#nav-options").show();
	}

});