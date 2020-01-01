import React from 'react';

import Map from './views/map';
import Marker from './marker';
import AntLine from './ant-line';


const Controller = () => {
    
    //TODO: make getting markers data and remove hardcode.
    const markersData = [];
    const track = []

    // Produce markers and markers coordinates array.
    let markersCoordinates = [];
    let markers = [];
    for (let key in markersData) {
        const el = markersData[key];
        markersCoordinates.push([el.lat, el.lng]);
        markers.push(
            <Marker 
                key={el.markerId} 
                markerId={el.markerId} 
                position={[el.lat, el.lng]}
                noticeCount={el.noticeCount}
            />
        );
    }

    const antLine = <AntLine track={track} />

    /*
    *   Set map view position
    */
    let center = [55, 83]; //lat, lng
    let bounds = null;
    let zoom = 12;
    
    //TODO: make showing ant line when map viewport bacame changed: `onViewportChanged`
    return (
        <Map 
            center={center}
            bounds={bounds}
            zoom={zoom}

            markers={markers}
            antLine={antLine}

            onViewportChanged={()=>{}}
        />
    )
};


export default Controller;
