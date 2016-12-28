$(document).ready(function() {

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
