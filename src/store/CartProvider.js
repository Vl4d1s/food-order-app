import React from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmounts: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
