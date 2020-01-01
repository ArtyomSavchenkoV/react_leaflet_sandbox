import mapElementsStateReducer from './map-elements-state-reducer';


const initStore = {};


const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            mapElementsState: mapElementsStateReducer(store.mapElementsState, action)
        };
    }
}


export default reducer;
