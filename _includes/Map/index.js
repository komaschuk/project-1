function initMap() {
    // var mapDiv = document.getElementById('map');
    // var myLatLng = {lat: 50.337124, lng: 26.649224};
    // var map = new google.maps.Map(mapDiv, {
    //     // center: {lat: 44.540, lng: -78.546},
    //     zoom: 17,
    //     center: myLatLng
    // });
    // var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: 'Hello World!'
    // });
    var mapDiv = document.getElementById('map');
    var myLatlng = new google.maps.LatLng(50.337124,26.649224);
    var mapOptions = {
      zoom: 16,
      center: myLatlng
    }
    var map = new google.maps.Map(mapDiv, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:""
    });

    marker.setMap(map);
};