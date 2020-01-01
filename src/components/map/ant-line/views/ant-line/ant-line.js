import React from 'react';

import $ from "jquery";

import AntPath from "react-leaflet-ant-path";

import './ant-line.scss';

class AntLine extends React.Component  {

    setClass = () => {
        $('.leaflet-ant-path').parent().parent().addClass('alert-track-line');
    }

    componentDidMount () {
        this.setClass();
    }

    componentDidUpdate () {
        this.setClass();
    }

    render () {
        const {
            track
        } = this.props;

        const antPathOptions = {
            color: "#ffffff",
            pulseColor: "#000000",
            dashArray: [
                15, // (pulse color length) - 10
                25  // color
            ],
            weight: 3,
            delay: 800,
            paused: false,
            reverse: false,
            hardwareAccelerated: false
        };

        return (
            <AntPath className="ant-line" positions={track} options={antPathOptions} />
        )
    }

}

export default AntLine;
