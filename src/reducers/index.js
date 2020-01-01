import mapElementsStateReducer from './map-elements-state-reducer';
import markersReducer from './markers-reducer';


const initStore = {};


const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            mapElementsState: mapElementsStateReducer(store.mapElementsState, action),
            markers: markersReducer(store.markers, action)
        };
    }
}


export default reducer;
