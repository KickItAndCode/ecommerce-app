import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./context/userProvider";
import CartProvider from "./context/cartProvider";

ReactDOM.render(
  <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </CartProvider>,
  document.getElementById("root")
);
