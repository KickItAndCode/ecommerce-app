import React, { useReducer } from "react";
import { CartActionTypes } from "../actions/cart.types";
import { addItemToCart } from "../utils/cart.utils";

export const CartContext = React.createContext({});
export const CartConsumer = CartContext.Consumer;

const reducer = (cartState = { hidden: true, cartItems: [] }, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...cartState, hidden: !cartState.hidden };
    case CartActionTypes.ADD_ITEM:
      return {
        ...cartState,
        cartItems: addItemToCart(cartState.cartItems, action.payload)
      };
    default:
      return cartState;
  }
};

const CartProvider = props => {
  const [cartState, dispatch] = useReducer(reducer, {
    hidden: true,
    cartItems: []
  });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
