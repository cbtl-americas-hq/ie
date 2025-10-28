var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CountyBoundary_1 = new ol.format.GeoJSON();
var features_CountyBoundary_1 = format_CountyBoundary_1.readFeatures(json_CountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundary_1.addFeatures(features_CountyBoundary_1);
var lyr_CountyBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundary_1, 
                style: style_CountyBoundary_1,
                popuplayertitle: 'County Boundary',
                interactive: true,
                title: '<img src="styles/legend/CountyBoundary_1.png" /> County Boundary'
            });
var format_CBTLCafes_2 = new ol.format.GeoJSON();
var features_CBTLCafes_2 = format_CBTLCafes_2.readFeatures(json_CBTLCafes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLCafes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLCafes_2.addFeatures(features_CBTLCafes_2);
var lyr_CBTLCafes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBTLCafes_2, 
                style: style_CBTLCafes_2,
                popuplayertitle: 'CBTL Cafes',
                interactive: false,
                title: '<img src="styles/legend/CBTLCafes_2.png" /> CBTL Cafes'
            });
var format_TTA2M_3 = new ol.format.GeoJSON();
var features_TTA2M_3 = format_TTA2M_3.readFeatures(json_TTA2M_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TTA2M_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TTA2M_3.addFeatures(features_TTA2M_3);
var lyr_TTA2M_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TTA2M_3, 
                style: style_TTA2M_3,
                popuplayertitle: 'TTA $2M+',
                interactive: false,
                title: '<img src="styles/legend/TTA2M_3.png" /> TTA $2M+'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CountyBoundary_1.setVisible(true);lyr_CBTLCafes_2.setVisible(true);lyr_TTA2M_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CountyBoundary_1,lyr_CBTLCafes_2,lyr_TTA2M_3];
lyr_CountyBoundary_1.set('fieldAliases', {'geoid': 'geoid', 'state_fp': 'state_fp', 'name': 'name', });
lyr_CBTLCafes_2.set('fieldAliases', {'store_id': 'store_id', 'id': 'id', 'store_name': 'store_name', 'desc': 'desc', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', 'last_modif': 'last_modif', 'last_mod_1': 'last_mod_1', });
lyr_TTA2M_3.set('fieldAliases', {'id': 'id', 'Seed ID': 'Seed ID', 'Optimizati': 'Optimizati', 'Address': 'Address', 'City': 'City', 'State': 'State', 'CBSA Class': 'CBSA Class', 'Density Cl': 'Density Cl', 'County': 'County', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Forecast': 'Forecast', });
lyr_CountyBoundary_1.set('fieldImages', {'geoid': 'TextEdit', 'state_fp': 'TextEdit', 'name': 'TextEdit', });
lyr_CBTLCafes_2.set('fieldImages', {'store_id': 'TextEdit', 'id': 'TextEdit', 'store_name': 'TextEdit', 'desc': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', 'last_modif': 'TextEdit', 'last_mod_1': 'TextEdit', });
lyr_TTA2M_3.set('fieldImages', {'id': 'TextEdit', 'Seed ID': 'Range', 'Optimizati': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'CBSA Class': 'Range', 'Density Cl': 'TextEdit', 'County': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Forecast': 'TextEdit', });
lyr_CountyBoundary_1.set('fieldLabels', {'geoid': 'no label', 'state_fp': 'no label', 'name': 'no label', });
lyr_CBTLCafes_2.set('fieldLabels', {'store_id': 'no label', 'id': 'no label', 'store_name': 'no label', 'desc': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', 'last_modif': 'no label', 'last_mod_1': 'no label', });
lyr_TTA2M_3.set('fieldLabels', {'id': 'no label', 'Seed ID': 'no label', 'Optimizati': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'CBSA Class': 'no label', 'Density Cl': 'no label', 'County': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Forecast': 'no label', });
lyr_TTA2M_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});