import React from 'react';

import './layout.scss';

const Layout = ({
    map
}) => {

    return (
        <div className="app">
            <div className="map-container">
                {map}
            </div>
        </div>
    );
};

export default Layout;
