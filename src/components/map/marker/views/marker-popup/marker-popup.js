import React from 'react';
import { Popup } from 'react-leaflet';

import './marker-popup.scss';

const MarkerPopup = ({
    children
}) => {

    return (
        <Popup className="marker-popup">
            {children}
        </Popup>
    )
}

export default MarkerPopup;
