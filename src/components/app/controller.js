import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';
import { withLocalizationService } from '../hoc';

import Spinner from '../common/spinner';
import Map from '../map';

import Layout from './views/layout';


const App = ({
    store,
    localize
}) => {
    
    const content = <Spinner />;
    const map = <Map />;
    
    return (
        <Layout 
            map={map} 
        />
    );
};



const mapStoreToProps = (store) => {
    return {
        store
    }
};

export default compose(
    withLocalizationService,
    connect(mapStoreToProps)
)(App);
