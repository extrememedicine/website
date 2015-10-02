$(document).ready(function() {
	$(".challenge p").hide();
	$(".challenge").click(function() {
		$(this).children("p").slideToggle();
		$(this).toggleClass("active");
	});
});