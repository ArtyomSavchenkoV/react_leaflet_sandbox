import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withApiService } from '../hoc';

import {
    fetchMarkers
} from '../../actions';

import Map from './views/map';
import Marker from './marker';
import AntLine from './ant-line';


const Controller = ({
    markers: markersStore,

    fetchMarkers,

    ApiService
}) => {
    
    /*
    *   Markers data handler
    */
    let markersCoordinates = [];
    let markers = [];
    switch(markersStore.dataState) {
        case 'EMPTY': {
            // Run requesting markers data
            fetchMarkers(ApiService);
            break;
        }
        case 'READY': {
            // Produce marker components array and markers coordinates array.
            for (let key in markersStore.data) {
                const el = markersStore.data[key];
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
            break;
        }
        default: {}
    }

    //TODO: make getting track data and remove hardcode.
    const track = [{lat: 55, lng: 83}, {lat: 55.02, lng: 83.06}, {lat: 55, lng: 83.1}];   
    const antLine = <AntLine track={track} />

    /*
    *   Set map view position
    */
    //TODO: make changing map viewport from initial position to position by received markers.
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


const mapStoreToProps = ({ markers }) => {
    return {
        markers
    }
};

const mapDispatchToProps = {
    fetchMarkers
};

export default compose(
    connect(mapStoreToProps, mapDispatchToProps),
    withApiService
)(Controller);
