var wms_layers = [];


        var lyr_CartoEco_0 = new ol.layer.Tile({
            'title': 'Carto Eco',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartocdn_a.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png'
            })
        });
var format_farriers_db_1 = new ol.format.GeoJSON();
var features_farriers_db_1 = format_farriers_db_1.readFeatures(json_farriers_db_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farriers_db_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farriers_db_1.addFeatures(features_farriers_db_1);cluster_farriers_db_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_farriers_db_1
});
var lyr_farriers_db_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_farriers_db_1, 
                style: style_farriers_db_1,
                interactive: true,
                title: '<img src="styles/legend/farriers_db_1.png" /> farriers_db'
            });

lyr_CartoEco_0.setVisible(true);lyr_farriers_db_1.setVisible(true);
var layersList = [lyr_CartoEco_0,lyr_farriers_db_1];
lyr_farriers_db_1.set('fieldAliases', {'Name': 'Name', 'Contact': 'Contact', 'City': 'City', 'Country': 'Country', 'Photos': 'Photos', });
lyr_farriers_db_1.set('fieldImages', {'Name': 'TextEdit', 'Contact': 'TextEdit', 'City': 'TextEdit', 'Country': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_farriers_db_1.set('fieldLabels', {'Name': 'header label', 'Contact': 'inline label', 'City': 'inline label', 'Country': 'inline label', 'Photos': 'inline label', });
lyr_farriers_db_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});