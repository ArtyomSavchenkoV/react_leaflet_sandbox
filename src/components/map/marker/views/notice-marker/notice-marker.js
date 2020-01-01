import React from 'react';

import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

import './notice-marker.css';

import markerIco from './marker.png';

const NoticeMarker = ({
    position,
    noticeCount,
    popup
}) => {
    var icon = L.icon({
        iconUrl: markerIco,
        iconSize: [15, 15],
        iconAnchor: [-5, 52],
        popupAnchor: [22, -45],
        tooltipAnchor:[22, -42]
    });
    return (
        <Marker
            position={position}
            icon={icon}
        >
            <Tooltip permanent interactive direction="right">{noticeCount}</Tooltip>
            {popup}
        </Marker>
    )
}

export default NoticeMarker;
