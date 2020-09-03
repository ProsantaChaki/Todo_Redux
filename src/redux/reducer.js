import *  as actionTypes from './actions';





const initialState = {
    items: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_DO:
            const newItem = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
            };
            return {
                ...state,
                items: state.items.concat( newItem )
            };
        case actionTypes.DELETE_TO_DO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId)
            }
    }
    return state;
};

export default reducer;

