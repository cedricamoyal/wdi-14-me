// <script>
//
// var stepsMarkerLatitude = [];
// var stepsMarkerLongitude = [];
//
// function initMap() {
//   var mapDiv = document.getElementById('map');
//
//             var map = new google.maps.Map(mapDiv, {
//               center: {lat: <%= stepsPosition.first.visit.visitLatitude %>, lng: <%= stepsPosition.first.visit.visitLongitude%>},
//               zoom: 4
//             });
//
// <% stepsPosition.each do |step| %>
//
//       var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/<%= step.position %>.png';
//       var marker = new google.maps.Marker({
//         position: {lat: <%= step.visit.visitLatitude %>, lng: <%= step.visit.visitLongitude %>},
//         map: map,
//         icon: iconBase
//       });
//       stepsMarkerLatitude.push(<%= step.visit.visitLatitude %>);
//       stepsMarkerLongitude.push(<%= step.visit.visitLatitude %>);
//
//       <% end %>
//
//           }
//
//   </script>
//   <script src="https://maps.googleapis.com/maps/api/js?callback=initMap"
//       async defer></script>
