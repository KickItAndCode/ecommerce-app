import React, { useReducer } from "react";
import { UserActionTypes } from "../actions/user.types";

export const UserContext = React.createContext({});
export const UserConsumer = UserContext.Consumer;

const reducer = (userState = { currentUser: null }, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...userState, currentUser: action.payload };
    default:
      return userState;
  }
};

const UserProvider = props => {
  const [userState, dispatch] = useReducer(reducer, {});

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
