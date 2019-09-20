import React, { useReducer } from "react";
import ShopData from "../components/shop/shop-data";

export const ShopContext = React.createContext({});
export const DirectoryConsumer = ShopContext.Consumer;

let INITIAL_STATE = ShopData;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const reducer = (shopState = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case "GET_COLLECTION_BY_ID":
      return shopState.find(
        collections => collections.id === COLLECTION_ID_MAP[action.payload]
      ); // collectionUrlParam

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
