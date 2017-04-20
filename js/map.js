var map;
var zbk;
var mnzh;
var myLatLng = {lat: 49.6559963, lng: 117.3480491};
var mnzhLatLng = {lat: 49.5906072, lng: 117.4499561};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15
  });
  zbk = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Zabaykalsk'
  });
  mnzh = new google.maps.Marker({
    position: mnzhLatLng,
    map: map,
    title: 'Manzhouli'
  });
}