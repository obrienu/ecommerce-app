export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const deleteItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter(
    cartItem => cartItem.id !== itemToDelete.id && cartItem
  );
};

export const increaseCartItem = (cartItems, itemToIncrease) => {
  return cartItems.map(cartItem =>
    cartItem.id === itemToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseCartItem = (cartItems, itemToDecrease) => {
  return itemToDecrease.quantity !== 1
    ? cartItems.map(cartItem =>
        cartItem.id === itemToDecrease.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1
            }
          : cartItem
      )
    : cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id);
};
