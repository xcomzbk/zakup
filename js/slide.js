$(document).ready(function() {

function runSlider() {
  if ($(window).width() < 768 ) {
    $('.slider_device').slick();
  } else {
     $('.slider_device').slick('unslick');
  }
}
runSlider();
var r;
$(window).resize(function() {
    clearTimeout(r);
    r = setTimeout(runSlider, 500);
});

});