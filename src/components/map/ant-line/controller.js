import React from 'react';

import AntLine from './views/ant-line';
import AntDot from './views/ant-dot';


const Controller = ({
    track: trackData
}) => {

    let antDots = [];
    let track = [];

    for (let val of trackData) {
        const center = [val.lat, val.lng];
        track.push([el.lat, el.lng]);
        antDots.push(<AntDot key={'' + center[0] + center[1]} center={center} />);
    }

    const antLine = track.length > 0 ? <AntLine track={track} /> : null;

    return (
        <React.Fragment>
            {antLine}
            {antDots}
        </React.Fragment>
    )
};


export default Controller;
