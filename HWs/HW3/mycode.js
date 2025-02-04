var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#7BAFD4",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8};

L.circleMarker(geojsonMarkerOptions).addTo(map);

L.geoJSON(CHparks).addTo(map);

var longitudePk0 = CHparks.features[0].geometry.coordinates[0]
var latitudePk0 = CHparks.features[0].geometry.coordinates[1]
var marker = L.marker([latitudePk0,longitudePk0]).bindPopup("<b>First park- Homestead Park</b>").addTo(map);


var myCircles = L.geoJSON(CHparks, {
    pointToLayer: function (feature, latlng) {
     //   console.log(feature)
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup(feature.properties.Park_Name );
    }
}).addTo(map);



