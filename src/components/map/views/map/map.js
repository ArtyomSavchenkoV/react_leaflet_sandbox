import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import './map.scss';

const Map = ({
    center,
    bounds,
    zoom,

    markers,
    antLine,

    onViewportChanged
}) => {

    return (
        <div className="map">
            <LeafletMap
                bounds={bounds}
                center={center}
                zoom={zoom}
                maxZoom={19}
                useFlyTo
                onViewportChanged={onViewportChanged}
            >
                <TileLayer
                  attribution='Map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {markers}
                {antLine}

            </LeafletMap>
        </div>
    )
}

export default Map;
