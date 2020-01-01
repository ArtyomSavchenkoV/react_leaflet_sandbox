const setHighlightMarker = (payload) => {
    return {
        type: 'SET_HIGHLIGHT_MARKER',
        payload
    };
};


const rmHighlightMarker = () => {
    return {
        type: 'RM_HIGHLIGHT_MARKER'
    }
};


export {
    setHighlightMarker,
    rmHighlightMarker
};
