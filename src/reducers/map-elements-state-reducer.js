const initialMapElementsStateStore = {
    highlightedMarker: null
};


const mapElementsStateReducer = (mapElementsStateStore = initialMapElementsStateStore, action) => {
    switch (action.type) {
        case 'SET_HIGHLIGHT_MARKER': {
            return {
                ...mapElementsStateStore,
                highlightedMarker: action.payload
            }
        }

        case 'RM_HIGHLIGHT_MARKER': {
            return {
                ...mapElementsStateStore,
                highlightedMarker: null
            }
        }

        default: {
            return {
                ...mapElementsStateStore
            }
        }
    }
};


export default mapElementsStateReducer;
