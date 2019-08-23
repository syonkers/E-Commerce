export const addItemToCart = (cartItems, newItem) => {
    const exists = cartItems.find(cartItem => cartItem.id === newItem.id);
    
    if (exists) {
        return cartItems.map(cartItem => cartItem.id === newItem.id 
                                        ? {...cartItem, quantity: cartItem.quantity + 1} 
                                        : cartItem);
    }

    return [...cartItems, {...newItem, quantity: 1}];
}

export const removeItemFromCart = (cartItems, targetItem) => {
    const foundItem = cartItems.find(cartItem => cartItem.id === targetItem.id);
    
    if (foundItem.quantity > 1) {
        return cartItems.map(cartItem => cartItem.id === targetItem.id 
                                        ? {...cartItem, quantity: cartItem.quantity - 1} 
                                        : cartItem);
    } else {
        return cartItems;
    }
}

export const deleteItemFromCart = (cartItems, targetItem) => {
    return cartItems.filter(
        item => item.id !== targetItem.id
    );
}