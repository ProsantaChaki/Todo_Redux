export const ADD_TO_DO = 'ADD_TO_DO';
export const DELETE_TO_DO = 'DELETE_TO_DO';

export const addName = (name) =>{
    return{
        type: ADD_TO_DO,
        name:name
    }
};

export const add = (name)=>{
    return  dispatch =>{
        setTimeout( ()=>{
            dispatch(addName(name))
            },500);
    };
};
export const remove = (id) =>{
    return {
        type: DELETE_TO_DO,
        itemId:id
    }
};
