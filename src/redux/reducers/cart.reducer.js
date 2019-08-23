import ActionTypes from '../actions/action.types';
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../utils/cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case ActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case ActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        
        case ActionTypes.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: deleteItemFromCart(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}

export default cartReducer;