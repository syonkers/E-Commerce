import ActionTypes from './action.types';

export const toggleCartHidden = () => ({
    type: ActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: ActionTypes.ADD_CART_ITEM,
    payload: item
});

