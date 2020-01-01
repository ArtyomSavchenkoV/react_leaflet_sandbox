import React from 'react';
import { Popup } from 'react-leaflet';

import './notice-marker-popup.scss';

const NoticeMarkerPopup = ({
    children
}) => {

    return (
        <Popup className="notice-marker-popup">
            {children}
        </Popup>
    )
}

export default NoticeMarkerPopup;
