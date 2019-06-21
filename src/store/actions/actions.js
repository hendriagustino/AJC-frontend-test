import * as actionTypes from './actionTypes';

export const onProductClicked = (id) =>{
    return{
        type: actionTypes.ON_PRODUCT_CLICKED,
        id: id
    }
}