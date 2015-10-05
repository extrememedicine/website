$(document).ready(function() {

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 82
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	$(".challenge p").hide();
	// $(".challenge").click(function() {
	// 	$(this).children("p").slideToggle("fast");
	// 	$(this).toggleClass("active");
	// });

	$("ul p").hide();
	$("ul.collapse h2").click(function() {
		$(this).parent().children("p").slideToggle("fast");
		$(this).parent().toggleClass("active");
	});
	
});