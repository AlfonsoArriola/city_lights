
console.log('ugh');

let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWFycmlvbGEiLCJhIjoiY2pwbnB1dWh6MDVrejQzdDJnMW03NWhmYSJ9.N6VKHHE8I8vIErwvYJzcPA';
let map = new mapboxgl.Map({
  container: 'YOUR_CONTAINER_ELEMENT_ID',
  style: 'mapbox://styles/mapbox/streets-v10'
});

