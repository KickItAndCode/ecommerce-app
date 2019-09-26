import React, { useReducer, useEffect } from "react";
import { CartActionTypes } from "../actions/cart.types";
import { addItemToCart, removeItemFromCart } from "../utils/cart.utils";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const CartContext = React.createContext({});
export const CartConsumer = CartContext.Consumer;
let persistedState = JSON.parse(localStorage.getItem("state"));
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const reducer = (
  cartState = typeof persistedState === "Object" && persistedState
    ? persistedState
    : INITIAL_STATE,
  action
) => {
  let tempState;
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...cartState, hidden: !cartState.hidden };
    case CartActionTypes.ADD_ITEM:
      tempState = {
        ...cartState,
        cartItems: addItemToCart(cartState.cartItems, action.payload)
      };
      localStorage.setItem("state", JSON.stringify(tempState));

      return tempState;
    case CartActionTypes.REMOVE_ITEM:
      tempState = {
        ...cartState,
        cartItems: removeItemFromCart(cartState.cartItems, action.payload)
      };
      localStorage.setItem("state", JSON.stringify(tempState));

      return tempState;
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      tempState = {
        ...cartState,
        cartItems: cartState.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

      localStorage.setItem("state", JSON.stringify(tempState));
      return tempState;
    default:
      return cartState;
  }
};

const CartProvider = props => {
  let persistedState = JSON.parse(localStorage.getItem("state"));
  const [cartState, dispatch] = useReducer(
    reducer,
    typeof persistedState === "Object" && persistedState
      ? persistedState
      : INITIAL_STATE
  );

  console.log(`Cart state is: ${cartState}`);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
