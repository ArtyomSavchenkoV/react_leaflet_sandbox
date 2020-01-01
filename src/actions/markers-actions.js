const fetchMarkersRequested = () => {
    return {
        type: 'FETCH_MARKERS_REQUESTED'
    };
};


const fetchMarkersSuccess = (payload) => {
    return {
        type: 'FETCH_MARKERS_SUCCESS',
        payload
    };
};


const fetchMarkersFailure = (payload) => {
    return {
        type: 'FETCH_MARKERS_FAILURE',
        payload
    };
};


const fetchMarkers = (ApiService) => (dispatch) => {
    dispatch(fetchMarkersRequested());

    ApiService.markersRequest()
        .then((response) => {
            if(response.status) {
                dispatch(fetchMarkersSuccess(response.payload));
            } else {
                dispatch(fetchMarkersFailure('Response status is false'));
            }
        })
        .catch((err) => {
            dispatch(fetchMarkersFailure('The remote server is not available.'));
        });
};


export {
    fetchMarkers
};
