import React, { useReducer } from "react";

export const DirectoryContext = React.createContext({});
export const DirectoryConsumer = DirectoryContext.Consumer;

let INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};
const reducer = (directoryState = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return directoryState;
  }
};

const DirectoryProvider = props => {
  const [directoryState, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <DirectoryContext.Provider value={{ directoryState, dispatch }}>
      {props.children}
    </DirectoryContext.Provider>
  );
};

export default DirectoryProvider;
