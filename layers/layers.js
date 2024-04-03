var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TestFile_1 = new ol.format.GeoJSON();
var features_TestFile_1 = format_TestFile_1.readFeatures(json_TestFile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestFile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestFile_1.addFeatures(features_TestFile_1);
var lyr_TestFile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestFile_1, 
                style: style_TestFile_1,
                popuplayertitle: "TestFile",
                interactive: true,
                title: '<img src="styles/legend/TestFile_1.png" /> TestFile'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TestFile_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TestFile_1];
lyr_TestFile_1.set('fieldAliases', {'A/A': 'A/A', 'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Net Type': 'Net Type', 'Pillar Type': 'Pillar Type', 'Luminair Type': 'Luminair Type', 'Pillar\'s Height': 'Pillar\'s Height', 'Luminaire Height': 'Luminaire Height', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', });
lyr_TestFile_1.set('fieldImages', {'A/A': 'Range', 'id': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Net Type': 'TextEdit', 'Pillar Type': 'TextEdit', 'Luminair Type': 'TextEdit', 'Pillar\'s Height': 'Range', 'Luminaire Height': 'TextEdit', 'field_10': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', });
lyr_TestFile_1.set('fieldLabels', {'A/A': 'inline label - always visible', 'id': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Net Type': 'inline label - always visible', 'Pillar Type': 'inline label - always visible', 'Luminair Type': 'inline label - always visible', 'Pillar\'s Height': 'inline label - always visible', 'Luminaire Height': 'inline label - always visible', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', });
lyr_TestFile_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

