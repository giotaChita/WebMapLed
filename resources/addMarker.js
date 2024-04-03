// Get a reference to your icon button
var addMarkerButton = document.getElementById('addMarkerButton');

// Add an event listener to the button
addMarkerButton.addEventListener('click', function() {
    // Prompt user for marker information
    var id = prompt("Enter ID:");
    var netType = prompt("Enter Net Type:");
    var pillarType = prompt("Enter Pillar Type:");
    var luminairType = prompt("Enter Luminair Type:");
    var pillarHeight = prompt("Enter Pillar's Height:");
    var luminaireHeight = prompt("Enter Luminaire Height:");

    // Set up a map click event listener
    var mapClickListener = map.on('click', function(event) {
        // Get the clicked coordinates
        var lonLat = ol.proj.toLonLat(event.coordinate);
        
        // Create a new feature with the provided information
        var newFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(lonLat)),
            id: id,
            netType: netType,
            pillarType: pillarType,
            luminairType: luminairType,
            pillarHeight: pillarHeight,
            luminaireHeight: luminaireHeight
        });

        // Apply custom style to the new marker
        var newMarkerStyle = new ol.style.Style({
            image: new ol.style.Circle({
                radius: 8.5, // Set size to 4.5mm
                fill: new ol.style.Fill({ color: 'blue' }), // Set color to red
                stroke: new ol.style.Stroke({ color: 'blue', width: 1 }) // Border color and width
            })
        });

        newFeature.setStyle(newMarkerStyle);

        // Add the new feature to the vector source
        // Replace 'source' with your actual vector source
        source.addFeature(newFeature);

        // Remove the map click event listener
        ol.Observable.unByKey(mapClickListener);


        // Save the new marker data to Google Sheets
        addNewMarkerToGoogleSheets(newFeature.getProperties());

        // Add a click event listener to the new feature
        newFeature.on('click', function(event) {
            // Get the properties of the clicked feature
            var properties = event.target.getProperties();
            
            // Create the content for the popup
            var popupContent = `<div><strong>ID:</strong> ${properties.id}</div>
                                <div><strong>Net Type:</strong> ${properties.netType}</div>
                                <div><strong>Pillar Type:</strong> ${properties.pillarType}</div>
                                <div><strong>Luminair Type:</strong> ${properties.luminairType}</div>
                                <div><strong>Pillar's Height:</strong> ${properties.pillarHeight}</div>
                                <div><strong>Luminaire Height:</strong> ${properties.luminaireHeight}</div>`;
            
            // Create the popup overlay
            var popup = new ol.Overlay({
                element: document.getElementById('popup'),
                positioning: 'bottom-center',
                stopEvent: false,
                offset: [0, -20]
            });
            
            // Set the popup content
            document.getElementById('popup-content').innerHTML = popupContent;
            
            // Set the popup position
            popup.setPosition(event.coordinate);
            
            // Add the popup to the map
            map.addOverlay(popup);
        });
    });

    // Show the button
    addMarkerButton.style.display = 'block';
});


// ------------------Old 1 ------------------------------------
// // Function to add new marker data to Google Sheets
// async function addNewMarkerToGoogleSheets(markerData) {
//     await addNewMarker('https://docs.google.com/spreadsheets/d/12r7tEhlRnmSy1g2lmRtvzTIjnt8ojouwfhrtyGNhO7U/edit?usp=sharing', 'Sheet1!A2', markerData);
// }


// --------------------------------OLD_----------------------------
// // Load marker data from local storage on page load
// window.addEventListener('load', function() {
//     var savedMarkers = localStorage.getItem('markers');
//     if (savedMarkers) {
//         var parsedMarkers = JSON.parse(savedMarkers);
//         parsedMarkers.forEach(function(marker) {
//             var newFeature = new ol.Feature({
//                 geometry: new ol.geom.Point(ol.proj.fromLonLat([marker.longitude, marker.latitude])),
//                 id: marker.id,
//                 netType: marker.netType,
//                 pillarType: marker.pillarType,
//                 luminairType: marker.luminairType,
//                 pillarHeight: marker.pillarHeight,
//                 luminaireHeight: marker.luminaireHeight
//             });
            
//             // Apply custom style to the new marker
//             var newMarkerStyle = new ol.style.Style({
//                 image: new ol.style.Circle({
//                     radius: 8.5, // Set size to 4.5mm
//                     fill: new ol.style.Fill({ color: 'blue' }), // Set color to red
//                     stroke: new ol.style.Stroke({ color: 'blue', width: 1 }) // Border color and width
//                 })
//             });
        
//             newFeature.setStyle(newMarkerStyle);
        
//             // Add the new feature to the vector source
//             // Replace 'source' with your actual vector source
//             source.addFeature(newFeature);
//         });
//     }
// });
// // Get a reference to your icon button
// var addMarkerButton = document.getElementById('addMarkerButton');

// // Check local storage for the button visibility state
// var buttonVisible = localStorage.getItem('markerButtonVisible');

// // If the button visibility state exists and is 'true', show the button
// if (buttonVisible === 'true') {
//     addMarkerButton.style.display = 'block';
// }

// // Add an event listener to the button
// addMarkerButton.addEventListener('click', function() {
//     // Prompt user for marker information
//     var id = prompt("Enter ID:");
//     var netType = prompt("Enter Net Type:");
//     var pillarType = prompt("Enter Pillar Type:");
//     var luminairType = prompt("Enter Luminair Type:");
//     var pillarHeight = prompt("Enter Pillar's Height:");
//     var luminaireHeight = prompt("Enter Luminaire Height:");

//     // Set up a map click event listener
//     var mapClickListener = map.on('click', function(event) {
//         // Get the clicked coordinates
//         var lonLat = ol.proj.toLonLat(event.coordinate);
        
//         // Create a new feature with the provided information
//         var newFeature = new ol.Feature({
//             geometry: new ol.geom.Point(ol.proj.fromLonLat(lonLat)),
//             id: id,
//             netType: netType,
//             pillarType: pillarType,
//             luminairType: luminairType,
//             pillarHeight: pillarHeight,
//             luminaireHeight: luminaireHeight
//         });

//         // Apply custom style to the new marker
//         var newMarkerStyle = new ol.style.Style({
//             image: new ol.style.Circle({
//                 radius: 8.5, // Set size to 4.5mm
//                 fill: new ol.style.Fill({ color: 'blue' }), // Set color to red
//                 stroke: new ol.style.Stroke({ color: 'blue', width: 1 }) // Border color and width
//             })
//         });

//         newFeature.setStyle(newMarkerStyle);

//         // Add the new feature to the vector source
//         // Replace 'source' with your actual vector source
//         source.addFeature(newFeature);

//         // Remove the map click event listener
//         ol.Observable.unByKey(mapClickListener);
//     });

//     // Show the button
//     addMarkerButton.style.display = 'block';

//     // Store the button visibility state in local storage
//     localStorage.setItem('markerButtonVisible', 'true');
// });
// // Function to display popup when marker is clicked
// map.on('click', function(event) {
//     map.forEachFeatureAtPixel(event.pixel, function(feature) {
//         var coordinates = feature.getGeometry().getCoordinates();
//         var content = '<p>ID: ' + feature.get('id') + '</p>' +
//                       '<p>Net Type: ' + feature.get('netType') + '</p>' +
//                       '<p>Pillar Type: ' + feature.get('pillarType') + '</p>' +
//                       '<p>Luminair Type: ' + feature.get('luminairType') + '</p>' +
//                       '<p>Pillar Height: ' + feature.get('pillarHeight') + '</p>' +
//                       '<p>Luminaire Height: ' + feature.get('luminaireHeight') + '</p>';

//         // Show the popup
//         showPopup(coordinates, content);
//     });
// });
