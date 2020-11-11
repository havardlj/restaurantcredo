var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);

// ##### SIDEMENY: #####

query(".header--start-menu-link-open").addEventListener("click", function(e) {
   document.querySelector(".header").classList.add("active");
   e.preventDefault();
});
query(".header--start-menu-link-close").addEventListener("click", function(e) {
   document.querySelector(".header").classList.remove("active");
   e.preventDefault();
});


// ##### KART: ######

function initMap() {
   var map;
   map = new google.maps.Map(document.getElementById("contact--map"), {
      center: {lat: 59.9281152, lng: 10.7808932},
      zoom: 14,
      mapTypeId: "roadmap",
      styles: [
         {
            "elementType": "geometry", "stylers": [
               { "saturation": -100 }
            ]
         },
         {
            featureType: "poi",
            stylers: [
               { visibility: "off" }
            ]
         }
      ]
   });
   // Icons
     var icons = {
      location1: {
         icon: "assets/build/img/location1.png"
      },
      location2: {
         icon: "assets/build/img/location2.png"
      }
     };

     var features = [
      {
         position: new google.maps.LatLng(59.9222165, 10.7498517),
         type: "location1"
      }, {
         position: new google.maps.LatLng(59.9323917, 10.7542223),
         type: 'location2'
      }
     ];

     // Create markers.
     features.forEach(function(feature) {
      var marker = new google.maps.Marker({
         position: feature.position,
         icon: icons[feature.type].icon,
         map: map
      });
    });
}

// ##### Galleri: ######

document.addEventListener('DOMContentLoaded', function () {
   var rewind = document.querySelector('.js_rewind');

   lory(rewind, {
      rewind: true
   });
});
