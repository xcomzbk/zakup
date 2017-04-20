$(document).ready(function() {

// LINK WITHOUT SCROLL
$('a.nav,.scroll').click(function(e){
  e.preventDefault();
  var ID_Scroll = $(this).attr('href');
  var top_Scroll= $(ID_Scroll).offset();
  $('html, body').animate({scrollTop: top_Scroll.top}, "slow");
    //$('.navigation.open, .social.open').removeClass('open');
});

// FORM MASK PHONE NUMBER
$('[name = phone]').mask("+7(999) 999-9999");

function runSlider() {
	if ($(window).width() < 769 && $(window).width() > 586) {
    	$('.slider_device').slick({
    		infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1
    	});
  	} else if ($(window).width() < 586) {
  		$('.slider_device').slick({
    		infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
    	});
	}
  	else {
    	$('.slider_device').slick('unslick');
  	}
}
runSlider();




// $('.slick-arrow , .present').hover(function() {
// 	$('.present').css("opacity", "1");
// }, function(){
//     $('.present').css("opacity", "0.8");
// });

});
