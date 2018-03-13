'strict only';

const mapboxgl = require("mapbox-gl");
const marker = require('./marker')

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVubzdzdXJpYW5vIiwiYSI6ImNqZXEyZGNsejU0amMycm83dDN5NDd0dGkifQ.As2dldVU8t2LPQJqh6NxtQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker('Activity', [-74.009, 40.705]).addTo(map);
