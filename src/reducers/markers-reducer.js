const initialMarkersStore = {
    data: [],
    dataState: 'EMPTY',
    error: null
};


const markersReducer = (markersStore = initialMarkersStore, action) => {
    switch (action.type) {
        case 'FETCH_MARKERS_REQUESTED': {
            return {
                ...markersStore,
                dataState: 'LOADING',
                error: null
            }
        }

        case 'FETCH_MARKERS_SUCCESS': {
            return {
                ...markersStore,
                data: action.payload,
                dataState: 'READY',
                error: null
            }
        }

        case 'FETCH_MARKERS_FAILURE': {
            return {
                ...markersStore,
                dataState: 'ERROR',
                error: action.payload
            }
        }
        
        default: {
            return {
                ...markersStore
            }
        }
    }
};


export default markersReducer;
