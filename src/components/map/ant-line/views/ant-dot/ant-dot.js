import React from 'react';
import { CircleMarker } from 'react-leaflet';

import './ant-dot.scss';


const AntDot = ({ center, timestamp }) => {
    return(
        <CircleMarker className="ant-dot" center={center} radius={4} />
    )
};


export default AntDot;
