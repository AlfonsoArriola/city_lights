

// --------- Nav  _________________________
$("#toggle").click(function(){
   $(this).toggleClass("on");
   $("#resize").toggleClass("active");
});


// --------  Map  _________________
let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// let geojson = {
//     "type": "FeatureCollection",
//     "features": [
       
//         {
//             "type": "Feature",
//             "properties": {
//                 "message": "Baz",
//                 "iconSize": [40, 40]
//             },
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [
//                     -73.9994158602381,
//                     40.72434535
//                 ]
//             }
//         }
//     ]
// };



mapboxgl.accessToken = 'pk.eyJ1IjoiYWFycmlvbGEiLCJhIjoiY2pwbnB1dWh6MDVrejQzdDJnMW03NWhmYSJ9.N6VKHHE8I8vIErwvYJzcPA';
let map = new mapboxgl.Map({
  container: 'base',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-73.9994158602381,40.72434535],
  zoom: 15 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>City Lights Maintenence</strong><p><a href=\"http://www.citylightscleaning.com/\" target=\"_blank\" title=\"Opens in a new window\">City Lights Maintenence</a> </p>",
                        "icon": "star",
                        "iconSize": [90, 90]
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-73.9994158602381,40.72434535]
                     }
                },]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });



      // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });


});


// // add markers to map
// geojson.features.forEach(function(marker) {
//     // create a DOM element for the marker
//     var el = document.createElement('div');
//     el.className = 'marker';
//     el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
//     el.style.width = marker.properties.iconSize[0] + 'px';
//     el.style.height = marker.properties.iconSize[1] + 'px';

//     el.addEventListener('click', function() {
//         window.alert(marker.properties.message);
//     });

//     // add marker to map
//     new mapboxgl.Marker(el)
//         .setLngLat(marker.geometry.coordinates)
//         .addTo(map);
// });










