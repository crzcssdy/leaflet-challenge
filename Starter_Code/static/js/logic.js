// Define earthquakes plates using the GeoJSON url variable
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//set map
let myMap = L.map("map", {
     center: [
         32.71, -117.29
     ],
     zoom: 5,

 });

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(myMap);

 // Retrieving the data
d3.json(geoData).then(function(data) {
     function mapStyle(feature) {
         return {
             opacity: 1,
             fillOpacity: 1,
             fillColor: mapColor(feature.geometry.coordinates[2]),
             color: "#000000",
             radius: mapRadius(feature.properties.mag),
             stroke: true,
             weight: 0.5
         };

             }
     function mapColor(depth) {
         switch (true) {
             case depth > 90:
                 return "red";
             case depth > 70:
                 return "orangered";
             case depth > 50:
                 return "orange";
             case depth > 30:
                 return "darkgreen";
             case depth > 10:
                 return "yellow";
             default:
                 return "lightgreen";
         }
     }

    // Setting the magnitude size
     function mapRadius(mag) {
         if (mag === 0) {
             return 1;
         }

         return mag * 4;
     }

     L.geoJson(data, {

         pointToLayer: function (feature, latlng) {
             return L.circleMarker(latlng);
         },

         style: mapStyle,

         onEachFeature: function (feature, layer) {
             layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);

         }
     }).addTo(myMap);

// Adding the legend

 let legend = L.control({position: "topright"});
 legend.onAdd = function() {
   let div = L.DomUtil.create("div", "info legend"),
   depth = [-10, 10, 30, 50, 70, 90];

   for (let i = 0; i < depth.length; i++) {
     div.innerHTML +=
     '<i style="background:' + mapColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
   }
   return div;
 };
 legend.addTo(myMap)

 });