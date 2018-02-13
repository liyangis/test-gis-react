import React, { Component } from 'react';
import EsriLoaderReact from 'esri-loader-react';
import './Map.css';
class Map extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    modulesLoad() {
        return ['esri/Map', 'esri/views/MapView', 'esri/geometry/Extent', 'esri/Graphic'];
    }
    esriLoaderReactOnReady() {
        return ({ loadedModules: [Map,MapView, Extent, Graphic], containerNode }) => {
            // let map = new Map(containerNode, {
            //     basemap: 'streets'
            // });
            let map = new Map();
            let mapv = new MapView({
                container: containerNode,
                map: new Map({ basemap: 'topo' })
            });
            mapv.extent = new Extent({
                xmin: 110,
                ymin: 40,
                xmax: 115,
                ymax: 45, spatialReference: {
                    wkid: 4326
                }
            });
              this.doAddLayer(Graphic,mapv);
        }

    }
      doAddLayer(Graphic,mapv) {

        var polyline = {
            type: "polyline",  // autocasts as new Polyline()
            paths: [
                [114, 35.68],
                [114.5, 39.5],
                [115.94, 40.89]
            ]
        };

        var polylineSymbol = {
            type: "simple-line",  // autocasts as SimpleLineSymbol()
            color: [226, 119, 40],
            width: 4
        };

        var polylineAtt = {
            Name: "Keystone Pipeline",
            Owner: "TransCanada"
        };
        let polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: polylineSymbol,
            attributes: polylineAtt
        });

        mapv.graphics.add(polylineGraphic);

    }
    render() {
        const options = {
            url:  'http://localhost:8090/chinasite/arcgis_js_api/4.4/init.js'
        };
        return (
            <div className='map'>{}
                <EsriLoaderReact options={options}
                    modulesToLoad={this.modulesLoad()}
                    onReady={this.esriLoaderReactOnReady()}
                    onError={error => console.error(error)}
                >
                </EsriLoaderReact>
            </div>
        )

    }

}
export default Map;