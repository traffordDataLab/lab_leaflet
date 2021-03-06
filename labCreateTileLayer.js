/*
    Created:        2017-12-15 by James Austin - Trafford Data Lab
    Last update:    2020-11-30
    Purpose:        Create Leaflet map tile layers
    Dependencies:   Leaflet.js (http://www.leafletjs.com)
    Licence:        https://www.trafforddatalab.io/lab_leaflet/LICENSE.txt
    Notes:          MaxZoom fixed to 18 for consistency with the different providers and with vector tiles declared in labCreateVectorTileLayer.js
*/
function labCreateTileLayer(type) {

    switch (type) {
        case 'CartoDB.Positron':
            // Light grey tiles, used as our default (Light)
            return L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
            	subdomains: 'abcd',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        case 'CartoDB.DarkMatter':
            // Dark/black tiles useful for highlighting data, however can cause issues with our standard boundary colours (Night)
            return L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        case 'OpenStreetMap.Mapnik':
            // Default Open Street Map tiles (Road)
            return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        case 'OpenStreetMap.Hot':
            // Alternative colours on Open Street Map (Outdoor)
            return L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        case 'Stamen.TonerLite':
            // Very stark black and white tiles
            return L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
            	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            	subdomains: 'abcd',
            	minZoom: 3,
                maxZoom: 18,
                errorTileUrl: '',
            	ext: 'png'
            });

        case 'Esri.WorldImagery':
            // Satellite tiles, however large amount of cloud cover
            return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        case 'Esri.WorldStreetMap':
            // Pale yellow tiles showing buildings at the lower levels
            return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
                minZoom: 3,
                maxZoom: 18,
                errorTileUrl: ''
            });

        default:
            // Blank tile layer - useful for printing etc.
            return L.tileLayer('', {
                attribution: '',
                minZoom: 3,
                maxZoom: 18
            });
    }

}
