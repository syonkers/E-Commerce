import React from 'react';
import { connect } from'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/selectors/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const maptStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(maptStateToProps)(CartDropdown);