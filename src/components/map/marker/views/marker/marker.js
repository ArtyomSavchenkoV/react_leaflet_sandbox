import React from 'react';

import { Marker as LeafletMarker } from 'react-leaflet';
import L from 'leaflet';

import './marker.css';

import markerIco from './1.png';
import highlightedMarkerIco from './2.png';


const Marker = ({
    position,
    highlighted = false,
    popup,

    onMouseOver,
    onMouseOut
}) => {
    var icon = L.icon({
        iconUrl: highlighted ? highlightedMarkerIco : markerIco,
        iconSize: [20, 31],
        iconAnchor: [10, 31],
        popupAnchor: [0, -32]
    });

    return (
        <LeafletMarker
            position={position}
            icon={icon}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            {popup}
        </LeafletMarker>
    );
};


export default Marker;
