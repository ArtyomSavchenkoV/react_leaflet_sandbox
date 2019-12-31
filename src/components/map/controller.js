import React from 'react';

import MapBoard from './views/map-board';
import Marker from './marker';
import AntLine from './ant-line';


const Controller = () => {
    
    //TODO: make getting markers data and remove hardcode.
    const markersData = [];

    // Produce markers and markers coordinates array.
    let markersCoordinates = [];
    let markers = [];
    for (let key in markersData) {
        const el = markersData[key];
        markersCoordinates.push([el.lat, el.lon]);
        markers.push(
            <Marker 
                key={el.markerId} 
                zoneId={el.markerId} 
                position={[el.lat, el.lon]}
            />
        );
    }
    
    return (
        <MapBoard 
            markersCoordinates={markersCoordinates}
            center={center}
            bounds={bounds}
            zoom={zoom}
            markers={markers}
            antLine={antLine}
            onViewportChanged={showAlertTrack}
        />
    )
};


export default Controller;
