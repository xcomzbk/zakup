var map;
var marker;
var myLatLng = {lat: 49.6463162, lng: 117.3280054};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });
  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Place Me'
  });
}