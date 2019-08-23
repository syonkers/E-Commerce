import ActionTypes from './action.types';

export const toggleCartHidden = () => ({
    type: ActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const deleteItemFromCart = item => ({
    type: ActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
});

