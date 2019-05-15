# Lab Leaflet
Resources for creating [Trafford Data Lab](https://www.trafforddatalab.io) maps using the [Leaflet](https://leafletjs.com/) JavaScript mapping library.

Some files reference additional functions not found within this repo. These dependencies are listed within the files themselves.

- **lab_leaflet_template.html** - Example demonstrating the use of the Lab Leaflet resources
- **lab_marker_pin.svg** - The SVG marker pin representation, the code is contained within labMarkerSVG.js, however it is included here to enable easy alterations to be made if required
- **lab_marker_shadow.png** - PNG image to act as the marker shadow on the Leaflet map
- **labCreateTileLayer.js** - Function to create raster tile layers from a limited set of providers
- **labCreateVectorTileLayer.js** - Function to create vector tile layers from [Ordnance Survey Zoomstack](https://www.ordnancesurvey.co.uk/business-and-government/products/os-open-zoomstack.html) (requires additional [mapbox-gl.js](https://docs.mapbox.com/mapbox-gl-js/api/) and [leaflet-mapbox-gl.js](https://github.com/mapbox/mapbox-gl-leaflet) libraries)
- **labLeafletMap.css** - Styling for the map objects, e.g. plugins, information panels, links etc.
- **labLeafletMap.js** - The Lab map object. This is an object containing an instance of a Leaflet map with particular tools in specific places e.g. geo locate, layer control etc. and containers such as legend, information panel etc. plus other items related to the map environment
- **labMarkerSVG.js** - Function to return a Leaflet L.icon object comprising an SVG representation for a map marker. Currently there is only one representation - a pin with a coloured sphere. The colour and size of the marker can be controlled via inputs
- **leaflet_boilerplate.R** - Example script for creating Lab themed Leaflet maps in [R](https://www.r-project.org/)
- **leaflet.reachability_lab_setup.js** - Setup script to customise the appearance and behaviour of our [leaflet.reachability](https://github.com/trafforddatalab/leaflet.reachability) plugin
- **leaflet.reachability_lab.css** - Custom CSS to override our [leaflet.reachability](https://github.com/trafforddatalab/leaflet.reachability) plugin defaults
- **MarkerCluster.TraffordDataLab.css** - Custom CSS to override the [Leaflet MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster) plugin defaults
