var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pati20212022_0 = new ol.format.GeoJSON();
var features_pati20212022_0 = format_pati20212022_0.readFeatures(json_pati20212022_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pati20212022_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pati20212022_0.addFeatures(features_pati20212022_0);var lyr_pati20212022_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pati20212022_0, 
                style: style_pati20212022_0,
                title: '<img src="styles/legend/pati20212022_0.png" /> pati 2021/2022'
            });var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_1);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_1, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_1,
    title: '[LapakGIS.com] Batas_Kecamatan_BIG_PPBW<br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_0.png" />  1.00 - 1.50 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_1.png" />  1.50 - 2.00 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_2.png" />  2.00 - 2.50 <br />\
    <img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_1_3.png" />  2.50 - 3.00 <br />'
        });

lyr_pati20212022_0.setVisible(true);lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.setVisible(true);
var layersList = [baseLayer,lyr_pati20212022_0,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1];
lyr_pati20212022_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'swasta': 'swasta', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'swasta': 'swasta', 'negeri': 'negeri', });
lyr_pati20212022_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'swasta': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'swasta': 'TextEdit', 'negeri': 'TextEdit', });
lyr_pati20212022_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'swasta': 'no label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'swasta': 'no label', 'negeri': 'no label', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});