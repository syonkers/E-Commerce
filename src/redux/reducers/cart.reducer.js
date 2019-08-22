import ActionTypes from '../actions/action.types';
import { addItemToCart } from '../utils/cart.utils';

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
                ...state
            }


        default:
            return state;
    }
}

export default cartReducer;