$(document).ready(function(){

/*****Fixed Menu******/
var secondaryNav = $('.cd-secondary-nav'),
   secondaryNavTopPosition = secondaryNav.offset().top;
	$(window).on('scroll', function(){
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addClass('is-fixed');
		} else {
			secondaryNav.removeClass('is-fixed');
		}
	});

});
