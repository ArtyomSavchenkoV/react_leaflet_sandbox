import React from 'react';
import { connect } from 'react-redux';
import compose from '../../../utils/compose';
import {
    setHighlightMarker,
    rmHighlightMarker
} from '../../../actions';

import Marker from './views/marker';
import NoticeMarker from './views/notice-marker';
import MarkerPopup from './views/marker-popup';
import NoticeMarkerPopup from './views/notice-marker-popup';


const Controller = ({
    position,
    noticeCount = 0,
    highlightedMarker,
    markerId,

    setHighlightMarker,
    rmHighlightMarker
}) => {
    const highlighted = highlightedMarker === markerId;

    //TODO: Make text for popups.
    const markerPopup = <MarkerPopup>##Marker popup.</MarkerPopup>;
    const noticeMarkerPopup = <NoticeMarkerPopup>##Notice marker popup.</NoticeMarkerPopup>;

    const noticeMarker = noticeCount > 0 ? (
            <NoticeMarker
                position={position}
                noticeCount={noticeCount}
                popup={noticeMarkerPopup}
            />
        ) : null;

    return(
        <React.Fragment>
            <Marker 
                position={position}
                popup={markerPopup}
                highlighted={highlighted} 
                onMouseOver={setHighlightMarker}
                onMouseOut={rmHighlightMarker}
            />
            {noticeMarker}
        </React.Fragment>
    )
}


const mapStoreToProps = ({ mapElementsState }) => {
    const { highlightedMarker } = mapElementsState;
    return {
        highlightedMarker
    }
}

const mapDispatchToProps = {
    setHighlightAlert,
    rmHighlightAlert
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps)
)(Controller);
