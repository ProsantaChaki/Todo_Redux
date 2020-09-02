import *  as actionTypes from './actions';

const initialState = {
    items:[]
};

const reducer = ( state = initialState, action ) => {
    console.log(action)
    switch ( action.type ){
        case actionTypes.ADD_TO_DO:
            const newItem = {
                name:action.listData.name,
                id: Math.random()
            };
            return{
                ...state,
                items: state.items.concat( newItem )
            };

    }
    return state;
}

export default reducer();