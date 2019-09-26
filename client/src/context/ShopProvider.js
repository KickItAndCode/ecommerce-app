import React, { useReducer } from "react";
import ShopData from "../components/shop/shop-data";
import { ShopActionTypes } from "../actions/shop.types";

export const ShopContext = React.createContext({});
export const DirectoryConsumer = ShopContext.Consumer;

let INITIAL_STATE = { collections: null };

const reducer = (shopState = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...shopState,
        collections: action.payload
      };

    default:
      return shopState;
  }
};

const ShopProvider = props => {
  const [shopState, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ShopContext.Provider value={{ shopState, dispatch }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
